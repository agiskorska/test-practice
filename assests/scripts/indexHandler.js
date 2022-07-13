document.addEventListener('keydown', (e) => {
    const keyName = e.key
    appendParagraph(keyName)
})


const appendParagraph = (key) => {
    const child = document.createElement('p')
    child.innerText = key
    document.querySelector("section").appendChild(child)

}