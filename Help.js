import React from "react";
function Help(){
    return(
     <div>
            <h1>Help Page</h1>
            <p> The Help I provided is :-</p>
            <b>{"--->"}&nbsp;&nbsp;&nbsp; SEARCH ANY THING IN &nbsp;
            <a href="https://www.google.com/" alt="not found"> <u> GOOGLE CHROME </u></a> </b>
            <h3> OR </h3>
            <b>{"--->"}&nbsp;&nbsp;&nbsp; SEARCH ANY THING IN &nbsp;
            <a href="https://www.bing.com/#!" alt="not found"> <u> MICROSOFT BING </u></a> </b>
            <h3> OR </h3>
            <b>{"--->"}&nbsp;&nbsp;&nbsp; SEARCH ANY THING IN &nbsp;
            <a href="https://chat.openai.com/auth/login" alt="not found"> <u> CHAT GPT </u></a> </b>
     </div>
    );
}
export default Help;