async function dog()
{
   let obj = await fetch("https://dog.ceo/api/breeds/image/random");
   let data = await obj.json();
   return data;
}

let btn = document.getElementById("fetchData");
btn.addEventListener("click", function(e){
    console.log("button was clicked.");

    dog().then((data)=>{
        console.log(data);

        let page = document.getElementById("data");

        page.innerHTML = `<img src="${data.message}">`;
    })
    .catch((err)=>{
        console.log(err)
    });



})