let btn = document.querySelector('#turn-on-off')
let body = document.querySelector('body')
let bulbon = document.querySelector('#bulb_on')
let bulboff = document.querySelector('#bulb_off')

btn.addEventListener('click', () => {
  bulbon.classList.toggle('none')
  bulboff.classList.toggle('none')
  bulbon.classList.contains('none')
    ? (btn.innerText = 'Ligar')
    : (btn.innerText = 'Desligar')

  body.classList.toggle('dark')
})
