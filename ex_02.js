function findHousing(housingToFind, housingList) {
    var i=0 ;
    while (housingToFind !== housingList[i]) {
    i++ ;
    }
    if (i === housingList.length) {
        return null ;
    }
    return [i , housingToFind] ;
    }
