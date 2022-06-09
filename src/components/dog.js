import React from 'react'

function Dog(props) { 
      return(
            <div className="dogs">
                  <img src={props.dog.message} alt=""/>
            </div>
      )
}

export default Dog