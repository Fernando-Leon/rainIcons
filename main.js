const displayMain = document.getElementById("main-conatainer");
const listIcons = ["american", "baisboll", "basketball", "bat", "billiard", "bowling", "football", "tennis", "volleyball"];// Icon List

const functionRandoms = (max, min) => { return Math.floor(Math.random() * (max - min) + min); } // Generate randoms numbers between two numbers

const addIcon = () => { //Generate a new icon
    let contIcon = document.createElement("IMG");
    let time = functionRandoms(10, 4); // Generate a random time between two numbers, It will be the time that the animation of the icon will last
    contIcon.setAttribute("class", "icon");
    contIcon.src = `SVGS/${listIcons[functionRandoms(listIcons.length, 0)]}.svg`; // We assign the address of a random icon
    contIcon.style.left = `${functionRandoms(95, 0)}%`; // We assign a random coordinate in x bassed on the width of the screen 
    contIcon.style.animation = `rainItem ${time}s`; 
    displayMain.appendChild(contIcon);
    setTimeout(() => { // Remove the icon after the allotted time in the animation
        displayMain.removeChild(contIcon);
    }, `${time * 1000}`); // The time it multiplies by 1000 for convert to miliseconds
}

setInterval(()=> { addIcon(); }, 200); // Execute the addIcon() function after a specified time in milliseconds
