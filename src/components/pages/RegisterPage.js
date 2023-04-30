
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
 

const RegisterPage = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <>
       <div className="text-center m-5-auto register">

<form action="/home">
    <h2>Join us</h2>
    <h5>Create your personal account</h5>
    <br />
    <p>
        <label>Username</label><br />
        <input type="text" name="first_name"  required />
    </p>
    <p>
        <label>Email address</label><br />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}   required />
    </p>
    <p>
        <label>Password</label><br />
        <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
    </p>
    <p>
        <button id="sub_btn"  onClick={onSubmit} type="submit">Register</button>
    </p>
    <footer>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </footer>
</form>

</div>
    </>
  )
}

export default RegisterPage
