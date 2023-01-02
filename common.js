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

const modifyText = (command,defaultUi , value) =>{
    document.execCommand(command ,defaultUi ,value);
}

optionsButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
        modifyText(button.id,false,null);
    });
});

linkButton.addEventListener('click',()=>{
    const userLink = prompt('Enter a URL');
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink)
    }
    else{
        userLink = 'http://' + userLink;
        modifyText(linkButton.id,false,userLink)
    }
})

const highlighter = (className , needsRemoval) =>{
    className.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains('active')){
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add('active');
                }
            }
            else{
                button.classList.toggle('active');
            }
        })
    })
}

const highlighterRemover = () =>