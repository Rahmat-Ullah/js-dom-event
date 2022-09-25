
// option 2
function makered(){
    document.body.style.backgroundColor = 'red';
}

//option 3

const makebluebutton = document.getElementById('make-blue');
        makebluebutton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

//option 3 another

const makepurple = document.getElementById('make-purple');
        makepurple.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }