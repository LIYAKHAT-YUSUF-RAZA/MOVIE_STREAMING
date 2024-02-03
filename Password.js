import React from "react";
/* import { Navigate } from "react-router-dom"; */
function Password(){
    const myStyle = {
        color: "darkviolet",
        height:"150 px",
        width:"250px",
        fontFamily: "Sans-Serif"
      };
   /*    const [onLogin,setLogin]=React.useState(false);  
       if(onLogin){
        return <Navigate to="/Login"></Navigate>
      }  */
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submited Successfully`);
      }
    return(
          <div className="lrp">
            <div class="login-wrapper">
                <center>
                    <form className="form" onSubmit={handleSubmit}>
                        <marquee style={myStyle} behavior="alternate"> <h2> Password Page </h2> </marquee><br></br><br></br>
                        <div className="div">
                       <h3> FIRST NAME:- </h3><input type="text" placeholder="Enter Your First Name" required></input><br></br><br></br>
                       <h3> LAST NAME:- </h3><input type="text" placeholder="Enter Your Last Name" required></input><br></br><br></br>
                       <h3> EMAIL:- </h3><input type="email" placeholder="Enter Your Email" required></input><br></br><br></br>
                        <h3>PHONE NUMBER:- </h3><input type="tel" maxLength={10} placeholder="Enter Your Phone Number"></input><br></br><br></br>
                        <h3>CREATE NEW PASSWORD:-</h3><input type="password" minLength={8} maxLength={10} placeholder="Enter Your New Password" required></input><br></br><br></br>
                        <h3>CONFIRM YOUR PASSWORD:- </h3><input type="password" minLength={8} maxLength={10} placeholder="Enter Your Confirm Password" required></input><br></br>
                        <p><b>NOTE :- </b>Password must contain minimum 8 Characters and maximum 10 Characters</p><br></br><br></br>
                        <button className="btn" type="submit" /* onClick={()=>{setLogin(true)}} */><strong> Submit </strong></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn" type='reset'><strong> Reset </strong></button><br></br><br></br>
                        <b> WANT TO LOGIN?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="./login"><b> Login </b></a><br></br><br></br>
                        <b> WANT TO REGISTER?</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="./registration"><b> SingUp </b></a>
                        </div>
                    </form>
                </center></div>
              </div>
    );
}
export default Password;