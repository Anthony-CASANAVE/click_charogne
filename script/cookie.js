/*jslint browser: true*/ /*global  $*/

$(function () {


    let addCreditButton = $("#cible");
    let creditCount = 0;
    let cliqueCredits = $("#cliqueCredits");
    cliqueCredits = 0;
    $("#cliqueAddMoney").text(0);

    //Gestion automatique des cookies.
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/cookies";
        console.log()
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        //    return meatCount;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }



    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }
    if (!getCookie('moneyTotal')) {
        creditCount = 0;
    } else {
        creditCount = readCookie('moneyTotal');
    }
    $('#cible').click(function () {

        creditCount++;
        setCookie('moneyTotal', creditCount, 7);

        console.log(getCookie('moneyTotal'));
        $("#cliqueAddMoney").text(creditCount);
    });






    //Chargement des cookies à l'ouverture de la page.
    var readCreditCount = readCookie("moneyTotal");

    if (readCreditCount != null) {
        $("#cliqueAddMoney").text(readCreditCount);
    } else {
        $("#cliqueAddMoney").text(0);
        createCookie("numberOfClicks", creditCount, 7);
    }









    //    Fin du jquery !!!!
})
