import React from "react";
function AlluSirish(){
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
            <img src={"https://m.media-amazon.com/images/M/MV5BZTFkNzE0MWUtZTFmNS00MjUwLTk1YjAtM2NkZDk2NzdhODZmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"} alt="not found" />&nbsp;
            <div>
               <h1 style={{ color: "white" }}><u> _____SEMIHIT_____ </u></h1>
                <p className="A"><b className="Y">MOVIE-NAME :--{">"}</b>  ABCD </p>
                <p className="A"><b className="Y">HERONIE-NAME</b>  Rukshar Dhillon</p>
                <p className="A"><b className="Y">DIRECTED-BY :--{">"}</b>  Sanjeev Reddy</p>
                <p className="A"><b className="Y">PRODUCED-BY :--{">"}</b>  Madhura Sridhar Reddy, Yash Rangineni</p>
                <p className="A"><b className="Y">SCREENPLAY :--{">"}</b> 	Martin Prakkat , Naveen Bhaskar , Sooraj-Neeraj</p>
                <p className="A"><b className="Y">STORY-BY :--{">"}</b> Sooraj-Neeraj</p>
                <p className="A"><b className="Y">CAST :--{">"}</b> Allu Sirish,Rukshar Dhillon,Master Bharath,Naga Babu,Subhalekha Sudhakar,Vennala Kishore,Kota Srinivasa Rao</p>
                <p className="A"><b className="Y">BUDGET :--{">"}</b>  Rs 4.5 crore</p>
                <p className="A"><b className="Y">COLLECTION :--{">"}</b>  Rs 5.23 crore</p>
                <p className="A"><b className="Y">RELEASE-DATE :--{">"}</b>  17 May 2019</p>
            </div>
       </div>
            <center>
            <a href=""
                    alt="Movie Not Found" className="a1"><button className="but" disabled> <b> WATCH MOVIE </b></button></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://youtu.be/Ar1r4Nf-0sg?si=yG90LSXnHm-oBnOT"
                    alt="Movie Trailer Not Found" className="a1"><button className="but"> <b> WATCH MOVIE TRAILER </b></button></a>
            </center> 
            </div>
    );
}
export default AlluSirish;