// Criação do campo de entrada

let pesquisar = document.querySelector('#pesquisar')
let print = document.querySelector('#print')
let btnPedidos = document.querySelector('#btnPedidos')
let itens = document.querySelector('.itens')
let btnfechar = document.querySelector('#btnfechar')


btnPedidos.addEventListener('click', () =>{
  print.style.display = 'none'
  itens.style.display = 'block'
})

btnfechar.addEventListener('click', () =>{
  print.style.display = 'block'
  itens.style.display = 'none'
})




fetch('https://sheetdb.io/api/v1/mhbjwyvvc2n6q')
  .then(response => response.json())
  .then(data => {
    const divMinhalista = document.getElementById('produtos');
    const totalGeral = document.getElementById('total');

    // Evento de escuta para o campo de entrada
    document.getElementById('pesquisar').addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Limpa a lista antes de adicionar itens filtrados
      divMinhalista.innerHTML = '';

      data.filter(item => item.Dia.toLowerCase().includes(searchTerm)).forEach(item => {
        const descricao = document.createElement('p');
        const dia = document.createElement('p');
        const valor = document.createElement('h5');
        const cliente = document.createElement('h4');
        const Geral = document.createElement('p');
        Geral.textContent = `Total Geral: ${item.Total}`
        descricao.textContent = `Produto: ${item.Produto}`;
        valor.textContent = `Valor: ${item.Valor}`;
        dia.textContent = `Dia: ${item.Dia}:`
        cliente.textContent = `Cliente: ${item.Cliente}`

        divMinhalista.appendChild(Geral);
        divMinhalista.appendChild(dia);
        divMinhalista.appendChild(valor);
        divMinhalista.appendChild(descricao);
        divMinhalista.appendChild(cliente);
 
  
      });
    });
  })
  .catch(error => console.error('Erro:', error));
