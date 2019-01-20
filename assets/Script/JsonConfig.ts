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