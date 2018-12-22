import {JsonConfig, ConfigType} from "./JsonConfig"

export class Skill {
    
    static skillInformation = {
        id:1,
        skill_maxlvl:1,
        skill_isupdate:0,
        skill_name:"空技能",
        skill_icon:"assistant005",
        skill_text:"空技能占位用",
        skill_remark:"无",
    };   
    

    
    static getSkillMaxlvl(skill_id:number){//最高等级
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_maxlvl;
            }

        }
    }

    static getSkillIsupdate(skill_id:number){//可升级
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_isupdate;
            }

        }
    }
    
    static getSkillName(skill_id:number){//技能名称
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_name;
            }

        }
    }

    static getSkillIcon(skill_id:number){//技能图标
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_icon;
            }

        }
    }


    static getSkillText(skill_id:number){//技能文本
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_text;
            }

        }
    }

    static getSkillRemark(skill_id:number){//技能备注
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                return JsonConfig.getAllItem(ConfigType.Skills)[i].skill_remark;
            }

        }
    }

    static getSkill(skill_id:number){
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            if(JsonConfig.getAllItem(ConfigType.Skills)[i].id==skill_id){
                this.skillInformation.id = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_id;
                this.skillInformation.skill_maxlvl= JsonConfig.getAllItem(ConfigType.Skills)[i].skill_maxlvl;
                this.skillInformation.skill_isupdate = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_isupdate;
                this.skillInformation.skill_name = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_name;
                this.skillInformation.skill_icon = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_icon;
                this.skillInformation.skill_text = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_text;
                this.skillInformation.skill_remark = JsonConfig.getAllItem(ConfigType.Skills)[i].skill_remark;
                break;
            }

        }            
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
