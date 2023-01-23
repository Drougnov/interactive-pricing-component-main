const pageViews = document.getElementById('page-views');
const rangeInput = document.getElementById('range-input');
let price = document.getElementById('price');
const toggleYearly = document.getElementById('toggle-yearly');
let toggleText = document.getElementById('toggle-text')

let yearly = toggleYearly.checked;
yearly ? toggleText.innerHTML = "/ year" : toggleText.innerHTML = "/ month";

rangeInput.addEventListener('input', ()=>{
    let plan = rangeInput.value;

    if(plan <= 0){
        pageViews.innerHTML = '10K';
        yearly ? price.innerHTML = "$6.00": price.innerHTML = '$8.00';
    }else if(plan <= 20){
        pageViews.innerHTML = '50K';
        yearly ? price.innerHTML = "$9.00": price.innerHTML = '$12.00';
    }else if(plan <= 40){
        pageViews.innerHTML = '100K';
        yearly ? price.innerHTML = "$12.00": price.innerHTML = '$16.00';
    }else if(plan <= 60){
        pageViews.innerHTML = '500K';
        yearly ? price.innerHTML = "$18.00": price.innerHTML = '$24.00';
    }else if(plan >= 80){
        pageViews.innerHTML = '1M';
        yearly ? price.innerHTML = "$27.00": price.innerHTML = '$36.00';
    }
})