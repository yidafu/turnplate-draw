// drawTurnplate(20);

//
// function test(){
//
// for( var i = 0 ; i < 10 ; i ++)
//     godGiveYouLuckyAndGold();
// }
var tp = new turnplate();
console.log(tp);
tp.init(20);


document.getElementById('btn').onclick = function() {
    tp.rotate();
}
document.getElementById('pointer').onclick = function () {
    tp.rotate();
}
