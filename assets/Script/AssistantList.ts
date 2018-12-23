import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 
import {Assistant} from './Assistant' 


export class AssistantList{

    static currentassistant:Assistant[] = []; //储存当前已经雇佣的店员

    static lastid:number = 0;//初始ID为0，每次雇佣后加一,这个是最后雇员的id，下个+1

    static jsonArr:any[] = [];


    static getJson(){
        for(let i in this.currentassistant){
            this.jsonArr.push(this.currentassistant[i].json);
        }
        return this.jsonArr;
    }

    static setJson(jsonArr:any[]){
        for(let i in jsonArr){
            this.currentassistant.push(new Assistant(jsonArr[i]));
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


    static getCurrentAssistantList():Assistant[]{//获取员工列表
        return this.currentassistant;
    }

    static getNewId():number{
        this.lastid = this.lastid + 1;
        return this.lastid;
    }




}
