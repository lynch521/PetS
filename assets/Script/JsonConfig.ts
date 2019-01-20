import { ToolsClass } from "./ToolsClass";

export class JsonConfig
{
    static JsonPath:string[] = 
    [
        "jsonConfig/tbl_staff_exp",
        "jsonConfig/tbl_staff_exp1",
        "jsonConfig/setting",
        "jsonConfig/skills",
        "jsonConfig/assistant",
        "jsonConfig/randompool",
        "jsonConfig/tbl_counter",
        "jsonConfig/tbl_service",
    ];

    static Config:any[] = [];

    
    static getItem(type:ConfigType,id:number):any
    {   
        return this.Config[type][id];  
    }

    static getAllItem(type:ConfigType):any[]
    {   
        let configArr:any[] = [];
        for(let i in this.Config[type])
        {
            configArr.push(this.Config[type][i])
        }
        return configArr;  
    }

    

    /**
     * 
     * @param type 需要读取的Json文件
     * @param key 需要搜索的关键字
     * @param parameter 搜索的参数 如等于12中的"12"
     * @param meth 搜索方法 0————等于参数(默认)，负数————小于参数，正数————大于参数
     */
    static selectItem(type:ConfigType,key:any,parameter:any,meth:number =0):any[]{

        let list :any[] = this.getAllItem(type);        
        
        return ToolsClass.select(list,key,parameter,meth);
    }

    static setItem(type:ConfigType,id:number,item:any):void 
    {
        this.Config[type][id] = item;
    }

    static setJson(type:ConfigType,item:cc.JsonAsset)
    {
        if(!JsonConfig.Config[type])
        {
            JsonConfig.Config[type] = {};
        }
        for(let i = 0;i<(item.json as Array<Object>).length;i++)
        {
            JsonConfig.setItem(type,item.json[i].id,item.json[i]);
        }
    }
}

export enum ConfigType {
    StaffExp,
    StaffExp1,
    Setting,
    Skills,
    Assisitant,
    Randompool,
    Counter,
    Service,
};