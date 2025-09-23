
window.addEventListener('DOMContentLoaded', async () => {
    const _pre = document.querySelector('[data-target="pre"] code');
    const _script = document.querySelector('[data-target="exam"]');
    
    if (_script && _script.src) {
        try {
            const response = await fetch(_script.src);
            const jsContent = await response.text();
            _pre.textContent = jsContent;
            
            // highlight.js 적용
            hljs.highlightElement(_pre);
        } catch (error) {
            _pre.textContent = 'Error loading JS file: ' + error.message;
        }
    } else {
        _pre.textContent = 'No source file found';
    }
})

