const link = document.querySelector('a');
// const link = document.getElementsByClassName('a')[0];

console.log(link);
console.dir(link);

link.textContent = 'Programming Mentor';
link.href = 'https://programmingmentor.com';


const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
para.appendChild(text);

para.classList.add('highlight');

const newPara = para.cloneNode(true);

setTimeout(() => sect.appendChild(newPara), 5000 );

window.addEventListener('resize', resizeDiv);

const img = document.querySelector('img');

function resizeDiv() {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  img.style.width = WIDTH/2 + 'px';
  img.style.height = HEIGHT/2 + 'px';
}


// const formSubmit = document.querySelector('form input[type=submit]');
// formSubmit.addEventListener('click', submitClick);

// function submitClick(e) {
//     e.preventDefault();
//     const textInput = document.getElementById('commentText');
//     const par = document.createElement('p');
//     par.textContent = textInput.value;
//     const commentContainer = document.querySelector('.comment-container');
//     commentContainer.appendChild(par);
//     textInput.value = '';
// }

$('.submit-button').click(function(e){
    e.preventDefault();
    const text = `<p>${$('#commentText').val()}</p>`;
    $('.comment-container').append(text);
    $('#commentText').val('').hide(5000);
})


const clockContainer = document.querySelector('.clock');
setInterval(function() {
    clockContainer.innerText = (new Date()).toLocaleTimeString();
}, 10);


const display = document.querySelector('.calculator input[name=display]');

document.querySelectorAll('.digits, .opers')
 .forEach( btn => btn.addEventListener('click', digitOperPressed) );
 
function digitOperPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.result')
    .addEventListener('click', function(){
        display.value = eval(display.value);       
    })