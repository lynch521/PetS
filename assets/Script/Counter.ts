import { Assistant } from "./Assistant";

/**柜台类
 * 柜台决定提供的服务和售卖的商品
 * 柜台有负重概念，不同的服务和商品有不同的负重
 * 不同的柜台提供不同的服务，售卖不同的商品
 */
export class Counter {
    /** 柜台模板ID */
    tempID:number;
    /** 业务数据
     * 对商品来说以{业务id：库存量}形式存储
     * 对服务来说{业务id：每周可使用次数}形式存储
     */
    serviceData:any = {};
    /**柜台上的职工 */
    assistant:Assistant;

    constructor()
    {
    
    }
}