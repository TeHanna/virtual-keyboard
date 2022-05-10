import buttons from './buttons.js';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const textTitle = document.createElement('p');
wrapper.classList.add('wrapper');
textTitle.classList.add('text-title');
textTitle.innerHTML = 'Виртуальная клавиатура';
body.appendChild(wrapper);
wrapper.appendChild(textTitle);

const textarea = document.createElement('textarea');
wrapper.appendChild(textarea);
textarea.setAttribute('rows', '8');
textarea.setAttribute('cols', '100')

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

let i;
class Button {
  constructor(item) {
    this.item = item[i].en;
    this.ru = item[i].ru;
    this.shift = item[i].shift;
    this.codeKey = item[i].codeKey;
  }
}

for (i = 0; i < buttons.length; i++) {

  let newButton = new Button(buttons);

  let key = document.createElement('div');
  keyboard.appendChild(key);
  key.innerHTML = newButton.item;
  key.setAttribute('data-code', newButton.codeKey)

  if (newButton.item == 'Backspace' || newButton.item == 'CapsLock') {
    key.classList.add('key-long');
  }
  if (newButton.item == 'Tab' || newButton.item == 'Ctrl' || newButton.item == 'Del') {
    key.classList.add('key-middle');
  }
  if (newButton.item == 'Shift') key.classList.add('key-shift');
  if (newButton.item == ' ') key.classList.add('key-space');
  if (newButton.item == 'Enter') key.classList.add('key-enter');

  key.classList.add('key');

  if (newButton.item == 'Tab' || newButton.item == 'Ctrl' || newButton.item == 'Del' || newButton.item == 'Backspace' || newButton.item == 'CapsLock' || newButton.item == 'Shift' || newButton.item == 'Enter' || newButton.item == ' ' || newButton.item == 'Alt' || newButton.item == '←' || newButton.item == '↓' || newButton.item == '→' || newButton.item == '↑') {
    key.classList.add('color-dark');
  }
}

const textBottom = document.createElement('p');
textBottom.classList.add('text-bottom');
textBottom.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe ctrl + alt';
wrapper.appendChild(textBottom);

document.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.classList.contains('key')){
    let letter = event.target.innerHTML;
    textarea.innerHTML += letter;

    setTimeout(() => document.querySelectorAll('.key').forEach(function(el) {
      el.classList.remove('active')
    }), 350)
    event.target.classList.add('active')
  }
})



//console.log(buttons[2].codeKey) // 2
