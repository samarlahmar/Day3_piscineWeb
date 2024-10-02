function fillBus(peopleAtBusStops, busSeats) {
    let peopleInBus = 0;
    for (let i = 0; i < peopleAtBusStops.length; i++) {
        peopleInBus += peopleAtBusStops[i];
       if (peopleInBus >= busSeats) {
           return i+1;
       }
    }}
console.log(fillBus([1, 1, 9, 1], 12)) ;
   