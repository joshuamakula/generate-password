const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.querySelector('.password1-el')
let password2El = document.querySelector('.password2-el')

function generatePassword() {
    for(let i = 0; i < 15; i++) {
    let randomPass = Math.floor(Math.random() * characters.length)
    password1El.textContent += characters[randomPass]
   
    }
    console.log("************************")
    for(let i = 0; i < 15; i++) {
        let randomPass = Math.floor(Math.random() * characters.length)
        password2El.textContent += characters[randomPass]
    }
}