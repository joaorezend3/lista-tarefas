
const form = document.getElementById('form');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const item = document.createElement('li');
    item.innerText = input.value;

    item.addEventListener('click' , function () {
        item.classList.toggle('completed'); 
});

lista.appendChild(item);

input.value ="";
}); 