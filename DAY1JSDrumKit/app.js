window.addEventListener('keydown',function(evt){
//   const key=  evt.keyCode;
//   console.log(key);
const audio=document.querySelector(`audio[data-key="${evt.keyCode}"]`);
const keyPressed=document.querySelector(`.key[data-key="${evt.keyCode}"]`);

if(!audio) return; //stop the function call

audio.currentTime=0;//rewind to the start

audio.play();
// console.log(keyPressed);
keyPressed.classList.add('playing');

});

function removeTransition(e){
    if(e.propertyName!=='transform') return;//skip if its not a transform
    this.classList.remove('playing');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));