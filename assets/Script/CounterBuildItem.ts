import { JsonConfig, ConfigType } from "./JsonConfig";
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
export default class CounterBuildItem extends cc.Component {

    @property(cc.Label)
    nameLbl: cc.Label = null;
    @property(cc.Label)
    storageLbl: cc.Label = null;
    @property(cc.Label)
    priceLbl: cc.Label = null;
    @property(cc.Label)
    subTypeLbl: cc.Label = null;
    @property(cc.Label)
    lockTechLbl: cc.Label = null;

    tempId:number;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
    }

    // update (dt) {}

    /**
     * 更新柜台item
     * @param counterTempId 柜台模板id
     */
    updateUI(counterTempId:number):void 
    {

        this.tempId = counterTempId;

        let counterTemp:any = JsonConfig.getItem(ConfigType.Counter,counterTempId);
        this.nameLbl.string = counterTemp.name;
        this.storageLbl.string = "容量：" + counterTemp.storage;
        this.priceLbl.string = counterTemp.price + "金币";
    }

    private addCounter():void 
    {
        cc.Canvas.instance.node.getChildByName("LogicNode").getComponent(MainScene).addCounter(this.tempId);
    }
}
