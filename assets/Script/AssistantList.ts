import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 



export class AssistantList{

    static currentassistant = []; //储存当前已经雇佣的店员

    static lastid:number = 0;//初始ID为0，每次雇佣后加一,这个是最后雇员的id，下个+1

    static employAssistant(assistantData){//将简历上的雇员进行雇佣，写入已雇佣员工表
        this.lastid = this.lastid + 1; //员工ID递增    
        assistantData.lastid = this.lastid; 
        this.currentassistant.push(assistantData);
        return assistantData.lastid;//返回生成的ID
    }

    static getCurrentAssistant(){
        return this.currentassistant;
    }

    static getNewId(){
        this.lastid = this.lastid + 1;
        return this.lastid;
    }




}
