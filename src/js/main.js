var links = document.getElementsByTagName("a"),
i = 0, l = links.length,
body = document.body;

for(;i<l;i++) {
    links[i].addEventListener("click",function(){
        body.className = "page-loading";
    },false);
}

for(;i<l;i++) {
    links[i].addEventListener("click",function(){
        body.className = "page-loading";
        setTimeout(function(){
            body.className = "";
        },3000);
    },false);
}

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
