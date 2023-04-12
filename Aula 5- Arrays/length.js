const nomesDeEstudantes = ['jose' , 'joao', 'maria' , 'joana' , 'andre', 'Thaís','Gabs' ]

//caso eu queira adicionar um índice no array sem alterar o principal

//nomesDeEstudantes[numero do ultimo índice + 1]='novo indice'

//(nome do array).length significa que length é uma propriedade de (nome do array) que serve para descobrir o tamanho de um array.
//Isso serve caso eu queira descobrir o último índice de um array caso eu queira adicionar mais um índice.

//se eu colocar nome da variávell[(nome da variável).length] = novo indice, o índice que colocar sempre irá pro final. 

nomesDeEstudantes[nomesDeEstudantes.length] = 'pedro';

console.log(nomesDeEstudantes)