
function addHousing(housingList, NewHouse, Quantity ) {
    if (housingList.has(NewHouse)) {
        housingList.set(NewHouse, housingList.get(NewHouse) + Quantity);
    } else {
        housingList.set(NewHouse, Quantity);
    }
   

}
s