import { Assistant } from "./Assistant";
import { ConfigType, JsonConfig } from "./JsonConfig";
import { PlayerInfo } from "./PlayerInfo";

/**柜台类
 * 柜台决定提供的服务和售卖的商品
 * 柜台有负重概念，不同的服务和商品有不同的负重
 * 不同的柜台提供不同的服务，售卖不同的商品
 */
export class Counter {
    /** 柜台模板ID */
    tempID:number;
    /** 业务数据
     * 对商品来说以{业务id:{storage:10,补货上限max：100}}形式存储
     * 对服务来说{业务id：每周可使用次数}形式存储
     */
    serviceData:any = {};
    /**柜台上的职工 */
    assistant_id:number;

    /**
     * 柜台构造函数
     * @param json json数据
     * @param tempID 柜台模板ID
     */
    constructor(json:any = null,tempID?:number)
    {
        if(json)
        {
            this.tempID = json.tempID;
            this.serviceData = json.serviceData;
            this.assistant_id = json.assistant_id;
        }
        else if(tempID)
        {
            this.tempID = tempID;
            let counterTemp:any = JsonConfig.getItem(ConfigType.Counter,tempID);
            switch(counterTemp.type)
            {
                case 0:
                    break;
                case 1:
                    let counterConfig:any = JsonConfig.getItem(ConfigType.Counter,this.tempID);
                    let serviceList:string[] = (counterConfig.serviceList as string).split("|");
                    for(let i=0;i<serviceList.length;i++)
                    {
                        let key = Number(serviceList[i]);
                        this.serviceData[key] = {storage:0,max:0};
                    }
                    break;
            }  
        }
        else{
            console.log("Counter参数错误");
        }
    }

    /**
     * 转成json对象
     */
    toJson():any
    {
        return {
            tempID:this.tempID,
            serviceData:this.serviceData,
            assistant_id:this.assistant_id,
        }
    }


    /**商品自动补货*/
    autoReplenishment():void {
        let counterConfig:any = JsonConfig.getItem(ConfigType.Counter,this.tempID);
        let storage:number = counterConfig.storage;

        let totalCost:number = 0;
        for(let i in this.serviceData)
        {           
            let serviceConfig:any = JsonConfig.getItem(ConfigType.Counter,Number(i));
            let price:number = Number(serviceConfig.price);
            let storage:number = Number(this.serviceData[i].storage);
            let max:number = Number(this.serviceData[i].max);

            totalCost += (max - storage)*price;
            //更新数据
            this.serviceData[i].storage = this.serviceData[i].max;
        }

        //扣钱
        PlayerInfo.getIns().gold -= totalCost;
        
    }

    /**
     * 可设置的商品库存上限
     * @param serviceId 商品id
     */
    getStorageMax(serviceId:number):number {

        let max:number;
        let counterConfig:any = JsonConfig.getItem(ConfigType.Counter,this.tempID);
        //获得柜台的库存上限
        let storageMax:number = counterConfig.storage;
        //现有商品的负重
        let totalWeight:number;
        for(let i in this.serviceData)
        {           
            let serviceConfig:any = JsonConfig.getItem(ConfigType.Counter,Number(i));
            let weight:number = Number(serviceConfig.weight);
            let storage:number = Number(this.serviceData[i].storage);
            
            totalWeight += storage*weight;
        }

        let serConfig:any = JsonConfig.getItem(ConfigType.Counter,serviceId);
        max = Math.floor((storageMax - totalWeight)/Number(serConfig.weight));

        return max;
        
    }

    /**
     * 设置商品上限
     * @param serviceId 商品id
     * @param max 设置的某商品的库存上限
     */
    setStorageMax(serviceId:number,max:number):void {
        this.serviceData[serviceId].max = max;
    }

    /**商品自动售卖*/
    autoSellProduct():void {

        
    }
}