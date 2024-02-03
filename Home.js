import React,{useState} from "react";
import { Navigate } from "react-router-dom";
function Home(){
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
{/* STARTING LETTER A */}
const [onAkhil,setAkhil]=React.useState(false); 
const [onAllariNaresh,setAllariNaresh]=React.useState(false);
const [onAlluArjun,setAlluArjun]=React.useState(false);
const [onAlluSirish,setAlluSirish]=React.useState(false);
const [onAnandDeverakonda,setAnandDeverakonda]=React.useState(false);
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
{/* CLOSING LETTER D */}
{/* STARTING LETTER G */}
const [onGopichand,setGopichand]=React.useState(false); 
{/* CLOSING LETTER G */}
{/* STARTING LETTER J */}
const [onJagapathiBabu,setJagapathiBabu]=React.useState(false); 
{/* CLOSING LETTER J */}
{/* STARTING LETTER K */}
const [onKarthi,setKarthi]=React.useState(false);
const [onKamalHaasan,setKamalHaasan]=React.useState(false); 
const [onKarthikeya,setKarthikeya]=React.useState(false); 
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
const [onRamPothineni,setRamPothineni]=React.useState(false); 
const [onRamCharan,setRamCharan]=React.useState(false);
const [onRana,setRana]=React.useState(false);
const [onRaviTeja,setRaviTeja]=React.useState(false);
const [onRoshanAbdulRahoof,setRoshanAbdulRahoof]=React.useState(false);
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
  const [onSunil,setSunil]=React.useState(false);
  const [onSuriya,setSuriya]=React.useState(false);
{/* CLOSING LETTER S */}
{/* STARTING LETTER U */}
const [onUdayKiran,setUdayKiran]=React.useState(false); 
{/* CLOSING LETTER U */}
{/* STARTING LETTER V */}
const [onVaishnavTej,setVaishanvTej]=React.useState(false); 
const [onVarunTej,setVarunTej]=React.useState(false); 
const [onVenkatesh,setVenkatesh]=React.useState(false);
const [onVijayDevarakonda,setVijayDevarakonda]=React.useState(false);
const [onVishnu,setVishnu]=React.useState(false);
const [onVishwaksenNaidu,setVishwaksenNaidu]=React.useState(false);
{/* CLOSING LETTER V */}
{/* STARTING LETTER Y */}
const [onYash,setYash]=React.useState(false);
{/* CLOSING LETTER Y */}
const [onAbout,setAbout]=React.useState(false); 
const [onServices,setServices]=React.useState(false); 
const [onHelp,setHelp]=React.useState(false); 
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
  return <Navigate to="/Dhanush"></Navigate>
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
{/* CLOSING LETTER J */}
{/* STARTING LETTER K */}
if(onKamalHaasan){
  return <Navigate to="#"></Navigate>
}
if(onKarthi){
  return <Navigate to="#"></Navigate>
}
if(onKarthikeya){
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
if(onRajTarun){
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
if(onRoshanAbdulRahoof){
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
if(onSunil){
  return <Navigate to="#"></Navigate>
}
if(onSuriya){
  return <Navigate to="#"></Navigate>
}
{/* CLOSING LETTER S */}
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
        <><>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia"></link>
            <div>
      <button className="o" onClick={toggleNavbar}>
        <b> ☰ Menu </b>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" className="se" placeholder="Search AnyThing Here..."></input>&nbsp;&nbsp;
      <button className="se1"><b>Search</b></button>
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
            <button className="s"><a href="./Home"><b>TELUGU ACTORS MOVIES</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./Heroine"><b>TELUGU ACTRESS MOVIES</b></a></button>
          </div>
          <div>
            <button className="s"><a href="./Agent"><b>TELUGU SONGS </b></a></button>
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
                <button className="s"><a href="#"><b>  HINDI SONGS </b></a></button>
              </div>
            </div>
           )}
          </div>  <br/>
          <button className="s"><a href="./About"> ABOUT THIS PAGE </a></button><br/>
          <button className="s"><a href="./Services"> WANT SERVIES </a></button><br/>
          <button className="s"><a href="./Help"> WANT HELP </a></button><br/>
        </ul>
      </div>
    </div>            
        </><div>
          <br/><br/>
                <h1 className="h10"><u> TELUGU FILM INDUSTRY :--{">"}</u></h1>
                <h1 className="h10" style={{display:"flex",justifyContent:"center",float:"center"}}>
                  <u> TELUGU ACTORS </u>
                </h1><br />
                {/* STARTING LETTER A */}
                <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'A' </u></h1>
                <div className="Letter">
                <h2 className="h"> <img src={"https://ik.imagekit.io/j83rchiauw/A_List_Star/akhil-akkineni-biography.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Akhil  <button className="b1" onClick={() => { setAkhil(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://i0.wp.com/www.primesworld.com/wp-content/uploads/Allari-Naresh.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Allari Naresh <button className="b1" onClick={() => { setAllariNaresh(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://e0.pxfuel.com/wallpapers/673/688/desktop-wallpaper-allu-arjun-pushpa-allu-arjun-jiteshpatre-jitesh-patre-jitesh-alluarjun-pushpa-aa20-sukumar-allu-arjun-allu-arjun-hairstyle-allu-arjun-thumbnail.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Allu Arjun<button className="b1" onClick={() => { setAlluArjun(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button></h2>
                <h2 className="h"> <img src={"https://igimages.gumlet.io/telugu/gallery/actor/allusirish/allusirish051102022_047.jpg?w=376&dpr=2.6"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Allu Sirish <button className="b1" onClick={() => { setAlluSirish(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://szcdn.ragalahari.com/jul2023/hd/anand-deverakonda-at-baby-interview/anand-deverakonda-at-baby-interviewthumb.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Anand Deverakonda <button className="b1" onClick={() => { setAnandDeverakonda(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                {/* --- CLOSED LETTER A */}
                {/* STARTING LETTER B */}
                <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'B' </u></h1>
                <div className="Letter">
                <h2 className="h"> <img src={"https://static.toiimg.com/thumb/msid-96937591,width-1280,resizemode-4/96937591.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Balakrishna  <button className="b1" onClick={() => { setBalakrishna(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://www.telugu360.com/wp-content/uploads/2019/05/Bellamkonda-Srinivas.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Bellamkonda Srinivas  <button className="b1" onClick={() => { setBellamkondaSrinivas(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                 {/* --- CLOSED LETTER B */}
                 {/* STARTING LETTER C */}
                 <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'C' </u></h1>
                 <div className="Letter">
                 <h2 className="h"> <img src={"https://cdn.siasat.com/wp-content/uploads/2023/03/chiranjeevii.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                 Chiranjeevi  <button className="b1" onClick={() => { setChiranjeevi(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                 </div>
                  {/* --- CLOSED LETTER C */}
                  {/* STARTING LETTER D */}
                    <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'D' </u></h1>
                   <div className="Letter">
                       <h2 className="h">  <img src={"https://www.filmibeat.com/img/162x203/popcorn/profile_photos/dhanush-20200727135555-3667.jpg"} alt="not found" /* onClick={() => { setYashimg(true); }}  */className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                        Dhanush<button className="b1" onClick={() => { setDhanush(true); }  } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button></h2>
                    </div> 
                   {/* CLOSING LETTER D */}
                   {/* STARTING LETTER G */}
                   <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'G' </u></h1>
                   <div className="Letter">
                   <h2 className="h"> <img src={"https://static.toiimg.com/photo/92159817.cms"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Gopichand  <button className="b1" onClick={() => { setGopichand(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                     </h2>
                   </div>
                    {/* --- CLOSED LETTER G */}
                    {/* STARTING LETTER J */}
                    <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'J' </u></h1>
                    <div className="Letter">
                   <h2 className="h"> <img src={"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-19t140032.142.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Jagapathi Babu  <button className="b1" onClick={() => { setJagapathiBabu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                    {/* --- CLOSED LETTER J */}
                    {/* STARTING LETTER K */}
                    <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'K' </u></h1>
                    <div className="Letter">
                    <h2 className="h"> <img src={"https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Karthi-Sivakumar.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Karthi  <button className="b1" onClick={() => { setKarthi(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://images.news18.com/ibnlive/uploads/2021/11/kamal-haasan-1.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  KamalHaasan  <button className="b1" onClick={() => { setKamalHaasan(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                   <h2 className="h"> <img src={"https://pro.sgp1.digitaloceanspaces.com/2021/06/Exclusive-Photos-Karthikeya.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Karthikeya  <button className="b1" onClick={() => { setKarthikeya(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                {/* --- CLOSED LETTER K */}
                {/* STARTING LETTER M */}
                    <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'M' </u></h1>
                    <div className="Letter">
                   <h2 className="h"> <img src={"https://images.news18.com/ibnlive/uploads/2022/01/studio_project-71-16433675423x2.jpg?impolicy=website&width=360&height=240"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Mahesh Babu  <button className="b1" onClick={() => { setMaheshBabu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://static.toiimg.com/thumb/msid-90354551,width-1280,resizemode-4/90354551.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Manoj  <button className="b1" onClick={() => { setManoj(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                    {/* --- CLOSED LETTER M */}
                {/* STARTING LETTER N */}
                <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'N' </u></h1>
                <div className="Letter">
                <h2 className="h"><img src={"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/01/17192638/Jr.-NTR-Net-Worth-11.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  NTR<button className="b1" onClick={() => { setNTR(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/24/original/ASDF.PNG"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Naga Chaitanya<button className="b1" onClick={() => { setNagaChaitanya(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://i.pinimg.com/550x/c9/17/b3/c917b383aa9e175c12dea4fc69507fa2.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Naga Shourya<button className="b1" onClick={() => { setNagaShourya(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2022/2/18/w1200X800/Nagarjuna_wraps.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Nagarjuna<button className="b1" onClick={() => { setNagarjuna(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://e1.pxfuel.com/desktop-wallpaper/362/217/desktop-wallpaper-nani-for-android-actor-nani.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Nani<button className="b1" onClick={() => { setNani(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://cdn.siasat.com/wp-content/uploads/2021/04/Naveen-Polishetty.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Naveen Polishetty<button className="b1" onClick={() => { setNaveenPolishetty(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/19/w1200X800/Nikhil.JPG"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Nikhil <button className="b1" onClick={() => { setNikhil(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"><img src={"https://india.postsen.com/temp/resized/medium_2022-12-06-8020284c0c.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Nitin <button className="b1" onClick={() => { setNitin(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                {/* --- CLOSED LETTER N */}
                 {/* STARTING LETTER P */}
                 <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'P' </u></h1>
                    <div className="Letter">
                  <h2 className="h"><img src={"https://s3.india.com/wp-content/uploads/2023/01/telugu-box-office-pawan-kalyan-kushi-re-release-records.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Pawan Kalyan<button className="b1" onClick={() => { setPawanKalyan(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button></h2>
                  <h2 className="h"> <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaChb8oQtMNsfxlqociG8t6To8WOdkbzwTVb-G9NLRssl2rU8JlnY80cIk3KDWFY_Vmk&usqp=CAU"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Prabhas<button className="b1" onClick={() => { setPrabhas(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button></h2>
                </div>
                    {/* --- CLOSED LETTER P */}
                {/* STARTING LETTER R */}
                <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'R' </u></h1>
                <div className="Letter">
                <h2 className="h"> <img src={"https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/4/22/original/RajTarunIddariLokamOkate.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Raj Tarun  <button className="b1" onClick={() => { setRajTarun(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://teqip.in/wp-content/uploads/2022/12/136-1362927_ram-pothineni-ram-full-hd-ram-pothineni.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Ram Pothineni  <button className="b1" onClick={() => { setRamPothineni(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://static.toiimg.com/thumb/msid-96202601,width-400,resizemode-4/96202601.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Ram Charan  <button className="b1" onClick={() => { setRamCharan(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/rana-daggubati-16342-1654347262.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Rana  <button className="b1" onClick={() => { setRana(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://static.toiimg.com/thumb/msid-95003527,width-1280,resizemode-4/95003527.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Ravi Teja  <button className="b1" onClick={() => { setRaviTeja(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://m.media-amazon.com/images/M/MV5BZjI5NzI4NjktMDYzMS00ZDhmLTliNDUtODhjYWFjMmEyOGFiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Roshan Abdul Rahoof <button className="b1" onClick={() => { setRoshanAbdulRahoof(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                {/* --- CLOSED LETTER R */}
                 {/* STARTING LETTER S */}
                 <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'S' </u></h1>
                    <div className="Letter">
                   <h2 className="h"> <img src={"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2017/11/30/sai-dharam-tej-solo-HD-stills-from-jawaan-.jpg?fit=1868%2C3500&quality=80&zoom=1&ssl=1"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Sai Dharam Tej  <button className="b1" onClick={() => { setSaiDharamTej(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://szcdn.ragalahari.com/nov2021/starzone/sampoornesh-babu-cauliflower-movie-interview/sampoornesh-babu-cauliflower-movie-interviewthumb.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sampoornesh Babu  <button className="b1" onClick={() => { setSampoorneshBabu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://starsunfolded.com/wp-content/uploads/2019/09/Sundeep-Kishan-1.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sundeep Kishan  <button className="b1" onClick={() => { setSundeepKishan(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://igimages.gumlet.io/telugu/news/satyadev08062021_c-7d4.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Satyadev Kancharana <button className="b1" onClick={() => { setSatyadevKancharana(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://igimages.gumlet.io/telugu/news/sharwanand-new-movies-94e.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sharwanand <button className="b1" onClick={() => { setSharwanand(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://www.cinejosh.com/newsimg/newsmainimg/happy-birthday-to-siddhu-jonnalagadda_b_0702231120.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sidhu <button className="b1" onClick={() => { setSidhu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://in.bmscdn.com/iedb/artist/images/website/poster/large/sivakarthikeyan-1042969-18-09-2017-03-37-23.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sivakarthikeyan <button className="b1" onClick={() => { setSivaKarthikeyan(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://starsunfolded.com/wp-content/uploads/2017/12/Meka-Srikanth.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Srikanth <button className="b1" onClick={() => { setSrikanth(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://content.tupaki.com/twdata/2020/0620/news/Sunil-Trying-To-Be-A-Villain-Despite-Failure--1592907568-1767.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Sunil <button className="b1" onClick={() => { setSunil(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://blogger.googleusercontent.com/img/a/AVvXsEgVdqSODAWFpA9XdMTGikMT9pbYCgNHgCWFMVDnb1iLVVhkMO8N90kKDD_mFu04LfCwXh_YtQ4_5mmYODbv9KKCW0AIsxLPROQvyF_fLqndoYE9equ___4PIOf-XPFHXVpDIN63lB1BNvEbkLyqybXOzGMvFbcCp2WSCOZbHyIzk_NuyYLVBW5ClZAl=w1200-h630-p-k-no-nu"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Suriya <button className="b1" onClick={() => { setSuriya(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                    {/* --- CLOSED LETTER S */}
                      {/* STARTING LETTER U */}
                      <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'U' </u></h1>
                    <div className="Letter">
                   <h2 className="h"> <img src={"https://resize.indiatvnews.com/en/resize/oldbucket/1200_-/entertainmentbollywood/Uday-Kiran-s-de11164.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Uday Kiran  <button className="b1" onClick={() => { setUdayKiran(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                    {/* --- CLOSED LETTER U */}
                       {/* STARTING LETTER V */}
                       <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'V' </u></h1>
                    <div className="Letter">
                   <h2 className="h"> <img src={"https://pbs.twimg.com/profile_images/1431648459996553222/oTdegHel_400x400.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Vaishnav Tej   <button className="b1" onClick={() => { setVaishanvTej(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://m.media-amazon.com/images/M/MV5BZjc1N2ZlNDYtMGM2ZS00NWU3LWIyOTUtNGVlY2M0OWIxYWNiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                   Varun Tej   <button className="b1" onClick={() => { setVarunTej(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://static.toiimg.com/photo/msid-72489534/72489534.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Venkatesh    <button className="b1" onClick={() => { setVenkatesh(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://static.toiimg.com/thumb/msid-67848576,width-1280,resizemode-4/67848576.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Vijay Devarakonda   <button className="b1" onClick={() => { setVijayDevarakonda(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Manchu-vishnu.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Vishnu   <button className="b1" onClick={() => { setVishnu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                <h2 className="h"> <img src={"https://m.media-amazon.com/images/M/MV5BNzVjYjgwODQtM2E3Mi00OGZkLWE5NDItY2I4NTc5NDk0ODQzXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg"} alt="not found" className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                Vishwaksen Naidu  <button className="b1" onClick={() => { setVishwaksenNaidu(true); } } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button>
                </h2>
                </div>
                    {/* --- CLOSED LETTER V */}
              {/* STARTING LETTER Y */}
              <h1 className="h10"><u> TELUGU HEROES NAMES STARTING WITH LETTER 'Y' </u></h1>
              <div className="Letter">
              <h2 className="h">  <img src={"https://i.pinimg.com/474x/09/f2/68/09f2689408936b0d8f37823e4d44ecad.jpg"} alt="not found" /* onClick={() => { setYashimg(true); }}  */className="yi" style={{cursor:"pointer"}}></img>&nbsp;
                  Yash<button className="b1" onClick={() => { setYash(true); }  } style={{ display: 'flex', justifyContent: 'center', float: 'right' }}>MoreInfo</button></h2>
            </div> 
            {/* CLOSING LETTER Y */}
            </div>
            </>
    );
}
export default Home;