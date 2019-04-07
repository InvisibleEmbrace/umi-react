import React from 'react'
import {connect} from 'dva'

const namespace = "list"

// 说明：第一个回调函数，作用：将page层和model层进行链接，返回modle中的数据
// 并且，将返回的数据，绑定到this.props

// 接收第二个函数，这个函数的作用：将定义的函数绑定到this.props中，调用model层中定义的函数
@connect((state) => {
    return {
        dataList: state[namespace].data,
        maxNum: state[namespace].maxNum
    }
},(dispatch) =>{
    return{
        add: function () {
            dispatch({
                type : namespace + "/addNewData"
            })
        }
    }
})
class List extends React.Component {
    constructor(props) { // 构造参数中必须要props参数
        super(props); // 调用父类的构造方法
        /*this.state = { // 初始化this.state
            dataList : [1,2,3],
            maxNum : 3
        };*/
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        // 遍历值
                        this.props.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button
                    onClick={() => { //为按钮添加点击事件
                       /* let maxNum = this.props.maxNum + 1;
                        let list = [...this.props.dataList, maxNum];
                        this.setState({ //更新状态值
                            dataList: list,
                            maxNum: maxNum
                        });
                        console.log(list);*/
                        this.props.add();
                    }}>
                    添加
                </button>
            </div>
        );
    }
}

export default List;