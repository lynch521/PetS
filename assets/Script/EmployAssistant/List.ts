import {JsonConfig,ConfigType} from '../JsonConfig'


const {ccclass, property} = cc._decorator;

@ccclass
export default class List extends cc.Component {

    @property(cc.Prefab)
    item:cc.Prefab = null;

    assistantResumeData ={
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

    namepool:string[] = [];
    skillpool:number[] = [];
    skillnamepool:string[] = [];
    iconpool:string[] = [];
    
//"assistant001","assistant002","assistant003","assistant004","assistant005","assistant006"

    min_beginning_assistant_property = 1;
    max_beginning_assistant_property = 20;
    beginning_assistant_lvl = 0;
    beginning_assistant_exp = 0;
    beginning_assistant_skill_amount = 3;


    
    items:cc.Node[] = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.loadsetting();
        //this.loadAssistant();

        /*for(let i in this.namepool){
            console.log(i);
        }
        for(let i in this.skillnamepool){
            console.log(i);
        }
        for(let i in this.skillpool){
            console.log(i);
        }   */

        this.initListData();
    }

    loadsetting(){
        //读取json配置文件
        
        

        this.min_beginning_assistant_property = JsonConfig.getItem(ConfigType.Setting,1).setting_value;
        this.max_beginning_assistant_property = JsonConfig.getItem(ConfigType.Setting,2).setting_value;
        this.beginning_assistant_lvl = JsonConfig.getItem(ConfigType.Setting,3).setting_value;
        this.beginning_assistant_exp = JsonConfig.getItem(ConfigType.Setting,4).setting_value;
        this.beginning_assistant_skill_amount = JsonConfig.getItem(ConfigType.Setting,5).setting_value;

        for(let i in JsonConfig.getItem(ConfigType.Randompool,3)){
            
            if(i=="id"||i=="random_name"){
                
            }
            else
            {
                this.namepool.push(JsonConfig.getItem(ConfigType.Randompool,3)[i]);
            }
        }
        for(let i in JsonConfig.getItem(ConfigType.Randompool,2)){
            if(i=="id"||i=="random_name"){
                
            }
            else
            {
                this.iconpool.push(JsonConfig.getItem(ConfigType.Randompool,2)[i]);
            }
        }
        
        
        for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
            //console.log(JsonConfig.getAllItem(ConfigType.Skills)[i]);
            for(let j in JsonConfig.getAllItem(ConfigType.Skills)[i]){
                if(j=="id")
                this.skillpool.push(JsonConfig.getAllItem(ConfigType.Skills)[i][j]);
                if(j=="skill_name")
                this.skillnamepool.push(JsonConfig.getAllItem(ConfigType.Skills)[i][j]);
            }
        }

        //for(let i in JsonConfig.getAllItem(ConfigType.Skills)){
        //    console.log(i);
        //    console.log(JsonConfig.getAllItem(ConfigType.Skills)[i].id);
        //}


    }

    initListData (){
        for (let i= 0;i<3;i++){
            let mItemPrefab = cc.instantiate(this.item);
            this.getComponent(cc.ScrollView).content.addChild(mItemPrefab);
            //使用预制中的函数，作用是将导入的员工信息显示在界面上
            mItemPrefab.getComponent("NewResume").showAssistantresume(this.newassistant());
        }
    }

    random(min:number,max:number){
        return min+Math.floor(Math.random()*(max-min+1));
    }

    saveAssistant(assistantResumeData){
        
    }


    loadAssistant(){
        let list:any = [[]];
        list = JsonConfig.getAllItem(ConfigType.Assisitant);
        for(let i in list){
            console.log(i);
        }
        
       
    }


    newassistant(){
        this.assistantResumeData.assistant_id = 1;
        this.assistantResumeData.assistant_name = this.namepool[this.random(0,this.namepool.length-1)];
        this.assistantResumeData.assistant_icon = this.iconpool[this.random(0,this.iconpool.length-1)];
        this.assistantResumeData.assistant_lvl = this.beginning_assistant_lvl;
        this.assistantResumeData.assistant_exp = this.beginning_assistant_exp;
        this.assistantResumeData.assistant_eloquence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistantResumeData.assistant_intelligence = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistantResumeData.assistant_knowledge = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistantResumeData.assistant_operation = this.random(this.min_beginning_assistant_property,this.max_beginning_assistant_property);
        this.assistantResumeData.assistant_skill = [];
            for(let i= 0; i < this.beginning_assistant_skill_amount;i++){
                this.assistantResumeData.assistant_skill.push(this.skillnamepool[this.random(0,this.skillnamepool.length-1)]); 
            }
        

        return this.assistantResumeData;
    }

    public refresh(){
        
        this.getComponent(cc.ScrollView).content.removeAllChildren();
        
        this.initListData();
    }

    start () {

    }

    // update (dt) {}
}
