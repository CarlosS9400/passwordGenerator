const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const charNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charNumSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ""
let passwords = []

function generate() {
    let passwordLength = document.getElementById("passwordLength").value;
    let level = document.getElementById("level").value
    let passwordEl = document.getElementById("password")
    
    let charSet = characters
    let charNumSet = charNum
    let charNumSymSet = charNumSymbols
    let numOfPassword = 4

    /* clear the passwords array  and clear the passwords shown on the ui*/
    passwords = []
    passwordEl.innerHTML = ""  

    for (let j = 1; j <= numOfPassword; j++) {
        if (level === "simple") {
            for (let i = 0; i<passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * charSet.length);
                password += charSet[randomIndex];
            }
        } else if (level === "medium") {
        for (let i = 0; i<passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * charNumSet.length);
                password += charNumSet[randomIndex];
            }
        
        } else if (level === "hard") {
            for (let i = 0; i<passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * charNumSymSet.length);
                password += charNumSymSet[randomIndex];
            }
            
        } 

        passwords.push(password)
        password = ""
    }

    for (let i = 0; i < passwords.length; i++) {
        passwordEl.innerHTML += `
        <div class="password-card">
            <button class="copy" onclick="copyPassword('${passwords[i]}')">${passwords[i]}</button>
        </div>`
    }

    
    
}

function changeLength() {
    let passwordLength = document.getElementById("passwordLength").value;
    let lengthValueEl = document.getElementById("length-value")
    lengthValueEl.textContent = passwordLength;
}

function copyPassword(password){
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy password:', err);
    });
}








