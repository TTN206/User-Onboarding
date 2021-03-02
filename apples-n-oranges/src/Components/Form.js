import React from "react";

export default function Form ( props ) {
    const { values, submit, change, disabled, errors, } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        
    }

    const onChange = evt => {
        // debugger;
        const { name, value, type, checked } = evt.target;

        const valueToUse = type === "checkbox" ? checked : value;
        change ( name, valueToUse );
    }

    return (
        <form className = "form-container" onSubmit = { onSubmit } >
            <div className = "form-group-submit" >
                <h2>Add a User</h2>

                <div className = "errors" >
                    <div>{ errors.username }</div>
                    <div>{ errors.email }</div>
                    <div>{ errors.password }</div>
                </div>
            </div> 

            <div className = "form-group-inputs" >
                <h4>Information Station</h4>
                <label> Username:&nbsp;
                    <input
                        name = "username"
                        type = "text"
                        value = { values.username }
                        onChange = { onChange }
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        name = "email"
                        type = "text"
                        value = { values.email }
                        onChange = { onChange }
                    />
                </label>
                <label>Password:&nbsp;
                    <input
                        name = "password"
                        type = "text"
                        value = { values.password }
                        onChange = { onChange }
                    />
                </label>
            </div> 
            <div className = "form-checkbox">
                <label>Terms of Service:&nbsp;
                    <input
                        name = "terms"
                        type = "checkbox"
                        checked = { values.terms }
                        onChange = { onChange }
                    />
                </label>
            </div>
            <div className = "form-button">
                <button disabled = { disabled } >
                    Submit
                </button>
            </div>
        </form>
    )
}