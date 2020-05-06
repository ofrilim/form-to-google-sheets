console.log('index.js is connected to html');

const scriptURL = 'https://script.google.com/macros/s/AKfycbygXx0Hc3E48mDgmW4g9qZJapBM32XpDROl6kCh53V0yzR5C0zH/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
   
    Swal.fire({
        title: 'Success!',
        text: 'Your details have been saved!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: 'hsla(267, 10%, 52%, 1)'
    })
      
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))

    form.reset()
})
