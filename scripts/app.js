const allSections = document.querySelectorAll("section")
const allNavbuttons = document.querySelectorAll("li")

const navButtonHome = document.getElementById("btnHome").addEventListener('click', e => { selectPage(0) })
const navButtonAbout = document.getElementById("btnAbout").addEventListener('click', e => { selectPage(1) })
const navButtonProjects = document.getElementById("btnProjects").addEventListener('click', e => { selectPage(2) })
const navButtonContact = document.getElementById("btnContact").addEventListener('click', e => { selectPage(3) })


function resetSelected() {
    allSections.forEach(item => item.classList.remove("activeSection"))
    allNavbuttons.forEach(item => item.classList.remove("selected"))
}


function selectPage(index) {
    resetSelected()
    allSections[index].classList.add("activeSection")
    allNavbuttons[index].classList.add("selected")
}

