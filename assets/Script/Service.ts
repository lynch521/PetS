import {JsonConfig,ConfigType} from './JsonConfig';


export class Service {
    /**
     * ID
     */
    id:number = null;
    /**
     * 业务名称
     */
    name:string = null;
    /**
     * 进货单价，服务应为0
     */
    cost:number = null;
    /**
     * 销售单价
     */
    price:number = null;
    /**
     * 单位体积
     */
    volume:number = null;     
    /**
     * 一级分类，如食品
     */
    class_1:number = null;
    /**
     * 二级分类，如狗粮
     */        
    class_2:number = null;
    /**
     * 购买数量限制，每次购买的上限，如狗粮一次买三个单位，喂食机一次购买一台
     */        
    numberlimit:number = null;
    /**
     * 等级，反应商品的奢侈程度，收入较高的消费者才会购买高级商品和服务
     */        
    lvl:number = null;
    /**
     * 必须度，从0到1
     */        
    necessity:number = null;
    /**
     * 商品的消耗程度，从0.01到1，代表0.01(两年买一次)0.02（一年买一次）0.08（三个月买一次）0.25（一个月买一次）0.5（两周买一次）1（每周都买）
     */        
    consumable:number = null;
    /**
     * 业务类型 商品1  服务0
     */       
    type:number = null;

    /**
     * 
     */
    
    static serviceList:any = [];



    static search<T>(column:number,item:T):any[]{
        
        JsonConfig.getAllItem(ConfigType.Service) ;


    }

    

}
