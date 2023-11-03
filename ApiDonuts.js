// Criação do campo de entrada

let pesquisar = document.querySelector('#pesquisar')
let print = document.querySelector('#print')
let btnPedidos = document.querySelector('#btnPedidos')
let itens = document.querySelector('.itens')
let btnfechar = document.querySelector('#btnfechar')


btnPedidos.addEventListener('click', () => {
  print.style.display = 'none'
  itens.style.display = 'block'
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
          const Geral = document.createElement('h5');
          Geral.textContent = `Total: ${item.TotalLiquido}`
          descricao.textContent = `Produto: ${item.Produto}`;

          valor.textContent = `Valor: ${item.Valor}`;
          dia.textContent = `Dia: ${item.Dia}:`
          cliente.textContent = `Cliente: ${item.Cliente}`
          divMinhalista.appendChild(Geral);
          divMinhalista.appendChild(dia);
          divMinhalista.appendChild(cliente);
          divMinhalista.appendChild(valor);
          divMinhalista.appendChild(descricao);
          // if (descricao ||)


        });
      });
    })
    .catch(error => console.error('Erro:', error));

})
let saiu = document.querySelector('.saiu')

function fechar() {

  print.style.display = 'block'
  itens.style.display = 'none'
  saiu.style.display = 'none'
  print.style.display = 'block'

}





let btnSaida = document.querySelector('#btnSaida')

btnSaida.addEventListener('click', () => {
  saiu.style.display = 'block'
  print.style.display = 'none'
  fetch('https://sheetdb.io/api/v1/mhbjwyvvc2n6q').then(resposta => {
    return resposta.json()
  }).then(res => {

    const totalSaida = document.createElement('h3')
    for (let i = 0; i < res.length; i++) {
      const OndeComprou = document.createElement('p')
      const valorCompra = document.createElement('p')
      if (res[i].ValorSaida === '') {
        continue;
      }

      valorCompra.innerHTML = `Valor Compra: R$${res[i].ValorSaida}`
      OndeComprou.innerHTML = `Mercado: <strong>${res[i].Compra}</strong>`
      totalSaida.innerHTML = `Total de saída: R$${res[0].Saida}`
      saiu.appendChild(OndeComprou)
      saiu.appendChild(valorCompra)
      saiu.appendChild(totalSaida)


      // OndeComprou.textContent = res[0].Saida

      // console.log(res[i].ValorSaida)
      // console.log(res)
    }

  }).catch(error => {
    console.error(`Erro ao buscar dados: ${error}`);
  });
});