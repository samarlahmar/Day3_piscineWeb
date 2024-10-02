

function createCity( country, cityName) {
    var cities = [cityName];
    country.push(cities);
}

function createHousing( country, cityName, housingName) {
    for (var i = 0; i < country.length; i++) {
        if (country[i][0] == cityName) {
            var housing = [housingName];
            country[i].push(housing);
        }
    }
}
function addCharacteristics( country, cityName, housingName, ...characteristics) {
    for (var i = 0; i < country.length; i++) {
        if (country[i][0] == cityName) {
            for (var j = 1; j < country[i].length; j++) {
                if (country[i][j][0] == housingName) {
                    var characteristics_tab = [];
                    for ( var characteristic of characteristics) {
                        characteristics_tab.push(characteristic);
                    }
                    country[i][j].push(characteristics_tab);
                }
            }
        }
    }

}
function getCityOfCountry(country, cityName) { 
    for (var i = 0; i < country.length; i++) {
        if (country[i][0] == cityName) {
            return country[i];
        }
    }
    console.log("City not found");
    return null;

}

function getCharacteristicsOfHousing (country, cityName, housingName) {
    for (var i = 0; i < country.length; i++) {
        if (country[i][0] == cityName) {
            for (var j = 1; j < country[i].length; j++) {
                if (country[i][j][0] == housingName) {
                    return country[i][j][1];
                }
            }
        }
    }
    console.log("Housing not found");
    return null;
}

let country = [];
createCity(country , "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country , "Nantes", "Apartment1", "100m2", "2 bathrooms",
"Red paint", "14 rue Arthur III");
console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));
console.log(getCityOfCountry(country, "Nantes"));
console.log(country);
