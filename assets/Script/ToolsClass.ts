


export class ToolsClass{

    /**
     * 随机获得与现有技能不重复，不冲突新技能
     * @param currentItemPool 现有技能池
     * @param randomPool 随机技能池
     * @param mode 约束条件
     * @return 返回新的技能 格式为T
     */
    static getNewRandomItem<T>(currentItemPool:T[],randomPool:T[],mode:number=0):T{
        //通过当前项目和随机池，获得随机新项目。  采用逐步缩小随机池的方式实现约束条件 
        
        //约束条件1   不能有重复项       
        for(let i in currentItemPool){
            for(let j in randomPool){
                if(currentItemPool[i]==randomPool[j]){
                    randomPool.splice[j];
                    break;
                }
            }            
        }

        //约束条件2  不能有冲突项




        
        //随机池为空则报错
        if(randomPool.length==0){
            console.log("无满足条件项");
        }
        //随机返回一个
        return randomPool[this.random(0,randomPool.length-1)];
    }

/**
 * 生成整数随机数
 * @param min 最小值（含） 
 * @param max 最大值（含）
 */
    static random(min:number,max:number){//生成随机属性
        return min+Math.floor(Math.random()*(max-min+1));
    }
/**
 * 生成浮点随机数
 * @param min 
 * @param max 
 */
    static floatRandom(min:number,max:number){
        return min+Math.random()*(max-min+1);
    }


    /**
     * 返回0或1
     * @param chance 返回1的概率，0到1间
     */
    static roll(chance:number){
        if(chance>1){
            console.log("概率值大于1");
            return 1;
        }else if(chance<0){
            console.log("概率值小于0");
            return 0;
        }
        let dice = Math.random();
        if(dice <= chance){
            return 1;
        }else{
            return 0;
        }
    }




/**
 * 用于概率不均等的随机
 * @param probability 每种结果的概率
 * @param value 每种结果的取值
 */
    static UnequalRandom(probability:number[],value:number[]){
        if(probability.length != value.length){
            console.log("概率数量不等于取值数量，请检查");
        }

        let n = probability.length;

        let sum:number = 0;

        for(let i =0 ; i < n;i++){//
            sum = sum + probability[i];
        }

        let seed = Math.random() * sum;

        for(let i = 0 ; i < n ; i++ ){
            if(seed < probability[i]){
                return value[i];
            }
            else{
                seed = seed - probability[i];
            }
        }
        console.log("随机函数出错");
        return value[n-1];
    }

    /**
     * 对于[{}]类型的数组进行搜索
     * @param list 数组
     * @param key 搜索列名
     * @param parameter 搜索参数
     * @param meth 搜索方法 0————等于参数（默认），负数————小于参数，正数————大于参数
     */
    static select(list:any[],key:string,parameter:any,meth:number = 0):any[]{
        let result:any[]=[];
        if(meth==0){
            for(let i in list){
                if(list[i][key]==parameter){
                    result.push(list[i]);
                }
            }
        }else if(meth>0){
            for(let i in list){
                if(list[i][key]>parameter){
                    result.push(list[i]);
                }
            }
        }else{
            for(let i in list){
                if(list[i][key]<parameter){
                    result.push(list[i]);
                }
            }
        }       
        return result;
    }

    /**
     * 抽取特定一列数据
     * @param list 
     * @param key 抽取的列名
     */
    static getCol(list:any[],key:string){
        let result:any[] = [];
        for(let i in list){
            let item = list[i];
            result.push(item[key]);
            //result.push(item[key]);
        }
        return result;
    } 










    private static compare(a:number,b:number):number{
        return a-b;
    }

    /**
     * 从小到大排序
     * @param list 数字数组
     */
    static sort(list:number[]):number[]{
        list.sort(this.compare);
        return list;
    }





}
