import {JsonConfig,ConfigType} from './JsonConfig'


export class Service {

    static serviceList:any[] = [];    

    static toArray(){
        if(this.serviceList.length==0){
            console.log("未转化为数组");
        }   
        for(let i in JsonConfig.getAllItem(ConfigType.Service)){
            let service:any[] = [];            
            for(let j in JsonConfig.getAllItem(ConfigType.Service)[i]){
                service.push(JsonConfig.getAllItem(ConfigType.Service)[i][j]);
            }
            this.serviceList.push(service);            
        }      
    }





    static search(col:ServiceCol,item){
        
        
        
        
        let goalList = [];
        let originalList = JsonConfig.getAllItem(ConfigType.Service);
        for(let i in originalList){
            console.log(originalList[i][col]);
            
            if(originalList[i][col]==item){
                goalList.push(originalList[i]);
            }
        }
        return goalList;
    }





}


export enum ServiceCol {
    Id = ,
    Name =1,
    Cost =2,
    Price =3,
    Volume =4,
    Class_1 =6,
    Class_2 =8,
    Numberlimit=9,
    Lvl	=10,
    Necessity =11,	
    Consumable =12,
    Type=14,    
};