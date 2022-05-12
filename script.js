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
textarea.classList.add('textarea');
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


const clickOnKeyboard = () => {
  const textView = document.querySelector('.textarea');
  const keys = document.querySelectorAll('.key');
  window.addEventListener('click', e => {
    
    document.querySelector(`.key[data-code="${e.target.dataset.code}"]`).classList.add('active')
    setTimeout(() => document.querySelectorAll('.key').forEach(function(el) {
    el.classList.remove('active') 
  }), 200)

    for (let i = 0; i < keys.length; i++) {
      console.log(e.target.dataset.code)
      if (e.target.dataset.code === 'Tab') {
        textView.value += '    ';
        break;
      }

      if (e.target.dataset.code === 'Space') {
        textView.value += ' ';
        break;
      }

      if (e.target.dataset.code === 'ShiftRight' || e.target.dataset.code === 'AltRight' || e.target.dataset.code === 'CtrlRight' || e.target.dataset.code === 'AltLeft' || e.target.dataset.code === 'CtrlLeft' || e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'CapsLock') {
        textView.value += '';
        break;
      }

      if (e.target.dataset.code === 'Enter') {
        textView.value += '\n';
        break;
      }

      if (e.target.dataset.code === 'Backspace') {
        textView.value = textView.value.substring(0, textView.value.length - 1);
        break;
      }

      if (e.target.dataset.code === 'Delete') {
        textView.value = textView.value.substring(0, textView.value.length - 1);
        break;
      }

      if (e.target.dataset.code) {
        textView.value += e.target.textContent;
        break;
      }

    }
    
  });
};

clickOnKeyboard();

document.addEventListener('keydown', function (e) {
  textarea.focus();
  //console.log(e.key);
  document.querySelector(`.key[data-code="${e.code}"]`).classList.add('active')
  console.log(document.querySelector(`.key[data-code="${e.code}"]`))
      setTimeout(() => document.querySelectorAll('.key').forEach(function(elem) {
      elem.classList.remove('active') 
    }), 200)
})


