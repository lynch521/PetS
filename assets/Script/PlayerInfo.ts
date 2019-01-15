import { Assistant } from "./Assistant";
import { AssistantManager } from "./AssistantManager";
import { CounterManager } from "./CounterManager";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

export class PlayerInfo {

    /**单例 */
    private static ins : PlayerInfo;

    /**商店名字 */
    shopName:string;
    /**当前回合 */
    currentRound:number;
    /**金币 */
    gold:number;
    /**
     * 人气
     */
    pop:number;

    private constructor()
    {
       
    }

    toJson():any
    {
   
        return {
            shopName:this.shopName,
            currentRound:this.currentRound,
            gold:this.gold,
            pop:this.pop,
            assistantInfo:AssistantManager.toJson(),
            counterInfo:CounterManager.getIns().toJson(),
        }
    }

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
        this.pop = 0;
        
    }

    /**
     * 存储玩家数据
     */
    savePlayerInfo():void
    {
        //转换成string并存储
        let jsonString:string = JSON.stringify(this.toJson());
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
            let jsonObj:any = JSON.parse(playerInfo);
            //转换成 playerinfo类实例
            PlayerInfo.ins.shopName = jsonObj.shopName;
            PlayerInfo.ins.currentRound = jsonObj.currentRound as number;
            PlayerInfo.ins.gold = jsonObj.gold as number;
            PlayerInfo.ins.pop = jsonObj.pop as number;
            AssistantManager.initWithJson(jsonObj.assistantInfo);
            CounterManager.getIns().initWithJson(jsonObj.counterInfo);
            
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
