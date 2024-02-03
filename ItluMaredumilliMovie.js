import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function ItluMaredumilliMovie(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const toggleCollapse1 = () => {
      setIsCollapsed1(!isCollapsed1);
    };
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const toggleCollapse2 = () => {
      setIsCollapsed2(!isCollapsed2);
    };
     const [searchTerm, setSearchTerm] = useState('');
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [onSearchBar,setSearchBar]=React.useState(false); 
    const handleSearch = (event) => {
      const inputText = event.target.value;
      setSearchTerm(inputText);
     const handleLetterClick = (letter) => {
      setSearchTerm(letter);
      
      handleSearch({ target: { value: letter } });
    };
    
      /* Starting Actor Akhil Movies */
      if (inputText === "Akhil" || inputText==="akhil") {
       setRelatedMovies([<a href='/ActorAkhil'>Hero Akhil All Movies</a>]);
      }
      else if (inputText === "Agent" || inputText==="agent") {
        setRelatedMovies([<a href='/AgentMovie'>Agent Movie</a>]);
        /*  setRelatedMovies(["Puspha2"]);  */
      }
      else if(inputText === "Hello" || inputText==="hello"){
        setRelatedMovies([<a href='/HelloMovie'>Hello Movie</a>]);
      }
      else if(inputText === "most eligible bachelor" || inputText==="Most Eligible Bachelor"){
        setRelatedMovies([<a href='/MostEligibleBachlor'>Most Eligible Bachelor Movie</a>]);
      }
      else if(inputText === "MR.Majnu" || inputText==="Mr.Majnu" || inputText==="mr.majnu" || inputText==="mrmajnu" || inputText==="Mr Majnu"){
        setRelatedMovies([<a href='/MrMajnuMovie'>Mr.Majnu Movie</a>]);
      }
      else if(inputText === "Akhil-The power of jua" || inputText==="akhil the power of jua" || inputText==="akhil movie"){
        setRelatedMovies([<a href='/AkhilMovie'>Akhil the power of jua Movie</a>]);
      }
      /* Closing Actor Akhil Movies */
      /* Starting Actor Allari Naresh Movies */
      else if(inputText === "Allari Naresh" || inputText==="allari naresh" || inputText==="Allari naresh" || inputText==="AllariNaresh" || inputText==="allarinaresh"){
        setRelatedMovies([<a href='/ActorAllariNaresh'>Hero Allari Naresh Movies</a>]);
      }
      else if(inputText === "Ugram" || inputText==="ugram"){
        setRelatedMovies([<a href='/Ugram'>Ugram Movie</a>]);
      }
      else if(inputText === "Itlu Maredumilli Prajaneekam" || inputText==="itlu maredumilli prajaneekam" || inputText==="Itlu maredumilli prajaneekam" || inputText==="Itlu maredumilli" || inputText==="Itlu Maredumilli"){
        setRelatedMovies([<a href='/ItluMaredumilliMovie'>Itlu Maredumilli Prajaneekam Movie</a>]);
      }
      /* Closing Actor Allari Naresh Movies */
       else {
        setRelatedMovies([]);
      }
  };
    const handleLetterClick = (letter) => {
      setSearchTerm(letter);
      
      handleSearch({ target: { value: letter } });
    };
    if(onSearchBar){
      return <Navigate to="/SearchBar"></Navigate>
    }
    return(
        <div className="Dark">
        <div className="r">
      <button className="o1" onClick={toggleNavbar}>
        <b> ☰ Menu </b>
      </button>
      
      <b><a href="./LatestMoviesTelDark" style={{backgroundColor:"rgb(26,27,26)",color:"white"}}>🏚️ Home</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./About" style={{backgroundColor:"rgb(26,27,26)",color:"white"}}>ⓘ About</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./Report" style={{backgroundColor:"rgb(26,27,26)",color:"white"}}>⚠️ Report</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <input
        type="search" onClick={() => { setSearchBar(true); } } 
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
      /><br/><br/><br/><br/>
      <div>
        {relatedMovies.map((movie, index) => (
          <span key={index} onClick={() => setSearchTerm(movie)}>
            {movie}
          </span>
        ))}
      </div>
      <div>
        {[].map((letter, index) => (
          <span key={index} onClick={() => handleLetterClick(letter)}>
            {letter}
          </span>
        ))}
      </div>
{/* <button><a href="/SearchBar">Search</a*/}
      <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleNavbar}>
          &times; Close
        </button>
        <ul><br/>
        <p style={{color:"red"}}>---------------------------------------</p><br/>
      <div>
      <button onClick={toggleCollapse} className="s" style={{cursor:"pointer"}}>
        <b>{isCollapsed ? 'TELUGU MOVIES ↓' : 'TELUGU MOVIES ↑'}</b>
      </button>
      {isCollapsed ? null : (
        <div  style={{cursor:"pointer"}}> 
        <div>
            <button className="s"><a href="./LatestMoviesTelDark"><b>RECENTLY RELEASED </b></a></button>
          </div>
          <div>
            <button className="s"><a href="./TelActorsDark"><b>TELUGU ACTORS MOVIES</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./Heroine"><b>TELUGU ACTRESS MOVIES</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./TelBlockbusterMovies"><b>Telugu Blockbuster Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href="./TelSuperHitMovies"><b>Telugu Hit&Super Hit Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href="./TelFlopMovies"><b>Telugu Flop&Disater Movies </b></a></button>
          </div>
        </div>
      )}
    </div><br/>
    <div>
            <button onClick={toggleCollapse1} className="s" style={{cursor:"pointer"}}>
             <b>{isCollapsed1 ? 'HINDI MOVIES ↓' : 'HINDI MOVIES ↑'}</b>
            </button>
            {isCollapsed1 ? null : (
            <div  style={{cursor:"pointer"}}> 
              <div>
                <button className="s"><a href="#"><b>  HINDI ACTORS MOVIES</b></a></button>
              </div>
              <div>
                <button className="s"><a href="#"><b>  HINDI ACTRESS MOVIES</b></a></button>
              </div>
              <div>
            <button className="s"><a href=""><b>Hindi Blockbuster Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href=""><b>Hindi Hit&Super Hit Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href=""><b>Hindi Flop&Disater Movies </b></a></button>
          </div>
            </div>
           )}
          </div>  <br/>
          <button className="s"><a href="./About"> ABOUT THIS PAGE </a></button><br/>
          <button className="s"><a href="./Services"> WANT SERVIES </a></button><br/>
          <button className="s"><a href="./Help"> WANT HELP </a></button><br/>
        {/* Mode */}
      <button onClick={toggleCollapse2} className="s">
      <b>{isCollapsed2 ? 'MODE ▼' : 'MODE ▲'}</b>
      </button>
      {isCollapsed2 ? null : (
      <div>
      <div>
        <button className="s"><a href="#"><b>Dark Mode</b></a></button>
      </div>
      <div>
      <button className="s"><a /* href="./TelActorsLight" */><b>Light Mode</b></a></button>
      </div>
      </div>
      )}
      </ul>
    </div>
    </div>
    {/*STARTING UGRAM */}
        <div className="container">
            <img src={"https://cdn.tollywood.net/wp-content/uploads/2022/12/Itlu-Maredumilli-Prajaneekam-Closing-collections-jpg.webp"} alt="not found" />&nbsp;
            <div>
               <h1 style={{ color: "white" }}><u>  FLOP_IN_BOX_OFFICE </u></h1>
                <p className="A"><b className="Y">MOVIE-NAME :--{">"}</b>  ITLU MAREDUMILLI PRAJANEEKAM </p>
                <p className="A"><b className="Y">HERONIE-NAME</b>  Kayal Anandhi</p>
                <p className="A"><b className="Y">DIRECTED-BY :--{">"}</b>  	A. R. Mohan</p>
                <p className="A"><b className="Y">PRODUCED-BY :--{">"}</b>  	Razesh Danda </p>
                <p className="A"><b className="Y">SCREENPLAY :--{">"}</b> 	A. R. Mohan</p>
                <p className="A"><b className="Y">STORY-BY :--{">"}</b> 	A. R. Mohan</p>
                <p className="A"><b className="Y">CAST :--{">"}</b> Allari Naresh, Kayal Anandhi, Vennela Kishore, Sampath Raj,	Ravi Prakash,Khayyum,	Keshav Deepak,Raghu Babu,Kumanan Sethuraman and Others</p>
                <p className="A"><b className="Y">BUDGET :--{">"}</b>  Rs 5 Crores</p>
                <p className="A"><b className="Y">COLLECTION :--{">"}</b>  Rs 3.56 Crores</p>
                <p className="A"><b className="Y">RELEASE-DATE :--{">"}</b>  25 November 2022</p>
            </div>
       </div>
       <center>
            <a href="https://archive.org/details/itlu-maredumilli-prajaneekam-2022"
                    alt="Movie Not Found" className="a1"><button className="but"> <b> WATCH MOVIE </b></button></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://youtu.be/M5ME0XOqLAs?si=PiLpqBaIymNeATUP"
                    alt="Movie Trailer Not Found" className="a1"><button className="but"> <b> WATCH MOVIE TRAILER </b></button></a>
            <br/><br/>
            <a href="#" className="a1" /* href={RamaKrishna} download="RamaKrishna" target="_blank" rel="noreferrer" */>
                <button className="but"><b>Download Movie</b></button>
            </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" className="a1" /* href={RamaKrishna} download="RamaKrishna" target="_blank" rel="noreferrer" */>
                <button className="but"><b>Download Movie Trailer</b></button>
            </a> 
            </center> 
        {/* STARTING SONGS */}
        <br/><br/>
        <div className="s000">
        <h2 className="h10">ITLU MAREDUMILLI PRAJANEEKAM MOVIE SONGS</h2><br/>
        <p>All Songs&nbsp;&nbsp;(AUDIO ONLY)<a href="https://www.naasongs.co/a/itlu-maredumilli-prajaneekam-songs-2022-songs.html" alt="not found" className="a0">&nbsp;&nbsp;&nbsp;<u>Click here</u></a></p><br/>
        <p>1)&nbsp; Lachchimi song (AUDIO + VIDEO)<a href="https://youtu.be/XfZ4gFVIYFE?si=O4L7bPnCAh7QittY" alt="not found" className="a0">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        <p>2)&nbsp; Kolo Kolo Koyilaa song (AUDIO + VIDEO)<a href="https://youtu.be/PHw0xv1Ad_c?si=6blb2rLRUQUh3OB0" alt="not found" className="a0">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        {/* CLOSING SONGS */}
        {/*CLOSING UGRAM */}
        </div>
           {/* SEARCH BAR */}
     <div style={{backgroundColor:"black",height:"630px",width:"100%"}}><br/><br/>
      {/* <input type="search" placeholder="Search movies..."  value={searchTerm} onChange={handleSearch} className="sm" /> */}
      <form onsubmit="event.preventDefault();" role="search" className="ss">
        <label for="search" className="ss1">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required onClick={() => { setSearchBar(true); } } 
         value={searchTerm} onChange={handleSearch} className="ss2"/>
        <button type="submit" className="ss3">Go</button>    
      </form>
      <br/><br/><br/>
      {/* <button type="search" className="sm1">🔍</button> */}
      <div className="mc">
        <div class="row">
	        <div class="col1">
            {/* RELATED TO TELUGU */ }
            <h2>RELATED TO TELUGU</h2><br/>
            <a href="./LatestMoviesTelDark">Telugu Latest Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelActorsDark">Telugu All Actors</a><br/><br/>
            <a href="./Heroine">Telugu All Actress</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelBlockbusterMovies">Telugu Blockbuster Movies</a><br/><br/>
            <a href="./TelSuperHitMovies">Telugu Super Hit Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelFlopMovies">Telugu Flop Movies</a><br/><br/>
            {/* RELATED TO HINDI */}
            <h2>RELATED TO HINDI</h2><br/>
            <a href="#">Hindi Latest Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Hindi All Actors</a><br/><br/>
            <a href="#">Hindi All Actress</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Hindi Blockbuster Movies</a><br/><br/>
            <a href="#">Hindi Super Hit Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Hindi Flop Movies</a><br/><br/>
          </div>
	        <div class="col2">
          <h2>FEEDBACK</h2><br/> 
          <b style={{color:"rgb(0, 162, 255)"}}>Name:</b><br/>
          <input type="text" placeholder="Enter your name" className="f1" /><br/>
          <b style={{color:"rgb(0, 162, 255)"}}>Email:</b><br/>
          <input type="email" placeholder="Enter your email" className="f1" /><br/>
          <b style={{color:"rgb(0, 162, 255)"}}>Subject:</b><br/>
          <textarea placeholder="Enter Your Subject" style={{ height: "100px", width: "300px", cursor:"text",paddingLeft:"10px",paddingTop:"10px", marginLeft: "50px" }}/><br/>
          <div class="app" style={{float:"left",paddingLeft:"10px"}}>
           <h1>Was this page helpful?</h1>
            <p style={{color:"rgb(0, 162, 255)"}}>Let us know how we did</p>

           <div class="ctn">
            <div class="item">
             <label for="0">
              <input class="radio" type="radio" name="feedback" id="0" value="0" />
              <span>🤬</span>
            </label>
            </div>

            <div class="item">
              <label for="1">
               <input class="radio" type="radio" name="feedback" id="1" value="1" />
               <span>🙁</span>
              </label>
            </div>

            <div class="item">
              <label for="2">
              <input class="radio" type="radio" name="feedback" id="2" value="2" />
              <span>😶</span>
              </label>
            </div>

             <div class="item">
               <label for="3">
                <input class="radio" type="radio" name="feedback" id="3" value="3" />
                <span>😁</span>
               </label>
              </div>

              <div class="item">
               <label for="4">
                <input class="radio" type="radio" name="feedback" id="4" value="4" />
                <span>😍</span>
                </label>
              </div>
              <button style={{height:"25px",width:"100px",marginLeft:"150px"}} >Submit</button><br/><br/>
          </div>
         </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    )
}
export default ItluMaredumilliMovie;