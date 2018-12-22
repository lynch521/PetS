import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 


const {ccclass, property} = cc._decorator;

@ccclass
export class Assistant extends cc.Component {

    assistandData ={
        assistant_id: 0 ,
        assistant_name: "默认",
        assistant_icon:"assistant001",
        assistant_lvl:0,
        assistant_exp:0,
        assistant_intelligence:0,
        assistant_eloquence:0,
        assistant_operation:0,
        assistant_knowledge:0,
        assistant_skill:[],
    };

    private namepool:string[] = [];
    private skillpool:number[] = []; 
    private iconpool:string[] = [];


    private min_beginning_assistant_property = 1;
    private max_beginning_assistant_property = 20;
    private beginning_assistant_lvl = 0;
    private beginning_assistant_exp = 0;
    private beginning_assistant_skill_amount = 3;

    private LoadRandom(){    
        //读取随机姓名池
        for(let i in JsonConfig.getAllItem(ConfigType.Randompool)){
            
            if(JsonConfig.getAllItem(ConfigType.Randompool)[i].Randompool!="NA"){//尾部NA舍去
                console.log(i);
                console.log(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_name);
                this.namepool.push(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_name);
            }
        }
        //读取随机
        for(let i in JsonConfig.getAllItem(ConfigType.Randompool)){
            
            if(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon!="NA"){//尾部NA舍去
                console.log(i);
                console.log(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon);
                this.iconpool.push(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon);
            }
        }        
        //获取技能ID池
        this.skillpool = Skill.getAllSkillid();     
    }

    public newAssistant(){//生成新雇员信息
        this.LoadRandom();
        this.assistandData.assistant_id = 0;//临时ID不能直接储存
        this.assistandData.assistant_name = this.namepool[this.random(0,this.namepool.length-1)];
        this.assistandData.assistant_icon = this.iconpool[this.random(0,this.iconpool.length-1)];
        this.assistandData.assistant_lvl = this.beginning_assistant_lvl;
        this.assistandData.assistant_exp = this.beginning_assistant_exp;
        this.assistandData.assistant_eloquence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistandData.assistant_intelligence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistandData.assistant_knowledge = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistandData.assistant_operation = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistandData.assistant_skill = [];
            for(let i= 0; i < this.beginning_assistant_skill_amount;i++){
                this.assistandData.assistant_skill.push(this.skillpool[this.random(0,this.skillpool.length-1)]); 
            }       

        return this.assistandData;
    }


    private random(min:number,max:number){
        return min+Math.floor(Math.random()*(max-min+1));
    }


    loadAssistantlist(){
        let list:any = [];
        list = JsonConfig.getAllItem(ConfigType.Assisitant);
        for(let i in list){
            JsonConfig.getAllItem(ConfigType.Assisitant)[i];
        }   
        return list;
    }

    loadAssistant(id:number){//返回键值对
        let list = this.loadAssistantlist();
        return list[id];
    }




    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
