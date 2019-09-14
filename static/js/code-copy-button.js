const addCopyButtons = (clipboard) => {
    document.querySelectorAll('pre > code[class^="language"]').forEach((codeBlock) => {
        const button = document.createElement('button');
        button.className = 'code-copy-button';
        button.type = 'button';
        button.innerText = '📋';
        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();
    
                button.innerText = 'copied!';
    
                setTimeout(function () {
                    button.innerText = '📋';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });
    
        const pre = codeBlock.parentNode;
        const wrapper = document.createElement('div');
        wrapper.classList.add('code-wrapper');
        pre.parentNode.replaceChild(wrapper, pre);
        wrapper.appendChild(button);
        wrapper.appendChild(pre);
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}