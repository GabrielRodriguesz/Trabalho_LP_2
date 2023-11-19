/** 
* @param {string} url - Link para API.
* @param {number} ddd - DDD digitado pelo usuário.
*/

// variavel contendo o link da API
const url = `https://brasilapi.com.br/api/ddd/v1`  
    

//Inicio da função
function fetchDdd(event) {
    event.preventDefault()//Evitando a tualização do site
    const ddd = document.getElementById('numero').value //Recebendo o DDD do fotmulário html
    const estado = document.getElementById('estado')//Identificando o campo para ser preenchido posteriormente
    const selectCidades = document.getElementById('cidades')//Identificando o campo do select para ser preenchido posteriormente
    selectCidades.innerHTML = '<option value="" selected disabled>Selecione sua cidade</option>'//Criando o option no html

    fetch(`${url}/${ddd}`)//Iniciando o fetch
        .then(response => response.json())
        .then(data => {
            estado.value = data.state //Acrecentando o estado ao campo
            data.cities.forEach((cidade, index) => { //Repetição para adicionar as cidades no select
                const option = document.createElement('option');
                option.value = index;
                option.textContent = cidade;
                selectCidades.appendChild(option);
            });
        }
        )
        .catch(error => alert('Digite um DDD existente!',error)); //Mandando uma mensagem ao usuário caso dê errado
}

