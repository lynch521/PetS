// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import {PlayerInfo} from './PlayerInfo';
import { Counter } from './Counter';
import { CounterManager } from './CounterManager';
import CounterItem from './CounterItem';
import { JsonConfig, ConfigType } from './JsonConfig';
import { UIManager, UIType } from './UIManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.EditBox)
    shopNameEB:cc.EditBox = null;
    @property(cc.Label)
    goldLbl:cc.Label = null;
    @property(cc.Label)
    popLbl:cc.Label = null;
    @property(cc.Label)
    shopNameLbl:cc.Label = null;
    @property(cc.Label)
    roundLbl:cc.Label = null;
    @property(cc.Node)
    counterGrid:cc.Node = null;
    @property(cc.Prefab)
    counterItem:cc.Prefab = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //读取玩家数据
        let playerInfo = PlayerInfo.getIns().loadPlayerInfo();
        if(playerInfo)
        {
            //不显示名字输入框
            this.shopNameEB.node.parent.active = false;
            //渲染界面
            this.updateUI();
        }
        else
        {
            //玩家数据不存在，显示输入框
            this.shopNameEB.node.parent.active = true;
            this.shopNameEB.placeholder = "请输入你的宠物店名字";
        }
        
    }

    start () {

    }

    // update (dt) {}

    /**
     * 创建角色
     */
    private createPlayer(event:Event):void
    {
        //初始化玩家数据
        PlayerInfo.getIns().intiPlayerInfo();
        //赋值商店名字
        PlayerInfo.getIns().shopName = this.shopNameEB.string;
        //存储玩家数据
        PlayerInfo.getIns().savePlayerInfo();
        //隐藏输入界面
        this.shopNameEB.node.parent.active = false;
        //渲染界面
        this.updateUI();
    }

    /**
     * 渲染界面
     */
    updateUI():void 
    {
        //渲染玩家信息
        this.shopNameLbl.string = "名字：" + PlayerInfo.getIns().shopName;
        this.goldLbl.string = "金币：" + PlayerInfo.getIns().gold;
        this.popLbl.string = "人气：" + PlayerInfo.getIns().pop;
        this.roundLbl.string = "回合：" + PlayerInfo.getIns().currentRound;
        //渲染柜台列表
        this.updateCounterList();
    }

    /**
     * 渲染柜台列表
     */
    private updateCounterList():void {
        
        let counterList:Counter[] = CounterManager.getIns().counterList;
        
        for(let i in counterList)
        {
            let counterTemp:any = JsonConfig.getItem(ConfigType.Counter,counterList[i].tempID);
            let counterNode:cc.Node = cc.instantiate(this.counterItem);
            counterNode.getComponent(CounterItem).updateUI(counterTemp.name);
            this.counterGrid.addChild(counterNode,1,"counter_" + i);
        }
    }
    
    /**
     * 增加柜台
     * @param tempID 柜台模板id
     */
    private addCounter(event:Event,tempID:string):void {
        
    }

    private openCounterListUI():void
    {
        UIManager.openUI(UIType.UI_CounterList);
    }

    private removeData(event:Event):void
    {
        PlayerInfo.getIns().removePlayerInfo("playerInfo");
    }

    private openAssistantScene(){
        cc.director.loadScene("EmployAssistant");
    }

    

}
