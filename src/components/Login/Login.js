import React,{useContext} from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import UserContext, { AuthContext } from '../context/UserContext';
import './Login.css'
const Login = () => {
    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.pathname || '/'
    const handlesign = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       form.reset()
       navigate(from,{replace:true})
       signIn(email,password)
       .then(result=>{
        const user = result.user;
        console.log(user);
       })
       .catch(error=>{
        console.log(error);
       })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handlesign}>
            <h3 className='form-titile'>Login</h3>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />
            </div>
            <input className='submit-btn' type="submit" value="login" />
            </form>
            <p>New the ema john <Link to='/signup'>Create new account</Link></p>
        </div>
    );
};

export default Login;