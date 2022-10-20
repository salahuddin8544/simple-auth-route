import React, {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css'
const SingUp = () => {
    const [error,setError] = useState(null)
    const {createUser} = useContext(AuthContext)
    const hanldeSignUp =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        if(password.length < 6){
            return setError('Password should be 6 character')
        }
        if(password !== confirm){
            return setError('Dont mathc with confirm password')
        }
        createUser(email,password)
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
        <form onSubmit={hanldeSignUp}>
        <h3 className='form-titile'>Sign Up</h3>
        <div className='form-control'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
        </div>
        <div className='form-control'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
        </div>
        <div className='form-control'>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
        </div>
        <input className='submit-btn' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account?<Link to='/signup'>Login</Link></p>
        <p className='danger'>{error}</p>
    </div>
    );
};

export default SingUp;