import { CustomerManager } from "./CustomerManager";


export class Customer {


    id:number = null ; //主键用于标记消费者
    name:string = null;//消费者姓名，用于显示
    income:number = null;//收入水平，即消费者购买力   
    cat:number = null;//养猫数量
    dog:number = null;//养狗数量
    mumber:boolean = null;//是否会员 成为会员后才能显示明细信息
    satisfaction:number = null;//满意度0到100 ，初始在20到60间，一般情况下低于20就流失了
    sum:number = null;//总消费金额


    constructor (json:any = null) {//构造函数 
        if(json){
            this.id = json.id;
            this.name = json.name;
            this.income = json.income;
            this.cat = json.cat;
            this.dog = json.dog;
            this.mumber = json.mumber;
            this.satisfaction = json.satisfaction;
            this.sum = json.sum;            
        } 
        else
        {
            this.id = json.id;
            this.name = json.name;
            this.income = json.income;
            this.cat = json.cat;
            this.dog = json.dog;
            this.mumber = json.mumber;
            this.satisfaction = json.satisfaction;
            this.sum = json.sum;        
            
        } 
        return this;
    }  
    
    



    













}
