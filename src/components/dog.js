import React from 'react'

function Dog(props) { 
      return(
            <div className="dogs">
                  <img src={props.API.message} alt=""/>
            </div>
      )
}

export default Dog