import React,{Component} from "react"
export default class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'1212'
        }
        console.log('constructor');
        
    }
    //当父组件的render被调用则子组件这个update会被调用  vue不是这样的
    shouldComponentUpdate(nextProps){
         console.log('shouldComponentUpdate');
         console.log(nextProps,this.props.msg);
        if(nextProps.msg === this.props.msg){
            return false;
        }else{
            return true;
        }
    }
    render(){
        console.log('render');
     return (
         <div>
            render 
         </div>
     )
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}