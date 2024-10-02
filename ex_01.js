function getAngryDog(numberOfWoofs)
{
var result = "" ;
for (let i = 0; i < numberOfWoofs; i++) {
result += "woof" + " " ;
} 
return result.slice(0,-1) ;
}
