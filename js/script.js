//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente con un ciclo while.

//Creo una array per la lista della spesa : 

const listaSpesa = ['sugo','carcioffi','sale','melenzane','cocola'];

let i = 0;

//metto console per verificare se mostra la lista

console.log(listaSpesa);

//nella console ha mostrato la lista con .length di 5.

//creaiamo un ciclo while per la lista

while (i < listaSpesa.length + i++){
    lista = listaSpesa[i];
    //da qui dovrebbe inserire document. per farlo stampare nel html.
    document.getElementById(listaSpesa).innerHTML += (output);

    // creo la console.log per vedere la la lista della spesa.
    console.log(listaSpesa[i]);


}
