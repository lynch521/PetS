import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 
import {AssistantList} from './AssistantList'


export class Assistant{

    
    assistant_id:number; //id 主键，由AssistantList的方法递增生成，在AssistantList类中存储累计值
    assistant_name: string; //员工姓名
    assistant_icon: string; //员工头像
    assistant_lvl: number;  //员工当前等级
    assistant_exp: number;//员工当前经验
    assistant_intelligence: number;//主属性，聪敏
    assistant_eloquence: number;//主属性，口才
    assistant_operation: number;//主属性，操作
    assistant_knowledge: number;//主属性，知识
    assistant_skill:number[];//储存技能ID的数组，无顺序
    assistant_locality:number = 0;//雇员所在建筑的位置 为0的话不在任何地方
    assistant_task:number = 0;//雇员所进行的工作，特指科技开发 为0的话未进行任何开发
    //以上内容为玩家信息，需要存储


    json = {
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
        };



    private min_beginning_assistant_property = 1; //属性随机最小值
    private max_beginning_assistant_property = 20; //属性随机最大值
    private beginning_assistant_lvl = 0; //初始等级
    private max_assistant_lvl = 10; //最大等级
    private beginning_assistant_exp = 0; //初始经验
    private exp:number[]=[100,200,300,400,500,600,700,800,900,1000];//升级经验
    private getskilllvl:number[] = [0,1,0,0,1,0,0,1,0,1]//1为升到该级别可以获得经验
    private beginning_assistant_skill_amount = 2; //初始技能
    //以上为设置信息


    private namepool:string[] = []; //随机姓名池
    private skillpool:number[] = [];  //随机技能池
    private iconpool:string[] = []; //随机头像池
    //以上为本类使用的临时参数


    constructor (json:any = null){//生成新雇员信息
        if(json){
            this.assistant_id = json.assistant_id;
            this.assistant_name = json.assistant_name ;
            this.assistant_icon =json.assistant_icon;
            this.assistant_lvl =json.assistant_lvl;
            this.assistant_exp = json.assistant_exp;
            this.assistant_eloquence = json.assistant_eloquence;
            this.assistant_intelligence = json.assistant_intelligence;
            this.assistant_knowledge = json.assistant_knowledge;
            this.assistant_operation = json.assistant_operation;
            this.assistant_skill = json.assistant_skill;
        } 
        else
        {
            this.loadRandom();
            this.assistant_id = AssistantList.getNewId();
            this.assistant_name = this.namepool[this.random(0,this.namepool.length-1)];
            this.assistant_icon = this.iconpool[this.random(0,this.iconpool.length-1)];
            this.assistant_lvl = this.beginning_assistant_lvl;
            this.assistant_exp = this.beginning_assistant_exp;
            this.assistant_eloquence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
            this.assistant_intelligence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
            this.assistant_knowledge = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
            this.assistant_operation = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
            this.assistant_skill = [];
                for(let i= 0; i < this.beginning_assistant_skill_amount;i++){
                    this.assistant_skill.push(this.skillpool[this.random(0,this.skillpool.length-1)]); 
                }     
        } 
         
          
    }




    public employassistant(){
        AssistantList.addAssistant(this);
    }


    public fireassistant(){
        AssistantList.redAssistant(this);
    }



    private random(min:number,max:number){//生成随机属性
        return min+Math.floor(Math.random()*(max-min+1));
    }


    private loadRandom(){ //载入随机资源
        //读取随机姓名池
        for(let i in JsonConfig.getAllItem(ConfigType.Randompool)){
            
            if(JsonConfig.getAllItem(ConfigType.Randompool)[i].Randompool!="NA"){//尾部NA舍去
                //console.log(i);
                //console.log(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_name);
                this.namepool.push(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_name);
            }
        }
        //读取随机人物头像
        for(let i in JsonConfig.getAllItem(ConfigType.Randompool)){
            
            if(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon!="NA"){//尾部NA舍去
                //console.log(i);
                //console.log(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon);
                this.iconpool.push(JsonConfig.getAllItem(ConfigType.Randompool)[i].random_icon);
            }
        }        
        //获取技能ID池
        this.skillpool = Skill.getAllSkillid();     
    }



}
