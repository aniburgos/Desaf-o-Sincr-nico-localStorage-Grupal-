document.addEventListener("DOMContentLoaded", ()=>{
    
    let boton = document.getElementById("buttonText");
    boton.addEventListener("click", ()=>{
        let setinput = document.getElementById("inputText").value
        return localStorage.setItem("texto", setinput);
    })
})