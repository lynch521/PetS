import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 
import {Assistant} from './Assistant' 
import {PlayerInfo} from './PlayerInfo'

export class AssistantManager{

    static currentassistant:Assistant[] = []; //储存当前已经雇佣的店员

    static lastid:number = 0;//初始ID为0，每次雇佣后加一,这个是最后雇员的id，下个+1

    static maxEmpNum:number = 10;//最大雇佣人数


    static initWithJson(jsonObj:any):void
    {
        for(let i in jsonObj.assistantList)
        {
            let ass : Assistant = new Assistant(jsonObj.assistantList[i]);
            AssistantManager.currentassistant.push(ass);
        }

        this.lastid = jsonObj.lastid as number;
        this.maxEmpNum = jsonObj.maxEmpNum as number;
    }


    static toJson():any
    {
        let jsonObj:any[] = [];
        for(let i in AssistantManager.currentassistant)
        {
            jsonObj.push(AssistantManager.currentassistant[i].toJson());
        }
        return {
            assistantList:jsonObj,
            lastid:this.lastid,
            maxEmpNum:this.maxEmpNum
        };
    }

    
    static addAssistant(assistant:Assistant){//将简历上的雇员进行雇佣，写入已雇佣员工表
        
        this.currentassistant.push(assistant);
        PlayerInfo.getIns().savePlayerInfo();

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
