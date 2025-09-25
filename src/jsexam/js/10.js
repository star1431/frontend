window.addEventListener('DOMContentLoaded', () => {

    const numTargetEl = document.querySelector('#numTarget');
    // console.log(numTargetEl.textContent);
    const plusEl = document.querySelector('#inc');
    const minusEl = document.querySelector('#dec');

    plusEl.addEventListener('click', () => {
        let num = parseInt(numTargetEl.textContent);
        numTargetEl.textContent = ++num;
    });

    minusEl.addEventListener('click', () => {
        let num = parseInt(numTargetEl.textContent);
        numTargetEl.textContent = --num;
    });
})


