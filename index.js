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

    if (num < 10) {
        alert('You do not have enough money to buy a cursor.')
    }
    else {
        num -= 10;
        money.innerHTML = num;
        multiplier += 0.1;
        multNoticeText += 0.1;
        multNotice.innerHTML = multNoticeText;
        cursorsText += 1;
        cursors.innerHTML = cursorsText;
    }
}