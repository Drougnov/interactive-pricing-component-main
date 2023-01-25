const pageViews = document.getElementById('page-views');
const rangeInput = document.getElementById('range-input');
const price = document.getElementById('price');
const toggleYearly = document.getElementById('toggle-yearly');
const toggleText = document.getElementById('toggle-text');

const value = [0, 20, 40, 60, 80];
const cost = [08, 12, 16, 24, 32]
const views = ['10K', '50K', '100K', '500K', '1M'];

toggleYearly.addEventListener('change', (e)=>{
    for(let i=0; i< value.length; i++){
        if(rangeInput.value >= value[i]){
            pageViews.innerText = views[i];
            if(toggleYearly.checked){
                price.innerText = `$${cost[i] * .75}.00`;
                toggleText.innerText = "/ year";
            }else{
                price.innerText = `$${cost[i]}.00`;
                toggleText.innerText = "/ month";
            }
        }
    }
})

rangeInput.addEventListener('input', (e)=>{
    let inputValue = e.target.value;
    plan(inputValue)
})

function plan(inputValue){
    for(let i=0; i< value.length; i++){
        if(inputValue >= value[i]){
            pageViews.innerText = views[i];
            if(toggleYearly.checked){
                price.innerText = `$${cost[i] * .75}.00`;
            }else{
                price.innerText = `$${cost[i]}.00`;
            }
        }
    }
}