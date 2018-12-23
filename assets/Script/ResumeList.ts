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
        this.initListData();
    }

    

    initListData (){
        for (let i= 0;i<3;i++){
            let mItemPrefab = cc.instantiate(this.item);
            this.getComponent(cc.ScrollView).content.addChild(mItemPrefab);
            //使用预制中的函数，作用是将导入的员工信息显示在界面上
            let newassistant = new Assistant;
            mItemPrefab.getComponent("NewResume").showAssistantresume(newassistant);
        }
    }

    random(min:number,max:number){
        return min+Math.floor(Math.random()*(max-min+1));
    } 

    chooseresume (Assistant:Assistant){
        //Assistant.f；

    }


    public refresh(){        
        this.getComponent(cc.ScrollView).content.removeAllChildren();        
        this.initListData();
    }

    start () {

    }

    // update (dt) {}
}



