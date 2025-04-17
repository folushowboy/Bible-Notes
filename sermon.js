// alert("connected")

document.getElementById("enter").addEventListener("click", Enter)

//create the function "Enter"
function Enter(){
   let words = document.getElementById("text").value
    //console.log(words) 
    document.getElementById("messages").textContent = words
    
   
}

document.getElementById("clear").addEventListener("click", Clear)

//create the function "Enter"
function Clear(){
    document.getElementById("messages").textContent = ""
    document.getElementById("text").value = ""
}
