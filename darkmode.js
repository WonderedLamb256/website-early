/*function setDmCookie() {
      var cookiedate = new Date(); // Spawn a process of date();
      cookiedate.setTime(cookiedate.getTime() + (365 * 24 * 60 * 60 * 1000));
      var utccdate = cookiedate.toUTCString();
      var cookie = browser.cookies.get(details{name:"wldarkmode"});
      if cookie == "true" {
            document.cookie = "wldarkmode=false;expires=" + utccdate + ";path=/";
      }
      else if cookie == "false" {
            document.cookie = "wldarkmode=true;expires=" + utccdate + ";path=/";
      }
      else {
            document.cookie = "wldarkmode=true;expires=" + utccdate + ";path=/";
      }
} ~All commented except for enableDarkMode();*/
var darkmode = false;
function setDmCookie() {
      document.cookie = "darkmode=" + darkmode;
      console.log("Cookie for darkmode has been set to " + document.cookie);
}
function checkForCookie() {
      if (document.cookie == "darkmode=true") {
            darkmode = true;
      }
      else {
            darkmode = false;
      }
}
function enableDarkMode() {
      if (darkmode == false) {
            document.getElementById("1").style.background = "#7a7877";
            document.getElementById("1").style.color = "#ffffff";
            document.getElementById("2").style.background = "#484848";
            document.getElementById("3").style.background = "#111111";
            document.getElementById("3").style.color = "#cccccc";
            document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#111111");
            darkmode = true;
      }
      else if (darkmode == true) {
            document.getElementById("1").style.background = "#b3dff2";
            document.getElementById("1").style.color = "#000000";
            document.getElementById("2").style.background = "#24649c";
            document.getElementById("3").style.background = "#ffffff";
            document.getElementById("3").style.color = "#000000";
            document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#ffffff");
            darkmode = false;
      }
      setDmCookie();
      console.log("Variable darkmode has been set to", darkmode);
}
(function() {
      checkForCookie();
})();
/*
function enableDarkModeNoSet() {
      document.getElementById("1").style.background = "#7a7877";
      document.getElementById("1").style.color = "#ffffff";
      document.getElementById("2").style.background = "#484848";
      document.getElementById("3").style.background = "#111111";
      document.getElementById("3").style.color = "#cccccc";
      document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#000000");
}

function checkForCookie() {
      var cookie = browser.cookies.get(details{name:"wldarkmode"});
      if cookie == "true" {
            enableDarkModeNoSet();
      }
}
*/
