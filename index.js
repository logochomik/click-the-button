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
    let multNotice = parseInt(document.getElementById('multiplier').textContent);
    let cursors = parseInt(document.getElementById('cursors').textContent);

    if (num < 10) {
        alert('You do not have enough money to buy a cursor.')
    }
    else {
        num -= 10;
        money.innerHTML = num;
        multiplier += 0.1;
        multNotice += 0.1;
        cursors += 1;
    }
}