function setDmCookie() {
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
}
function enableDarkMode() {
      document.getElementById("1").style.background = "#7a7877";
      document.getElementById("1").style.color = "#ffffff";
      document.getElementById("2").style.background = "#484848";
      document.getElementById("3").style.background = "#111111";
      document.getElementById("3").style.color = "#cccccc";
      document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#000000");
      setDmCookie();
}
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
