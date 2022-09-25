//option 1 directly on html tag
//<button title="this is a tooltip" onclick="console.log(7)">click me</button>

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

// option 4
const makepink = document.getElementById('make-pink');
        makepink.addEventListener('click', makePink);

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

// option 4 another
 const makegreen = document.getElementById('make-green');
        makegreen.addEventListener('click', function makegreen(){
            document.body.style.backgroundColor = 'green';
        });

// option 4 final