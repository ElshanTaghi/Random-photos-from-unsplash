function SekilGetir(){
// let inpvalue =document.querySelector("#inp").value;
// // ${inpvalue}
// console.log(inpvalue);
let unsplashID = "https://api.unsplash.com/photos/random/?query=code&client_id=acSY2bw6G7lx1U6ZbxZ2kbxHe8VLBJeN7XwSpwtyibM";
let imageElemet =document.querySelector("#unsplashImage");
    fetch(unsplashID) 
    .then(function (response){
     return response.json();
    })
    .then(function (jsonData){
        // console.log(jsonData) ;
        imageElemet.src = jsonData.urls.regular;
       })
}

