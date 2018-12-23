import {JsonConfig, ConfigType} from "./JsonConfig"

export class Skill {
    
    static skillInformation = {
        id:0,
        skill_maxlvl:1,
        skill_isupdate:0,
        skill_name:"0",
        skill_icon:"0",
        skill_text:"0",
        skill_remark:"0",
    };   
    
    static dfaultSkillInformation = {
        id:0,
        skill_maxlvl:1,
        skill_isupdate:0,
        skill_name:"空技能",
        skill_icon:"assistant005",
        skill_text:"空技能占位用",
        skill_remark:"无",
    };   
    
    static getSkillMaxlvl(skill_id:number){//最高等级
        
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_maxlvl;
      

    }

    static getSkillIsupdate(skill_id:number){//可升级
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_isupdate;
    }
    
    static getSkillName(skill_id:number){//技能名称
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_name;
    }

    static getSkillIcon(skill_id:number){//技能图标
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_icon;
    }


    static getSkillText(skill_id:number){//技能文本
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_text;
    }

    static getSkillRemark(skill_id:number){//技能备注
        return JsonConfig.getItem(ConfigType.Skills,skill_id).skill_remark;
    }

    static getSkill(skill_id:number){            
        
        let ismatch:number = 0;
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){                
                ismatch = 1;
                break;
            }
        }    
        if(ismatch == 0){
            console.log("技能ID错误，该技能不存在");
            return this.dfaultSkillInformation;
        }

        this.skillInformation.id = skill_id;
        this.skillInformation.skill_maxlvl= JsonConfig.getItem(ConfigType.Skills,skill_id).skill_maxlvl;
        this.skillInformation.skill_isupdate = JsonConfig.getItem(ConfigType.Skills,skill_id).skill_isupdate;
        this.skillInformation.skill_name = JsonConfig.getItem(ConfigType.Skills,skill_id).skill_name;
        this.skillInformation.skill_icon = JsonConfig.getItem(ConfigType.Skills,skill_id).skill_icon;
        this.skillInformation.skill_text = JsonConfig.getItem(ConfigType.Skills,skill_id).skill_text;
        this.skillInformation.skill_remark = JsonConfig.getItem(ConfigType.Skills,skill_id).skill_remark;

        return this.skillInformation;
    }

    static getAllSkillid(){//获取全部技能ID
        let list = [];
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){            
            list.push(JsonConfig.getAllItem(ConfigType.Skills)[i].id);
        }
        return list;
    }






}
