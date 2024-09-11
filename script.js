let changeThemeBtn = document.querySelector("themeChenge")
let body = document.querySelector("body")

changeThemeBtn.addEventListener("click", changeTheme)

if(localStorage.getItem("theme") == "dark" ){
    changeThemeBtn.classList.add("darkTheme")
    body.classList.add(dark)
}

function changeTheme() {
    if(localStorage.getItem("theme") == "dark" ){
    // сменить на белую
    changeThemeBtn.classList.remove("darkTheme")
    body.classList.remove(dark)
    localStorage.setItem("theme", "white")
    } else{
        //сменить на темную
        (localStorage.getItem("theme") == "dark" ) 
            changeThemeBtn.classList.add("darkTheme")
            body.classList.add(dark)
            localStorage.setItem("theme", "dark")
    }
  }

     let searchBtn = document.querySelector(".search button")
     searchBtn.addEventListener("click", function(event){
    
    
    })
function searchMovie() {
 loader.style.display = "block"

 let searchText = document.querySelector(".search input").value 
 console.log(searchText)
}


