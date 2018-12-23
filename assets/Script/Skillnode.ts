import {Skill} from "./Skill"




const {ccclass, property} = cc._decorator;

@ccclass
export default class Skillnode extends cc.Component {

    @property(cc.Label)
    skill_name: cc.Label = null;

    @property(cc.Label)
    skill_text: cc.Label = null;

    @property(cc.Sprite)
    skill_icon: cc.Sprite = null;



    private showText(){
        this.skill_text.node.active = true;
    }

    private hideText(){
        this.skill_text.node.active = false;
    }


    // LIFE-CYCLE CALLBACKS:
    showskill(skill_id:number){
        
        this.skill_name.string = Skill.getSkillName(skill_id);        
        let icon:cc.Sprite = this.skill_icon;

        //获取icon资源名称，载入资源，赋值给skill_icon的精灵帧属性   因为资源问题
        cc.loader.loadRes(Skill.getSkillIcon(skill_id), cc.SpriteFrame, function (err, spriteFrame) {
            //console.log(Skill.getSkillIcon(skill_id));
            icon.spriteFrame = spriteFrame;
            });
        //
        //this.skill_icon.spriteFrame = icon.spriteFrame;
        this.skill_text.string = Skill.getSkillText(skill_id);
    }

    onLoad () {
        this.skill_text.node.active = false;
        this.hideText();
        this.node.on('mouseenter',this.showText,this);  
        this.node.on('mouseleave',this.hideText,this);
    }

    start () {

    }

    // update (dt) {}
}
