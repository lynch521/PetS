
import {JsonConfig,ConfigType} from '../JsonConfig'

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmployAssistant extends cc.Component {



    @property(cc.Prefab)
    private resumePrefab: cc.Prefab = null;

    


    //加载后立即执行生成新的简历
    onLoad () {
        this.spawnNewResume();


    }

    // 生成一个新的简历
    public spawnNewResume() {
    
        let resumes :cc.Node = null;
        
        let a:number = 0;  
        
        this.node.addChild(resumes); 
        
        resumes.setPosition(200,0);
        
        for(a=-1;a<2;a++){
          // 使用给定的模板在场景中生成一个新简历
        let newResume = cc.instantiate(this.resumePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        //resumes.addChild(newResume);
        this.node.addChild(newResume);
        // 为简历设置一个位置
        newResume.setPosition(a*400,30);  
        }  
           

    }






    start () {
        
    }

    // update (dt) {}
}
