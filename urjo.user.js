// ==UserScript==
// @name        urjo.com convert grid to discord text
// @namespace   Violentmonkey Scripts
// @icon        data:image/png;base64,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
// @version     1.0.0
//
// @match       https://urjo.com/*
// @grant       none
//
// @author      nothing0074
// @description vibe coded
// ==/UserScript==
// Function to generate the grid text
function getGridText() {
    const containers = document.querySelectorAll('.css-fgcs3g');
    const gridSize = Math.sqrt(containers.length);
    let output = "";

    containers.forEach((container, index) => {
        const button = container.querySelector('.button');
        const span = container.querySelector('span');
        const number = span ? span.innerText.trim() : "";

        let type = ":U_:";
        if (button.classList.contains('x')) type = ":R_:";
        else if (button.classList.contains('o')) type = ":B_:";

        if (number !== "") type = type.replace("_", number);

        output += type + " ";
        if ((index + 1) % gridSize === 0) output += "\n";
    });
    return output;
}

// Function to create and inject the button
function createCopyButton() {
    const btn = document.createElement('button');
    btn.innerText = "Copy Grid to Clipboard";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";

    btn.onclick = async () => {
        const text = getGridText();
        try {
            await navigator.clipboard.writeText(text);
            alert("Grid copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    document.body.appendChild(btn);
}

// Initialize
createCopyButton();
