// function hello() {
//     console.log("hello")
// }

let display = document.getElementById('calAnswer')

let buttons = Array.from(document.getElementsByClassName('numEntry'))

buttons.map( button => {
    button.addEventListener('click', (e) => {

        switch(e.target.innerText){
            case 'Clear':
                display.innerText = " "
                break;
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0,-1)
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'error!'
                }
                
                break;

            default:
                display.innerText += e.target.innerText;
        }

    })
})