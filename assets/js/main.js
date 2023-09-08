let block = document.querySelector('.block');
let link = document.querySelector('.link');

block.style.background = 'black';
link.style.color = 'white';

let price = prompt('Стоимость товара');
let money = prompt('Сколько у тебя денег');

if(price == money){
    let box = '<p class="text">Покупка совершена</p>';
    let report = document.querySelector('.report');
    report.innerHTML = box;
}else{
    if(price > money){
        let x = price - money;
        let box = '<p class="text">Не хватает - '+ x +'р</p>';
        let report = document.querySelector('.report');
        report.innerHTML = box;
    }else{
        let x = money - price;
        let box = '<p class="text">Покупка совершена. Ваша сдача - '+ x +'р</p>';
        let report = document.querySelector('.report');
        report.innerHTML = box;
    }
}