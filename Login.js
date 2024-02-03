 import React, { useState } from 'react';
 import { Navigate } from "react-router-dom";
const Login =() => {
    const myStyle = {
        color: "green",
        height:"150 px",
        width:"250px",
        fontFamily: "Sans-Serif"
      };
       const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submited Successfully`);
      } 
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState(''); 
const[onLatestMoviesTelDark,setLatestMoviesTelDark]=useState();
if(onLatestMoviesTelDark){
    return <Navigate to="/LatestMoviesTelDark"></Navigate>
}
    return(
        <div className="lrp">
        <div class="login-wrapper">
        <center>
        <form className='form'  onSubmit={handleSubmit} >
            <marquee style={myStyle} behavior="alternate"> <h2> Login Page </h2> </marquee><br></br><br></br>
            <div className='div'> <h3 className='h3'> Email:- </h3>
                <label htmlFor='email'></label>
                <input type="text" required  placeholder='Enter Your Email' style={{color:"black"}}
                onChange={e => setEmail(e.target.value)} />
             <br></br><br></br>
            <h3> Password:- </h3>
            <label htmlFor='password' ></label>
                <input type="password" minLength={8} maxLength={10} required autoFocus placeholder='Enter Your Password'  style={{color:"black"}}
                onChange={e => setPassword(e.target.value)} />
            </div><br></br>
            <p><b>NOTE :- </b>Password must contain minimum 8 Characters and maximum 10 Characters</p><br></br><br></br>
           <button type="submit" className='btn'  onClick={() => { setLatestMoviesTelDark(true); } } > <strong> {/*<a className='abc'  href='./LatestMoviesTelDark' > */}Submit </strong></button>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='reset' className='btn'><strong> Reset </strong></button>
            <br></br>
            <br></br>
            <div>
            <b>WANT TO CREATE ACCOUNT?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='./Registration'><b> SingUp </b></a>
            </div><br></br>
             <div>
                <b>FORGOT PASSWORD?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="./Password"><b> Password </b></a>
            </div>
        </form></center></div>
        </div>
    );
};
export default Login;  
 