import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function LatestMoviesTelDark(){

const [onSearchBar,setSearchBar]=React.useState(false); 
const [onGodMovie,setGodMovie]=React.useState(false); 
const [onRulesRanjan,setRulesRanjan]=React.useState(false); 
const [onMaamaMascheendraMovie,setMaamaMascheendraMovie]=React.useState(false); 
const [onLatestMoviesTelLight, setLatestMoviesTelLight] = useState();
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
if(onRulesRanjan){
  return <Navigate to="/RulesRanjanMovieDark"></Navigate>
}
if(onGodMovie){
  return <Navigate to="/GodMovieDark"></Navigate>
}
if(onMaamaMascheendraMovie){
  return <Navigate to="/MaamaMascheendraMovieDark"></Navigate>
}
if(onLatestMoviesTelLight){
  return <Navigate to="/LatestMoviesTelLight"></Navigate>
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
        {/*<input type="search" placeholder="Search..." style={{height:"30px",width:"200px"}} />
      <button style={{height:"30px",width:"50px",backgroundColor:"lightgreen"}}><b>search</b></button><br/><br/>
     <input type="text"  value={Search}
            onChange={handleSearchChange} className="se" placeholder="Search AnyThing Here..."></input>&nbsp;
      <button className="se1"><b>Search</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/><br/>
      <h4 className="sss">Your Search :- {Search}</h4> */}
      {/* Off-canvas menu */}



      {/* <button>search</button> */}
       <input onClick={() => { setSearchBar(true); } }
        type="search"
        placeholder="Search movies..."
        value={searchTerm}
        style={{height:"25px",width:"200px"}}
        onChange={handleSearch}
      /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{border:"0px",borderRadius:"50%",backgroundColor:"black",height:"25px",width:"25px"}}  onClick={() => { setLatestMoviesTelLight(true); } } title="Active Light Mode">
      🌞 {/* <img src="https://static-00.iconduck.com/assets.00/dark-theme-icon-1024x1024-oxftr06e.png"  style={{borderRadius:"50%",height:"20px",width:"20px"}}/> */}
      </button>
     {/*  <button style={{height:"30px",width:"50px",backgroundColor:"lightgreen"}}><b>search</b></button> */}<br/><br/>
      <div style={{float:"right",textAlign:"right",paddingRight:"130px",paddingTop:"10px"}}>
        {relatedMovies.map((movie, index) => (
          <span key={index} onClick={() => setSearchTerm(movie)}>
            {movie}
          </span>
        ))}
      </div>
      <div style={{float:"right",textAlign:"right",paddingRight:"130px",paddingTop:"10px"}}>
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
            <button className="s"><a href="./LatestMoviesTelDark" className="a2"><b>LATEST MOVIES TELUGU </b></a></button>
          </div>
          <div>
            <button className="s"><a href="./TelActorsDark" className="a2"><b>TELUGU ACTORS MOVIES</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./Heroine" className="a2"><b>TELUGU ACTRESS MOVIES</b></a></button>
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
                <button className="s"><a href="#" className="a2"><b>  HINDI ACTORS MOVIES</b></a></button>
              </div>
              <div>
                <button className="s"><a href="#" className="a2"><b>  HINDI ACTRESS MOVIES</b></a></button>
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
        <button className="s"><a href="./LatestMoviesTelDark"><b>Dark Mode</b></a></button>
      </div>
      <div>
        <button className="s"><a href="./LatestMoviesTelLight"><b>Light Mode</b></a></button>
      </div>
      </div>
      )}
      </ul>
    </div>
    </div>
    {/*<div className="avb">
      <b>Actors , Actress and movies ( Telugu / Hindi ) that are available in this website</b>
      <a href="./Available" className="avb1">See all</a>
      </div><br/>*/}
    <div>
        {/* <h1 className="m">Movies_Web</h1> */}
        <h1 style={{textAlign:"center"}}> LATEST TOLLYWOOD MOVIES</h1>
    </div>
        <div>
            <button className="b--000"  onClick={() => { setRulesRanjan(true); } }>
            <h2 className="h--000"><img src={"https://m.media-amazon.com/images/M/MV5BNGYzMTk0YzAtOTcyNy00M2U4LTk5ZmEtZTU4ODkyNWNmNjVmXkEyXkFqcGdeQXVyMTYwNjM4Mzcy._V1_.jpg"} alt="not found" className="i--000" title="Rules Ranjan"></img>Rules Ranjan
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000"  onClick={() => { setGodMovie(true); } }>
            <h2 className="h--000"><img src={"https://timesofindia.indiatimes.com/photo/103920940.cms"} alt="not found" className="i--000" title="God"></img>God
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000" onClick={() => { setMaamaMascheendraMovie(true); } }>
            <b className="h--000" style={{fontSize:"17px",paddingTop:"5px"}}><img src={"https://m.media-amazon.com/images/M/MV5BZTgyODhlMGYtYzg1My00NTA2LTgxYmEtZDFjNmEzNTM5N2MxXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg"} alt="not found" className="i--000" title="Mama Mascheendra"></img>Mama Mascheendra
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></b></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://static.toiimg.com/thumb/103442018.cms?width=170&height=240&imgsize=50983"} alt="not found" className="i--000" title="Mad"></img>Mad
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://timesofindia.indiatimes.com/photo/104191525.cms"} alt="not found" className="i--000" title="GTA (Guns Trance Action)"></img> GTA
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/month-of-madhu-et00371104-1695904210.jpg"} alt="not found" className="i--000" title="Month Of Madhu"></img>Month of Madhu
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://assets.eenadu.net/article_img/0510Chinna1.jpg"} alt="not found" className="i--000" title="Chinna"></img>Chinna
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>06-10-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://timesofindia.indiatimes.com/photo/100759702.cms"} alt="not found" className="i--000" title="Pedda Kaapu"></img>Pedda Kaapu-1
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>29-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://m.media-amazon.com/images/M/MV5BOTZkMGU2NjktNWZlMi00YzliLWI1NmQtZjc4MTdkNzQyODAzXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"} alt="not found" className="i--000" title="Skanda"></img>Skanda
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>28-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://upload.wikimedia.org/wikipedia/en/d/de/Chandramukhi_2_poster.jpg"} alt="not found" className="i--000" title="Chandramukhi 2"></img>Chandramukhi 2
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>28-09-2023</p></h2></button>
            <button className="b--000">
            <b className="h--000" style={{fontSize:"15px",paddingTop:"5px"}}><img src={"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sapta-sagaralu-dhaati--side-a-et00370097-1695193371.jpg"} alt="not found" className="i--000" title="Sapta Sagaralu Dhaati - Side A Sapta Sagaralu Dhaati"></img>Sapta Sagaralu Dhaati 
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>22-09-2023</p></b></button>
            <button className="b--000">
            <h2 className="h--000" style={{fontSize:"17px",paddingTop:"5px"}}><img src={"https://m.media-amazon.com/images/M/MV5BYTM4Y2YzNTAtNDg2Yy00YWZhLWI3MDYtMWM3YTdmMmI1OGNkXkEyXkFqcGdeQXVyNjUxNzk5NzU@._V1_FMjpg_UX1000_.jpg"} alt="not found" className="i--000" title="Ashtadigbandhanam"></img>Ashtadigbandhanam
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>22-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/cheater-2023-et00369289-1694413100.jpg"} alt="not found" className="i--000" title="Cheater"></img>Cheater
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>22-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://assets.gadgets360cdn.com/pricee/assets/product/202309/Rudramkota_1695104790.jpg"} alt="not found" className="i--000" title="Rudramkota"></img>Rudramkota
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>22-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg"} alt="not found" className="i--000" title="Jawan"></img>Jawan
            <br/><p style={{fontSize:"15px",paddingTop:"5px"}}>07-09-2023</p></h2></button>
            <button className="b--000">
            <b className="h--000"  style={{fontSize:"14px",paddingTop:"5px"}}><img src={"https://m.media-amazon.com/images/M/MV5BNWE5NGZkOWYtODlkZS00Mzk5LWIzZjgtMjk4NzAxNzFmODA3XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg"} alt="not found" className="i--000" title="Miss Shetty Mr Polishetty"></img>
            Miss Shetty Mr Polishetty<br/><h2><p style={{fontSize:"15px"}}>07-09-2023</p></h2></b></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://cdn.123telugu.com/content/wp-content/uploads/2023/09/Kushi-m.jpg"} alt="not found" className="i--000" title="Kushi"></img>
            Kushi<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>01-09-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://upload.wikimedia.org/wikipedia/en/b/be/RDX-_Robert_Dony_Xavier_poster.jpg"} alt="not found" className="i--000" title="RDX: Robert Dony Xavier"></img>
            RDX<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>25-08-2023</p></h2></button>
            <button className="b--000">
            <b className="h--000" style={{fontSize:"15px"}}><img src={"https://m.media-amazon.com/images/M/MV5BMmVkNTdjZmMtMWNmMC00ZjY1LThmYTQtODRiMGU2ZTFkYjgzXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg"} alt="not found" className="i--000" title="Gandeevadhari arjuna"></img>
            Gandeevadhari arjuna<br/><h2><p style={{fontSize:"15px",paddingTop:"5px"}}>25-08-2023</p></h2></b></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://www.cinejosh.com/reviewsimg/big/bedurulanka-2012-review_b_2508231227.jpg"} alt="not found" className="i--000" title="Bedurulanka 2012"></img>
            Bedurulanka<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>25-08-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://cdn.123telugu.com/content/wp-content/uploads/2023/08/KingOfKotha-m-1.jpg"} alt="not found" className="i--000" title="King of kotha"></img>
            King of kotha<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>24-08-2023</p></h2> </button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://m.media-amazon.com/images/M/MV5BOTU4NmI5MTktYzBlYS00ZmRiLWFmYjYtMjA5ZWYwZWM2ZTQ0XkEyXkFqcGdeQXVyMTU4MzQ3ODk1._V1_.jpg"} alt="not found" className="i--000" title="Bhola Shankar"></img>
            Bhola Shanker<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>11-08-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://timesofindia.indiatimes.com/photo/92282228.cms"} alt="not found" className="i--000" title="Jailer"></img>
            Jailer<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>10-08-2023</p></h2></button>
            <button className="b--000">
            <h2 className="h--000"><img src={"https://assets.eenadu.net/article_img/2007Hidimba001.jpg"} alt="not found" className="i--000" title="Hidimba"></img>
            Hidimba<br/><p style={{fontSize:"15px",paddingTop:"5px"}}>20-07-2023</p></h2></button>
        </div>
        {/* <div >
          <h2>Telugu Blockbuster Movies</h2>
        </div> */}
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
    );
}
export default LatestMoviesTelDark;