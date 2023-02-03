let multiplier = 1;

function getMoney() {
    let money = document.getElementById('money');
    let num = parseInt(money.textContent);
    num += 1 * multiplier;
    money.innerHTML = num;
}

function buyCursor() {
    let money = document.getElementById('money');
    let num = parseInt(money.textContent);
    let multNoticeText = parseInt(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let cursorsText = parseInt(document.getElementById('cursors').textContent);
    let cursors = document.getElementById('cursors');
    let cursorPrice = document.getElementById('cursorprcice');
    let cursorPriceNum = parseInt(cursorPrice.textContent);

    if (num < cursorPriceNum) {
        alert('You do not have enough money to buy a cursor. Current money:')
    }
    else {
        num -= cursorPriceNum;
        money.innerHTML = num;
        multiplier += 0.1;
        multNoticeText += 0.1;
        multNotice.innerHTML = multNoticeText;
        cursorsText += 1;
        cursors.innerHTML = cursorsText;
        cursorPriceNum *= 0.3;
        cursorPrice.innerHTML = cursorPriceNum;
    }
}