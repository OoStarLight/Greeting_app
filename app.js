let menCounter = document.getElementById("count-man")
let countMen = 0

let womenCounter = document.getElementById("count-woman")
let countWomen = 0

let totalP = document.getElementById("total-people")
let totalPpl = 0

let pourcentageMen = document.getElementById("prc-man")
let pourMen = 0

let pourcentageWomen = document.getElementById("prc-woman")
let pourWomen = 0


function foundMan(){
    countMen = countMen + 1
    menCounter.innerText = countMen
}

function foundWoman(){
    countWomen = countWomen + 1
    womenCounter.innerText = countWomen
}

function total(){
    totalPpl = countMen + countWomen
    totalP.innerText = totalPpl

    pourMen = Number((countMen*100)/totalPpl)
    pourcentageMen.innerText = `There are ${Math.round(pourMen)}% of Men`

    pourWomen = Number((countWomen*100)/totalPpl)
    pourcentageWomen.innerText = `There are ${Math.round(pourWomen)}% of Women`
}
