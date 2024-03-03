document.querySelectorAll('.skill-level').forEach(item => {
  const level = item.getAttribute('data-level');
  item.style.width = `${level}%`;
  item.addEventListener('mouseover', function() {
      item.style.width = '100%';
  });
  item.addEventListener('mouseout', function() {
      item.style.width = `${level}%`;
  });
});


// ____________________Carousel_________________

let currentIndex = 0;
let items = document.querySelectorAll(`.carousel-item`);

function showItem(index){
  items.forEach((item, i)=> {
    item.style.transform = `translateX(${(i-index)* 100}%)`;
  });
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
}

function prevItem() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
}
showItem(currentIndex);

// setInterval(nextItem, 5000);