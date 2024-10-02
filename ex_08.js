function houseEnergyScore(housingList) {
    for (let i = 0; i < housingList.length; i++) {
       if (housingList[i][1] < 51) {
          housingList[i].push("A");
       } else if (housingList[i][1] < 90) {
          housingList[i].push("B");
       } else if (housingList[i][1] < 150) {
          housingList[i].push("C");
       } else if (housingList[i][1] < 230) {
          housingList[i].push("D");
       } else if (housingList[i][1] < 330) {
         housingList[i].push("E");
      } else if (housingList[i][1] < 450) {
         housingList[i].push("F");
      } else {
          housingList[i].push("G");
       }
    }
    var sortedHousingList = housingList.sort(function(a, b) {
         return a[1] - b[1];
      });
    return sortedHousingList;
    }