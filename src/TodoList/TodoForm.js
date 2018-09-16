import React,{Component,Fragment} from "react";
export default class TodoForm extends Component{
        constructor(props){
            super(props);
            this.state={
                keywords:'abc'
            }
            this.handleInputChange = this.handleInputChange.bind(this);
        }
          handleInputChange(e){
            // console.log(e);
            this.setState({
                keywords:e.target.value
            })
        }
        render(){
            return (
            <Fragment>
               <form>
                  <input type="text" 
                  value={this.state.keywords}
                   onChange={this.handleInputChange}/> 
                    <input type="button" value="添加" onClick={
                        ()=>{
                  this.props.onReceiveKeyWord(this.state.keywords);
                    this.setState({
                    keywords:""
                    })
                        }
                        }/>
                </form> 
             </Fragment>
             )
        }
      
}