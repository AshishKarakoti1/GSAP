var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(val){
    gsap.to(cursor, {
        x:val.x,
        y:val.y,
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "ak"
    gsap.to(cursor, {
        scale:3,
        backgroundColor:"#ffffff9a"
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"#fff"
    })
})