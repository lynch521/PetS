/**
 * UI管理器
 */
export class UIManager {

    static uiList : any[];
    static cacheUIList : any[];

    static openUI(uiType:UIType, callBack:Function):void {
        // 缓存--
        for (var i = 0; i < this.cacheUIList.length; i++) {
            var temp = this.cacheUIList[i];
            if (temp && temp.name === UIType[uiType]) {
                temp.active = true;
                temp.parent = cc.Canvas.instance.node;
                this.uiList.push(temp)
                this.cacheUIList.splice(i, 1);

                var panel = temp.getComponent("UIPanel");
                if (panel) {
                    panel.show();
                }

                // event--
                if (callBack) {
                    callBack(temp);
                }
                return;
            }
        }
        // 非缓存--
        cc.loader.loadRes('ui/' + UIType[uiType], function(err, prefab) {
            if (err) {
                cc.error(err.message || err);
                return;
            }

            var temp = cc.instantiate(prefab);
            temp.parent = cc.Canvas.instance.node;
            this.uiList.push(temp)

            var panel = temp.getComponent("UIPanel");
            if (panel) {
                temp.name = UIType[uiType];
                panel.show();
            }

            // event--
            if (callBack) {
                callBack(temp);
            }
            
        });
    }

    static closeUI(uiType:UIType, callBack:Function):void {
        for (var i = this.uiList.length - 1; i >= 0; i--) {
            var temp = this.uiList[i];
            if (temp && temp.name === UIType[uiType]) {
                temp.active = false;
                temp.removeFromParent(true);
                this.cacheUIList.push(temp);
                this.uiList.splice(i, 1);
    
                var panel = temp.getComponent("UIPanel");
                if (panel) {
                    panel.hide();
                }

                if (callBack) {
                    callBack();
                }
                return;
            }
        }
    }

    static getUI(uiType:UIType):any {
        for (var i = this.uiList.length - 1; i >= 0; i--) {
            var temp = this.uiList[i];
            if (temp && temp.name === UIType[uiType]) {
                return temp;
            }
        }
    }
}

/**
 * UI界面枚举，需要跟对应的prefab文件名一致
 */
export enum UIType {
    UI_CounterDetail,//柜台详情界面
}
