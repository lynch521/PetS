import UIPanel from "./UIPanel";
import { UIManager, UIType } from "./UIManager";
import { Counter } from "./Counter";
import { JsonConfig, ConfigType } from "./JsonConfig";
import { CounterManager } from "./CounterManager";
import MainScene from "./MainScene";

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
export default class UI_CounterDetail extends UIPanel {

    @property(cc.Label)
    nameLbl: cc.Label = null;
    @property(cc.Label)
    storageLbl: cc.Label = null;
    @property(cc.Button)
    closeBtn: cc.Button = null;
    @property(cc.Button)
    lvlUpBtn: cc.Button = null;
    @property(cc.Button)
    changeBtn: cc.Button = null;
    @property(cc.Button)
    deleteBtn: cc.Button = null;

    counterInfo:Counter;
    tempId:number;
    //柜台item下标
    index:number;
   

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    /**
     * 
     * @param counterInfo 
     * @param index CounterItem下标
     */
    updateUI(counterInfo:Counter,index:number)
    {
        this.counterInfo = counterInfo;
        this.tempId = this.counterInfo.tempID;
        this.index = index;
        let counterConfig:any = JsonConfig.getItem(ConfigType.Counter,this.tempId);
        
        this.nameLbl.string = counterConfig.name;
        this.storageLbl.string = "容量：" + counterConfig.storage;
    }

    close():void
    {
        UIManager.closeUI(UIType.UI_CounterDetail);
    }

    deleteCounter():void
    {
        cc.Canvas.instance.node.getChildByName("LogicNode").getComponent(MainScene).deleteCounter(this.index);
        this.close();
    }
}
