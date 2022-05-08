const c4 = new Audio ("key/C4.mp3");
const Db4 = new Audio ("key/Db4.mp3");
const d4 = new Audio ("key/D4.mp3");
const Eb4 = new Audio("key/Eb4.mp3");
const e4 = new Audio ("key/E4.mp3");
const f4 = new Audio ("key/F4.mp3");
const Gb4 = new Audio ("key/Gb4.mp3");
const g4 = new Audio ("key/G4.mp3");
const Ab4 = new Audio ("key/Ab4.mp3");
const a4= new Audio ("key/A4.mp3");
const Bb4= new Audio ("key/Bb4.mp3");
const B4= new Audio ("key/B4.mp3");
const c5 = new Audio ("key/C5.mp3");
const Db5 = new Audio ("key/Db5.mp3");
const d5 = new Audio ("key/D5.mp3");
const Eb5 = new Audio("key/Eb5.mp3")
const e5 = new Audio ("key/E5.mp3");


const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 400);
    setTimeout(() => (clone.volume = 0.2), 400);
    setTimeout(() => (clone.volume = 0), 400);
}       
//C4-key
$(".C4-key").click(function(){
    playSound(c4) ;
    $(".C4-key").addClass(".active",playc4);
    $(".C4-key").delay(100).removeClass(".active");
    
})

// .C4-key.addEventListener("click",playc4)




//DB4-Key

$(".DB4-Key").click(function(){
    playSound(Db4) 
    $(".DB4-Key").addClass(".active")
   
})

$(".D4-Key").click(function(){
    playSound(d4) 
    $(".D4-Key").addClass(".active")
})

$(".EB4_Key").click(function(){
    playSound(Eb4) 
    $(".EB4_Key").addClass(".active")
})
$(".E4-Key").click(function(){
    playSound(e4) 
    $(".E4-Key").addClass(".active")
})
$(".F4-Key").click(function(){
    playSound(f4) 
    $(".F4-Key").addClass(".active")
})
$(".GB4-Key").click(function(){
    playSound(Gb4) 
    $(".GB4-Key").addClass(".active")
})
$(".G4-Key").click(function(){
    playSound(g4) 
    $(".G4-Key").addClass(".active")
})
$(".AB4-Key").click(function(){
    playSound(Ab4) 
    $(".AB4-Key").addClass(".active")
})
$(".A4-Key").click(function(){
    playSound(a4) 
    $(".A4-Key").addClass(".active")
})

$(".Bb4-Key").click(function(){
    playSound(Bb4) 
    $(".Bb4-Key").addClass(".active")
})
$(".B4-key").click(function(){
    playSound(B4) 
    $(".B4-key").addClass(".active")
})
$(".C5-Key").click(function(){
    playSound(c5) 
    $(".C5-Key").addClass(".active")
})
$(".DB5-Key").click(function(){
    playSound(Db5) 
    $(".DB5-Key").addClass(".active")
})

$(".D5-Key").click(function(){
    playSound(d5) 
    $(".D5-Key").addClass(".active")
})
$(".EB5-Key").click(function(){
    playSound(Eb5) 
    $(".EB5-Key").addClass(".active")
})
$(".E5-Key").click(function(){
    playSound(e5) 
    $(".E5-Key").addClass(".active")
})

//Les touches du claviers

window.addEventListener("keydown", (keycode) => {


    if(keycode.code === "KeyA" ) playSound(c4);

   
})
window.addEventListener("keydown", (keycode) => {

   
   
    if(keycode.code === "KeyW" ) playSound(Db4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyS" ) playSound(d4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyE" ) playSound(Eb4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyD" ) playSound(e4);

   
})



window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyF" ) playSound(f4);

   
})
window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyT" ) playSound(Gb4);

   
})
window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyG" ) playSound(g4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyY" ) playSound(Ab4);

   
})


window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyH" ) playSound(a4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyU" ) playSound(Bb4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyJ" ) playSound(B4);

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyK" ) playSound( c5 );

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyO" ) playSound(Db5 );

   
})

window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyL" ) playSound(d5 );

   
})


window.addEventListener("keydown", (keycode) => {

  
   
    if(keycode.code === "KeyP" ) playSound(Eb5 );

   
})
window.addEventListener("keydown", (keycode) => {

   console.log(keycode.code);
   
    if(keycode.code === "Semicolon" ) playSound(e5 );

   
})
