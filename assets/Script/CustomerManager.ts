import {Customer} from './Customer'
import { PlayerInfo } from './PlayerInfo'

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

//当前消费者组最大值，初始值为40；   ！有多个存档时如何处理！
static startCustomerGroupLength = 40;


/**
 * 执行消费购买流程
 */
public MainProcess() {  //总流程
    
    //1.消费者生成阶段

    if(!CustomerManager.customerGroup){//如果当前消费者组为空，则新建一个
        this.creatCustomerGroup(40);
    }
    else{//如果消费者组不为空，则根据人气增加部分消费者。宠物销售、店员技能、广告都能增加生成的消费者。
        let sum:number = 0;//增加的人数
        
        //获取的参数
        let pop:number = PlayerInfo.getIns().pop;//获取人气值
        let skill:number = 1; // 是否有广告，此处需要其他类的函数
        let ad:number = 1; // 是否有技能 ，此处需要其他类的函数
        let popcoe:number = 0.1;// 人气转化系数，后期转移
        let adcoe:number = 10;//广告转化系数，后期转移

        //计算公式
        //               人气 * 系数 * 技能加成             +          广告系数
        sum = Math.ceil(pop * popcoe * (skill * 0.2 + 1) ) + Math.ceil(adcoe * ad);

        this.addToCustomerGroup(sum);
    }


    //2.消费者购买阶段

    
    

    //3.删除不满的消费者





    


}



//生成新的消费者组
private creatCustomerGroup(numeber:number){
    for(let i = 0 ; i < numeber ; i++){        
        this.addToCustomerGroup();
    }    
}

//增加新的消费者
public addToCustomerGroup(n:number = 1){
    for(let i = 0;i < n;i++){
        let newcustomer:Customer = new Customer;
        CustomerManager.customerGroup.push(newcustomer);  
    }
    
}

//删除消费者  将删除消费移动到已流失消费者组 
public delCustomerGroup(n:number){
    
    for(;n < CustomerManager.customerGroup.length - 1 ;n++){
        CustomerManager.customerGroup[n] = CustomerManager.customerGroup[n+1];
    }
    CustomerManager.customerGroup[n] = null;
}


static getNewId():number{
    this.lastId = this.lastId + 1;
    return this.lastId;
}





}
