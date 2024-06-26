let bullets = 4;
let dragons =  2;
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
console.log(hero( bullets, dragons));