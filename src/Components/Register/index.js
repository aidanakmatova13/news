import './style.css'
import GoBack from "../GoBack";
import Layout from "../Layout";

const Register = () =>{
    return(
        <Layout>
            <div className='container'>
                <GoBack/>
                <div className='register'>
                <div><label htmlFor='name'>Name</label></div>
                <div><input type="text" id='name' placeholder='Your name...'/></div>
                <div><label htmlFor='surname'>Surname</label></div>
                <div><input type="text" id='surname' placeholder='Your surname...'/></div>
                <div><label htmlFor='email'>Email address</label></div>
                <div><input type="text" id='email' placeholder='e-mail'/></div>
                <div><label htmlFor='password'>Password</label></div>
                <div><input type="password" id='password' placeholder='Your name...'/></div>
                <div><button className='sub-btn' type='submit'>Submit</button></div>
                </div>
            </div>
        </Layout>
    )
}
export default Register;