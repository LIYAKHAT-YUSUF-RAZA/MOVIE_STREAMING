import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function RulesRanjanMovie(){
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
     else {
      setRelatedMovies([]);
    }
};
  const handleLetterClick = (letter) => {
    setSearchTerm(letter);
    
    handleSearch({ target: { value: letter } });
  };
  const [onRulesRanjanMovieDark, setRulesRanjanMovieDark] = useState();
  const [onRulesRanjanMovieDVD, setRulesRanjanMovieDVD] = useState('');
    /* Movie online watch */
    if(onRulesRanjanMovieDVD){
      return <Navigate to="/RulesRanjanMovieWatch"></Navigate>
    }
if(onRulesRanjanMovieDark){
  return <Navigate to="/RulesRanjanMovieDark"></Navigate>
}
if(onSearchBar){
  return <Navigate to="/SearchBar"></Navigate>
}
    return(
    <div className="Light">
        <div className="r">
      <button className="o1" onClick={toggleNavbar}>
        <b> ☰ Menu </b>
      </button>
      
      <b><a href="./LatestMoviesTel" style={{backgroundColor:"gainsboro",color:"black"}}>🏚️ Home</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./About" style={{backgroundColor:"gainsboro",color:"black"}}>ⓘ About</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./Report" style={{backgroundColor:"gainsboro",color:"black"}}>⚠️ Report</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <input
        type="search" onClick={() => { setSearchBar(true); } } 
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{border:"0px",borderRadius:"50%",height:"25px",width:"25px"}}  onClick={() => { setRulesRanjanMovieDark(true); } } title="Active Dark Mode">
      🌙 {/* <img src="https://static-00.iconduck.com/assets.00/dark-theme-icon-1024x1024-oxftr06e.png"  style={{borderRadius:"50%",height:"20px",width:"20px"}}/> */}
      </button>
      <br/><br/>
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
            <button className="s"><a href="./LatestMoviesTelLight"><b>LATEST MOVIES TELUGU </b></a></button>
          </div>
          <div>
            <button className="s"><a href="./Home1"><b>TELUGU ACTORS MOVIES</b></a></button>
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
        <button className="s"><a href="./RulesRanjanMovieDark"><b>Dark Mode</b></a></button>
      </div>
      <div>
      <button className="s"><a href="./RulesRanjanMovieLight"><b>Light Mode</b></a></button>
      </div>
      </div>
      )}
      </ul>
    </div>
    </div>

  
        <div className="container-L">
            <img src={"https://static.toiimg.com/thumb/msid-103612838,width-1280,resizemode-4/103612838.jpg"} alt="not found" />&nbsp;
            <div>
               <h1 style={{ color: "black" }}><u> _______?_______ </u></h1><br/><br/>
                <p className="A-L"><b className="Y-L">MOVIE-NAME :--{">"}</b>  RULES RANJAN  </p>
                <p className="A-L"><b className="Y-L">KIRAN ABBAVARAM CHARACTOR :-</b>  HERO  </p>
                <p className="A-L"><b className="Y-L">HERONIE-NAME</b>   Neha Shetty</p>
                <p className="A-L"><b className="Y-L">DIRECTED-BY :--{">"}</b>  		Rathinam Krishna</p>
                <p className="A-L"><b className="Y-L">PRODUCED-BY :--{">"}</b>  	Divyang Lavania , Murali Krishnaa Vemuri </p>
                <p className="A-L"><b className="Y-L">CINEMATOGRAPHY :--{">"}</b> 		Dulip Kumar M. S.</p>
                <p className="A-L"><b className="Y-L"> WRITTEN BY  :--{">"}</b> 	Rathinam Krishna</p>
                <p className="A-L"><b className="Y-L">CAST :--{">"}</b> Kiran Abbavaram,Neha Shetty,Vennela Kishore,Subbaraju,Hyper Aadhi,Harsha Chemudu
                ,Ajay,Nagineedu,Makarand Deshpande,Abhimanyu Singh and others</p>
                <p className="A-L"><b className="Y-L">BUDGET :--{">"}</b>  	8.00 Crore Rs</p>
               {/*  <p className="A"><b className="Y">COLLECTION :--{">"}</b> (India)	15.75 Crore Grosses (AP/TS) [Till 25th December, 2017]</p> */}
                <p className="A-L"><b className="Y-L">RELEASE-DATE :--{">"}</b> 	06 October, 2023</p>
            </div>
       </div>
            <center>
            {/* <a href="https://youtu.be/wlHdC55wH2E?si=n8Zqs8nawhyqsd7q"
                    alt="Movie Not Found" className="a1"><button className="but" disabled> <b> WATCH MOVIE </b></button></a> */}
                <a className="a1">
            <button onClick={() => { setRulesRanjanMovieDVD(true); } } className="but" >Watch Movie Online</button></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://youtu.be/geMeu8oi_OQ?si=kVx6M9XduELsMJ_l"
                    alt="Movie Trailer Not Found" className="a1"><button className="but"> <b> WATCH MOVIE TRAILER </b></button></a>
            <br/><br/>
            <a href="#" className="a1"/* href={RamaKrishna} download="RamaKrishna" target="_blank" rel="noreferrer" */>
                <button className="but" disabled><b>Download Movie</b></button>
            </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" className="a1"/* href={RamaKrishna} download="RamaKrishna" target="_blank" rel="noreferrer" */>
                <button className="but"><b>Download Movie Trailer</b></button>
            </a> 
            </center> 
            {/* STARTING SONGS */}
        <br/><br/>
        <div className="s000">
        <h2 className="h10-L">RULES RANJAN MOVIE SONGS</h2><br/>
        <p>All Songs&nbsp;&nbsp;(AUDIO ONLY)<a href="https://www.naasongs.co/a/rules-ranjann-2023-erc1s-songs.html" alt="not found" className="a0-L">&nbsp;&nbsp;&nbsp;<u>Click here</u></a></p><br/>
        <p>1)&nbsp; Naalo Nenu Lenu song (AUDIO + VIDEO)<a href="https://youtu.be/iU2rMRZcn1U?si=H6jhNg56WCk1aXw1" alt="not found" className="a0-L">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        <p>2)&nbsp; Sammohanuda song (AUDIO +LYRICAL VIDEO)<a href="https://youtu.be/aJQcn34K_S8?si=TAcKZpHX6c6GzpIw" alt="not found" className="a0-L">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        <p>3)&nbsp; Enduku Ra Babu song (AUDIO + LYRICAL VIDEO)<a href="https://youtu.be/mek3NUdudG8?si=GSLro7V3p9VeIq6x" alt="not found" className="a0-L">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        <p>4)&nbsp;  Dhekho Mumbai song (AUDIO + LYRICAL VIDEO)<a href="https://youtu.be/-R3LZx2fidU?si=1sAYgvsevPVjHH6n" alt="not found" className="a0-L">&nbsp;&nbsp;&nbsp;<u>Click here</u></a>
        <a  href="#" /* href={RamaKrishna}  download="RamaKrishna" target="_blank" rel="noreferrer"*/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button className="dd">Download Song</button></a></p><br/>
        </div>
        {/* CLOSING SONGS */}
          {/* SEARCH BAR */}
      <div style={{backgroundColor:"white",height:"630px",width:"100%"}}><br/><br/>
      {/* <input type="search" placeholder="Search movies..."  value={searchTerm} onChange={handleSearch} className="sm2" />*/}
      <form onsubmit="event.preventDefault();" role="search" className="ss">
        <label for="search" className="ss1">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required style={{border:"1px solid black"}}
          onClick={() => { setSearchBar(true); } } value={searchTerm} onChange={handleSearch} className="ss2"/>
        <button type="submit" className="ss3">Go</button>    
      </form>
      <br/><br/><br/> 
      {/* <button type="search" className="sm1">🔍</button> */}
      <div className="mc">
        <div class="row">
	        <div class="col1">
            {/* RELATED TO TELUGU */ }
            <h2>RELATED TO TELUGU</h2><br/>
            <a href="./LatestMoviesTelLight" style={{color:"red"}}>Telugu Latest Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelActorsLight" style={{color:"red"}}>Telugu All Actors</a><br/><br/>
            <a href="./Heroine" style={{color:"red"}}>Telugu All Actress</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelBlockbusterMovies" style={{color:"red"}}>Telugu Blockbuster Movies</a><br/><br/>
            <a href="./TelSuperHitMovies" style={{color:"red"}}>Telugu Super Hit Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./TelFlopMovies" style={{color:"red"}}>Telugu Flop Movies</a><br/><br/>
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
          <b>Name:</b><br/>
          <input type="text" placeholder="Enter your name" className="f1" /><br/>
          <b>Email:</b><br/>
          <input type="email" placeholder="Enter your email" className="f1" /><br/>
          <b>Subject:</b><br/>
          <textarea placeholder="Enter Your Subject" style={{ height: "100px", width: "300px", cursor:"text",paddingLeft:"10px",paddingTop:"10px", marginLeft: "50px" }}/><br/>
          <div class="app" style={{float:"left",paddingLeft:"10px"}}>
           <h1>Was this page helpful?</h1>
            <p>Let us know how we did</p>

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
    );
}
export default RulesRanjanMovie;