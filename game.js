var width = 0
var height = 0
var time = 60
var timeLevel = 1500
var level = window.location.search.replace("?", "")

if (level === "easy") {
    timeLevel = 2000
} else if (level === "hard") {
    timeLevel = 1000
} else if (level === "killer") {
    timeLevel = 700
}

function adjustSize() {
    width = window.innerWidth
    height = window.innerHeight
}

var cronometer = setInterval(function() {
    time--
    if (time < 0) {
        clearInterval(cronometer)
        clearInterval(createMosquito)
        window.location.href = "victory.html"
    } else {
        document.getElementById('cronometer').innerHTML = time
    }
}, 1000)

var i = 1
function mosquito() {
    adjustSize()
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()
        if (i <= 3) {
            document.getElementById('life' + i).src = "imagens/heart_empty.png"
            i++//here goes to the next image
        } else {
            window.location.href = "game-over.html"
        }
    }

    var x = Math.floor(Math.random() * width - 90)
    var y = Math.floor(Math.random() * height - 90)

    x = (x < 0) ? 0 : x
    y = (y < 0) ? 0 : y

    var mosquito = document.createElement("img")
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.position = "absolute"
    mosquito.style.left = x + "px"
    mosquito.style.top = y + "px"
    mosquito.id = "mosquito"
    mosquito.onclick = function() {
        this.remove()
    }
    document.body.appendChild(mosquito)
}

function randomSize() {
    var classSize = Math.floor(Math.random() * 3)
    
    if (classSize == 0) return "mosquito1"
    else if (classSize == 1) return "mosquito2"
    else if (classSize == 2) return "mosquito3"
}

function randomSide() {
    var classSide = Math.floor(Math.random() * 2)
    
    if (classSide == 0) return "ladoA"
    else if (classSide == 1) return "ladoB"
}

function setLevel() {
    let level = document.getElementById('level').value
    if (level === '') {
        alert("Select a game level")
        return false
    }
    window.location.href = 'game.html?' + level//to send the parameter 'level' to create a 'timeLevel'
}