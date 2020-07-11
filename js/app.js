const share = document.querySelector('.share')
const shareHover = document.getElementById('share-hover')
const cardFooter = document.getElementById('card__footer')
const cardFooterHover = document.getElementById('card__footer--hover')

const shareDesktop = document.getElementById('share-desktop')
const iconDesktop = document.getElementById('icon-desktop')

shareDesktop.addEventListener('click', () => {
    cardFooterHover.classList.toggle('hidden')


})


share.addEventListener('click', (e) => {
    cardFooter.style.zIndex = '-1'
    cardFooterHover.style.zIndex = '10'




})

shareHover.addEventListener('click', (e) => {
    cardFooter.style.zIndex = '10'
    cardFooterHover.style.zIndex = '-1'



})


