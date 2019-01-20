import { Counter } from "./Counter";
import { UIManager, UIType } from "./UIManager";
import UI_CounterDetail from "./UI_CounterDetail";

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
export default class CounterItem extends cc.Component {

    @property(cc.Label)
    counterName: cc.Label = null;

    counterInfo:Counter;
    index:number;
    


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    /**
     * 更新界面
     */
    updateUI(counterName:string,counter:Counter,index:number):void {
        this.counterName.string = counterName;
        this.counterInfo = counter;
        this.index = index;
    }

    // update (dt) {}

    private openCounterDetailUI():void
    {
        UIManager.openUI(UIType.UI_CounterDetail,this.updateCounterDetailUI.bind(this));
        
    }

    private updateCounterDetailUI():void
    {
        (UIManager.getUI(UIType.UI_CounterDetail) as cc.Node).getComponent(UI_CounterDetail).updateUI(this.counterInfo,this.index);
    }
}
