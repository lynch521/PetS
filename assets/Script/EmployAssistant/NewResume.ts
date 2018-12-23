// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import {Skill} from '../Skill' 

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewResume extends cc.Component {




    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    assistantname: cc.Label = null;

    @property(cc.Label)
    intelligence: cc.Label = null;

    @property(cc.Label)
    eloquence: cc.Label = null;

    @property(cc.Label)
    operation: cc.Label = null;

    @property(cc.Label)
    knowledge: cc.Label = null;

    @property(cc.Layout)
    skillcontant: cc.Layout = null;

    @property(cc.Prefab)
    skillnode: cc.Prefab = null;




    public showAssistantresume(assistantData:any) {
        // 生成新的员工     
         let icon:cc.Sprite = this.icon;

        cc.loader.loadRes(assistantData.assistant_icon, cc.SpriteFrame, function (err, spriteFrame) {
            icon.spriteFrame = spriteFrame;
            });

        this.assistantname.string=assistantData.assistant_name;
        this.intelligence.string=String(assistantData.assistant_intelligence);
        this.eloquence.string=String(assistantData.assistant_eloquence);
        this.operation.string=String(assistantData.assistant_operation);
        this.knowledge.string=String(assistantData.assistant_knowledge);
        
        
        
        //展示技能名称信息
        for(let i = 0; i < assistantData.assistant_skill.length; i++){
            
            let mItemPrefab = cc.instantiate(this.skillnode);
            this.skillcontant.node.addChild(mItemPrefab);
            //使用预制中的函数，作用是将导入的员工信息显示在界面上

            mItemPrefab.getComponent("Skillnode").showskill(assistantData.assistant_skill[i]);
            //
            
            //this.skill.string = this.skill.string+Skill.getSkillName(assistantData.assistant_skill[i])+" ";
        }
            
    }
    


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
        //this.showAssistantresume(this.assistantData);
        //this.icon.spriteFrame = new cc.SpriteFrame(cc.url.raw('Texture/assistant/assistant002.jpg'));

    }

    start () {

    }

    // update (dt) {}
}
