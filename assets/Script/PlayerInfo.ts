// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import {EmployInfo} from './EmployAssistant/EmployInfo';

export class PlayerInfo {

    //单例
    private static ins : PlayerInfo;

    //jsonObj 玩家信息的json形式
    jsonObj:any = {};

    //商店名字
    private _shopName:string;
    //当前回合
    private _currentRound:number;
    //职工数据
    //employList:Array<EmployInfo> = new Array<EmployInfo>();
    //金币
    private _gold:number;

    private constructor()
    {
       
    }

    //----------------------------getter setter----------------------------
    set shopName(shopName:string)
    {
        PlayerInfo.ins._shopName = shopName;
        this.jsonObj.shopName = shopName;
    }
    
    get shopName():string
    {
        return this._shopName;
    }

    set gold(gold:number)
    {
        PlayerInfo.ins._gold = gold;
        this.jsonObj.gold = gold;
    }

    get gold():number
    {
        return this._gold;
    }

    set currentRound(currentRound:number)
    {
        PlayerInfo.ins._currentRound = currentRound;
        this.jsonObj.currentRound = currentRound;
    }

    get currentRound():number
    {
        return this._currentRound;
    }

    //----------------------------getter setter----------------------------

    /**
     * 获取playerinfo的单例
    */
    static getIns():PlayerInfo
    {
        if (PlayerInfo.ins == null) {
            PlayerInfo.ins = new PlayerInfo();
        }

        return PlayerInfo.ins;
    }

    /**
     * 初始化玩家数据
     */
    intiPlayerInfo():void
    {
        this.shopName = "";
        this.gold = 0;
        this.currentRound = 1;
    }

    /**
     * 存储玩家数据
     */
    savePlayerInfo():void
    {
        //转换成string并存储
        let jsonString:string = JSON.stringify(this.jsonObj);
        cc.sys.localStorage.setItem("playerInfo",jsonString);
    }

    /**
     * 读取玩家数据
     */
    loadPlayerInfo():PlayerInfo
    {
        let playerInfo:string = cc.sys.localStorage.getItem("playerInfo");
        if(playerInfo)
        {
            //json字符串转obj
            this.jsonObj = JSON.parse(playerInfo);
            //转换成 playerinfo类实例
            PlayerInfo.ins.shopName = this.jsonObj.shopName;
            PlayerInfo.ins.currentRound = this.jsonObj.currentRound as number;
            PlayerInfo.ins.gold = this.jsonObj.gold as number;

            return PlayerInfo.ins;
        }
        else
            return null;
    }

    /**
     * 删除本地存储数据
     * @param key 要删除数据的key
     */
    removePlayerInfo(key:string):void
    {
        cc.sys.localStorage.removeItem(key);
    }

    
}
