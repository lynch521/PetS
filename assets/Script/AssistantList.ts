import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 
import {Assistant} from './Assistant' 


export class AssistantList{

    static currentassistant:Assistant[] = []; //储存当前已经雇佣的店员

    static lastid:number = 0;//初始ID为0，每次雇佣后加一,这个是最后雇员的id，下个+1

    static json:any[] = [
        {
        assistant_id:0,//id 主键，由AssistantList的方法递增生成，在AssistantList类中存储累计值
        assistant_name:"0", //员工姓名
        assistant_icon:"", //员工头像
        assistant_lvl:0, //员工当前等级
        assistant_exp:0,//员工当前经验
        assistant_intelligence:0,//主属性，聪敏
        assistant_eloquence:0,//主属性，口才
        assistant_operation:0,//主属性，操作
        assistant_knowledge:0,//主属性，知识
        assistant_skill:[],//储存技能ID的数组，无顺序
        assistant_locality:0,//雇员所在建筑的位置 为0的话不在任何地方
        assistant_task:0,//雇员所进行的工作，特指科技开发 为0的话未进行任何开发
        }];


    static getJson(){
        for(let i in this.currentassistant){
        this.json[i].assistant_id = this.currentassistant[i].assistant_id;
        this.json[i].assistant_name = this.currentassistant[i].assistant_name;
        this.json[i].assistant_icon = this.currentassistant[i].assistant_icon;
        this.json[i].assistant_lvl = this.currentassistant[i].assistant_lvl;
        this.json[i].assistant_exp = this.currentassistant[i].assistant_exp;
        this.json[i].assistant_intelligence = this.currentassistant[i].assistant_intelligence;
        this.json[i].assistant_eloquence = this.currentassistant[i].assistant_eloquence;
        this.json[i].assistant_operation = this.currentassistant[i].assistant_operation;
        this.json[i].assistant_knowledge = this.currentassistant[i].assistant_knowledge;
        this.json[i].assistant_skill = this.currentassistant[i].assistant_skill;
        this.json[i].assistant_locality = this.currentassistant[i].assistant_locality;
        this.json[i].assistant_task = this.currentassistant[i].assistant_task;
        }
        return this.json;
    }

    static setJson(json:any[]){
        for(let i in json){
        this.currentassistant[i].assistant_id = json[i].assistant_id;
        this.currentassistant[i].assistant_name= json[i].assistant_name ;
        this.currentassistant[i].assistant_icon= json[i].assistant_icon ;
        this.currentassistant[i].assistant_lvl= json[i].assistant_lvl ;
        this.currentassistant[i].assistant_exp= json[i].assistant_exp ;
        this.currentassistant[i].assistant_intelligence = json[i].assistant_intelligence ;
        this.currentassistant[i].assistant_eloquence= json[i].assistant_eloquence ;
        this.currentassistant[i].assistant_operation= json[i].assistant_operation ;
        this.currentassistant[i].assistant_knowledge= json[i].assistant_knowledge ;
        this.currentassistant[i].assistant_skill= json[i].assistant_skill;
        this.currentassistant[i].assistant_locality= json[i].assistant_locality;
        this.currentassistant[i].assistant_task= json[i].assistant_task;
        }        
    }


    
    static addAssistant(assistant:Assistant){//将简历上的雇员进行雇佣，写入已雇佣员工表
        
        this.currentassistant.push(assistant);

    }



    static redAssistant(assistant:Assistant){//将已雇佣员工表的员工删除
        let remark:boolean = false;
        for(let i:number;i < this.currentassistant.length;i++){
            
            if(this.currentassistant[i].assistant_id==assistant.assistant_id){
                remark = true;
                this.currentassistant.splice(i,1);
            }          
        }

        if(remark==false){
            console.log("无该雇员");
        }
    }

    static showlist(){//临时函数  用于测试
        if(this.currentassistant.length==0){
            console.log("无雇员");
        }else
        {
            console.log("雇员列表为：");
            for(let i in this.currentassistant){
                console.log(this.currentassistant[i].assistant_id);           
            }
        }
        
    }


    static getCurrentAssistantList():Assistant[]{//获取员工列表
        return this.currentassistant;
    }

    static getNewId():number{
        this.lastid = this.lastid + 1;
        return this.lastid;
    }




}
