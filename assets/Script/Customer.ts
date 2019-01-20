import { CustomerManager } from "./CustomerManager"
import { ToolsClass } from "./ToolsClass"

export class Customer {


    id:number = null ; //主键用于标记消费者
    name:string = null;//消费者姓名，用于显示
    income:number = null;//收入水平，即消费者购买力   
    cat:number = null;//养猫数量
    newcat:number = null;//新养猫数量
    dog:number = null;//养狗数量
    newdog:number = null;//新养狗数量
    mumber:number = null;//是否会员 成为会员后才能显示明细信息
    isnew:number = null;//是否新顾客
    satisfaction:number = null;//满意度0到100 ，初始在20到60间，一般情况下低于20就流失了
    sum:number = null;//总消费金额


    constructor (json:any = null) {//构造函数 
        if(json){
            this.id = json.id;
            this.name = json.name;
            this.income = json.income;
            this.cat = json.cat;
            this.newcat = json.newcat;
            this.dog = json.dog;
            this.newdog = json.newdog;
            this.mumber = json.mumber;
            this.isnew =json.isnew;
            this.satisfaction = json.satisfaction;
            this.sum = json.sum;            
        } 
        else
        {
            this.id = CustomerManager.getNewId();
            this.name = "测试"; //临时，需要修改
            this.income = ToolsClass.UnequalRandom([20,20,10,2],[1,2,3,4]);
            let petsnumber = ToolsClass.UnequalRandom([200,100,30,5,1],[1,2,3,4,5]);
            this.cat = ToolsClass.random(0,petsnumber);
            this.dog = petsnumber - this.cat;
            this.newcat = 0;            
            this.newdog = 0;
            this.mumber = 0;
            this.isnew = 0;
            this.satisfaction = ToolsClass.random(20,60);
            this.sum = 0;  
            
        } 
        //return this;
    }  

    toJson():any
    {
        return {            
            id : this.id,
            name : this.name,
            income : this.income,
            cat : this.cat,
            newcat : this.newcat,
            dog : this.dog,
            newdog : this.newdog,
            mumber : this.mumber,
            isnew : this.isnew,
            satisfaction : this.satisfaction,
            sum : this.sum,       
        }
    }



}
