const pageViews = document.getElementById('page-views');
const rangeInput = document.getElementById('range-input');
const price = document.getElementById('price');
const toggleYearly = document.getElementById('toggle-yearly');
const toggleText = document.getElementById('toggle-text')

toggleYearly.addEventListener('change', (e)=>{
    if(e.target.checked){
        toggleText.innerText = "/ year";
        plans(true);
    }else{
        toggleText.innerText = "/ month";
        plans(false)
    }
})

function plans(yearly){
    rangeInput.addEventListener('input', (e)=>{
        let cost = e.target.value;
        if(yearly){
            if(cost <= 0){
                pageViews.innerText = "10K";
                price.innerText = "$06.00";
            }else if(cost <= 20){
                pageViews.innerText = "50K";
                price.innerText = "$09.00";
            }else if(cost <= 40){
                pageViews.innerText = "100K";
                price.innerText = "$12.00";
            }else if(cost <= 60){
                pageViews.innerText = "500K";
                price.innerText = "$18.00";
            }else if(cost = 80){
                pageViews.innerText = "1M";
                price.innerText = "$24.00";
            }
        }else{
            if(cost <= 0){
                pageViews.innerText = "10K";
                price.innerText = "$08.00";
            }else if(cost <= 20){
                pageViews.innerText = "50K";
                price.innerText = "$12.00";
            }else if(cost <= 40){
                pageViews.innerText = "100K";
                price.innerText = "$16.00";
            }else if(cost <= 60){
                pageViews.innerText = "500K";
                price.innerText = "$24.00";
            }else if(cost = 80){
                pageViews.innerText = "1M";
                price.innerText = "$32.00";
            }
        }
    })
}