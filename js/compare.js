//car
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image,
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

function obterPosicaoCarroArray(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}

function definirCarroParaComparacao(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      if (carArr.length >= 2) {
        alert('Máximo de 2 carros para comparação');
        el.checked = false;
        return;
      }
      carArr.push(carClass);
    } else {
      let posicao = obterPosicaoCarroArray(carArr, carClass);
      if (posicao !== -1) {
        carArr.splice(posicao, 1);
      }
    }
  } else {
    throw 'You need set a Car Class';
  }
}

function mostrarComparacao() {
  if (carArr.length < 2) {
    alert('Precisa marcar 2 carros para apresentar a comparação');
    return;
  }

  atualizarTabelaComparacao();
  
  const compareDiv = document.getElementById('compare');
  
  compareDiv.style.display = 'block';
  
  void compareDiv.offsetWidth;
  
  compareDiv.classList.add('show-compare');
}

function ocultarComparacao() {
  const compareDiv = document.getElementById('compare');
  
  compareDiv.classList.remove('show-compare');
  
  setTimeout(function() {
    if (!compareDiv.classList.contains('show-compare')) {
      compareDiv.style.display = 'none';
    }
  }, 400); 
}

function atualizarTabelaComparacao() {
  for (let i = 0; i < carArr.length; i++) {
    let imgElement = document.createElement('img');
    imgElement.src = carArr[i].image;
    imgElement.style.width = '100%';
    document.getElementById('compare_image_' + i).innerHTML = '';
    document.getElementById('compare_image_' + i).appendChild(imgElement);

    document.getElementById('compare_modelo_' + i).textContent = carArr[i].nome;

    document.getElementById('compare_alturacacamba_' + i).textContent =
      carArr[i].alturaCacamba + ' mm';

    document.getElementById('compare_alturaveiculo_' + i).textContent =
      carArr[i].alturaVeiculo + ' mm';

    document.getElementById('compare_alturasolo_' + i).textContent =
      carArr[i].alturaSolo + ' mm';

    document.getElementById('compare_capacidadecarga_' + i).textContent =
      carArr[i].capacidadeCarga + ' Kg';

    document.getElementById('compare_motor_' + i).textContent =
      carArr[i].motor + ' L';

    document.getElementById('compare_potencia_' + i).textContent =
      carArr[i].potencia + ' cv';

    document.getElementById('compare_volumecacamba_' + i).textContent =
      carArr[i].volumeCacamba + ' L';

    document.getElementById('compare_roda_' + i).textContent = carArr[i].roda;

    document.getElementById('compare_preco_' + i).textContent =
      'R$ ' + carArr[i].preco.toLocaleString('pt-BR');
  }
}
