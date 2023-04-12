const nomeDePaíses = ['Brasil' , ' Alemanha ' , 'Inglaterra' , 'França' , 'África do Sul']

//Adicionar um país ao início da lista
nomeDePaíses.push('China')

console.log(nomeDePaíses)

//remova um país do início da lista
nomeDePaíses.pop()

console.log(nomeDePaíses)

//adiciona um país ao início da lista
nomeDePaíses.unshift('Rússia')

console.log(nomeDePaíses)

//remove um país ao início da lista
nomeDePaíses.shift()

console.log(nomeDePaíses)

//imprime o último país
const ultimo = nomeDePaíses[nomeDePaíses.length - 1]
console.log(ultimo)

//imprima o segundo país
console.log(nomeDePaíses [1])

//imprima o país de índice 2
console.log(nomeDePaíses [2])