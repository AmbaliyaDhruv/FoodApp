import navbar from './navbar/navbar.js';
   
import call from './navbar/fetch.js' ;
let nav=document.querySelector("#nav");
nav.innerHTML=navbar();

document.querySelector("#search").addEventListener("click",clickOn);


async function clickOn(){
   try{
       
     let Name=document.querySelector("#Name").value;
     let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`
    
     let response =await call(url);

     display(response.meals);
      
   }
   catch (er){
       console.log(er)
   }
}

let waiting_movie;

document.querySelector("#Name").addEventListener("input",check);


function check(){
   debounce(clickOn,2000)
}


function debounce(func,delay){
   if(waiting_movie){
       clearTimeout(waiting_movie)
   }

   waiting_movie=setTimeout(()=>{
       func();
   },delay)
}


let outbox=document.querySelector("#sug");

function display(data){
   outbox.innerHTML=null;
 data.forEach(ele=> {
     
     
     let h1=document.createElement("h2");
     h1.innerText=ele.strMeal;
     h1.style.cursor="pointer"
     h1.addEventListener("click",()=>{
         showOn(ele);
     })
     outbox.append(h1);
   });
   
   
}

async function showOn(ele){
console.log(ele)
show(ele)

}


let box=document.querySelector("#cont") 
function show({strMealThumb,strMeal,strInstructions,strIngredient1}){
 box.innerHTML=null;
 outbox.innerHTML=null;
let img=document.createElement("img");
img.src=strMealThumb;
img.className="imgbox"
let des=document.createElement("div");
des.className="des"
let title=document.createElement("h2");
title.innerText=strMeal;
title.style.color="red";
let heading=document.createElement("h1")
heading.textContent="Instruction"
let instruction=document.createElement("h3");
instruction.innerText=strInstructions;
let heading1=document.createElement("h1")
heading1.textContent="Ingredient"
let mainIngredient=document.createElement("h4");
mainIngredient.innerText=strIngredient1;

des.append(title,heading,instruction,heading1,mainIngredient);
box.append(img,des);

}

let arr=JSON.parse(localStorage.getItem("NameData"));

document.querySelector("h4").innerText=arr[0]