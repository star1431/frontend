
window.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.querySelector('nav[data-ui="links"]');
    if (!nav) return;

    const files = window.folderFiles || [];
    // console.log(files.length);
    if (files.length === 0) return;

    const htmlFiles = files.filter(f => f.endsWith('.html'));

    const ul = document.createElement('ul');
    ul.className = 'ui-list';
    let html = '';

    for (let i = 0; i < htmlFiles.length; i++) {
        html += 
        `<li>
            <a class="ui-link" href="${htmlFiles[i]}">
                ${htmlFiles[i]}
            </a>
        </li>`;
    }

    ul.innerHTML = html;

    nav.appendChild(ul);
});
