let list = document.querySelectorAll(".item")
let vai = document.getElementById("vai")
let volta = document.getElementById("volta")


let count = list.length
let cima = 0

console.log(list)

vai.onclick = () => {
    let activeOld = document.querySelector(".cima")
    activeOld.classList.remove("cima")
    

    cima = cima >= count -1 ? 0 : cima + 1
    list [cima].classList.add("cima")

}

volta.onclick = () => {
    let activeOld = document.querySelector(".cima")
    activeOld.classList.remove("cima")

    cima = cima >= count -1 ? 0 : cima + 1
    list [cima].classList.add("cima")

}
