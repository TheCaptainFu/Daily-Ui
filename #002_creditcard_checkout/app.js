function changeColor(){
    var myDiv = document.getElementsByClassName("column2__card__2")[0];
    var myDiv2 = document.getElementsByClassName("column2__card__1")[0];
    if(myDiv2.style.backgroundColor = "#3468C0"){
        myDiv.style.backgroundColor = "#3468C0";
        myDiv2.style.backgroundColor = "lightgrey";
    }    
}

function changeColor2(){
    var myDiv = document.getElementsByClassName("column2__card__2")[0];
    var myDiv2 = document.getElementsByClassName("column2__card__1")[0];
    if(myDiv.style.backgroundColor = "#3468C0"){
        myDiv.style.backgroundColor = "lightgrey";
        myDiv2.style.backgroundColor = "#3468C0";
    } 
}