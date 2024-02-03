 import React from "react";
/* import Main from "./Components/ClassComponents/Main"; */
import Video from "./Components/ClassComponents/Video";
import Login from "./Components/ClassComponents/Login";
import Registration from "./Components/ClassComponents/Registration";
import Homepage from "./Components/ClassComponents/Homepage";
import Password from "./Components/ClassComponents/Password";
import LatestMoviesTelDark from "./Components/ClassComponents/LatestMoviesTelDark";
import LatestMoviesTelLight from "./Components/ClassComponents/LatestMoviesTelLight";
 import Home from "./Components/ClassComponents/Home";
import TelActorsDark from "./Components/ClassComponents/TelActorsDark";
import TelActorsLight from "./Components/ClassComponents/TelActorsLight";
import About from "./Components/ClassComponents/About";
import Services from "./Components/ClassComponents/Services";
import Help from "./Components/ClassComponents/Help";
import ActorYash from "./Components/ClassComponents/TELUGU/TeluguActors/Yash/ActorYash";
import ActorPrabhas from "./Components/ClassComponents/TELUGU/TeluguActors/Prabhas/ActorPrabhas";
/* Starting A */
import Heroine from "./Components/ClassComponents/TELUGU/TeluguActress/Heroine";
import ActorAkhil from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/ActorAkhil";
import ActorAllariNaresh from "./Components/ClassComponents/TELUGU/TeluguActors/AllariNaresh/ActorAllariNaresh";
import ActorAlluSirish from "./Components/ClassComponents/TELUGU/TeluguActors/AlluSirish/ActorAlluSirish";
import ActorAlluArjun from "./Components/ClassComponents/TELUGU/TeluguActors/AlluArjun/ActorAlluArjun";
import ActorAnandDeverakonda from "./Components/ClassComponents/TELUGU/TeluguActors/AnandDeverakonda/ActorAnandDeverakonda";
/* Closing A */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/ClassComponents/Page1.css';  
  import './Components/ClassComponents/Page.css' ;
import SearchBar from "./Components/ClassComponents/SearchBar";
import Report from "./Components/ClassComponents/Report";
import Available from "./Components/ClassComponents/Available";
/* Starting Akhil Movies */
import AgentMovie from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/AgentMovie";
import MostEligibleBachlor from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/MostEligibleBachlor";
import MrMajnuMovie from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/MrMajnuMovie";
import HelloMovie from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/HelloMovie";
import AkhilMovie from "./Components/ClassComponents/TELUGU/TeluguActors/Akhil/AkhilMovie";
/* Closing Akhil Movies */
/* Starting AllariNaresh Movies */
import UgramMovie from "./Components/ClassComponents/TELUGU/TeluguActors/AllariNaresh/UgramMovie";
import ItluMaredumilliMovie from "./Components/ClassComponents/TELUGU/TeluguActors/AllariNaresh/ItluMaredumilliMovie";
/* Closing AllariNaresh Movies */
/* Starting Kiran Abbavaram Movies */
import RulesRanjanMovieDark from "./Components/ClassComponents/TELUGU/TeluguActors/KiranAbbavaram/RulesRanjanMovieDark";
import RulesRanjanMovieLight from "./Components/ClassComponents/TELUGU/TeluguActors/KiranAbbavaram/RulesRanjanMovieLight";
/* Closing Kiran Abbavaram Movies */
{/* Starting Jayam Ravi Movies */}
import GodMovieDark from "./Components/ClassComponents/TELUGU/TeluguActors/JayamRavi/GodMovieDark";
import GodMovieLight from "./Components/ClassComponents/TELUGU/TeluguActors/JayamRavi/GodMovieLight";
{/* Closing Jayam Ravi Movies */}
{/* Starting sudheer babu Movies */}
import MaamaMascheendraMovieDark from "./Components/ClassComponents/TELUGU/TeluguActors/SudheerBabu/MaamaMascheendraMovieDark";
import MaamaMascheendraMovieLight from "./Components/ClassComponents/TELUGU/TeluguActors/SudheerBabu/MaamaMascheendraMovieLight";
import TelBlockbusterMovies from "./Components/ClassComponents/TELUGU/TeluguBlockbuster/TelBlockbusterMovies";
import TelFlopMovies from "./Components/ClassComponents/TELUGU/TeluguFlop/TelFlopMovies";
import TelSuperHitMovies from "./Components/ClassComponents/TELUGU/TeluguSuperHit/TelSuperHitMovies";
 import RulesRanjanMovieWatch from "./Components/ClassComponents/TELUGU/TeluguActors/KiranAbbavaram/RulesRanjanMovieWatch"; 
{/* Closing sudheer babu Movies */}
/* import LanguageTranslator from "./Components/ClassComponents/LanguageTranslator"; */
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          {/* <Route path="/Main" element={<Main/>} /> */}
          <Route path="/Video" element={<Video/>} />
          {/* <Route path="/LanguageTranslator" element={<LanguageTranslator/>} /> */}
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Password" element={<Password/>} />
          <Route path="/LatestMoviesTelDark" element={<LatestMoviesTelDark/>} />
          <Route path="/LatestMoviesTelLight" element={<LatestMoviesTelLight/>} />
          <Route path="/Home" element={<Home/>} /> 
          <Route path="/TelActorsDark" element={<TelActorsDark/>} />
          <Route path="/TelActorsLight" element={<TelActorsLight/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Help" element={<Help/>} />
          <Route path="/ActorYash" element={<ActorYash/>} />
          <Route path="/ActorPrabhas" element={<ActorPrabhas/>} />
          <Route path="/ActorAlluArjun" element={<ActorAlluArjun/>} />
          <Route path="/Heroine" element={<Heroine/>} />
          <Route path="/TelBlockbusterMovies" element={<TelBlockbusterMovies/>} />
          <Route path="/TelFlopMovies" element={<TelFlopMovies/>} />
          <Route path="/TelSuperHitMovies" element={<TelSuperHitMovies/>} />
          <Route path="/ActorAkhil" element={<ActorAkhil/>} />
          <Route path="/ActorAllariNaresh" element={<ActorAllariNaresh/>} />
          <Route path="/ActorAlluSirish" element={<ActorAlluSirish/>} />
          <Route path="/ActorAnandDeverakonda" element={<ActorAnandDeverakonda/>} />
          <Route path="/SearchBar" element={<SearchBar/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Available" element={<Available/>} />
          {/* Starting Akhil Movies */}
          <Route path="/AgentMovie" element={<AgentMovie/>} />
          <Route path="/MostEligibleBachlor" element={<MostEligibleBachlor/>} />
          <Route path="/MrMajnuMovie" element={<MrMajnuMovie/>} />
          <Route path="/HelloMovie" element={<HelloMovie/>} />
          <Route path="/AkhilMovie" element={<AkhilMovie/>} />
          {/* Closing Akhil Movies */}
          {/* Starting AllariNaresh Movies */}
          <Route path="/UgramMovie" element={<UgramMovie/>} />
          <Route path="/ItluMaredumilliMovie" element={<ItluMaredumilliMovie/>} />
          {/* Closing AllariNaresh Movies */}
          {/* Starting Kiran Abbavaram Movies */}
          <Route path="/RulesRanjanMovieDark" element={<RulesRanjanMovieDark/>} />
          <Route path="/RulesRanjanMovieLight" element={<RulesRanjanMovieLight/>} />
         <Route path="/RulesRanjanMovieWatch" element={<RulesRanjanMovieWatch/>} />
           {/* Closing Kiran Abbavaram Movies */}
          {/* Starting Jayam Ravi Movies */}
          <Route path="/GodMovieDark" element={<GodMovieDark/>} />
          <Route path="/GodMovieLight" element={<GodMovieLight/>} />
          {/* Closing Jayam Ravi Movies */}
          {/* Starting sudheer babu Movies */}
          <Route path="/MaamaMascheendraMovieDark" element={<MaamaMascheendraMovieDark/>} />
          <Route path="/MaamaMascheendraMovieLight" element={<MaamaMascheendraMovieLight/>} />
          {/* Closing Jayam Ravi Movies */}
        </Routes>
      </Router>
    </div>
    
  );
}
export default App;  




