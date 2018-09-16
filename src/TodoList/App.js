import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from "./TodoForm"
import LifeCycle from "./LifeCycle"
 export default class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      list:[1,2,3]
    }
    this.handleReceiveKeyWord = this.handleReceiveKeyWord.bind(this); 
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  render(){
    // console.log(0);
    return ( <div>
              <LifeCycle msg={'hello'}/>
              <TodoForm onReceiveKeyWord={this.handleReceiveKeyWord}/>
              <TodoItem list={this.state.list}  onDeleteItem={this.handleDeleteItem}/>
               </div> 
             )
  }
  handleDeleteItem(num){
      console.log(num);
      let list  = [...this.state.list];
      list.splice(num,1);
      this.setState({
        list
      })
  }
  handleReceiveKeyWord(keyword){
    console.log(keyword);
    this.setState((prevState)=>{
      return {
         list:[
          ...prevState.list,
          keyword
         ]
      }
    })
  }
  async componentDidMount() {
    // console.log(1);
    let result = await this.fetchData();
    // console.log(result);
    // console.log(2);
    // console.log(result)
    // setState方法是一个异步的方法，
    // react会在一定的时间内收集所有的state的修改
    // 最后再一并修改
    // this.state.list = result.data


    this.setState((prevState) => {
      return {
        list: [
          ...prevState,
          ...result.data
        ]
      }
    },()=>{
      console.log(1);
    })
  }
  fetchData() {
    // 无论是axios,  $.ajax(), fetch 都是返回promise
    return fetch('/api/list')
      .then(response => response.json())
      .then((result) => {
        return result
      })


    // return new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //     resolve('hello');
    //   },1000)
    // })
  }
   
}
// console.time('test');
// const p1 =  new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('hello');
//   },1000)
// })
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('world');
//   },2000)
// })
// // Promise.all([p1,p2]).then((results)=>{
// // console.log(results);
// // console.timeEnd('test');
// // })
// Promise.race([p1,p2]).then((results)=>{
//   console.log(results);
//   console.timeEnd('test');
//   })

 
