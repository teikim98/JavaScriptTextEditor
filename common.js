const optionsButtons = document.querySelectorAll('.option-button');
const advancedOptionsButton = document.querySelectorAll('.adv-option-button');
const fontName = document.querySelectorAll('#fontName');
const fontSizeRef =document.querySelectorAll('#fontSize')
const writingArea = document.querySelectorAll('#text-input');
const linkButton = document.querySelectorAll('#createLink');
const alignButtons = document.querySelectorAll('.align');
const spacingButtons = document.querySelectorAll('.spacing');
const formatButtons = document.querySelectorAll('.format');
const scriptButtons = document.querySelectorAll('.script');

let fontList = [
    'Arial',
    'Verdana',
    'Times New Roman',
    'Garamond',
    'Georgia',
    'Courier New',
    'Cursive',
];

const intializer = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    }) 

for (let i =1; i<=7 ; i++){
    let option = document.createElement('option');
    option.value=i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
}

