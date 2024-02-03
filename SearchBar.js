import React, { useState } from 'react';
/* import './index.css';  */

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [relatedMovies, setRelatedMovies] = useState([]);

  const handleSearch = (event) => {
    const inputText = event.target.value;
    setSearchTerm(inputText);

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
   setRelatedMovies([<a href='/UgramMovie'>Ugram Movie</a>]);
 }
 else if(inputText === "Itlu Maredumilli Prajaneekam" || inputText==="itlu maredumilli prajaneekam" || inputText==="Itlu maredumilli prajaneekam" || inputText==="Itlu maredumilli" || inputText==="Itlu Maredumilli"){
   setRelatedMovies([<a href='/ItluMaredumilliMovie'>Itlu Maredumilli Prajaneekam Movie</a>]);
 }
 /* Closing Actor Allari Naresh Movies */
  /* Starting Actor kiran abbavaram Movies */
  else if(inputText === "rules ranjan" || inputText==="Rules Ranjan" || inputText==="Rules ranjan"){
    setRelatedMovies([<a href='/RulesRanjanMovieDark'>Rules Ranjan Movie</a>]);
  }
  /* Closing actor Kiran abbavaram Movies */
  /* Starting Actor Jayam ravi Movies */
  else if(inputText === "GOD" || inputText==="God" || inputText==="god"){
    setRelatedMovies([<a href='/GodMovieDark'>God Movie</a>]);
  }
  /* Closing actor Jayam ravi Movies */
  /* Starting Actor sudheer babu Movies */
  else if(inputText === "Maama Mascheendra" || inputText==="MaamaMascheendra" || inputText==="maama mascheendra"){
    setRelatedMovies([<a href='/MaamaMascheendraMovieDark'>Maama Mascheendra Movie</a>]);
  }
  /* Closing actor sudheer babu Movies */
  /* Starting telugu verdic Movies */
  else if(inputText === "Telugu Blockbuster Movies" || inputText==="telugu blockbuster movies" || inputText==="telugu Blockbuster Hit movies" || inputText==="telugu blockbuster hit movies"){
    setRelatedMovies([<a href='/TelBlockbusterMovies'>Telugu All Blockbuster and Blockbuster Hit Movies Movie</a>]);
  }
  else if(inputText === "Telugu Super Hit Movies" || inputText==="telugu super hit movies" || inputText==="telugu Hit movies" || inputText==="telugu hit movies"){
    setRelatedMovies([<a href='/TelSuperHitMovies'>Telugu All Hit and Super Hit Movies Movie</a>]);
  }
  else if(inputText === "Telugu Flop Movies" || inputText==="telugu flop movies" || inputText==="telugu Disater movies" || inputText==="telugu disater movies"){
    setRelatedMovies([<a href='/TelFlopMovies'>Telugu All Flop and Disater Movies Movie</a>]);
  }
  /* Closing telugu verdic Movies */
  else {
   setRelatedMovies([]);
 }
};

  const handleLetterClick = (letter) => {
    setSearchTerm(letter);
    
    handleSearch({ target: { value: letter } });
  };
  const handleGoBack = () => {
    window.history.back(); // This will go back to the previous page in the browser's history.
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      <div className='sb2'>
        <button onClick={handleGoBack} style={{height:"25px",width:"100px"}}>Go Back</button><br/><br/>
        <h2>Search any movie(Telugu/Hindi) , hero name(Telugu/Hindi) , heroine name(Telugu/Hindi)</h2>
      </div>
      <div className='sb1'>
      <form onsubmit="event.preventDefault();" role="search" className="ss">
        <label for="search" className="ss1">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required style={{border:"2px solid"}}
         value={searchTerm} onChange={handleSearch} className="ss2"/>
        <button type="submit" className="ss3">Go</button>    
      </form>
      </div>
      
      <div style={{marginLeft:'400px',marginTop:"20px"}}>
        {relatedMovies.map((movie, index) => (
          <span key={index} onClick={() => setSearchTerm(movie)}>
            <b>Click here to get ▸▸ &nbsp;&nbsp;&nbsp;{movie}</b>
          </span>
        ))}
      </div> 
      <div>
        {[''].map((letter, index) => (
          <span key={index} onClick={() => handleLetterClick(letter)}>
            {letter}
          </span>
        ))}
      </div>
      <br/><br/>
      <b className='sb3'>Anything Missing ? <a href='./Report'>Report</a></b>
    </div>
  );
};

export default SearchBar;