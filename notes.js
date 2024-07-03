// selecting popupbtn
var popupbtn=document.getElementById("popupbtn")
popupbtn.addEventListener("click",function(){
    ownbook.style.display="block"
    blackscreen.style.display="block"
})

// selecting closepopup,ownbook,blackscreen
var closepopup=document.getElementById("closepopup")
var ownbook=document.querySelector(".ownbook")
var blackscreen=document.querySelector(".blackscreen")
closepopup.addEventListener("click",function(){
    ownbook.style.display="none"
    blackscreen.style.display="none"
})

// selecting booktitle,bookauthor,content,addbook,containers
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var content=document.getElementById("content")
var addbook=document.getElementById("addbook")
var containers=document.querySelector(".containers")
addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
      <h3>${bookauthor.value}</h3>
      <p>${content.value}</p>
      <button onclick="deletebook(event)">Delete</button>`
      containers.append(div)
})
addbook.addEventListener("click",function(){
    ownbook.style.display="none"
    blackscreen.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
