$(".checker").draggable({
    revert: "invalid",
    stop: function () {
        $(this).draggable('option', 'revert', 'invalid');
    }
});
$(".checker").droppable({
    greedy: true,
    tolerance: 'touch',
    drop: function (event, ui) {
        ui.draggable.draggable('option', 'revert', true);
    }
});
$("tr:nth-child(even) td:nth-child(odd),tr:nth-child(odd) td:nth-child(even)").droppable({
    accept: '.checker'
})
$('.CheessBlack').droppable({
    accept: '.checker'
})
$('.CheessWhite').droppable({
    accept: '.checker'
})
$(".White td").droppable({
    accept: '.checker.white'
})
$(".Black td").droppable({
    accept: '.checker.black'
})

setInterval(function () {
    var d = new Date();
    var h = d.getHours();
    if (h < 10) {
        h = '0' + h;
    }
    var m = d.getMinutes();
    if (m < 10) {
        m = '0' + m;
    }
    var s = d.getSeconds();
    if (s < 10) {
        s = '0' + s;
    }
    var hour = h + ':' + m + ':' + s;
    document.getElementById('clock').innerHTML = hour;
})
var df = document.forms.myForm;
df.butt.onclick = function () {
    document.getElementById('white_block').innerHTML = '0';
    document.getElementById('black_block').innerHTML = "0";
    i = 0, j = 0;
    //Розклад білих шашок
    document.getElementById('sh1').style.right = "-623px";
    document.getElementById('sh1').style.top = "475px";

    document.getElementById('sh2').style.right = "-542px";
    document.getElementById('sh2').style.top = "340px";

    document.getElementById('sh3').style.right = "-461px";
    document.getElementById('sh3').style.top = "337px";

    document.getElementById('sh4').style.right = "-380px";
    document.getElementById('sh4').style.top = "202px";

    document.getElementById('sh5').style.right = "-299px";
    document.getElementById('sh5').style.top = "199px";

    document.getElementById('sh6').style.right = "-705px";
    document.getElementById('sh6').style.top = "64px";

    document.getElementById('sh7').style.right = "-218px";
    document.getElementById('sh7').style.bottom = "5px";

    document.getElementById('sh8').style.right = "-136px";
    document.getElementById('sh8').style.bottom = "8px";

    //Розклад чорних шашок
    document.getElementById('sh9').style.left = "-623px";
    document.getElementById('sh9').style.top = "8px";

    document.getElementById('sh10').style.left = "-542px";
    document.getElementById('sh10').style.top = "5px";

    document.getElementById('sh11').style.left = "-705px";
    document.getElementById('sh11').style.top = "-65px";
    document.getElementById('sh11').style.bottom = "64px";;

    document.getElementById('sh12').style.left = "-461px";
    document.getElementById('sh12').style.bottom = "199px";

    document.getElementById('sh13').style.left = "-380px";
    document.getElementById('sh13').style.bottom = "202px";

    document.getElementById('sh14').style.left = "-299px";
    document.getElementById('sh14').style.bottom = "338px";

    document.getElementById('sh15').style.left = "-219px";
    document.getElementById('sh15').style.bottom = "340px";

    document.getElementById('sh16').style.left = "-137px";
    document.getElementById('sh16').style.bottom = "477px";
}
df.buttSt.onclick = function () {
    location.reload();
    if (i > j) {
        alert("Winner 'White' score " + i + ':' + j);
    } else if (i < j) {
        alert("Winner 'Black' score " + i + ':' + j);
    } else if (i == j) {
        alert("Draw score " + i + ':' + j);
    }
}
var dfF2 = document.forms.myForm2;
var i = 0;
var j = 0;
document.getElementById('white_block').innerHTML = '0';
document.getElementById('black_block').innerHTML = "0";

dfF2.buttWhite.onclick = function () {
    i++;
    document.getElementById('white_block').innerHTML = i;
    if (i == 99) {
        i = 0;
    }

}
dfF2.buttBlack.onclick = function () {
    j++;
    document.getElementById('black_block').innerHTML = j;
    if (j == 99) {
        j = 0;
    }
}
dfF2.Close.onclick = function () {
    document.getElementById('white_block').innerHTML = "0";
    document.getElementById('black_block').innerHTML = "0";
    i = 0, j = 0;
}

$('div.checker').on('dblclick', function () {
   $(this).css('background-color', 'red');
});
