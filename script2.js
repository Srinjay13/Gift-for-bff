let myLeads = []
let myadvice=[]
let myslang=[]
let mysong=[]
let myintro=[]
const inputEl = document.getElementById("input-el")
const advice = document.getElementById("advice")
const slang = document.getElementById("slang")
const song = document.getElementById("song")
const intro = document.getElementById("intro")



const inputBtn = document.getElementById("input-btn")



const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    myadvice.push(advice.value)
    myslang.push(slang.value)
    mysong.push(song.value)
    myintro.push(intro.value)
    
    inputEl.value = ""
    advice.value= ""
    slang.value= ""
    song.value= ""
    intro.value= ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    localStorage.setItem("myadvice", JSON.stringify(myadvice) )
    localStorage.setItem("myslang", JSON.stringify(myslang) )
    localStorage.setItem("mysong", JSON.stringify(mysong) )
    localStorage.setItem("myintro", JSON.stringify(myintro) )

    renderLeads()
    renderadvice()
    renderslang()
    rendersong()
    renderintro()

})

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
let leadsFromadvice = JSON.parse( localStorage.getItem("myadvice") )
let leadsFromslang = JSON.parse( localStorage.getItem("myslang") )
let leadsFromsong = JSON.parse( localStorage.getItem("mysong") )
let leadsFromintro = JSON.parse( localStorage.getItem("myintro") )
// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}
if (leadsFromadvice) {
    myadvice = leadsFromadvice
    renderLeads()
}
if (leadsFromslang) {
    myslang = leadsFromslang
    renderLeads()
}
if (leadsFromsong) {
    mysong = leadsFromsong
    renderLeads()
}
if (leadsFromintro) {
    myintro = leadsFromintro
    renderLeads()
}



function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <p>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </p>
        `
    }
    ulEl.innerHTML = listItems  
}

function renderadvice() {
    let listItems = ""
    for (let i = 0; i < myadvice.length; i++) {
        listItems += `
            <p>
                <a target='_blank' href='${myadvice[i]}'>
                    ${myadvice[i]}
                </a>
            </p>
        `
    }
    ulEl.innerHTML = listItems  
}

function renderslang() {
    let listItems = ""
    for (let i = 0; i < myslang.length; i++) {
        listItems += `
            <p>
                <a target='_blank' href='${myslang[i]}'>
                    ${myslang[i]}
                </a>
            </p>
        `
    }
    ulEl.innerHTML = listItems  
}

function rendersong() {
    let listItems = ""
    for (let i = 0; i < mysong.length; i++) {
        listItems += `
            <p>
                <a target='_blank' href='${mysong[i]}'>
                    ${mysong[i]}
                </a>
            </p>
        `
    }
    ulEl.innerHTML = listItems  
}

function renderintro() {
    let listItems = ""
    for (let i = 0; i < myintro.length; i++) {
        listItems += `
            <p>
                <a target='_blank' href='${myintro[i]}'>
                    ${myintro[i]}
                </a>
            </p>
        `
    }
    ulEl.innerHTML = listItems  
}