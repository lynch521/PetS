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
    item_num:number = 7;//每一页7个项
    
    counterIdArr:number[] = [];
    counterItemArr:cc.Node[] = [];
    
    startIndex:number = 0;
    startY:number = 0;
    spaceY:number = 0;
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
         this.spaceY = this.scrollView.content.getComponent(cc.Layout).spacingY;
    }

    start () {
        this.startY = this.scrollView.content.y;
        this.renderItem(this.startIndex);
    }

    update (dt) {
        this.loadScrollRecode();
    }

    close():void
    {
        UIManager.closeUI(UIType.UI_CounterList);
    }


    private onScrollEnded():void {
        this.loadScrollRecode();
        this.scrollView.elastic = true; //加载结束后自动滚动回弹开启
    }

    renderItem(index:number):void {
        for(let i in this.counterItemArr) 
        {
            this.counterItemArr[i].getComponent(CounterBuildItem).updateUI(this.counterIdArr[Number(i) + index]);
        }
    }

    loadScrollRecode():void
    {
        if(this.startIndex + this.item_num * 3 < this.counterIdArr.length &&
            this.scrollView.content.y >= this.startY + this.item_num * 2 * this.item_height)//content超过2个PAGE的高度
        {
            //_autoScrolling在引擎源码中负责处理scrollview的滚动动作
            if(this.scrollView.isAutoScrolling()){ //等自动滚动结束后再加载防止滚动过快，直接跳到非常后的位置
                this.scrollView.elastic = false; //关闭回弹效果 美观
                return;
            }
            var down_loaded = this.item_num; 
            this.startIndex += down_loaded;

            if(this.startIndex + this.item_num * 3>this.counterIdArr.length)
            {
                //超过数据范围的长度
                var out_len = this.startIndex + this.item_num * 3 - this.counterIdArr.length;
                down_loaded -= out_len;
                this.startIndex -= out_len;
            }
            this.renderItem(this.startIndex);
            this.scrollView.content.y -= down_loaded * (this.item_height + this.spaceY);
            return;
        }
         //向上加载
         if(this.startIndex>0 && this.scrollView.content.y<=this.startY)
         {
             if(this.scrollView.isAutoScrolling()){ 
                 this.scrollView.elastic = false;
                 return;
              }
             var up_loaded = this.item_num;
             this.startIndex -= up_loaded;
             if(this.startIndex<0){
                 up_loaded +=this.startIndex;
                 this.startIndex=0;
             }
             this.renderItem(this.startIndex);
             this.scrollView.content.y += up_loaded * (this.item_height  + this.spaceY);
         }
    }
}
