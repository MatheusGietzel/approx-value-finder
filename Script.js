function obtemValorAproximado(valorProcurado) {
    const arrayParcelas = [
      { "parcela": "1", "valor": "1000.00" },
      { "parcela": "2", "valor": "500.00" },
      { "parcela": "3", "valor": "333.33" },
      { "parcela": "4", "valor": "250.00" },
      { "parcela": "5", "valor": "200.00" },
      { "parcela": "6", "valor": "166.66" },
      { "parcela": "7", "valor": "142.85" },
      { "parcela": "8", "valor": "125.00" },
      { "parcela": "9", "valor": "111.11" },
      { "parcela": "10", "valor": "100.00" },
    ];
  
    let valorMaisProximo = null; 
    for (let i = 0; i < arrayParcelas.length; i++) {
      const valorAtual = parseFloat(arrayParcelas[i].valor);
  
      if (valorMaisProximo === null || Math.abs(valorProcurado - valorAtual) < Math.abs(valorProcurado - valorMaisProximo)) {
        valorMaisProximo = valorAtual;
      }
    }
  
    const parcelaMaisProxima = arrayParcelas.find((parcela) => parseFloat(parcela.valor) === valorMaisProximo);
  
    return {
      "qtdeParcelas": parcelaMaisProxima.parcela,
      "valorParcelas": parcelaMaisProxima.valor,
    };
  }
  
  const valorProcurado = 300.99; //Inserir aqui o valor a ser procurado!
  const resultado = obtemValorAproximado(valorProcurado);
  
  console.log(`Valor procurado: R$${valorProcurado.toFixed(2)}`);
  console.log(`Opção mais próxima: ${resultado.qtdeParcelas}x de R$${resultado.valorParcelas}`);
  