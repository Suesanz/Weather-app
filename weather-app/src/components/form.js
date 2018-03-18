import React from "react";
// class Form extends React.Component{
//
//     render(){
//         return(
//
//         )
//     }
// }
//We can use above code also ,render our div into return statement . But what we did here is we implement our code into state less form
// i.e. we don't have to import unncecesary things
const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>
        <button>Get Weather</button>
    </form>
)
export default Form;