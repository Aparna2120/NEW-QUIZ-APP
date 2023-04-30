import React, {useState} from 'react'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom'
 

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
        });
       
    }
  return (
    <>
       <div className="text-center m-5-auto signin">
           
           <form action="/home"> 
           <h2>Sign in to us</h2>
           <br/>
               <p>
                   <label>Username or email address</label><br/>
                   <input type="text" name="first_name" onChange={(e)=>setEmail(e.target.value)} required />
               </p>
               <p>
                   <label>Password</label>
                   <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                   <br/>
                   <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
               </p>
               <p>
                   <button onClick={onLogin} id="sub_btn" type="submit">Login</button>
               </p>
               <footer>
               <p>First time? <Link to="/register">Create an account</Link>.</p>
               <p><Link to="/">Back to Homepage</Link>.</p>
           </footer>
           </form>
          
       </div>

    </>
  )
}

export default LoginPage
