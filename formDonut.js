



let inputs = document.querySelectorAll('input')
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch('https://sheetdb.io/api/v1/mhbjwyvvc2n6q', {
    method: 'POST',
    body: data
  }).then(function (response) {
    alert('Enviado')
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = ''

    }

  });
});



