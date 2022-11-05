import React from "react";

function UseInputValue(InputDefaultValue='') {

    const [value, setValue] = React.useState(InputDefaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
        },
        clear:() => setValue(''),
        value:() => value,
    }
}

 function AddToDo (props) { 
    const input = UseInputValue('');  

    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
            props.onCreate(input.value())
            input.clear();
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit" >Add todo</button>
        </form>
    )
}

export default AddToDo 