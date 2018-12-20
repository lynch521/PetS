// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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



    public showAssistantresume(assistantResumeData:any) {
        // 生成新的员工     
         let icon:cc.Sprite = this.icon;

        cc.loader.loadRes(assistantResumeData.assistant_icon, cc.SpriteFrame, function (err, spriteFrame) {
            icon.spriteFrame = spriteFrame;
            });

        this.assistantname.string=assistantResumeData.assistant_name;
        this.intelligence.string=String(assistantResumeData.assistant_intelligence);
        this.eloquence.string=String(assistantResumeData.assistant_eloquence);
        this.operation.string=String(assistantResumeData.assistant_operation);
        this.knowledge.string=String(assistantResumeData.assistant_knowledge);
        for(let i = 0; i < assistantResumeData.assistant_skill.length; i++){
            this.skill.string = this.skill.string+assistantResumeData.assistant_skill[i]+" ";
        }
            
    }



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
        //this.showAssistantresume(this.assistantResumeData);
        //this.icon.spriteFrame = new cc.SpriteFrame(cc.url.raw('Texture/assistant/assistant002.jpg'));

    }

    start () {

    }

    // update (dt) {}
}
