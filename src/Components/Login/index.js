import './style.css'
import GoBack from "../GoBack";

const Login = () =>{
    return(
        <>
            <div className='container'>
                <GoBack/>
                <div className='login'>
                <div><label htmlFor='email'>Email address</label></div>
                <div><input type="text" id='email' placeholder='e-mail'/></div>
                <div><label htmlFor='password'>Password</label></div>
                <div><input type="password" id='password' placeholder='password'/></div>
                <div><button className='login-btn' type='submit'>Login</button></div>
                </div>
            </div>
        </>
    )
}
export default Login;