 
import call from './navbar/fetch.js'

let arr=JSON.parse(localStorage.getItem("id"));

console.log(arr[0])

async function showOn(){
try{
    let id=arr[0];

    let url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    let res= await call(url);

    console.log(res.meals[0]);
    show(res.meals[0])
}
catch(er){
    console.log(er)
}
}


showOn();

 
let box=document.querySelector("#cont") 
function show({strMealThumb,strMeal,strInstructions,strIngredient1,strArea}){
    box.innerHTML=null;
  
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

