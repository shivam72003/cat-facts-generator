let url  = "https://catfact.ninja/fact";
let btn = document.querySelector("button")
let h2 = document.querySelector("h2")



async function loadFacts(){
     try{
        let res = await fetch(url);
         data = await res.json();
        console.log(data.fact)
        if(data.fact){
            h2.innerText = data.fact
        }
          
    }
    catch(err){
     
        console.log("ERROR--",err)
    };
    
}



btn.addEventListener("click",()=>{
    loadFacts();
})


