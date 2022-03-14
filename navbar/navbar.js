function navbar(){

    return `<div class="navbar">

   <a href="index.html"><img  class="imgLogo"src="https://t4.ftcdn.net/jpg/02/05/35/83/240_F_205358373_KWHghj12tHHbyLNfwI1hcuO5wY7fCw1N.jpg"
        alt="IMDb logo" height="59px" width="5%"></a> 

    <div class="mainbox">
        <input type="text" id="Name"  placeholder="Debounceing...">
        <button id="search">Search</button>
        <a href="recipeOfday.html">Recipeofday</a> 
        <a href="latest.html">Lates Recipe</a>
        <a href="singin.html">Singin</a>
        <a href="login.html">Login</a>
        <h4></h4>
    </div>
   
</div>
`
}

export default navbar 