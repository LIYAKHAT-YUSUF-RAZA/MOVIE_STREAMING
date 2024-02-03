import React from "react";
import { Navigate } from "react-router-dom";
function Homepage()
{
    const [onLogin,setLogin]=React.useState(false); 
    const [onRegistration,setRegistration]=React.useState(false);   
     if(onLogin){
      return <Navigate to="/Login"></Navigate>
    } 
    if(onRegistration){
      return <Navigate to="/Registration"></Navigate>
    }
       const myStyle = {
        color: "dodgerblue",
        height:"150 px",
        width:"250px",
        fontFamily: "Sans-Serif"
      };
    return(  
      <div className="lrp">
      <div class="login-wrapper">   
        <form className="form">  
        <center>
             <marquee style={myStyle} behavior="alternate"> <h2> Homepage Page </h2> </marquee><br></br><br></br>
            <>
            <div>
              <button className="btn" onClick={()=>{setLogin(true)}}> <b> Login </b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn" onClick={()=>{setRegistration(true)}}><b> Register </b></button>
            </div>
            </>
            {/* <div>
                <a href='E:\YUSUF-SK-(SLYR)-BATCH-3\project.html'>Project</a>
            </div> */}
        </center> 
         </form>
      </div>
    </div>
    );
}
export default Homepage;   





 