import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function Main(){
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
            type="search"
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
                <button className="s"><a href="./LatestMoviesTel"><b>RECENTLY RELEASED </b></a></button>
              </div>
              <div>
                <button className="s"><a href="./TelActorsDark"><b>TELUGU ACTORS MOVIES</b></a></button>
              </div>
              <div>
                <button className="s"><a href="./Heroine"><b>TELUGU ACTRESS MOVIES</b></a></button>
              </div>
              {/* <div>
                <button className="s"><a href="./Agent"><b>TELUGU SONGS </b></a></button>
              </div> */}
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
                  {/* <div>
                    <button className="s"><a href="#"><b>  HINDI SONGS </b></a></button>
                  </div> */}
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
    </div>
    )
}
export default Main;