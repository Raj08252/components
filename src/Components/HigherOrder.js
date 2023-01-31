import React from 'react';
const updatedComp= OriginalComp =>{
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="the user"/>
        }
    }
    return NewComp;
}

export default updatedComp;