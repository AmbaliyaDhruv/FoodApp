async function submitOn(event){
    event.preventDefault();
   let userData={
       name:document.querySelector("#name").value,
       email:document.querySelector("#email").value,
       username:document.querySelector("#user").value,
       password:document.querySelector("#pass").value,
       mobile:document.querySelector("#num").value,
       description:document.querySelector("#des").value,
   }

   userData=JSON.stringify(userData);
   console.log(userData);

   try{

       let url='https://masai-api-mocker.herokuapp.com/auth/register'

       let response= await fetch(url,{
          
           method:'POST',

           body:userData,

           headers:{
               "Content-Type":"application/json",
           },
    });

    let data= await response.json();
    console.log(data);

   }
   catch(er){
       console.log("singin side",er)
   }
}
