import React from "react";

function Button(props) { 

      const handleSubmit = () => { 
            props.handleSubmitFromApp();
      }

      return (
            <button type="button" onClick={handleSubmit}>
                  Get a dog Picture! 
            </button>
      )
}

export default Button