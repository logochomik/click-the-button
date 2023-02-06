let multiplier = 1;

function strip(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

function getMoney() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    money.innerHTML = strip((num += (1 * multiplier)), 1);
}

function buyCursor() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let cursorsText = parseFloat(document.getElementById('cursors').textContent);
    let cursors = document.getElementById('cursors');
    let cursorPrice = document.getElementById('cursorprice');
    let cursorPriceNum = parseFloat(cursorPrice.textContent);

console.log(multiplier + ' ' + multNoticeText)

    if (num < cursorPriceNum) {
        alert(`You do not have enough money to buy a cursor. Current money: $${num}, Needed money: $${cursorPriceNum}`);
    }
    else {
        num -= cursorPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 0.1;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = multNoticeText;
        cursorsText += 1;
        cursors.innerHTML = strip(cursorsText, 1);
        cursorPriceNum *= 1.3;
        cursorPrice.innerHTML = strip(cursorPriceNum, 1);
    }
}

function buyFriend() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let friendsText = parseFloat(document.getElementById('friends').textContent);
    let friends = document.getElementById('friends');
    let friendsPrice = document.getElementById('friendsprice');
    let friendsPriceNum = parseFloat(friendsPrice.textContent);

    if (num < friendsPriceNum) {
        alert(`You do not have enough money to buy a cursor. Current money: $${num}, Needed money: $${friendsPriceNum}`);
    }
    else {
        num -= friendsPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 1;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        friendsText += 1;
        friends.innerHTML = strip(friendsText, 1);
        friendsPriceNum *= 1.3;
        friendsPrice.innerHTML = strip(friendsPriceNum, 1);
    }
}