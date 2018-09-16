import React,{Component,Fragment} from "react"
import {BrowserRouter  as Router,Route,Switch,NavLink,withRouter} from "react-router-dom"
import "./style.css"
export default class ReactRouter extends  Component{
    constructor(props){
        super(props);
    }
        render(){
            //switch可以使路由精准匹配   exact精准匹配路径必须相同才能匹配
            //传参数第一种方式/comp4/:id  获取为props.match.params.id
            return (
                 
                     <Fragment>
                     <NavLink to="/" exact activeClassName="active">首页</NavLink>
                     <NavLink to="/comp2/comp3" activeClassName="active">组件2</NavLink>
                     <NavLink to="/comp4" activeClassName="active">组件4</NavLink>
                     <Switch>
                     <Route path="/"  exact component={Comp1}></Route>
                     <Route path="/comp2" component={Comp2}></Route>
                     {/* <Route path="/comp4/:id" component={Comp4}></Route> */}
                     <Route path="/comp4" component={Comp4}></Route>
                     <Route component={Page404}></Route>
                     </Switch>
                     </Fragment>
               
            )
        }
}
 function handleGoToComp2(props){
     console.log(props);
     //编程式导航
   props.history.push("/comp2/comp3",{id:3});
}
const Comp1 = (props)=>(
  <Fragment>
      <div>comp1</div>
      <div><button onClick={()=>{
          handleGoToComp2(props); 
      }}>转到组件3</button></div>
  </Fragment>
)
const Comp2 = (props)=>{ 
      return  <div>Comp2<Route path="/comp2/comp3" component={Comp3}></Route></div>
}
const Comp3 = (props)=>{
    console.log(props);
    return <div>comp3</div>;
}
const Comp4 = (props)=>{
    // console.log(history);
    return <Comp5 history={props.history}></Comp5>;
}
const Page404 = (props)=>(
    <div>Page404</div>
)
const Comp5 = (props)=>{
    return <Comp6></Comp6>
}
//只有路由才有 props里面的三个属性  为了解决多层路由传值props编程时跳转则用withRouter
//match,history,location 
const Comp6 = withRouter(
    (props)=>{
    props.history.push('/comp2/comp3');
    return <div>comp6</div>
}
)