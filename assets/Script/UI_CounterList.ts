import UIPanel from "./UIPanel";
import { UIManager, UIType } from "./UIManager";
import { JsonConfig, ConfigType } from "./JsonConfig";
import CounterBuildItem from "./CounterBuildItem";

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
export default class UI_CounterList extends UIPanel {

    @property(cc.Prefab)
    item: cc.Prefab = null;

    @property(cc.ScrollView)
    scrollView:cc.ScrollView = null;

    item_height:number = 100;//每一项的高度
    item_num:number = 8;//每一页8个项
    
    counterIdArr:number[] = [];
    counterItemArr:cc.Node[] = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
         let allCounterList :any[] = JsonConfig.getAllItem(ConfigType.Counter);
         for(let i in allCounterList)
         {
             this.counterIdArr.push(Number(allCounterList[i].id));
         }
         for(let i=0;i<this.item_num*3;i++)
         {
            let item = cc.instantiate(this.item);
            this.scrollView.content.addChild(item);
            this.counterItemArr.push(item);
         }

         this.scrollView.node.on("scroll-ended",this.onScrollEnded,this);

    }

    start () {
        this.renderItem();
    }

    // update (dt) {}

    private close():void
    {
        UIManager.closeUI(UIType.UI_CounterList);
    }

    private onScrollEnded():void {

    }

    renderItem():void {
        for(let i in this.counterItemArr) 
        {
            this.counterItemArr[i].getComponent(CounterBuildItem).updateUI(this.counterIdArr[i]);
        }
    }
}
