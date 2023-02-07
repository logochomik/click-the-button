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

    if (num < cursorPriceNum) {
        alert(`You do not have enough money to buy a cursor.\n\nCurrent money: $${num}, Needed money: $${cursorPriceNum}`);
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

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 5000);
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
        alert(`You do not have enough money to buy a friend.\n\nCurrent money: $${num}, Needed money: $${friendsPriceNum}`);
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

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 4000);
}

function buyFarm() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let farmsText = parseFloat(document.getElementById('farms').textContent);
    let farms = document.getElementById('farms');
    let farmsPrice = document.getElementById('farmsprice');
    let farmsPriceNum = parseFloat(farmsPrice.textContent);

    if (num < farmsPriceNum) {
        alert(`You do not have enough money to buy a farm.\n\nCurrent money: $${num}, Needed money: $${farmsPriceNum}`);
    }
    else {
        num -= farmsPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 5;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        farmsText += 1;
        farms.innerHTML = strip(farmsText, 1);
        farmsPriceNum *= 1.3;
        farmsPrice.innerHTML = strip(farmsPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 3000);
}

function buyBuilding() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let buildingsText = parseFloat(document.getElementById('buildings').textContent);
    let buildings = document.getElementById('buildings');
    let buildingsPrice = document.getElementById('buildingsprice');
    let buildingsPriceNum = parseFloat(buildingsPrice.textContent);

    if (num < buildingsPriceNum) {
        alert(`You do not have enough money to buy a building.\n\nCurrent money: $${num}, Needed money: $${buildingsPriceNum}`);
    }
    else {
        num -= buildingsPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 25;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        buildingsText += 1;
        buildings.innerHTML = strip(buildingsText, 1);
        buildingsPriceNum *= 1.3;
        buildingsPrice.innerHTML = strip(buildingsPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 2000);
}

function buyFactory() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let factoriesText = parseFloat(document.getElementById('factories').textContent);
    let factories = document.getElementById('factories');
    let factoriesPrice = document.getElementById('factoriesprice');
    let factoriesPriceNum = parseFloat(factoriesPrice.textContent);

    if (num < factoriesPriceNum) {
        alert(`You do not have enough money to buy a factory.\n\nCurrent money: $${num}, Needed money: $${factoriesPriceNum}`);
    }
    else {
        num -= factoriesPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 125;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        factoriesText += 1;
        factories.innerHTML = strip(factoriesText, 1);
        factoriesPriceNum *= 1.3;
        factoriesPrice.innerHTML = strip(factoriesPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 1000);
}

function buyTemple() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let templesText = parseFloat(document.getElementById('temples').textContent);
    let temples = document.getElementById('temples');
    let templesPrice = document.getElementById('templesprice');
    let templesPriceNum = parseFloat(templesPrice.textContent);

    if (num < templesPriceNum) {
        alert(`You do not have enough money to buy a temple.\n\nCurrent money: $${num}, Needed money: $${templesPriceNum}`);
    }
    else {
        num -= templesPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 1150;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        templesText += 1;
        temples.innerHTML = strip(templesText, 1);
        templesPriceNum *= 1.3;
        templesPrice.innerHTML = strip(templesPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 500);
}

function buyPortal() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let portalsText = parseFloat(document.getElementById('portals').textContent);
    let portals = document.getElementById('portals');
    let portalsPrice = document.getElementById('portalsprice');
    let portalsPriceNum = parseFloat(portalsPrice.textContent);

    if (num < portalsPriceNum) {
        alert(`You do not have enough money to buy a portal.\n\nCurrent money: $${num}, Needed money: $${portalsPriceNum}`);
    }
    else {
        num -= portalsPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 20875;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        portalsText += 1;
        portals.innerHTML = strip(portalsText, 1);
        portalsPriceNum *= 1.3;
        portalsPrice.innerHTML = strip(portalsPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 250);
}

function buyJavaScriptEmulator() {
    let money = document.getElementById('money');
    let num = parseFloat(money.textContent);
    let multNoticeText = parseFloat(document.getElementById('multiplier').textContent);
    let multNotice = document.getElementById('multiplier');
    let javascriptemulatorsText = parseFloat(document.getElementById('javascriptemulators').textContent);
    let javascriptemulators = document.getElementById('javascriptemulators');
    let javascriptemulatorsPrice = document.getElementById('javascriptemulatorsprice');
    let javascriptemulatorsPriceNum = parseFloat(javascriptemulatorsPrice.textContent);

    if (num < javascriptemulatorsPriceNum) {
        alert(`You do not have enough money to buy a JavaScript emulator.\n\nCurrent money: $${num}, Needed money: $${javascriptemulatorsPriceNum}`);
    }
    else {
        num -= javascriptemulatorsPriceNum;
        money.innerHTML = strip(num, 1);
        multiplier += 108850;
        multNoticeText = strip(multiplier, 1);
        multNotice.innerHTML = strip(multNoticeText, 1);
        javascriptemulatorsText += 1;
        javascriptemulators.innerHTML = strip(javascriptemulatorsText, 1);
        javascriptemulatorsPriceNum *= 1.3;
        javascriptemulatorsPrice.innerHTML = strip(javascriptemulatorsPriceNum, 1);
    }

    var intervalId = window.setInterval(function(){
        getMoney()
      }, 125);
}