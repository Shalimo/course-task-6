/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const blocks = document.querySelectorAll('.promo__adv img');
const background = document.querySelector('.promo__bg');
const genre = background.querySelector('.promo__genre');
const list = document.querySelector('.promo__interactive-list');
const add = document.querySelector('.add');
const textInput = add.querySelector('.adding__input');
const checkbox = document.querySelector('[type="checkbox"]');

add.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = textInput.value;

    if (newFilm) {
        if (checkbox.checked) {
            console.log('Добавлен новый фильм');
        }
    }

    if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
    }

    if (newFilm == "") {
       alert('Вы ничего не ввели'); 
    } else {
        movieDB.movies.push(newFilm);
        addFilm();
        
    }
    event.target.reset();
});

const removeBlock = (adv) => {
    adv.forEach(item => {
        item.remove();
    });
    //for (let imgs of blocks) {
    //    imgs.remove();
    //}

};

const changeContent = () => {
    genre.textContent = 'драма';
    background.style.backgroundImage = 'url("img/bg.jpg")';
};

const sorting = (array) => {
    array.sort();
};

function addFilm() {
    list.innerHTML = "";
    sorting(movieDB.movies);
    movieDB.movies.forEach(function(item, i) {
    list.innerHTML += `
    <li class="promo__interactive-item">${i+1}: ${item}
    <div class="delete"></div>
    </li>
    `;
});

    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addFilm();
            
    });
});

}

removeBlock(blocks);
changeContent();
addFilm();


