function getState(state){
    let endpoint = "https://api.openbrewerydb.org/breweries";
    let queryString = "by_state=" + state;
    let url = endpoint + "?" + queryString;

    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
        let data = JSON.parse(this.response);

        for (let i = 0; i < data.length; i++){
            console.log("Name: " + data[i].name + 
            "\nBrewery Type: " + data[i].brewery_type +
            "\nCity: " + data[i].city +
            "\nState: " + data[i].state);
        }
    }

    request.send();

    //This fetch all of the data pertaining to the state
    fetch(url).then(function(result) {
         return result.json();
    }).then(function(json) {
        console.log(json);
    });



}


function getCharacters(array){
    let endpoint = "https://rickandmortyapi.com/api/";
    let characterString = "character";
    let url = endpoint + characterString;

    let request = new XMLHttpRequest();
    request.onload = function(){
        let data = JSON.parse(this.response);
        console.log("ID: " + data[i].id +
        "\nName: " + data[i].name +
        "\nStatus: " + data[i].status +
        "\nSpecies " + data[i].species)

    }

    request.send();

    fetch(url).then(function(result) {
         return result.json();
    }).then(function(json) {
        console.log(json);
    });
}