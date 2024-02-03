import React from "react";
const Registration =() => {
    const myStyle = {
        color: "red",
        height:"150 px",
        width:"250px",
        fontFamily: "Sans-Serif"
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submited Successfully`);
      }
    return(
      <div className="lrp">
        <div class="login-wrapper">
        <center>
        <form className="form" onSubmit={handleSubmit}>
            <marquee style={myStyle} behavior="alternate"> <h2> Registration Page </h2> </marquee><br></br><br></br>
            <div className="div">
           <h3> First Name:- </h3><input type="text" required placeholder="Enter Your First Name"></input><br></br><br></br>
            <h3>Last Name:- </h3><input type="text" required placeholder="Enter Your Last Name"></input><br></br><br></br>
           <h3> Email:- </h3><input type="email" required  placeholder="Enter Your Email"></input><br></br><br></br>
           <h3> New Password:- </h3><input type="Password" minLength={8} maxLength={10} required  placeholder="Enter Your New Password"></input><br></br><br></br>
           <h3> Confirm Password:- </h3><input type="password" minLength={8} maxLength={10} required placeholder="Enter Your Confirm Password"></input><br></br>
           <p><b>NOTE :- </b>Password must contain minimum 8 Characters and maximum 10 Characters</p><br></br><br></br>
            <button type="submit" className="btn"><strong> Submit </strong></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="reset" className="btn"><strong> Reset </strong></button><br></br><br></br>
            <b> WANT TO LOGIN?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="./login"><b> Login </b></a><br></br><br></br>
            </div>
        </form>
        </center></div>
      </div>
    );
};
export default Registration;   