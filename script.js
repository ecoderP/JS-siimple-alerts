function simpleAlert() {
    userName = prompt("Welcome! Please enter your name: ");
    userHeight = prompt("Enter your height in meters: ");
    userCountry = prompt("Which country do you reside? ");
    alert(`Hello ${userName}, you're ${userHeight} meters tall and from ${userCountry}`)
}
simpleAlert()