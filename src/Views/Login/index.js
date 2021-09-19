import './style.css'
import Layout from "../../Components/Layout";

const Login = () =>{
    return(
        <Layout>
            <div className='container  d-flex justify-content-center align-items-center'>
                <div className='login'>
                <div><label htmlFor='email'>Email address</label></div>
                <div><input type="text" id='email' placeholder='e-mail'/></div>
                <div><label htmlFor='password'>Password</label></div>
                <div><input type="password" id='password' placeholder='password'/></div>
                <div><button className='login-btn' type='submit'>Login</button></div>
                </div>
            </div>
        </Layout>
    )
}
export default Login;