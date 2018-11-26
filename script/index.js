//viande conteur

let addMeatButton = document.getElementById("cible");
let meatCount = document.getElementById("viandeCount").textContent;
let meatCountCookie = Cookies.get('meatCount');



if (typeof Cookies.get('meatCount') === 'undefined') {
      //Save Data is not set.
//      alert("Welcome to the game, this is your first time, so enjoy!");
    meatCount = 0;
    
    } else {
      if (Cookies.get('meatCount') == "0") {

      } else {
//        coins = parseInt($.cookie("coins"));
        meatCount = parseInt(Cookies.get('meatCount'));
      }
    }




document.getElementById("viandeCount").textContent = meatCount;

addMeatButton.onclick = function () {
    meatCount++;

    document.getElementById("viandeCount").textContent = meatCount;
    console.log(Cookies.get('meatCount'));
    Cookies.set('meatCount', meatCount);

}

