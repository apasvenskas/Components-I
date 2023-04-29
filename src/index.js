import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'

function articleMaker(title){
    const article = document.createElement('div');
    article.classList.add('article');
   
    const name = document.createElement('h2');
    name.textContent = article.name;
    article.appendChild(title);
    
    const paragraph = document.createElement('p');
    paragraph.classList.add('date');
    paragraph.textContent = article.paragraph;
    article.appendChild(paragraph)
    
    for(let i=0; i< article.paragraphs.length; i++){
        const paragraph2 = document.createElement('p');
        article.appendChild(paragraph2);
    }

   
    const expand = document.createElement('span');
    expand.classList.add('expandButton');
    expandButton.textContent = '+';
    expand.addEventListener('click', () => {
        article.classList.toggle('article-open');
    });
    article.appendChild(expand);

    return article; 
}