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
export default class NewClass1 extends cc.Component {



    @property(cc.Prefab)
    private resumePrefab: cc.Prefab = null;



    // LIFE-CYCLE CALLBACKS:
    //加载后立即执行生成新的简历
    onLoad () {
        this.spawnNewResume();


    }

    // 生成一个新的简历
    public spawnNewResume() {
        
        
        
        
        // 使用给定的模板在场景中生成一个新简历
        let newResume = cc.instantiate(this.resumePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newResume);
        // 为简历设置一个位置
        newResume.setPosition(0,0);
        // 将 Game 组件的实例传入星星组件
        //newResume.getComponent('Star').init(this);
    }






    start () {

    }

    // update (dt) {}
}
