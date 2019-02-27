let allCovers = document.querySelectorAll('.cover');

const infoUp = (e) => {
  e.target.classList.add('infoUp');
    e.target.classList.remove('infoDown');
}
const infoDown = (e) => {
  e.target.classList.remove('infoUp');
  e.target.classList.add('infoDown');
}

for (let i = 0 ; i < allCovers.length; i++) {
  let cover = allCovers[i];
  cover.addEventListener('mouseenter' , infoUp);
  cover.addEventListener('mouseleave' , infoDown);
}
