import {JsonConfig,ConfigType} from './JsonConfig'
import {Skill} from './Skill' 
import {Assistant} from './Assistant' 
import { AssistantList } from './AssistantList';
const {ccclass, property} = cc._decorator;

@ccclass
export default class ResumeList extends cc.Component {



    @property(cc.Prefab)
    item:cc.Prefab = null;
   
    //items:cc.Node[] = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getChildByName("scrollview").active =false;
        this.initResumeData();
    }

    

    initResumeData (){
        for (let i= 0;i<3;i++){
            let mItemPrefab = cc.instantiate(this.item);            
            this.getComponent(cc.ScrollView).content.addChild(mItemPrefab);
            mItemPrefab.getComponent("NewResume").showAssistantresume(new Assistant);//使用预制中的函数，作用是将导入的员工信息显示在界面上           
        }
    }

    showlist (){
        this.node.getChildByName("scrollview").active = true;
        for (let i in AssistantList.getCurrentAssistantList()){
            let mItemPrefab = cc.instantiate(this.item);
            mItemPrefab.getChildByName("button").active =false;
            this.getComponentInChildren(cc.ScrollView).content.addChild(mItemPrefab);
            mItemPrefab.getComponent("NewResume").showAssistantresume(AssistantList.getCurrentAssistantList()[i]);
            }
    }


    public closelist(){        
        this.node.getComponentInChildren(cc.ScrollView).content.removeAllChildren();      
        this.node.getChildByName("scrollview").active =false;
    }

    public refresh(){        
        this.getComponent(cc.ScrollView).content.removeAllChildren();        
        this.initResumeData();
    }


    start () {

    }

    // update (dt) {}
}



