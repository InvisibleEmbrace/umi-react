import React from 'react';

class HelloWorld extends React.Component {

    render(){ //第三步，重写render()方法，用于渲染页面
        return <div>hello world!{this.props.name}</div> //JSX语法
    }

}

export default HelloWorld;