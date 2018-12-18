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
export default class newResume extends cc.Component {


    assistantData ={
        assistant_id: 1 ,
        assistant_name: "laowang",
        assistant_icon:1,
        assistant_lvl:0,
        assistant_exp:0,
        assistant_intelligence:10,
        assistant_eloquence:11,
        assistant_operation:12,
        assistant_knowledge:13,
        assistant_skill:["10","21","31"],
        assistant_salary:1000
    };


    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    assistantname: cc.Label = null;

    @property(cc.Label)
    skill: cc.Label = null;

    @property(cc.Label)
    intelligence: cc.Label = null;

    @property(cc.Label)
    eloquence: cc.Label = null;

    @property(cc.Label)
    operation: cc.Label = null;

    @property(cc.Label)
    knowledge: cc.Label = null;



    public newAssistantresume() {
        // 生成新的员工     
        this.operation.string="k";
        //this.assistantname.string=this.assistantData.assistant_name;
        //this.intelligence.string="聪敏"+String(this.assistantData.assistant_intelligence);
        //this.eloquence.string="口才"+String(this.assistantData.assistant_eloquence);
        //this.operation.string="操作"+String(this.assistantData.assistant_operation);
        //this.knowledge.string="知识"+String(this.assistantData.assistant_knowledge);
        //this.skill.string=this.getSkillname(this.assistantData.assistant_skill);



    }



    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.newAssistantresume();    
        
        
        
        //this.icon.spriteFrame = new cc.SpriteFrame(cc.url.raw('Texture/assistant/assistant002.jpg'));

    }

    start () {

    }

    // update (dt) {}
}
