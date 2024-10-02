function findAddresses(toFind) {
    result = "" ;
    for (let i = 0; i < addresses.length; i++) {
        for (let j = 0; j < addresses[i].length; j++) {
            if (addresses[i][j].includes(toFind)) {
                result += addresses[i][0] + "," + addresses[i][1] + "\n" ;
            }
        }
    }
    return result.slice(0,-1) ;
}

addresses = [["45 avenue des tulipes", "92130 Issy-les-Moulineaux"], ["95 avenue parmentier", "75011 Paris"], ["24 Rue Pasteur", "92400 Courbevoie"], ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"], ["Pl. Louis-Armand", "75571 Paris"]];
console.log(findAddresses("Paris"));


