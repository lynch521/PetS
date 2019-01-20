import {Customer} from './Customer'
import { PlayerInfo } from './PlayerInfo'
import { ToolsClass } from './ToolsClass'
import { Service, ServiceCol } from './service';
import { JsonConfig } from './JsonConfig';


export  class CustomerManager {

//当前的消费者组
static customerGroup:Customer[] = [];
//已经流失的消费者组
static lostCustomerGroup:Customer[] = [];
//临时消费者组
static temporaryCustomerGroup:Customer[] = [];
//顾客ID记录，    
static lastId = 0; //初始ID为1，每次生成后加1,这个是最后消费者的id，下个+1

//设置区域

//当前消费者组长度，初始值为40；   ！有多个存档时如何处理！
static startCustomerGroupLength = 40;


/**
 * 执行消费购买流程
 */
public static  MainProcess() {  //总流程
    
    //1.消费者生成阶段
    if(this.customerGroup.length==0){//如果当前消费者组为空，则新建一个
        this.creatCustomerGroup(40);  
    }
    else{//如果消费者组不为空，则根据人气增加部分消费者。宠物销售、店员技能、广告都能增加生成的消费者。
        let sum:number = 0;//增加的人数
        //获取的参数
        let pop:number = PlayerInfo.getIns().pop;//获取人气值
        let skill:number = 1; // 是否有广告，此处需要其他类的函数
        let ad:number = 1; // 是否有技能 ，此处需要其他类的函数
        let popcoe:number = 0.1;// 人气转化系数，后期转移
        let adcoe:number = 3;//广告转化系数，后期转移

        //计算公式
        //               人气 * 系数 * 技能加成             +          广告系数      暂未考虑人气为负数的情况
        sum = Math.ceil(pop * popcoe * (skill * 0.2 + 1) ) + Math.ceil(adcoe * ad);

        this.addToCustomerGroup(sum); 
     
    }


    //2.消费者购买阶段
    //2.1 数据准备
    let delList:number[] = []; //要删除的消费者列表
    let earningList:number[] = []; //每个消费者消费的金额
    let satisfactionList:number[] = [];//每个消费者的满意度变化
    
    
    for (let i = 0; i < this.customerGroup.length;i++){
        
        let satChange:number = 0;

        if(ToolsClass.roll(0.3)){//30%概率购买
            
            
            
            
            //if(ToolsClass.roll(this.customerGroup[i].cat))
            if(this.customerGroup[i].cat > 0){//
                
                

            }

            if(this.customerGroup[i].dog > 0){//




            }


























        }else{

        }

        //如果消费者满意度低，将消费加入删除列表
        // 满意度 + 会员*5 小于 20 
        if(this.customerGroup[i].satisfaction + this.customerGroup[i].mumber * 5 < 40 ){
            delList.push(i);
        }else{
            if(ToolsClass.roll(0.02)){
                delList.push(i);
            }
        }





    }





    
    

    //3.删除不满的消费者
    if(delList.length!=0){
        delList = ToolsClass.sort(delList);
        for(let i = delList.length - 1 ; i >= 0; i--){
            this.delCustomerGroup(delList[i]);
        }        
    }
    //显示流失情况    
    console.log("流失顾客"+delList.length+"名，剩余"+this.customerGroup.length+"名");

}



//生成新的消费者组
private static  creatCustomerGroup(numeber:number){
    for(let i = 0 ; i < numeber ; i++){        
        this.addToCustomerGroup();
    }    
}

//增加新的消费者
public static  addToCustomerGroup(n:number = 1){
    for(let i = 0;i < n;i++){
        let newcustomer:Customer = new Customer;
        this.customerGroup.push(newcustomer);  
    }    
}


static initWithJson(jsonObj:any):void
{
    for(let i in jsonObj.customerGroup)
    {
        let customer : Customer = new Customer(jsonObj.customerGroup[i]);
        CustomerManager.customerGroup.push(customer);
    }

    this.lastId = jsonObj.lastid as number;
}


static toJson():any
{
    let jsonObj:any[] = [];
    for(let i in CustomerManager.customerGroup)
    {
        jsonObj.push(CustomerManager.customerGroup[i].toJson());
    }
    return {
        customerGroup:jsonObj,
        lastid:this.lastId
    };
}



//删除消费者  将删除消费移动到已流失消费者组 
public static  delCustomerGroup(n:number){
    this.lostCustomerGroup.push(this.customerGroup[n]);
    this.customerGroup.splice(n,1);
}

public static buy(customer:Customer,id:number){






}






//生成新ID，Customer类使用
static getNewId():number{
    this.lastId = this.lastId + 1;
    return this.lastId;
}





}
