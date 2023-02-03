let multiplier = 1;

function getMoney() {
    let money = document.getElementById('money');
    let num = parseInt(money.textContent);
    num += 1 * multiplier;
    money.innerHTML = num;
}