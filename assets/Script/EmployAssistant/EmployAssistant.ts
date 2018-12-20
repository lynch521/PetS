

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmployAssistant extends cc.Component {


    assistantResumeData ={
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
   


    //加载后立即执行生成新的简历
    onLoad () {
        this.spawnNewResume();


    }


    public newAssistant() {
     
        
           

    }


    // 生成一个新的简历
    public spawnNewResume() {
     
        
           

    }





    start () {
        this.node.showAssistantresume(this.assistantResumeData);
    }

    // update (dt) {}
}