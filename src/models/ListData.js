export default {
    namespace: 'list',
    state: {
        data: [1,2,3],
        maxNum: 3
    },
    reducers : { // 定义的一些函数
        addNewData : function (state, result) { // state：指的是更新之前的状态数据, result: 请求到的数据

            if(result.data){ //如果state中存在data数据，直接返回，在做初始化的操作
                return result.data;
            }

            let maxNum = state.maxNum + 1;
            let newArr = [...state.data, maxNum];


            return {
                data : newArr,
                maxNum : maxNum
            }
            //通过return 返回更新后的数据
        }
    }

}