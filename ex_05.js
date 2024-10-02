function getHousesPrototype() {
    var house = new Map();
    house.set('Apartment 75008', 90);
    house.set('Apartment 94300', 105);
    house.set('Apartment 92300', 140);
    house.set('Apartment 75015', 65);
    return house;
}
console.log(getHousesPrototype());