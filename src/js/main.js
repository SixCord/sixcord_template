var links = document.getElementsByTagName("a"),
i = 0, l = links.length,
body = document.body;

for(;i<l;i++) {
    links[i].addEventListener("click",function(){
        body.className = "page-loading";
    },false);
}
