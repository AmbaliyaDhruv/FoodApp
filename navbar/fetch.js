async function call(url){
    try{
          let res=await fetch(url)

          let data=await res.json();

          return data ;
    }
    catch(er){
       return er;
    }
}


export default call ;