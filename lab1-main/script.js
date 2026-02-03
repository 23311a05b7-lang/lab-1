const clk = document.getElementById("toggle");
var c=0;
function toggle(){
    if(c%2==0){
        clk.style.colour="white";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
    else{
        clk.style.colour="black";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    c++;
}
clk.addEventListener("click",toggle);aasas