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

    @property(cc.Label)
    skill: cc.Label = null;



    public showAssistantresume(assistandData:any) {
        // 生成新的员工     
         let icon:cc.Sprite = this.icon;

        cc.loader.loadRes(assistandData.assistant_icon, cc.SpriteFrame, function (err, spriteFrame) {
            icon.spriteFrame = spriteFrame;
            });

        this.assistantname.string=assistandData.assistant_name;
        this.intelligence.string=String(assistandData.assistant_intelligence);
        this.eloquence.string=String(assistandData.assistant_eloquence);
        this.operation.string=String(assistandData.assistant_operation);
        this.knowledge.string=String(assistandData.assistant_knowledge);
        for(let i = 0; i < assistandData.assistant_skill.length; i++){
            this.skill.string = this.skill.string+Skill.getSkillName(assistandData.assistant_skill[i])+" ";
        }
            
    }
    


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
        //this.showAssistantresume(this.assistandData);
        //this.icon.spriteFrame = new cc.SpriteFrame(cc.url.raw('Texture/assistant/assistant002.jpg'));

    }

    start () {

    }

    // update (dt) {}
}
