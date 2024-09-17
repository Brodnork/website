plook = 1;

var r = document.querySelector(':root');
var fenSounds = Array("audio/baa.wav", "audio/bark1.wav", "audio/deepBark.wav", "audio/minecraftDog.wav", "audio/minecraftSheep.wav");

var aprilFools = false;

var fenScale = 1;

function plookClick() {
    if (plook == 1){
        document.getElementById("plookClickable").src = "plook1.gif";
        plook = 2;
    }
    else{
        document.getElementById("plookClickable").src = "plook2.gif";
        plook = 1;
    }
}

function fenClick() {
    var selectedSound = fenSounds[~~(fenSounds.length * Math.random())]
    var audio = new Audio(selectedSound);
    document.getElementById("fen").src = "fenYap.webp";

    audio.playbackRate = 1.2
    if(aprilFools){
        audio.mozPreservesPitch = false;
        audio.preservesPitch = false
        audio.playbackRate = 1.2 - (fenScale * 0.1);
        
        fenScale = fenScale + 0.09;
        setCSS("--fen-scale-mult", fenScale.toString());
    }
    audio.play();
}


function getLightBG(){
    var today = new Date();
    var theDate = Array(today.getMonth(), today.getDate());

    //theDate = Array(3,1); //override date for testing. remember months start at 0

    if(theDate[0] == 3 && theDate[1] == 1){ 
        aprilFools = true;
        //setCSS("--bg-image", "url('chevrotaincube.gif')");
        //setCSS("--background-scale", "100px");
        document.getElementById("logo").style="transform: rotate(-180deg)";
    }

    //birthday
    if(theDate[0] == 8 && theDate[1] == 25) {
        document.getElementById("logo").src = "bumblebeecitylogoBirthday.png";
    }
    else if(theDate[0] == 8 && theDate[1] == 30) { //Cohost
        //setCSS("--bg-image", "url('')");
        //setCSS("--bg-color", "#FFE9D5");
        //setCSS("--font-color", "#1A1A1A");
        //setCSS("--header", "#83254F");
        //setCSS("--font-highlight", "#83254F");
        //setCSS("--status-bg", "#FFF9F2");
        document.getElementById("logo").src = "bumblebeecitylogoEggbug.png";
    }
    else if(theDate[0] == 9 && theDate[1] == 1) { //Cohost
        //setCSS("--bg-image", "url('')");
        //setCSS("--bg-color", "#FFE9D5");
        //setCSS("--font-color", "#1A1A1A");
        //setCSS("--header", "#83254F");
        //setCSS("--font-highlight", "#83254F");
        //setCSS("--status-bg", "#FFF9F2");
        document.getElementById("logo").src = "bumblebeecitylogoEggbug.png";
    }
    else if(theDate[0] == 11 && theDate[1] >= 13) { 
        setCSS("--bg-color", "#B9DFBE"); //Christmas
        setCSS("--bg-image", "url('diamondbgChhristmas.png')");
        setCSS("--font-color", "#210205");
        setCSS("--status-bg", "#FFF6C5")
        setCSS("--header", "#D12538");
        setCSS("--font-highlight", "#D12538");
        setCSS("--link-hover", "#EEAC50")
        document.getElementById("logo").src = "bumblebeecitylogoChristmas.png";
        document.getElementById("christmasLights").style.backgroundImage="url('christmasLights.png')";
    }else if(theDate[0] == 9 && theDate[1] >= 25){ 
        setCSS("--bg-color", "#F3C096"); //Halloween
        setCSS("--bg-image", "url('diamondbgHalloween.png')");
        setCSS("--font-color", "#210205");
        setCSS("--status-bg", "#FFDBB2")
        setCSS("--header", "#ED9039");
        setCSS("--font-highlight", "#581965");
        setCSS("--link-hover", "#0E7719")
        document.getElementById("logo").src = "bumblebeecitylogoHalloween.png";
    }
}

function getDarkBG(){
    var today = new Date();
    var theDate = Array(today.getMonth(), today.getDate());

    //theDate = Array(9,30); //override date for testing

    //birthday
    if(theDate[0] == 8 && theDate[1] == 25) {
        document.getElementById("logo").src = "bumblebeecitylogoBirthday.png";
    }
    else if(theDate[0] == 8 && theDate[1] == 30) { //Cohost
        //setCSS("--bg-image", "url('')");
        //setCSS("--bg-color", "#1A1A1A");
        //setCSS("--font-color", "#FFF9F2");
        //setCSS("--header", "#83254F");
        //setCSS("--font-highlight", "#83254F");
        //setCSS("--status-bg", "#3B0920")
        document.getElementById("logo").src = "bumblebeecitylogoEggbug.png";
    }
    else if(theDate[0] == 9 && theDate[1] == 1) { //Cohost
        //setCSS("--bg-image", "url('')");
        //setCSS("--bg-color", "#1A1A1A");
        //setCSS("--font-color", "#FFF9F2");
        //setCSS("--header", "#83254F");
        //setCSS("--font-highlight", "#83254F");
        //setCSS("--status-bg", "#3B0920")
        document.getElementById("logo").src = "bumblebeecitylogoEggbug.png";
    }
    else if(theDate[0] == 11 && theDate[1] >= 13) { 
        setCSS("--bg-color", "#173327"); //Christmas
        setCSS("--bg-image", "url('diamondbgChhristmasDARK.png')");
        setCSS("--font-color", "#FDEEBB");
        setCSS("--status-bg", "#200D13")
        setCSS("--header", "#D12538");
        setCSS("--font-highlight", "#D12538");
        setCSS("--link-hover", "#EEAC50")
        document.getElementById("logo").src = "bumblebeecitylogoChristmas.png";
        document.getElementById("christmasLights").style.backgroundImage="url('christmasLights.png')";
    }else if(theDate[0] == 9 && theDate[1] >= 25){ 
        setCSS("--bg-color", "#221433"); //Halloween
        setCSS("--bg-image", "url('diamondbgHalloweenDark.png')");
        setCSS("--font-color", "#FFF1B8");
        setCSS("--status-bg", "#100C24")
        setCSS("--header", "#ED9039");
        setCSS("--font-highlight", "#ED9039");
        setCSS("--link-hover", "#11E34D")
        document.getElementById("logo").src = "bumblebeecitylogoHalloween.png";
    }
}


function setLightMode(){
    setCSS("--bg-image", "url('diamondbg.png')");
    setCSS("--bg-color", "#FDEEBB");
    setCSS("--status-bg", "#fff6d9")
    setCSS("--font-color", "#4D293B");
    setCSS("--header", "#EBB9A3");
    setCSS("--font-highlight", "#B22B60");
    setCSS("--link-hover", "#FF2F75")
    getLightBG();
    
}

function setDarkMode(){
    setCSS("--bg-color", "#4D293B");
    setCSS("--bg-image", "url('diamondbgDARK.png')");
    setCSS("--status-bg", "#2B1420");
    setCSS("--font-color", "#FDEEBB");
    setCSS("--header", "#402131");
    setCSS("--font-highlight", "#FF2F75");
    setCSS("--link-hover", "#FF489C")
    getDarkBG();
    
}






// Create a function for setting a variable value
function setCSS(property, value) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty(property, value);
  }