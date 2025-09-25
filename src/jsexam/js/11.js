window.addEventListener('DOMContentLoaded', () => {
    
    const examDiv = document.querySelector('#examDiv');
    examDiv.innerHTML= `
    <div onclick="alert('최상위 DIV');">
        <div onclick="alert('2번째 DIV');">
            <div onclick="alert('3번째 DIV');">
                <h1 onclick="alert('h1 태그임');">
                    <p onclick="alert('p 태그임');">p태그</p>
                </h1>
            </div>
        </div>
    </div>
    <style>
        [onclick] {border: 1px dashed blue; padding: 10px; margin: 10px;}
        [onclick*="최상위"] {background: lightgray;}
        [onclick*="2번째"] {background: lightblue;}
        [onclick*="3번째"] {background: lightgreen;}
        [onclick*="h1"] {background: lightcoral;}
        [onclick*="p"] {background: lightyellow;}

    </style>`
    ;

})


