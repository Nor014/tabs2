let articles = document.querySelector('.tabs-content').children
let list = document.querySelector('.tabs-nav')

for (let article of articles) {
  article.classList.add('hidden')
  let demoTab = document.querySelector('.tabs-nav li').cloneNode(true);
  demoTab.firstElementChild.innerHTML = article.dataset.tabTitle;
  demoTab.firstElementChild.className = article.dataset.tabIcon;
  list.appendChild(demoTab)
}

list.firstElementChild.parentNode.removeChild(list.firstElementChild);
list.firstElementChild.classList.add('ui-tabs-active');
document.querySelector('.tabs-content').firstElementChild.classList.remove('hidden')

let tabs = list.children;

for (let tab of tabs) {
  tab.firstElementChild.addEventListener('click', onClick)
}

function onClick() {

  Array.from(tabs).forEach(el => el.classList.remove('ui-tabs-active'));
  event.target.parentNode.classList.add('ui-tabs-active');
  let currentArticle;

  Array.from(articles).forEach(function (el) {
    el.classList.add('hidden');
    let title = el.dataset.tabTitle;
    if (title.toUpperCase() === event.currentTarget.innerText) currentArticle = el;
  });

  currentArticle.classList.remove('hidden')
}
