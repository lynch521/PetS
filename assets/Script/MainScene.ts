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

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.EditBox)
    shopNameEB:cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //读取玩家数据
        let playerInfo = PlayerInfo.getIns().loadPlayerInfo();
        if(playerInfo)
        {
            //不显示名字输入框
            this.shopNameEB.node.parent.active = false;
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
    }

    private removeData(event:Event):void
    {
        PlayerInfo.getIns().removePlayerInfo("playerInfo");
    }
}
