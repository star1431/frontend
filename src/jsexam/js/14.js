
// JSONPlaceholder (https://jsonplaceholder.typicode.com/) API를 사용
// 사용자 목록을 가져와서 화면에 표시하는 예제

window.addEventListener('DOMContentLoaded', () => {
    const ulEl = document.querySelector('#userList');
    const btnEl = document.querySelector('#loadBtn');
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    btnEl.addEventListener('click', async () => {
        ulEl.innerHTML = '<li>사용자 데이터를 불러오는 중...</li>';
        try {
            btnEl.disabled = true;
            
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('네트워크 응답에 문제가 있습니다.');
            const users = await response.json();
            
            ulEl.innerHTML = ''; // 기존 목록 초기화
            let cnt = 0;
            users.forEach(user => { 
                if(cnt++ >= 3) return; // 최대 3명까지만 표시
                const liTemp = `
                    <li class="user-item">
                        <div class="user-info">
                            <h3 class="user-name">name : ${user.name}</h3>
                            <p class="user-email">email : ${user.email}</p>
                            <p class="user-phone">phone : ${user.phone}</p>
                            <p class="user-website">website : ${user.website}</p>
                        </div>
                    </li>
                `;
                ulEl.insertAdjacentHTML('beforeend', liTemp);
            });
        } catch (error) {
            console.error('사용자 데이터를 가져오는 중 오류 발생:', error);
            alert('사용자 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            btnEl.disabled = false;
        }
    });
})