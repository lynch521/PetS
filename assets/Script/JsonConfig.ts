export class JsonConfig
{
    static JsonPath:string[] = 
    [
        "jsonConfig/tbl_staff_exp",
        "jsonConfig/tbl_staff_exp1",
        "jsonConfig/setting",
        "jsonConfig/skills",
        "jsonConfig/randompool",
    ];

    static Config:any[] = [];

    
    static getItem(type:ConfigType,id:number):any
    {   
        return this.Config[type][id - 1];  
    }

    static getAllItem(type:ConfigType):any
    {   
        return this.Config[type];  
    }

    static setItem(type:ConfigType,id:number,item:any):void 
    {
        this.Config[type][id - 1] = item;
    }

    static setJson(type:ConfigType,item:cc.JsonAsset)
    {
        if(!JsonConfig.Config[type])
        {
            JsonConfig.Config[type] = new Array<any>();
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
    Randompool,
};