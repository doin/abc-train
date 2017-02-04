import './main.less';
import Letter from './Letter';

let level = 1;
let countTimer = 60;
let i = 1;
let countArr = [];
let timer = setInterval(function () {
    let letter = new Letter();

    $('.stage').append("<div class='letter-block block"+ i +" block "+ letter.txt +"'>"+ letter.txt +"</div>");

    let curBlock = $('.block' + i);
    curBlock.css({left:letter.startX, top:letter.startY});

    letter.id = i;
    letter.dom = curBlock;
    countArr.push(letter);
    i++;
}, 1000);