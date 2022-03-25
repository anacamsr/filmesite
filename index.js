var filme = [
    {id: 1, descricao: "Suicide Squad", categoria: "Herói"},
    {id: 2, descricao: "Jason Bourne", categoria: "Ação"},
    {id: 3, descricao: "Now You See Me 2", categoria: "Suspese"},
    {id: 4, descricao: "The Boy Next Door", categoria: "Suspense"},
    {id: 5, descricao: "The Jungle Book", categoria: "Aventura"},
    {id: 6, descricao: "Mechanic: Resurrection", categoria: "Ação"},
    {id: 7, descricao: "Batman v Superman: Dawn of Justice", categoria: "Herói"},
    {id: 8, descricao: "Mad Max: Fury Road", categoria: "Ficção Científica"}
]
function retornaEletronico (value){
    if (value.categoria == "Suspense")
    return value;
}
var filmeSuspense = filme.filter(retornaSuspense);
filmeSuspense.forEach(filmeSusp => { 
    console.log(filmeSusp);
})

