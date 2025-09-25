window.addEventListener('DOMContentLoaded', () => {
    const btnEl = document.querySelector('.btn');

    // 이벤트 리스너('이벤트명', 핸들러)
    btnEl.addEventListener('click', () => sayHi());
    btnEl.addEventListener('mouseover', () => console.log('마우스오버'));
    btnEl.addEventListener('focus', () => console.log('포커스'));
    btnEl.addEventListener('focusout', () => console.log('포커스 아웃'));

    btn1Click();
    btn2Click();
})

const sayHi = () => alert('클릭 Hi~');  

const btn1Click = () => {
    const btnEl = document.querySelector('#btn1');
    let toggle = false;
    btnEl.addEventListener('click', () => {
        toggle = !toggle;
        document.body.style.cssText = `background-color: ${toggle ? 'yellow' : ''};`;
        btnEl.textContent = toggle ? '배경색변경 완료' : '배경색변경';
        btnEl.classList.toggle('active', toggle);
    });
}


const btn2Click = () => {
    const btnEl = document.querySelector('#btn2');
    let toggle = false;
    btnEl.addEventListener('click', () => {
        toggle = !toggle;
        btnEl.textContent = toggle ? '문구변경 완료' : '문구변경';
        btnEl.classList.toggle('active', toggle);
    });
}