import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
 
let x=2;
console.log("result",x**x--);
console.log("x is",x)
  return (
    <div>
      
      <div className='parent'>
      
      <FontAwesomeIcon icon={faEnvelope} />
      <button >
        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px' }} />
        Facebook
      </button>
        <div className='child'>box</div>
        {/* <div className='child'>box</div> */}
      </div>

    </div>
  )
}
export default Contact
