document.addEventListener("DOMContentLoaded", ()=>{
    var textoadd = localStorage.getItem("texto")
    let spanid = document.getElementById("data")
    spanid.innerText = textoadd;
})