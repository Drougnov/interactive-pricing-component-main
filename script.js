const pageViews = document.getElementById('page-views');
const rangeInput = document.getElementById('range-input');
const price = document.getElementById('price');
const toggleYearly = document.getElementById('toggle-yearly');
const toggleText = document.getElementById('toggle-text');

const value = [0, 20, 40, 60, 80];
const cost = [08, 12, 16, 24, 32]
const views = ['10K', '50K', '100K', '500K', '1M'];

toggleYearly.addEventListener('change', handleToggleYearly);
rangeInput.addEventListener('input', handleRangeInput);

function handleToggleYearly(e) {
    plan(rangeInput.value);
}

function handleRangeInput(e) {
    const inputValue = e.target.value;
    rangeInput.style.background = `linear-gradient(
                                        to right,
                                        hsl(174, 77%, 80%) 0%,
                                        hsl(174, 77%, 80%) ${(inputValue * 100) / 80}%,
                                        hsl(224, 65%, 95%) 50%,
                                        hsl(224, 65%, 95%) 100%)`;
    plan(inputValue);
}

function plan(inputValue) {
    for(let i = 0; i < value.length; i++) {
        if (inputValue >= value[i]) {
            pageViews.innerText = views[i];
            price.innerText = `$${(toggleYearly.checked ? cost[i] * .75 : cost[i]).toFixed(2)}`;
            toggleText.innerText = toggleYearly.checked ? '/ year' : '/ month';
        }
    }
}