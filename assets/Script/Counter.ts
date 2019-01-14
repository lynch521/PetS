import { Assistant } from "./Assistant";
import { ConfigType, JsonConfig } from "./JsonConfig";

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
    assistant:Assistant;

    constructor(json:any = null,type:number)
    {
        if(json)
        {

        }
        else
        {
            switch(type)
            {
                case 0:
                    break;
                case 1:
                    let counterConfig:any = JsonConfig.getItem(ConfigType.Assisitant,this.tempID);
                    let serviceList:string[] = (counterConfig.serviceList as string).split("|");
                    for(let i=0;i<serviceList.length;i++)
                    {
                        let key = Number(serviceList[i]);
                        this.serviceData = {key:{storage:0,max:0}};
                    }
                    break;
            }  
        }
    }

    /**商品自动补货*/
    autoReplenishment():void {
        
        let counterConfig:any = JsonConfig.getItem(ConfigType.Assisitant,this.tempID);
        let storage:number = counterConfig.storage;

        for(let i in this.serviceData)
        {           
            let serviceConfig:any = JsonConfig.getItem(ConfigType.Assisitant,Number(i));
        }
        
    }
}