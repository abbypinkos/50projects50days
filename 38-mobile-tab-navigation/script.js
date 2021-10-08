const content = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContent()
        hideAllItems()

        item.classList.add('active')
        content[idx].classList.add('show')
    })
})

function hideAllContent() {
    content.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}