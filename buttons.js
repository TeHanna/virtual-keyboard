const buttons = [
  { 
    codeKey: 'Backquote', en: '`', ru: 'ё', shift: '~', 
  },
  {
    codeKey: 'Digit1', en: '1', ru: '1', shift: '!',
  },
  {
    codeKey: 'Digit2', en: '2', ru: '2', shift: '@',
  },
  {
    codeKey: 'Digit3', en: '3', ru: '3',  shift: '#',
  },
  {
    codeKey: 'Digit4', en: '4', ru: '4', shift: '$',
  },
  {
    codeKey: 'Digit5', en: '5', ru: '5', shift: '%',
  },
  {
    codeKey: 'Digit6', en: '6', ru: '6', shift: '^',
  },
  {
    codeKey: 'Digit7', en: '7', ru: '7', shift: '&',
  },
  {
    codeKey: 'Digit8', en: '8', ru: '8', shift: '*',
  },
  {
    codeKey: 'Digit9', en: '9', ru: '9', shift: '(',
  },
  {
    codeKey: 'Digit0', en: '0', ru: '0', shift: ')',
  },
  {
    codeKey: 'Minus', en: '-', ru: '-', shift: '_',
  },
  {
    codeKey: 'Equal', en: '=', ru: '=', shift: '+',
  },
  {
    codeKey: 'Backspace', en: 'Backspace', ru: 'Backspace', shift: 'Backspace',
  },
  {
    codeKey: 'Tab', en: 'Tab', ru: 'Tab', shift: 'Tab',
  },
  {
    codeKey: 'KeyQ', en: 'q', ru: 'й', shift: 'й',
  },
  {
    codeKey: 'KeyW', en: 'w', ru: 'ц', shift: 'ц',
  },
  {
    codeKey: 'KeyE', en: 'e', ru: 'у', shift: 'у',
  },
  {
    codeKey: 'KeyR', en: 'r', ru: 'к', shift: 'к',
  },
  {
    codeKey: 'KeyT', en: 't', ru: 'е', shift: 'е',
  },
  {
    codeKey: 'KeyY', en: 'y', ru: 'н', shift: 'н',
  },
  {
    codeKey: 'KeyU',  en: 'u', ru: 'г', shift: 'г',
  },
  {
    codeKey: 'KeyI', en: 'i', ru: 'ш', shift: 'ш',
  },
  {
    codeKey: 'KeyO', en: 'o', ru: 'щ', shift: 'щ',
  },
  {
    codeKey: 'KeyP', en: 'p', ru: 'з', shift: 'з',
  },
  {
    codeKey: 'BracketLeft', en: '[', ru: 'х', shift: 'х',
  },
  {
    codeKey: 'BracketRight', en: ']', ru: 'ъ', shift: 'ъ',
  },
  {
    codeKey: 'Backslash', en: '\\', ru: '\\', shift: '\\',
  },
  {
    codeKey: 'Delete', en: 'Del', ru: 'Del', shift: 'Del',
  },
  {
    codeKey: 'CapsLock', en: 'CapsLock', ru: 'CapsLock', shift: 'CapsLock',
  },
  {
    codeKey: 'KeyA', en: 'a', ru: 'ф', shift: 'ф',
  },
  {
    codeKey: 'KeyS', en: 's', ru: 'ы', shift: 'ы',
  },
  {
    codeKey: 'KeyD', en: 'd', ru: 'в', shift: 'в',
  },
  {
    codeKey: 'KeyF', en: 'f', ru: 'а', shift: 'а',
  },
  {
    codeKey: 'KeyG', en: 'g', ru: 'п', shift: 'п',
  },
  {
    codeKey: 'KeyH', en: 'h', ru: 'р', shift: 'р',
  },
  {
    codeKey: 'KeyJ', en: 'j', ru: 'о', shift: 'о',
  },
  {
    codeKey: 'KeyK', en: 'k', ru: 'л', shift: 'л',
  },
  {
    codeKey: 'KeyL', en: 'l', ru: 'д', shift: 'д',
  },
  {
    codeKey: 'Semicolon', en: ';', ru: 'ж', shift: 'ж',
  },
  {
    codeKey: 'Quote', en: "'", ru: 'э', shift: 'э',
  },
  {
    codeKey: 'Enter', en: 'Enter', ru: 'Enter', shift: 'Enter',
  },
  {
    codeKey: 'ShiftLeft', en: 'Shift', ru: 'Shift', shift: 'Shift',
  },
  {
    codeKey: 'KeyZ', en: 'z', ru: 'я', shift: 'я',
  },
  {
    codeKey: 'KeyX', en: 'x', ru: 'ч', shift: 'ч',
  },
  {
    codeKey: 'KeyC', en: 'c', ru: 'с', shift: 'с',
  },
  {
    codeKey: 'KeyV', en: 'v', ru: 'м', shift: 'м',
  },
  {
    codeKey: 'KeyB', en: 'b', ru: 'и', shift: 'и',
  },
  {
    codeKey: 'KeyN', en: 'n', ru: 'т', shift: 'т',
  },
  {
    codeKey: 'KeyM', en: 'm', ru: 'ь', shift: 'ь',
  },
  {
    codeKey: 'Comma', en: ',', ru: 'б', shift: 'б',
  },
  {
    codeKey: 'Period', en: '.', ru: 'ю', shift: 'ю',
  },
  {
    codeKey: 'Slash', en: '/', ru: '.', shift: '.',
  },
  {
    codeKey: 'ArrUp', en: '↑', ru: '↑', shift: '↑',
  },
  {
    codeKey: 'ShiftRight', en: 'Shift', ru: 'Shift', shift: 'Shift',
  },
  {
    codeKey: 'CtrllLeft', en: 'Ctrl', ru: 'Ctrl', shift: 'Ctrl',
  },
  {
    codeKey: 'AltLeft', en: 'Alt', ru: 'Alt', shift: 'Alt',
  },
  {
    codeKey: 'Space', en: ' ', ru: ' ', shift: ' ',
  },
  {
    codeKey: 'AltRight', en: 'Alt', ru: 'Alt', shift: 'Alt',
  },
  {
    codeKey: 'ArrLeft', en: '←', ru: '←', shift: '←',
  },
  {
    codeKey: 'ArrDown', en: '↓', ru: '↓', shift: '↓',
  },
  {
    codeKey: 'ArrRight', en: '→', ru: '→', shift: '→',
  },
  {
    codeKey: 'CtrlRight', en: 'Ctrl', ru: 'Ctrl', shift: 'Ctrl',
  },

]

export default buttons;
