const cube = document.querySelector('.red');
const button = document.getElementById("moveDiv");
const modal = document.querySelector('.modal');
const hide = document.getElementById('hideModal');
let countClick = 0;

// button.addEventListener('click', () => {
//     countClick +=1;
//     console.log(countClick);
//     if(countClick === 1){
//         cube.classList.add("droite")
//     }else if(countClick === 2){
//         cube.classList.add("bas")
//     }else if(countClick === 3){
//         cube.classList.add("gauche")
//     }else if(countClick === 4){
//         cube.classList.add("haut")
//         modal.classList.add("active")
//     }else if(countClick === 5){
//         countClick = 0
//         cube.classList.remove("droite", "bas", "gauche", "haut")
//         modal.classList.remove("active")
//     }
// })

// hide.addEventListener("click", () =>{
//     modal.classList.remove("active")
// })


button.addEventListener('click', () => {
    countClick +=1;
    switch(countClick){
    case 1:
        cube.classList.add("droite");
        break;
    case 2:
        cube.classList.add("bas");
        break;
    case 3:
        cube.classList.add("gauche");
        break;
    case 4:
        cube.classList.add("haut");
        modal.classList.add("active");
        break;
    case 5:
        countClick = 0
        cube.classList.remove("droite", "bas", "gauche", "haut");
        modal.classList.remove("active");
        break;
    }
})

hide.addEventListener("click", () =>{
    modal.classList.remove("active");
})