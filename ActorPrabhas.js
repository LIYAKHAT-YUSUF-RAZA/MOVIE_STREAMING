import React from "react";
function Prabhas(){
    return(
    <div className="Dark">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" className="se" placeholder="Search AnyThing Here..."></input>&nbsp;&nbsp;
        <button className="se1"><b>Search</b></button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>CHOOSE LANGUAGE-{">"}</b><select className="se2">
                <option>English</option>
                <option>Telugu</option>
                <option>Hindi</option>
                <option>MORE...</option>
        </select>
        <div className="container">
            <img src={"https://cdn.123telugu.com/content/wp-content/uploads/2023/08/Salaar.jpg"} alt="not found" />&nbsp;
            <div>
               <h1 style={{ color: "white" }}><u> NOT_RELEASED </u></h1>
                <p className="A"><b className="Y">MOVIE-NAME :--{">"}</b>  SALAAR</p>
                <p className="A"><b className="Y">HERONIE-NAME</b>  Shruti Haasan</p>
                <p className="A"><b className="Y">DIRECTED-BY :--{">"}</b>  Prashanth Neel</p>
                <p className="A"><b className="Y">PRODUCED-BY :--{">"}</b>  Vijay Kiragandur</p>
                <p className="A"><b className="Y">SCREENPLAY :--{">"}</b> Prashanth Neel</p>
                <p className="A"><b className="Y">STORY-BY :--{">"}</b> Prashanth Neel</p>
                <p className="A"><b className="Y">CAST :--{">"}</b> Prabhas, Shruti Haasan, Jagapathi Babu, Easwari Rao, Madhu Guruswamy</p>
                <p className="A"><b className="Y">BUDGET :--{">"}</b>  Rs 400 crore</p>
                <p className="A"><b className="Y">RELEASE-DATE :--{">"}</b>  28 September 2023</p>
            </div>
        </div>
        <br></br><br></br>
            <center>
                <a href="#" alt="Movie Not Found" className="a1"><button disabled className="but"> <b> WATCH MOVIE </b></button></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" alt="Movie Trailer Not Found" className="a1"><button disabled className="but"> <b> WATCH MOVIE TRAILER </b></button></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://youtu.be/bUR_FKt7Iso?si=By3Lxq7PKlKUx6o3" alt="Movie Teaser Not Found" className="a1"><button className="but"> <b> WATCH MOVIE TEASER </b></button></a>
            </center>
            </div>
    );
}
export default Prabhas;