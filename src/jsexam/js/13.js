window.addEventListener('DOMContentLoaded', () => {
    const ulEl = document.querySelector('#target');
    const inputEl = document.querySelector('#todo');
    const btnEl = document.querySelector('#addBtn');

    btnEl.addEventListener('click', () => {
        const todo = inputEl.value;
        const liEls = ulEl.querySelectorAll('li');
        let cnt = liEls.length + 1;
        
        if(!todo) {
            alert('할일을 입력해주세요.');
            inputEl.focus();
            return;
        }

        for(let i = 0; i < liEls.length; i++) {
            if (liEls[i].querySelector('[data-value]').textContent === todo) {
                alert('이미 등록된 항목입니다.');
                inputEl.focus();
                inputEl.value = '';
                return;
            }
        }

        const liTemp = 
            `<li>
                <span>할일 ${cnt > 10 ? cnt : '0' + cnt} : </span>
                <span data-value>${todo}</span>
            </li>`;

        ulEl.insertAdjacentHTML('beforeend', liTemp);
        alert('할일이 추가되었습니다.');
    });
})


