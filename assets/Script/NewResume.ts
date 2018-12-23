import {Assistant} from './Assistant' 


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




    public showAssistantresume(assistant:Assistant) {
        // 展示员工信息     
        let icon:cc.Sprite = this.icon;

        cc.loader.loadRes(assistant.assistant_icon, cc.SpriteFrame, function (err, spriteFrame) {
            icon.spriteFrame = spriteFrame;
            });
        
        this.assistantname.string=assistant.assistant_name;
        this.intelligence.string=String(assistant.assistant_intelligence);
        this.eloquence.string=String(assistant.assistant_eloquence);
        this.operation.string=String(assistant.assistant_operation);
        this.knowledge.string=String(assistant.assistant_knowledge);
        
        
        
        //展示技能名称信息
        for(let i = 0; i < assistant.assistant_skill.length; i++){
            
            let mItemPrefab = cc.instantiate(this.skillnode);
            this.skillcontant.node.addChild(mItemPrefab);
            //使用预制中的函数，作用是将导入的员工信息显示在界面上

            mItemPrefab.getComponent("Skillnode").showskill(assistant.assistant_skill[i]);
            //
            
            //this.skill.string = this.skill.string+Skill.getSkillName(assistant.assistant_skill[i])+" ";
        }
            
    }
    


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
        //this.showAssistantresume(this.assistant);
        //this.icon.spriteFrame = new cc.SpriteFrame(cc.url.raw('Texture/assistant/assistant002.jpg'));

    }

    start () {

    }
    

    // update (dt) {}
}
