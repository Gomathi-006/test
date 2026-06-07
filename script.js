document.querySelectorAll('[data-target]').forEach(e=>{
e.onclick=()=>{
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(e.dataset.target).classList.add('active');
if(e.dataset.target==='letterPg') type();
}
});
document.getElementById('music').onclick=()=>{
let a=document.getElementById('bgm');
a.paused?a.play():a.pause();
}
let started=false;
function type(){
if(started)return;started=true;
let txt=`Hey Kutta 💗,

There are some people who come into our lives and become a part of it without us even realizing it. Somehow, you became one of those people for me.

You make ordinary moments feel special and simple conversations turn into memories worth keeping. Your presence has a way of bringing comfort, laughter, and a little extra happiness into my days. Knowing that you're there is enough to make life feel a little lighter.

I don't think I say this often, but I'm genuinely grateful for you—for your kindness, your patience, your stupid jokes, and for simply being yourself. You've become someone I cherish deeply, and having you in my life is something I'll always be thankful for.

No matter where life takes us or how much things change, I hope you always know that you'll always have a very special place in my heart ♡

And finally, Happy Birthday once again !!May you always be surrounded by love, laughter, and all the little things that make life beautiful. ♡
                                            Happy 20!!`;
let i=0;
let t=setInterval(()=>{
document.getElementById('typed').textContent += txt[i++];

if(i >= txt.length){
    clearInterval(t);

    // Show footer after typing completes
    document.getElementById("footerCredit")
            .classList.add("show");
}
},35);
}
