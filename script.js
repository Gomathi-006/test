document.querySelectorAll('[data-target]').forEach(e=>{
    e.onclick=()=>{

        document.querySelectorAll('.page').forEach(p=>{
            p.classList.remove('active');
        });

        document.getElementById(e.dataset.target)
                .classList.add('active');
        if(e.dataset.target === 'p1'){

            document.getElementById("typed").textContent = "";

            document.getElementById("footerCredit")
                    .classList.remove("show");

            document.getElementById("finalBtn")
                    .classList.remove("show");
        }

        if(e.dataset.target==='letterPg'){
            type();
        }

        if(e.dataset.target==='ending'){
            startEnding();
        }
    }
});
document.getElementById('music').onclick=()=>{
let a=document.getElementById('bgm');
a.paused?a.play():a.pause();
}

function type(){

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

    document.getElementById("footerCredit")
            .classList.add("show");

    setTimeout(()=>{
        document.getElementById("finalBtn")
                .classList.remove("hidden");

        document.getElementById("finalBtn")
                .classList.add("show");
    },1500);
}
},35);
}
const photos = document.querySelectorAll('.pola');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.15
});

photos.forEach(photo=>{
    observer.observe(photo);
});
function startEnding(){
    document.getElementById("restartBtn")
        .classList.remove("show");
    const ids = [
        "line1",
        "line2",
        "line3",
        "line4",
        "line5",
        "line6"
    ];

    ids.forEach(id=>{
        document.getElementById(id).classList.add("hidden");
    });

    document.getElementById("line1").classList.remove("hidden");

    setTimeout(()=>{
        line1.classList.add("hidden");
        line2.classList.remove("hidden");
    },2000);

    setTimeout(()=>{
        line2.classList.add("hidden");
        line3.classList.remove("hidden");
    },4000);

    setTimeout(()=>{
        line3.classList.add("hidden");
        line4.classList.remove("hidden");
    },6500);

    setTimeout(()=>{
        line4.classList.add("hidden");
        line5.classList.remove("hidden");
    },9500);

    setTimeout(()=>{
        line6.classList.remove("hidden");
    },12500);

    setTimeout(()=>{
        document.getElementById("restartBtn")
                .classList.remove("hidden");

        document.getElementById("restartBtn")
                .classList.add("show");
    },14000);
}