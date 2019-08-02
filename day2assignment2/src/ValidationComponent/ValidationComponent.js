import React  from "react";






const validation = (props) =>{

    let message = 'text is long';
    if(props.inputLenght  <=5)
    {
        message='text is short';
    }
    return  (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default validation;  