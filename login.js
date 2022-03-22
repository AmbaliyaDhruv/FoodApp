let arr=[];
   
async function loginOn(event){
    event.preventDefault();
    let loginData={
     password:document.querySelector("#user").value,
     username:document.querySelector("#name").value,
    }

    loginData=JSON.stringify(loginData);

    console.log(loginData)
    
    try{
         let url='https://masai-api-mocker.herokuapp.com/auth/login'
         let response= await fetch(url,{
             method:"POST",
             
             body:loginData,

             headers:{
                 "Content-Type":"application/json",
             }

         });
         let data=await response.json();
         console.log(data);
         let username=document.querySelector("#name").value
         getUser(username,data.token)
        
    }
    catch(er){
        console.log("login side",er)
    }
}


async function getUser(username,token){

 try{
    let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;

    let response1= await fetch(api,{
         
         headers:{
             "Content-Type":"application/json",
              Authorization:`Bearer ${token}`,
         },

         
    });
    
    let data1=  await response1.json();
    console.log(data1.name);
    arr.push(data1.name);
    localStorage.setItem("NameData",JSON.stringify(arr));
   
     window.location.href="index.html"
   
    


 }

 catch (er){
     console.log("getUser Name side",er);
 }
}
