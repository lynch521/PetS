


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


    static random(min:number,max:number){//生成随机属性
        return min+Math.floor(Math.random()*(max-min+1));
    }




}
