import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'

function articleMaker(title){
    const article = document.createElement('div');
    article.classList.add(article);
    const name = document.createElement(h2);
    name.textContent.add(title);
    const paragraph = document.createElement(p);
    paragraph.classList.add(date);
    paragraph.textContent.add('date of the article');
    const expand = document.createElement(span);
    expand.classList(expandButton);
    expand.addEventListener('click', (event) => {
        expand('the button cliked expands')
    })

    return articleMaker; 
}