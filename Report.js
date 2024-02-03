import React from "react";
function Report(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your Problem Submited Successfully . `);
      } 
    return(
        <><div className="report">
            {/*   <h1>Report Page</h1> */}
            <p style={{ fontSize: "40px", paddingLeft: "30px", paddingTop: "10px" }}>Report Your Problem</p><br /><br />
            {/* <b style={{paddingLeft:"30px"}}>Video (or) Songs not coming (or) not downloading</b> */}
            <div className="b">
            <b> Describe the problem *: </b><br />
            <li>Please provide as much detail as possible so we can better identify the problem.</li>
            <li>When (time/date) did the problem occur ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>What is the exact error message that you received?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            </div>
            <textarea  required autoFocus placeholder="Enter Your Problem" style={{ height: "100px", width: "250px", cursor:"text",paddingLeft:"10px",paddingTop:"10px", marginLeft: "50px" }}/><br/><br/>
            <input  type="text" required  autoFocus placeholder="Enter Your Name" style={{ height: "30px", width: "250px", marginLeft: "50px",paddingLeft:"10px" }}  /><br /><br />
            <input  type="email" required  placeholder="Enter Your Email" style={{ height: "30px", width: "250px", marginLeft: "50px",paddingLeft:"10px" }}  /><br /><br />
            <button type="submit" onClick={handleSubmit} className="sb" >Submit Your Problem</button>
        </div></>
    )
}
export default Report;