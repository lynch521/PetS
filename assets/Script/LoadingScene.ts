// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import {JsonConfig} from "./JsonConfig"
const {ccclass, property} = cc._decorator;


@ccclass
export default class LoadingScene extends cc.Component {

    @property(cc.Label)
    progresLabel:cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {
        let ins = this;
        //读取json配置文件
        /*读取URL数组中的资源，仅限于resource文件夹中，扩展名要省略；参数1，URL数组；参数二，如果有此参数，则只能加载asset资源（此参数本次已经省略）；
        */
        cc.loader.loadResArray(JsonConfig.JsonPath,
            function(completedCount,totalCount,item) {
                //item为json对象，本例中应为数组，元素为{}。
               if(item)
               {
                    ins.progresLabel.string = item.content.name + "已载入" + `(${completedCount}/${totalCount})`;
                    JsonConfig.setJson(completedCount - 1,item.content);

               }
               else
               {
                    console.log("载入错误");
               }

            },
            function(error,resource)
            {
                if(resource) 
                {
                    console.log("配置加载完成");
                    cc.director.loadScene("EmployAssistant");
                }
                                         
            }
        )
    }

    // update (dt) {}
}
