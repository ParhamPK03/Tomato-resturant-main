import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../assets/assets"

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sigh Up")

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false) } alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder="Your name" required />}
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Password" required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aspernatur!</p>
        </div>
        {currState==="Login"
        ?<p>CReate new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
 