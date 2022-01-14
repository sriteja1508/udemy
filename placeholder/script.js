const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://m.media-amazon.com/images/I/71fvR6NCIFL._SL1500_.jpg" alt="" />'
  title.innerHTML = 'Hello Everyone'
  excerpt.innerHTML =
    'Iam sritheja, im from hyderabad.'
  profile_img.innerHTML =
    '<img src="file:///C:/Users/Ennea%20Solution/Downloads/IMG_1583.JPG" alt="" />'
  name.innerHTML = 'sritheja'
  date.innerHTML = 'jan 14, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}