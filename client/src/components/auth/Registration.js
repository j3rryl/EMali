import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/register.css'
const Register = () => {
  const [isReadonly, setIsReadonly] = useState(true);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  function loginUser(email,password){
    setEmail(email)
    setPassword(password)
}
useEffect(()=>{
  const abortCont=new AbortController();
  loginUser(email,password,{signal:abortCont.signal})
  return()=>{
    console.log('Login page aborted.')
    abortCont.abort()
  }
},[email,password])
function onSubmit(e){
  e.preventDefault()
  toast.success("Registration Successful.")
}
  return (
    <div className='register-page'>
      <h5>Register</h5>
      <div className='register-form-container'>
      
      <form autoComplete="off" className='register-form' onSubmit={onSubmit}>
        <div className='register-form-control-container'>
        <label htmlFor='first_name'>First Name</label>
        <br/><br/>
        <input value={email} 
        placeholder="First Name"
        onChange={(e)=>setEmail(e.target.value)}
        type="text" name='first_name'/>
        </div>

        <div className='register-form-control-container'>
        <label htmlFor='last_name'>Last Name</label>
        <br/><br/>
        <input value={email} 
        placeholder="Last Name"
        onChange={(e)=>setEmail(e.target.value)}
        type="text" name='last_name'/>
        </div>

        <div className='register-form-control-container'>
        <label htmlFor='email'>Email</label>
        <br/><br/>
        <input value={email} 
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        type="email" name='email'/>
        </div>

        <div className='register-form-control-container'>
        <label htmlFor='phone_no'>Phone Number</label>
        <br/><br/>
        <input value={email} 
        placeholder="Phone Number"
        onChange={(e)=>setEmail(e.target.value)}
        type="tel" name='phone_no'/>
        </div>
        
        <div className='login-form-control-container'>
        <label htmlFor='password'>Password</label>
        <br/><br />
        <input value={password}
        readOnly={isReadonly} 
        onFocus={()=>setIsReadonly(prevState=>!prevState)}
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        type="password" name='password' autoComplete='new-password'/>
        </div>

        <input type="submit" value="Register" name='register-btn' className='register-btn'/>
        <ToastContainer />
        <br />
        <Link to='/login' className='login-link'>Have an Account? Log In</Link>
      </form>
      </div>
    </div>
  )
}

export default Register