import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function TelActorsLight(){
  const [Search, setSearch] = useState();
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const [onSearchBar,setSearchBar]=React.useState(false); 
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
{/* STARTING LETTER A */}
const [onAkhil,setAkhil]=React.useState(false); 
const [onAllariNaresh,setAllariNaresh]=React.useState(false);
const [onAlluArjun,setAlluArjun]=React.useState(false);
const [onAlluSirish,setAlluSirish]=React.useState(false);
const [onAnandDeverakonda,setAnandDeverakonda]=React.useState(false);
const [onArya,setArya]=React.useState(false);
const [onAshish,setAshish]=React.useState(false);
{/* CLOSING LETTER A */}
{/* STARTING LETTER B */}
const [onBalakrishna,setBalakrishna]=React.useState(false); 
const [onBellamkondaSrinivas,setBellamkondaSrinivas]=React.useState(false);
{/* CLOSING LETTER B */}
{/* STARTING LETTER C */}
const [onChiranjeevi,setChiranjeevi]=React.useState(false); 
{/* CLOSING LETTER C */}
{/* STARTING LETTER D */}
const [onDhanush,setDhanush]=React.useState(false);
const [onDulquerSalmaan,setDulquerSalmaan]=React.useState(false);
{/* CLOSING LETTER D */}
{/* STARTING LETTER G */}
const [onGopichand,setGopichand]=React.useState(false); 
{/* CLOSING LETTER G */}
{/* STARTING LETTER J */}
const [onJagapathiBabu,setJagapathiBabu]=React.useState(false); 
const [onJayamRavi,setJayamRavi]=React.useState(false); 
{/* CLOSING LETTER J */}
{/* STARTING LETTER K */}
const [onKalyanRam,setKalyanRam]=React.useState(false);
const [onKarthi,setKarthi]=React.useState(false);
const [onKamalHaasan,setKamalHaasan]=React.useState(false); 
const [onKarthikeya,setKarthikeya]=React.useState(false); 
const [onKiranAbbavaram,setKiranAbbavaram]=React.useState(false); 
{/* CLOSING LETTER K */}
{/* STARTING LETTER M */}
const [onMaheshBabu,setMaheshBabu]=React.useState(false); 
const [onManoj,setManoj]=React.useState(false); 
{/* CLOSING LETTER M */}
{/* STARTING LETTER N */}
const [onNTR,setNTR]=React.useState(false); 
const [onNagaChaitanya,setNagaChaitanya]=React.useState(false); 
const [onNagaShourya,setNagaShourya]=React.useState(false); 
const [onNagarjuna,setNagarjuna]=React.useState(false); 
const [onNani,setNani]=React.useState(false); 
const [onNaveenPolishetty,setNaveenPolishetty]=React.useState(false);
const [onNikhil,setNikhil]=React.useState(false);
const [onNitin,setNitin]=React.useState(false);   
{/* CLOSING LETTER N */}
{/* STARTING LETTER P */}
const [onPawanKalyan,setPawanKalyan]=React.useState(false);
  const [onPrabhas,setPrabhas]=React.useState(false); 
{/* CLOSING LETTER P */}
{/* STARTING LETTER R */}
const [onRajTarun,setRajTarun]=React.useState(false);
const [onRaghavaLawrence,setRaghavaLawrence]=React.useState(false);
const [onRajinikanth,setRajinikanth]=React.useState(false); 
const [onRamPothineni,setRamPothineni]=React.useState(false); 
const [onRamCharan,setRamCharan]=React.useState(false);
const [onRana,setRana]=React.useState(false);
const [onRaviTeja,setRaviTeja]=React.useState(false);
const [onRoshan,setRoshan]=React.useState(false);
{/* CLOSING LETTER R */}
{/* STARTING LETTER S */}
  const [onSaiDharamTej,setSaiDharamTej]=React.useState(false); 
  const [onSampoorneshBabu,setSampoorneshBabu]=React.useState(false); 
  const [onSundeepKishan,setSundeepKishan]=React.useState(false); 
  const [onSatyadevKancharana,setSatyadevKancharana]=React.useState(false); 
  const [onSharwanand,setSharwanand]=React.useState(false);
  const [onSidhu,setSidhu]=React.useState(false);
  const [onSivaKarthikeyan,setSivaKarthikeyan]=React.useState(false);
  const [onSrikanth,setSrikanth]=React.useState(false);
  const [onSudheerBabu,setSudheerBabu]=React.useState(false);
  const [onSunil,setSunil]=React.useState(false);
  const [onSuriya,setSuriya]=React.useState(false);
{/* CLOSING LETTER S */}
{/* STARTING LETTER T */}
const [onTejaSajja,setTejaSajja]=React.useState(false);
{/* STARTING LETTER T */}
{/* STARTING LETTER U */}
const [onUdayKiran,setUdayKiran]=React.useState(false); 
{/* CLOSING LETTER U */}
{/* STARTING LETTER V */}
const [onVaishnavTej,setVaishnavTej]=React.useState(false); 
const [onVarunTej,setVarunTej]=React.useState(false); 
const [onVenkatesh,setVenkatesh]=React.useState(false);
const [onVijayDevarakonda,setVijayDevarakonda]=React.useState(false);
const [onVijayAntony,setVijayAntony]=React.useState(false);
const [onVishnu,setVishnu]=React.useState(false);
const [onVikram,setVikram]=React.useState(false);
const [onVishwaksenNaidu,setVishwaksenNaidu]=React.useState(false);
{/* CLOSING LETTER V */}
{/* STARTING LETTER Y */}
const [onYash,setYash]=React.useState(false);
{/* CLOSING LETTER Y */}
const [onAbout,setAbout]=React.useState(false); 
const [onServices,setServices]=React.useState(false); 
const [onHelp,setHelp]=React.useState(false); 


const [onTelActorsDark,setTelActorsDark]=React.useState();
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
if(onTelActorsDark){
  return <Navigate to="/TelActorsDark"></Navigate>
}
{/* STARTING LETTER A */}
if(onAkhil){
  return <Navigate to="/Akhil"></Navigate>
}
if(onAllariNaresh){
  return <Navigate to="/AllariNaresh"></Navigate>
}
if(onAlluArjun){
  return <Navigate to="/AlluArjun"></Navigate>
}
if(onAlluSirish){
  return <Navigate to="/AlluSirish"></Navigate>
}
if(onAnandDeverakonda){
  return <Navigate to="/AnandDeverakonda"></Navigate>
}
if(onArya){
  return <Navigate to="#"></Navigate>
}
if(onAshish){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER A */}
{/* STARTING LETTER B */}
if(onBalakrishna){
  return <Navigate to="#"></Navigate>
}
if(onBellamkondaSrinivas){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER B */}
{/* STARTING LETTER C */}
if(onChiranjeevi){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER C */}
{/* STARTING LETTER D */}
if(onDhanush){
  return <Navigate to="#"></Navigate>
 }  
 if(onDulquerSalmaan){
  return <Navigate to="#"></Navigate>
 }  
 {/* CLOSING LETTER D */}
{/* STARTING LETTER G */}
if(onGopichand){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER G */}
{/* STARTING LETTER J */}
if(onJagapathiBabu){
  return <Navigate to="#"></Navigate>
}
if(onJayamRavi){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER J */}
{/* STARTING LETTER K */}
if(onKalyanRam){
  return <Navigate to="#"></Navigate>
}
if(onKamalHaasan){
  return <Navigate to="#"></Navigate>
}
if(onKarthi){
  return <Navigate to="#"></Navigate>
}
if(onKarthikeya){
  return <Navigate to="#"></Navigate>
}
if(onKiranAbbavaram){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER K */}
{/* STARTING LETTER M */}
if(onMaheshBabu){
  return <Navigate to="#"></Navigate>
}
if(onManoj){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER M */}
{/* STARTING LETTER N */}
if(onNTR){
  return <Navigate to="#"></Navigate>
}
if(onNagaChaitanya){
  return <Navigate to="#"></Navigate>
}
if(onNagaShourya){
  return <Navigate to="#"></Navigate>
}
if(onNagarjuna){
  return <Navigate to="#"></Navigate>
}
if(onNani){
  return <Navigate to="#"></Navigate>   
}
if(onNaveenPolishetty){
  return <Navigate to="#"></Navigate>     
}
if(onNikhil){
  return <Navigate to="#"></Navigate>   
}
if(onNitin){
  return <Navigate to="#"></Navigate>     
}
{/* --- CLOSED LETTER N */}
{/* STARTING LETTER P */}
if(onPawanKalyan){
  return <Navigate to="#"></Navigate>     
}
if(onPrabhas){
  return <Navigate to="/Prabhas"></Navigate>
}
{/* --- CLOSED LETTER P */}
{/* STARTING LETTER R */}
if(onRaghavaLawrence){
  return <Navigate to="#"></Navigate>
}
if(onRajTarun){
  return <Navigate to="#"></Navigate>
}
if(onRajinikanth){
  return <Navigate to="#"></Navigate>
}
if(onRamPothineni){
  return <Navigate to="#"></Navigate>
}
if(onRamCharan){
  return <Navigate to="#"></Navigate>
}
if(onRana){
  return <Navigate to="#"></Navigate>
}
if(onRaviTeja){
  return <Navigate to="#"></Navigate>
}
if(onRoshan){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER R */}
{/* STARTING LETTER S */}
if(onSaiDharamTej){
  return <Navigate to="#"></Navigate>
}
if(onSampoorneshBabu){
  return <Navigate to="#"></Navigate>
}
if(onSundeepKishan){
  return <Navigate to="#"></Navigate>
}
if(onSatyadevKancharana){
  return <Navigate to="#"></Navigate>
}
if(onSharwanand){
  return <Navigate to="#"></Navigate>
}
if(onSidhu){
  return <Navigate to="#"></Navigate>
}
if(onSivaKarthikeyan){
  return <Navigate to="#"></Navigate>
}
if(onSrikanth){
  return <Navigate to="#"></Navigate>
}
if(onSudheerBabu){
  return <Navigate to="#"></Navigate>
}
if(onSunil){
  return <Navigate to="#"></Navigate>
}
if(onSuriya){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER S */}
{/* STARTING LETTER T */}
if(onTejaSajja){
  return<Navigate to="#"></Navigate>
}
{/* CLOSING LETTER T */}
{/* STARTING LETTER U */}
if(onUdayKiran){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER U */}
{/* STARTING LETTER V */}
if(onVaishnavTej){
  return <Navigate to="#"></Navigate>
}
if(onVarunTej){
  return <Navigate to="#"></Navigate>
}
if(onVenkatesh){
  return <Navigate to="#"></Navigate>
}
if(onVijayDevarakonda){
  return <Navigate to="#"></Navigate>
}
if(onVijayAntony){
  return <Navigate to="#"></Navigate>
}
if(onVikram){
  return <Navigate to="#"></Navigate>
}
if(onVishnu){
  return <Navigate to="#"></Navigate>
}
if(onVishwaksenNaidu){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER V */} 
{/* STARTING LETTER Y */}
if(onYash){
  return <Navigate to="/Yash"></Navigate>
} 
{/* CLOSING LETTER Y */}
if(onAbout){
  return <Navigate to="/About"></Navigate>
}
if(onServices){
  return <Navigate to="/Services"></Navigate>
}
if(onHelp){
  return <Navigate to="/Help"></Navigate>
}
    return(
        <div className="Light">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia"></link>
            <div><br/><br/>
            <button className="o1" onClick={toggleNavbar}>
        <b> ☰ Menu </b>
      </button>
      
      <b><a href="./LatestMoviesTelLight" style={{backgroundColor:"gainsboro",color:"black"}}>🏚️ Home</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./About" style={{backgroundColor:"gainsboro",color:"black"}}>ⓘ About</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b><a href="./Report" style={{backgroundColor:"gainsboro",color:"black"}}>⚠️ Report</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <input
        type="search"  onClick={() => { setSearchBar(true); } }
        placeholder="Search movies..."
        value={searchTerm}
        style={{height:"25px",width:"200px"}}
        onChange={handleSearch}
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{border:"0px",borderRadius:"50%",height:"25px",width:"25px"}}  onClick={() => { setTelActorsDark(true); } } title="Active Dark Mode">
      🌙 {/*    <img src="https://static-00.iconduck.com/assets.00/dark-theme-icon-1024x1024-oxftr06e.png"  style={{borderRadius:"50%",height:"20px",width:"20px"}}/> */}
      </button>
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
     {/*  <button style={{height:"30px",width:"50px",backgroundColor:"lightgreen"}}><b>search</b></button> */}<br/><br/>
       {/*  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia"></link>
            <div>
      <button className="o" onClick={toggleNavbar}>
        <b> ☰ Menu </b>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text"  value={Search}
            onChange={handleSearchChange} className="se" placeholder="Search AnyThing Here..."></input>&nbsp;
      <button className="se1"><b>Search</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/><br/>
      <h4 className="sss">Your Search :- {Search}</h4> */}
      {/* Off-canvas menu */}
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
            <button className="s"><a href="./LatestMoviesTelLight"><b>LATEST MOVIES TELUGU</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./TelActorsLight"><b>TELUGU ACTORS MOVIES</b></a></button>
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
        <button className="s"><a href="./TelActorsDark"><b>Dark Mode</b></a></button>
      </div>
      <div>
      <button className="s"><a href="./TelActorsLight"><b>Light Mode</b></a></button>
      </div>
      </div>
      )}
      </ul>
    </div>
    </div>             
    <div>
    <br/><br/>
  </div>
  <div>
    <h2 style={{display:"flex",justifyContent:"center",float:"center"}}>TOLLYWOOD FILM INDUSTRY</h2><br/>
    {/* <h2 style={{display:"flex",justifyContent:"center",float:"center"}}> TELUGU ACTORS </h2><br /> */}
    {/* STARTING LETTER A */}
      <div>
          <button className="b-000" onClick={() => { setAkhil(true); } }>
            <h2 className="h-000"><img src={"https://ik.imagekit.io/j83rchiauw/A_List_Star/akhil-akkineni-biography.jpg"} alt="not found" className="i000" title="Akhil"></img>Akhil</h2>
          </button>
          <button className="b-000" onClick={() => { setAllariNaresh(true); } }>
            <h2 className="h-000"><img src={"https://i0.wp.com/www.primesworld.com/wp-content/uploads/Allari-Naresh.jpg"} alt="not found" className="i000" title="Allari Naresh"></img>Allari Naresh</h2>
          </button>
          <button className="b-000" onClick={() => { setAlluArjun(true); } }>
            <h2 className="h-000"><img src={"https://e0.pxfuel.com/wallpapers/673/688/desktop-wallpaper-allu-arjun-pushpa-allu-arjun-jiteshpatre-jitesh-patre-jitesh-alluarjun-pushpa-aa20-sukumar-allu-arjun-allu-arjun-hairstyle-allu-arjun-thumbnail.jpg"} alt="not found" className="i000" title="Allu Arjun"></img>Allu Arjun</h2>
          </button>
          <button className="b-000" onClick={() => { setAlluSirish(true); } }>
            <h2 className="h-000"><img src={"https://igimages.gumlet.io/telugu/gallery/actor/allusirish/allusirish051102022_047.jpg?w=376&dpr=2.6"} alt="not found" className="i000" title="Allu Sirish"></img>Allu Sirish</h2>
          </button>
          <button className="b-000" onClick={() => { setAnandDeverakonda(true); } }>
            <h2 className="h-000"><img src={"https://m.media-amazon.com/images/M/MV5BNDkwZTQ3YTQtYmJiOS00ZGM1LWE5N2MtZDMxNjRlNWJiZjY0XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_.jpg"} alt="not found" className="i000" title="Anand Deverakonda"></img>Anand</h2>
          </button>
          <button className="b-000" onClick={() => { setArya(true); } }>
            <h2 className="h-000"><img src={"https://way2ott.com/wp-content/uploads/2022/10/Arya-Telugu-Dubbed-Movies-List-1200x900.jpg"} alt="not found" className="i000" title="Arya (Jamshad Cethirakath)"></img>Arya</h2>
          </button>
          <button className="b-000" onClick={() => { setAshish(true); } }>
            <h2 className="h-000"><img src={"https://cdn.123telugu.com/photos/wp-content/uploads/2021/08/Ashish-Reddy-1.jpg"} alt="not found" className="i000" title="Ashish"></img>Ashish</h2>
          </button>
    {/* CLOSING LETTER A*/}
    {/* STARTING LETTER B */}
        <button className="b-000" onClick={() => {setBalakrishna(true); }}>
          <h2 className="h-000"><img src={"https://caknowledge.com/wp-content/uploads/2022/02/Nandamuri-Balakrishna-Net-Worth.jpeg"} alt="not found" className="i000" title="Bala Krishna"></img>Bala Krishna</h2>
        </button>
        <button className="b-000" onClick={() => {setBellamkondaSrinivas(true); }}>
          <h2 className="h-000"><img src={"https://www.telugu360.com/wp-content/uploads/2019/05/Bellamkonda-Srinivas.jpg"} alt="not found" className="i000"  title="BellamKonda Srinivas"></img>BK Srinivas</h2>
        </button>
    {/* CLOSING LETTER B */}
    {/* STARTING LETTER C */}
        <button className="b-000" onClick={() => {setChiranjeevi(true); }}>
          <h2 className="h-000"><img src={"https://cdn.siasat.com/wp-content/uploads/2023/03/chiranjeevii.jpg"} alt="not found" className="i000" title="Chiranjeevi"></img>Chiranjeevi</h2>
        </button>
    {/* CLOSING LETTER C */}
    {/* STARTING LETTER D */}
        <button className="b-000" onClick={() => {setDhanush(true); }}>
          <h2 className="h-000"><img src={"https://www.filmibeat.com/img/162x203/popcorn/profile_photos/dhanush-20200727135555-3667.jpg"} alt="not found" className="i000" title="Dhanush"></img>Dhanush</h2>
        </button>
        <button className="b-000" onClick={() => {setDulquerSalmaan(true); }}>
          <h2 className="h-000"><img src={"https://images.news18.com/ibnlive/uploads/2022/12/dulquer-salmaan-2-16722800244x3.jpg"} alt="not found" className="i000" title="Dulquer Salmaan"></img>Dulquer Salmaan</h2>
        </button>
    {/* CLOSING LETTER D */}
    {/* STARTING LETTER G */}
        <button className="b-000" onClick={() => {setGopichand(true); }}>
          <h2 className="h-000"><img src={"https://static.toiimg.com/photo/92159817.cms"} alt="not found" className="i000" title="GopiChand"></img>Gopichand</h2>
        </button>
    {/* CLOSING LETTER G */}
    {/* STARTING LETTER J */}
        <button className="b-000" onClick={() => {setJagapathiBabu(true); }}>
          <h2 className="h-000"><img src={"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-19t140032.142.jpg"} alt="not found" className="i000" title="Jagapathi Babu"></img>Jagapathi Babu</h2>
        </button>
        <button className="b-000" onClick={() => {setJayamRavi(true); }}>
          <h2 className="h-000"><img src={"https://www.behindwoods.com/tamil-actor/jayam-ravi/jayam-ravi-stills-photos-pictures-155.jpg"} alt="not found" className="i000" title="Jayam Ravi"></img>Jayam Ravi</h2>
        </button>
    {/* CLOSING LETTER J */}
    {/* STARTING LETTER K */}
        <button className="b-000" onClick={() => { setKalyanRam(true); } } >
          <h2 className="h-000"><img src={"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_770,h_515/https://www.mrdustbin.com/wp-content/uploads/2021/04/nandamuri-kalyan-ram-4-768x517.jpg"} alt="not found" className="i000" title="Nandamuri Kalyan Ram"></img>Kalyan Ram</h2>
        </button>
        <button className="b-000" onClick={() => { setKamalHaasan(true); } }>
          <h2 className="h-000"><img src={"https://images.news18.com/ibnlive/uploads/2021/11/kamal-haasan-1.jpg"} alt="not found" className="i000" title="Kamal Haasan"></img>Kamal Haasan</h2>
        </button>
        <button className="b-000" onClick={() => { setKarthi(true); } } >
          <h2 className="h-000"><img src={"https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Karthi-Sivakumar.jpg"} alt="not found" className="i000" title="Karthi"></img>Karthi</h2>
        </button>
        <button className="b-000" onClick={() => { setKarthikeya(true); } } >
          <h2 className="h-000"> <img src={"https://igimages.gumlet.io/telugu/gallery/actor/karthikeya/karthikeya04092021_041.jpg?w=376&dpr=2.6"} alt="not found" className="i000"  title="Karthikeya"></img>Karthikeya</h2>
        </button>
        <button className="b-000" onClick={() => { setKiranAbbavaram(true); } } >
          <h2 className="h-000"> <img src={"https://igimages.gumlet.io/telugu/home/kiran-abbavaram-030222.jpg?w=376&dpr=2.6"} alt="not found" className="i000"  title="Kiran Abbavaram"></img>Kiran Abbavaram</h2>
        </button>
    {/* CLOSING LETTER K */}
    {/* STARTING LETTER M */}
        <button className="b-000" onClick={() => { setMaheshBabu(true); } }>
        <h2 className="h-000"> <img src={"https://pbs.twimg.com/media/E8RF3nDVgAEpt3x.jpg"} alt="not found" className="i000" title="Mahesh Babu"></img>Mahesh Babu</h2>
        </button>
        <button className="b-000" onClick={() => { setManoj(true); } }>
          <h2 className="h-000"><img src={"https://static.toiimg.com/thumb/msid-90354551,width-1280,resizemode-4/90354551.jpg"} alt="not found" className="i000" title="Manchu Manoj"></img>Manoj</h2>
        </button>
        <button className="b-000" onClick={() => { setNTR(true); } }>
          <h2 className="h-000"><img src={"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/01/17192638/Jr.-NTR-Net-Worth-11.jpg"} alt="not found" className="i000" title="NTR"></img>NTR</h2>
        </button>
        <button className="b-000" onClick={() => { setNagaChaitanya(true); } }>
          <h2 className="h-000"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/24/original/ASDF.PNG"} alt="not found" className="i000" title="Naga Chaitanya"></img>Naga Chaitanya</h2>
        </button>
        <button className="b-000" onClick={() => { setNagaShourya(true); } }>
        <h2 className="h-000"><img src={"https://i.pinimg.com/550x/c9/17/b3/c917b383aa9e175c12dea4fc69507fa2.jpg"} alt="not found" className="i000" title="Naga Shourya"></img>Naga Shourya</h2>
        </button>
        <button className="b-000" onClick={() => { setNagarjuna(true); } }>
        <h2 className="h-000"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2022/2/18/w1200X800/Nagarjuna_wraps.jpg"} alt="not found" className="i000" title="Nagarjuna"></img>Nagarjuna</h2>
        </button>
        <button className="b-000" onClick={() => { setNani(true); } }>
          <h2 className="h-000"><img src={"https://e1.pxfuel.com/desktop-wallpaper/362/217/desktop-wallpaper-nani-for-android-actor-nani.jpg"} alt="not found" className="i000" title="Nani"></img>Nani</h2>
        </button>
        <button className="b-000" onClick={() => { setNaveenPolishetty(true); } }>
          <h2 className="h-000"><img src={"https://cdn.gulte.com/wp-content/uploads/2023/09/tnm2Fimport2Fsites2Fdefault2Ffiles2FNaveenPolishetty_JathiRatnalu_Screengrab_13042021_1200.jpg"} alt="not found" className="i000" title="Naveen Polishetty"></img>N Polishetty</h2>
        </button>
        <button className="b-000" onClick={() => { setNikhil(true); } }>
          <h2 className="h-000"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/19/w1200X800/Nikhil.JPG"} alt="not found" className="i000" title="Nikhil"></img>Nikhil</h2>
        </button>
        <button className="b-000" onClick={() => { setNitin(true); } }>
          <h2 className="h-000"><img src={"https://india.postsen.com/temp/resized/medium_2022-12-06-8020284c0c.jpg"} alt="not found" className="i000" title="Nitin"></img>Nitin</h2>
        </button>
        {/* --- CLOSED LETTER N */}
        {/* STARTING LETTER P */}
        <button className="b-000" onClick={() => { setPawanKalyan(true); } }>
          <h2 className="h-000"><img src={"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/02/22/Pawan-Kalyan-HD-Stills-From-Bheemla-Nayak-Movie-.jpg?fit=2560%2C2560&quality=80&zoom=1&ssl=1?v=1645512920"} alt="not found" className="i000" title="Pawan Kalyan"></img>Pawan Kalyan</h2>
        </button>
        <button className="b-000" onClick={() => { setPrabhas(true); } }>
          <h2 className="h-000"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaChb8oQtMNsfxlqociG8t6To8WOdkbzwTVb-G9NLRssl2rU8JlnY80cIk3KDWFY_Vmk&usqp=CAU"} alt="not found" className="i000" title="Prabhas"></img>Prabhas</h2>
        </button>
        {/* --- CLOSED LETTER P */}
        {/* STARTING LETTER R */}
        <button className="b-000" onClick={() => { setRaghavaLawrence(true); } }>
          <h2 className="h-000"><img src={"https://e1.pxfuel.com/desktop-wallpaper/351/780/desktop-wallpaper-raghava-lawrence-in-shivalinga-raghava-lawrence.jpg"} alt="not found" className="i000" title="Raghava Lawrence"></img>Raghava</h2>
        </button>
        <button className="b-000" onClick={() => { setRajTarun(true); } }>
          <h2 className="h-000"><img src={"https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/4/22/original/RajTarunIddariLokamOkate.jpg"} alt="not found" className="i000" title="Raj Tarun"></img>Raj Tarun</h2>
        </button>
        <button className="b-000" onClick={() => { setRajinikanth(true); } }>
          <h2 className="h-000"><img src={"https://images.news9live.com/wp-content/uploads/2023/07/New-Project-2023-07-22T122054.944.jpg?w=1200&enlarge=true"} alt="not found" className="i000" title="Rajinikanth"></img>Rajinikanth</h2>
        </button>
        <button className="b-000" onClick={() => { setRamPothineni(true); } }>
          <h2 className="h-000"><img src={"https://teqip.in/wp-content/uploads/2022/12/136-1362927_ram-pothineni-ram-full-hd-ram-pothineni.jpg"} alt="not found" className="i000" title="Ram Pothineni"></img>Ram Pothineni</h2>
        </button>
        <button className="b-000" onClick={() => { setRamCharan(true); } }>
          <h2 className="h-000"><img src={"https://static.toiimg.com/thumb/msid-96202601,width-400,resizemode-4/96202601.jpg"} alt="not found" className="i000" title="Ram Charan"></img>Ram Charan</h2>
        </button>
        <button className="b-000" onClick={() => { setRana(true); } }>
          <h2 className="h-000"><img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/rana-daggubati-16342-1654347262.jpg"} alt="not found" className="i000" title="Rana"></img>Rana</h2>
        </button>
        <button className="b-000" onClick={() => { setRaviTeja(true); } }>
          <h2 className="h-000"><img src={"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/07/28/Ravi-Teja-s-Rama-Rao-On-Duty-Movie-HD-Stills-2.jpg?fit=1807%2C2560&quality=80&zoom=1&ssl=1?v=1659017677"} alt="not found" className="i000" title="Ravi Teja"></img>Rava Teja</h2>
        </button>
        <button className="b-000" onClick={() => { setRoshan(true); } }>
          <h2 className="h-000"><img src={"https://allwikibiography.in/wp-content/uploads/2021/10/Roshan-Meka-New-Movie.jpg"} alt="not found" className="i000" title="Roshan Meka"></img>Roshan</h2>
        </button>
        {/* --- CLOSED LETTER R */}
        {/* STARTING LETTER S */}
        <button className="b-000" onClick={() => { setSaiDharamTej(true); } }>
          <h2 className="h-000"><img src={"https://th.bing.com/th/id/OIP.CqOuNd0LWHh3bwSqZd9j6gHaLH?pid=ImgDet&rs=1"} alt="not found" className="i000" title="Sai Dharam Tej"></img>Sai Dharam Tej</h2>
        </button>
        <button className="b-000" onClick={() => { setSampoorneshBabu(true); } }>
          <h2 className="h-000"><img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sampoornesh-babu-1042890-1652536682.jpg"} alt="not found" className="i000" title="Sampoornesh Babu"></img>SampoorneshBabu</h2>
        </button>
        <button className="b-000" onClick={() => { setSundeepKishan(true); } }>
          <h2 className="h-000"><img src={"https://starsunfolded.com/wp-content/uploads/2019/09/Sundeep-Kishan-1.jpg"} alt="not found" className="i000" title="Sundeep Kishan"></img>Sundeep Kishan</h2>
        </button>
        <button className="b-000" onClick={() => { setSatyadevKancharana(true); } }>
          <h2 className="h-000"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Cjt-eQUYBauN40DIzs2IQuvIKfDiKjSoGEV0GfgMhDkT7McKWpdxoQaFgoOxsp-Qow&usqp=CAU"} alt="not found" className="i000" title="Satyadev Kancharana"></img>Satyadev</h2>
        </button>
        <button className="b-000" onClick={() => { setSharwanand(true); } }>
          <h2 className="h-000"><img src={"https://igimages.gumlet.io/telugu/news/sharwanand-new-movies-94e.jpg"} alt="not found" className="i000" title="Sharwanand"></img>Sharwanand</h2>
        </button>
        <button className="b-000" onClick={() => { setSidhu(true); } }>
          <h2 className="h-000"><img src={"https://www.cinejosh.com/newsimg/newsmainimg/happy-birthday-to-siddhu-jonnalagadda_b_0702231120.jpg"} alt="not found" className="i000" title="Siddhu Jonnalagadda"></img>Siddhu</h2>
        </button>
        <button className="b-000" onClick={() => { setSivaKarthikeyan(true); } }>
          <h2 className="h-000"><img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sivakarthikeyan-1042969-18-09-2017-03-37-23.jpg"} alt="not found" className="i000" title="Siva Karthikeyan"></img>Siva Karthikeyan</h2>
        </button>
        <button className="b-000" onClick={() => { setSrikanth(true); } }>
          <h2 className="h-000"><img src={"https://starsunfolded.com/wp-content/uploads/2017/12/Meka-Srikanth.jpg"} alt="not found" className="i000" title="Srikanth"></img>Srikanth</h2>
        </button>
        <button className="b-000" onClick={() => { setSudheerBabu(true); } }>
          <h2 className="h-000"><img src={"https://upload.wikimedia.org/wikipedia/commons/5/5a/Sudheer_Babu_at_Saina_Nehwal%27s_wedding_reception_%28cropped%29.jpg"} alt="not found" className="i000" title="Sudheer Babu"></img>Sudheer Babu</h2>
        </button>
        <button className="b-000" onClick={() => { setSunil(true); } }>
          <h2 className="h-000"><img src={"https://content.tupaki.com/twdata/2020/0620/news/Sunil-Trying-To-Be-A-Villain-Despite-Failure--1592907568-1767.jpg"} alt="not found" className="i000" title="Sunil"></img>Sunil</h2>
        </button>
        <button className="b-000" onClick={() => { setSuriya(true); } }>
          <h2 className="h-000"><img src={"https://blogger.googleusercontent.com/img/a/AVvXsEgVdqSODAWFpA9XdMTGikMT9pbYCgNHgCWFMVDnb1iLVVhkMO8N90kKDD_mFu04LfCwXh_YtQ4_5mmYODbv9KKCW0AIsxLPROQvyF_fLqndoYE9equ___4PIOf-XPFHXVpDIN63lB1BNvEbkLyqybXOzGMvFbcCp2WSCOZbHyIzk_NuyYLVBW5ClZAl=w1200-h630-p-k-no-nu"} alt="not found" className="i000" title="Suriya"></img>Suriya</h2>
        </button>
        {/* --- CLOSED LETTER S */}
         {/* STARTING LETTER T */}
         <button className="b-000" onClick={() => { setTejaSajja(true); } }>
          <h2 className="h-000"><img src={"https://www.filmibeat.com/img/315x100x396/popcorn/profile_photos/teja-sajja-20190624154056-30006.jpg"} alt="not found" className="i000" title="Teja Sajja"></img>Teja Sajja</h2>
        </button>
        {/* --- CLOSED LETTER T */}
        {/* STARTING LETTER U */}
        <button className="b-000" onClick={() => { setUdayKiran(true); } }>
          <h2 className="h-000"><img src={"https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/entertainmentbollywood/Uday-Kiran-s-de11164.jpg"} alt="not found" className="i000" title="Uday Kiran"></img>Uday Kiran</h2>
        </button>
        {/* --- CLOSED LETTER U */}
        {/* STARTING LETTER V */}
        <button className="b-000" onClick={() => { setVaishnavTej(true); } }>
          <h2 className="h-000"><img src={"https://pbs.twimg.com/profile_images/1431648459996553222/oTdegHel_400x400.jpg"} alt="not found" className="i000" title="Vaishnav Tej"></img>Vaishnav Tej</h2>
        </button>
        <button className="b-000" onClick={() => { setVarunTej(true); } }>
          <h2 className="h-000"><img src={"https://m.media-amazon.com/images/M/MV5BZjc1N2ZlNDYtMGM2ZS00NWU3LWIyOTUtNGVlY2M0OWIxYWNiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"} alt="not found" className="i000" title="Varun Tej"></img>Varun Tej</h2>
        </button>
        <button className="b-000" onClick={() => { setVenkatesh(true); } }>
          <h2 className="h-000"><img src={"https://static.toiimg.com/photo/msid-72489534/72489534.jpg"} alt="not found" className="i000" title="Venkatesh"></img>Venkatesh</h2>
        </button>
        <button className="b-000" onClick={() => { setVijayDevarakonda(true); } }>
          <h2 className="h-000"><img src={"https://static.toiimg.com/thumb/msid-78465111,width-1280,resizemode-4/78465111.jpg"} alt="not found" className="i000" title="Vijay Devarakonda"></img>V.Devarakonda</h2>
        </button>
        <button className="b-000" onClick={() => { setVijayAntony(true); } }>
          <h2 className="h-000"><img src={"https://m.media-amazon.com/images/M/MV5BY2M1MGE0MjItYjVmZi00MjNkLWE5MTMtYmYzNGRlNGI3Mjk0XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg"} alt="not found" className="i000" title="Vijay Antony"></img>Vijay Antony</h2>
        </button>
        <button className="b-000" onClick={() => { setVikram(true); } }>
          <h2 className="h-000"><img src={"https://img.mensxp.com/media/content/2021/Sep/Vikram-Chiyaan-Best-films-7_6139f3439549d.jpeg"} alt="not found" className="i000" title="Vikram"></img>Vikram</h2>
        </button>
        <button className="b-000" onClick={() => { setVishnu(true); } }>
          <h2 className="h-000"><img src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Manchu-vishnu.jpg"} alt="not found" className="i000" title="Manchu Vishnu"></img>Vishnu</h2>
        </button>
        <button className="b-000" onClick={() => { setVishwaksenNaidu(true); } }>
          <h2 className="h-000"><img src={"https://m.media-amazon.com/images/M/MV5BNzVjYjgwODQtM2E3Mi00OGZkLWE5NDItY2I4NTc5NDk0ODQzXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg"} alt="not found" className="i000" title="Vishwaksen Naidu"></img>Vishwaksen</h2>
        </button>
        {/* --- CLOSED LETTER V */}
        {/* STARTING LETTER Y */}
        <button className="b-000" onClick={() => { setYash(true); } }>
          <h2 className="h-000"><img src={"https://e0.pxfuel.com/wallpapers/116/783/desktop-wallpaper-yash-kgf-chapter-1-rocky-bhai-thumbnail.jpg"} alt="not found" className="i000" title="Yash"></img>Yash</h2>
        </button>
        {/* --- CLOSED LETTER Y */}
      </div>
  </div>
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
            <a href="./TelsuperhitMovies" style={{color:"red"}}>Telugu Super Hit Movies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
export default TelActorsLight;        