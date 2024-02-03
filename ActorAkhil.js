import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function ActorAkhil(){
  const [onAgentMovie,setAgentMovie]=React.useState(false); 
const [onMostEligibleBachlor,setMostEligibleBachlor]=React.useState(false); 
const [onMrMajnu,setMrMajnu]=React.useState(false); 
const [onHello,setHello]=React.useState(false); 
const [onAkhil,setAkhil]=React.useState(false);  
const [onSearchBar,setSearchBar]=React.useState(false); 

const [Search, setSearch] = useState();
const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };
console.log(Search);
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


if(onSearchBar){
  return <Navigate to="/SearchBar"></Navigate>
}
if(onAgentMovie){
        return <Navigate to="/AgentMovie" />
}
if(onMostEligibleBachlor){
        return <Navigate to="/MostEligibleBachlor" />
}
if(onMrMajnu){
        return <Navigate to="/MrMajnuMovie" />
}
if(onHello){
        return <Navigate to="/HelloMovie" />
}
if(onAkhil){
        return <Navigate to="/AkhilMovie" />
}
    return(
    <div className="Dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        onChange={handleSearch}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{border:"0px",borderRadius:"50%",backgroundColor:"black",height:"25px",width:"25px"}}/*   onClick={() => { setRulesRanjanMovieLight(true); } } */ title="Active Light Mode">
      🌞 {/* <img src="https://static-00.iconduck.com/assets.00/dark-theme-icon-1024x1024-oxftr06e.png"  style={{borderRadius:"50%",height:"20px",width:"20px"}}/> */}
      </button>
        <br/><br/><br/><br/>
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
            <button className="s"><a href="./LatestMoviesTelDark"><b>LATEST MOVIES TELUGU </b></a></button>
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
            <button className="s"><a href="#"><b>Hindi Blockbuster Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href="#"><b>Hindi Hit&Super Hit Movies </b></a></button>
          </div> 
          <div>
            <button className="s"><a href="#"><b>Hindi Flop&Disater Movies </b></a></button>
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
        <button className="s"><a href="#"><b>Light Mode</b></a></button>
      </div>
      </div>
      )}
      </ul>
    </div>
    </div>
        {/* <input type="text" className="se" placeholder="Search AnyThing Here..."></input>&nbsp;&nbsp; 
        <button className="se1"><b>Search</b></button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>CHOOSE LANGUAGE-{">"}</b><select className="se2">
                <option>English</option>
                <option>Telugu</option>
                <option>Hindi</option>
                <option>MORE...</option>
        </select>
         */}
        <div>
        {/* STARTING AGENT MOVIE */}   
        <button className="b--000"  onClick={() => { setAgentMovie(true); } }>
            <h2 className="h--000"><img src={"https://images.news18.com/ibnlive/uploads/2023/02/sasivadane-3.png"} alt="not found" className="i--000" title="Agent Movie"></img>Agent 
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>28-04-2023</p></h2></button>
        {/* CLOSING AGENT MOVIE*/}
        {/* STARTING MOST ELIGIBLE BACHELOR */}
          <button className="b--000"  onClick={() => { setMostEligibleBachlor(true); } }>
            <b className="h--000"><img src={"https://upload.wikimedia.org/wikipedia/en/3/30/Most_Eligible_Bachelor_Poster.jpeg"} alt="not found" className="i--000" title="Most Eligible Bachlor Movie"></img>Most Eligible Bachlor
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>15-10-2021</p></b></button>
         {/* CLOSING MOST ELIGIBLE BACHELOR */}
         {/* STARTING MR.MAJNU */}
         <button className="b--000"  onClick={() => { setMrMajnu(true); } }>
            <h2 className="h--000"><img src={"https://upload.wikimedia.org/wikipedia/en/c/cd/Mr.Majnu.jpg"} alt="not found" className="i--000" title="Mr.Majnu Movie"></img>Mr.Majnu 
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>25-01-2019</p></h2></button>
         {/* CLOSING MR.MAJNU */}
        {/* STARTING HELLO */}
        <button className="b--000"  onClick={() => { setHello(true); } }>
            <h2 className="h--000"><img src={"https://assets.thehansindia.com/hansindia-bucket/helo_5693.jpg"} alt="not found" className="i--000" title="Hello Movie"></img> Hello
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>22-12-2017</p></h2></button>
        {/* CLOSING HELLO */}
        {/* STARTING AKHIL */}
        <button className="b--000"  onClick={() => { setAkhil(true); } }>
            <h2 className="h--000"><img src={"https://m.media-amazon.com/images/M/MV5BZTNkYzAyODEtZjQ5Yy00NjhiLTgyY2MtYzIzNzJhZjYwY2EwL2ltYWdlXkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_.jpg"} alt="not found" className="i--000" title="Akhil Movie"></img> Akhil
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>11-11-2015</p></h2></button>
        {/* CLOSING AKHIL */}
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
            <a href="./TelblockbusterMovies">Telugu Blockbuster Movies</a><br/><br/>
            <a href="./TelSuperHitMovies">Telugu Super Hit Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="./telFlopMovies">Telugu Flop Movies</a><br/><br/>
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
    );
}
export default ActorAkhil;