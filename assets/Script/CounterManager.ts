import { Counter } from "./Counter";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

export class CounterManager {

    /**单例 */
    private static ins : CounterManager;

    /**柜台列表 */
    counterList:Counter[] = [];

    private constructor()
    {
        
    }

    initWithJson(jsonObj:any):void
    {
        for(let i in jsonObj.counterList)
        {
            let counter : Counter = new Counter(jsonObj.counterList[i]);
            this.counterList.push(counter);
        }
    }

    toJson():any
    {
        let jsonObj:any[] = [];
        for(let i in this.counterList)
        {
            jsonObj.push(this.counterList[i].toJson());
        }
        return {
            counterList:jsonObj,
        };
    }

    /**
     * 获取CounterManager的单例
    */
   static getIns():CounterManager
   {
       if (CounterManager.ins == null) {
        CounterManager.ins = new CounterManager();
       }

       return CounterManager.ins;
   }

   /**
    * 新增柜台
    * @param tempId 柜台类id
    */
   addCounter(tempId:number):Counter
   {
        let counter:Counter = new Counter(null,tempId);
        this.counterList.push(counter);
        return counter;
   }
}
