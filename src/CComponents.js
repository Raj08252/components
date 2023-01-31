import React from "react";

class CComponents extends React.Component{
   state= {
        message:"class component",
        time:new Date().toString(),
    };
    componentDidMount()
    {
        console.log('I am from did mount component');
        this.interval=setInterval(this.showDate(1000));
    }
    componentDidUpdate()
    {
      console.log('I am from did update component');  
    }
    componentWillUnmount()
    {
        console.log('I am from will unmount component');
        clearInterval(this.interval);
    }
    showDate=()=>{
        this.setState=({time:new Date().toString()});
    }

    render()
    {
  return <>
  <div>{this.state.message}</div>
  <div>{this.state.time}</div>
  </>
    }
} 


export default CComponents;