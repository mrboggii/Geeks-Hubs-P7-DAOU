import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


function SigninScreen(props) {
 
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();

useEffect(() => {
    
    return () => {
        //
    };
}, []);
    const submitHandler = (e) => {
        e.preventDefault();

    }
   return <div className="form">
       <form onSubmit={submitHandler}>
           <ul className="form-container">
              
             <li>
                <h3><label for="email"> Email   </label></h3> 
                 <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                 </input>
             </li>
             <li>
                 <h3><label for="password">Password</label></h3>
                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                 </input>
             </li>
             <li>
                 <button type="submit" className="button">Entrar</button>
             </li>
             <h3><li>¿Nuevo en DAOU?</li></h3>
             <li>
                 <Link to="/register" className="button">Regístrate</Link>
             </li>
           </ul>
       </form>
   </div>
}

export default SigninScreen;