
    import navbar from './navbar/navbar.js';

    let nav = document.querySelector("#nav");
    nav.innerHTML = navbar();


    import call from './navbar/fetch.js';


    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"

    let promis = call(url);

    promis.then((res) => {
        display(res.meals);
    })
    promis.catch((er) => {
        console.log(er, "inmy")
    })

    let box = document.querySelector("#display")
    function display(data) {
         console.log(data)
        data.forEach(({ idMeal, strMeal, strMealThumb }) => {
            
            let outer = document.createElement("div")
            outer.className="outer"
            outer.addEventListener("click",()=>{
                showmore(idMeal);
            })
            let img = document.createElement("img");
            img.src = strMealThumb
            img.className="imgthum"
            let des = document.createElement("div");
           
            let Name = document.createElement("h2");
            Name.innerText = strMeal
           



            box.append(outer);

            outer.append(img, des);

            des.append(Name);


        })
    }

    let arr=[];

    function showmore(d){
         
        arr.push(d);

        localStorage.setItem("id",JSON.stringify(arr));

        window.location.href="more.html";
         
    }
