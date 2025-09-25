window.addEventListener('DOMContentLoaded', () => {

    const formEl = document.querySelector(".form");
    const idEl = document.querySelector("#input-id");
    const pwEl = document.querySelector("#input-pw");
    const pwConfirmEl = document.querySelector("#input-pw-confirm");
    const radioEls = document.querySelectorAll("[name='gender']");

    formEl.addEventListener("submit", function(event) {
        console.log('폼 제출 이벤트 발생');
        event.preventDefault(); // 폼 제출 기본 동작 방지

        const idVal = idEl.value;
        const pwVal = pwEl.value;
        const pwConfirmVal = pwConfirmEl.value;

        let radioVal = [...radioEls].find(item => item.checked)?.value || '';


        // 간단한 유효성 검사
        console.log('입력값:', {idVal, pwVal, pwConfirmVal, radioVal});
        
        if(!idVal)                  return alert("아이디를 입력해주세요."), idEl.focus();
        if(!pwVal)                  return alert("비밀번호를 입력해주세요."), pwEl.focus();
        if(!pwConfirmVal)           return alert("비밀번호 확인을 입력해주세요."), pwConfirmEl.focus();
        if(pwVal !== pwConfirmVal)  return alert("비밀번호가 일치하지 않습니다."), pwConfirmEl.focus();
        if(!radioVal)               return alert("성별을 선택해주세요."), radioEls[0].focus();


        // 폼 데이터 처리 (예: 서버로 전송)
        console.log("폼 데이터:", { id: idVal, pw: pwVal, pwConfirm: pwConfirmVal, gender: radioVal });
        alert("폼이 성공적으로 제출되었습니다!");
        // formEl.submit(); // 실제 제출은 주석처리
    });
})


