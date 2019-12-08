function getCharacters(ids){
    let endpoint = "https://rickandmortyapi.com/api/";
    let characterString = "character/" + array;
    let url = endpoint + characterString;

    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
    let data = JSON.parse(this.response);

    for(i = 0; i< data.length; i++){
    console.log("ID: " + data[i].id +
    "\nName: " + data[i].name +
    "\nStatus: " + data[i].status +
    "\nSpecies " + data[i].species);
    }
}

    request.send();

    fetch(url).then(function(result) {
    return result.json();
    }).then(function(json) {
    console.log(json);
    });
}


function randomCards(){
let endpoint = "https://rickandmortyapi.com/api/";
    let characterString = "character/";

    for(i = 0; i < 5; i++){
        let x = Math.floor((Math.random() * 493)+1);
        characterString = characterString + x +",";
    }

    let y = Math.floor((Math.random() * 493)+1);
    characterString = characterString + y;
    let url = endpoint + characterString;

    let cardImage = "homecardimg";
    let cardTitle = "homecardtitle";
    let cardText = "homecardtext";

    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
    let data = JSON.parse(this.response);

    for(i = 1; i<= data.length; i++){
        let image = cardImage + i;
        let title = cardTitle + i;
        let text = cardText + i;

        document.getElementById(image).src = data[i-1].image;
        document.getElementById(title).innerHTML = data[i-1].name;
        document.getElementById(text).innerHTML = data[i-1].species;

    }
}

    request.send();

    console.log(url);
}