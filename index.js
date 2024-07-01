function prticion(params){
    let result = document.querySelector(".result");
    let input = document.querySelector("#numpok").value;
    let html= ``;
    fetch('https://pokeapi.co/api/v2/pokemon/'+input)
        .then(response => response.json())
        .then ((data) => {
            console.log(data)
            result.innerHTML = `<h1>${data.name}</h1> <h2>${data.types[0].type.name}</h2> <img src="${data.sprites.other.home.front_default}"/>`;
        });
}