// Variables & Selectors
const labels = document.querySelectorAll('.form-control label');


// Event Listeners



// Functions
labels.forEach(label => {
  label.innerHTML = label.innerText
    // turn our string into array of each character
    .split('')
    // return array with defined function, add style to span to create delay
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // convert array back to string
    .join('')
})