
import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
const Login = () => {
    const [signUp , setSignUp] = useState('SignUp')
  return (
    <div className='Wrapper'>
        <img src={Logo} alt="" />
        <div className="Login">
        <h2>{signUp}</h2>
       <form>
        {signUp === 'SignUp' ? <input type="text" placeholder='Enter Your Name'/> :null}
        <input type="Email" placeholder='Enter Your Email'/>
        <input type="password" placeholder='Enter Your Password' />
        <button type='submit' >{signUp}</button>
        <div className="checkBox">
        <input type="checkBox" />
        <label >Remember me</label>
        </div>
        {signUp === 'SignIn' ?<p>New to netflix ? <span onClick={()=> setSignUp('SignUp')}>SignUp</span></p>:
        <p>Already have account ? <span onClick={()=> setSignUp('SignIn')}>SignIn</span></p>}
        
        
       </form>
       </div>
    </div>
  )
}

export default Login
