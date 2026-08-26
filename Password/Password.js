var Box = document.getElementById("Box");
var Back = document.getElementById("Back");
var Count = 0;
var Enter = "" ;
var Password = "voltron";
const htmlNode = document.documentElement; 
const bodyNode = document.body;       

function animateWithRandomPause() {
    htmlNode.classList.remove('is-animating');
    bodyNode.classList.remove('is-animating');

    void htmlNode.offsetWidth; 

    htmlNode.classList.add('is-animating');
    bodyNode.classList.add('is-animating');
    const randomPause = Math.random() * 2000 + 1000;

    setTimeout(animateWithRandomPause, 4000 + randomPause);
}

animateWithRandomPause();

var LookTable = {
    "a":"Elementi/Caratteri/a.png", "b":"Elementi/Caratteri/b.png", "c":"Elementi/Caratteri/c.png", "d":"Elementi/Caratteri/d.png", "e":"Elementi/Caratteri/e.png",
    "f":"Elementi/Caratteri/f.png", "g":"Elementi/Caratteri/g.png", "h":"Elementi/Caratteri/h.png", "i":"Elementi/Caratteri/i.png", "j":"Elementi/Caratteri/j.png",
    "k":"Elementi/Caratteri/k.png", "l":"Elementi/Caratteri/l.png", "m":"Elementi/Caratteri/m.png", "n":"Elementi/Caratteri/n.png", "o":"Elementi/Caratteri/o.png",
    "p":"Elementi/Caratteri/p.png", "q":"Elementi/Caratteri/q.png", "r":"Elementi/Caratteri/r.png", "s":"Elementi/Caratteri/s.png", "t":"Elementi/Caratteri/t.png",
    "u":"Elementi/Caratteri/u.png", "v":"Elementi/Caratteri/v.png", "w":"Elementi/Caratteri/w.png", "x":"Elementi/Caratteri/x.png", "y":"Elementi/Caratteri/y.png",
    "z":"Elementi/Caratteri/z.png",
    "0":"Elementi/Caratteri/0.png", "1":"Elementi/Caratteri/1.png", "2":"Elementi/Caratteri/2.png", "3":"Elementi/Caratteri/3.png", "4":"Elementi/Caratteri/4.png",
    "5":"Elementi/Caratteri/5.png", "6":"Elementi/Caratteri/6.png", "7":"Elementi/Caratteri/7.png", "8":"Elementi/Caratteri/8.png", "9":"Elementi/Caratteri/9.png",
    "à":"Elementi/Caratteri/à.png", "é":"Elementi/Caratteri/é.png", "§":"Elementi/Caratteri/§.png", "[":"Elementi/Caratteri/[.png", "]":"Elementi/Caratteri/].png",
    "{":"Elementi/Caratteri/{.png", "}":"Elementi/Caratteri/}.png", "(":"Elementi/Caratteri/(.png", ")":"Elementi/Caratteri/).png", ",":"Elementi/Caratteri/,.png",
    ".":"Elementi/Caratteri/.png", "*":"Elementi/Caratteri/*.png", "-":"Elementi/Caratteri/-.png", "_":"Elementi/Caratteri/_.png", "+":"Elementi/Caratteri/+.png",
    "=":"Elementi/Caratteri/=.png", "?":"Elementi/Caratteri/?.png", "!":"Elementi/Caratteri/!.png", "€":"Elementi/Caratteri/€.png", "$":"Elementi/Caratteri/$.png",
    "^":"Elementi/Caratteri/^.png", "<":"Elementi/Caratteri/<.png", ">":"Elementi/Caratteri/>.png", "°":"Elementi/Caratteri/°.png", "#":"Elementi/Caratteri/#.png",
    "@":"Elementi/Caratteri/@.png", "%":"Elementi/Caratteri/%.png", "&":"Elementi/Caratteri/&.png"
};
var LookTableCapital = {
    "a":"Elementi/Caratteri/A-1.png", "b":"Elementi/Caratteri/B-1.png", "c":"Elementi/Caratteri/C-1.png", "d":"Elementi/Caratteri/D-1.png", "e":"Elementi/Caratteri/E-1.png",
    "f":"Elementi/Caratteri/F-1.png", "g":"Elementi/Caratteri/G-1.png", "h":"Elementi/Caratteri/H-1.png", "i":"Elementi/Caratteri/I-1.png", "j":"Elementi/Caratteri/J-1.png",
    "k":"Elementi/Caratteri/K-1.png", "l":"Elementi/Caratteri/L-1.png", "m":"Elementi/Caratteri/M-1.png", "n":"Elementi/Caratteri/N-1.png", "o":"Elementi/Caratteri/O-1.png",
    "p":"Elementi/Caratteri/P-1.png", "q":"Elementi/Caratteri/Q-1.png", "r":"Elementi/Caratteri/R-1.png", "s":"Elementi/Caratteri/S-1.png", "t":"Elementi/Caratteri/T-1.png",
    "u":"Elementi/Caratteri/U-1.png", "v":"Elementi/Caratteri/V-1.png", "w":"Elementi/Caratteri/W-1.png", "x":"Elementi/Caratteri/X-1.png", "y":"Elementi/Caratteri/Y-1.png",
    "z":"Elementi/Caratteri/Z-1.png"
}

document.addEventListener("keydown", function(e){
    if(e.key === "Backspace"){
        e.preventDefault();
        if (Box.lastElementChild){
            Box.removeChild(Box.lastElementChild);
            Count--; 
            
            Enter = Enter.slice(0, -1); 
            
            if (Count <= 0){
                Count = 0;
                Back.style.background = 'url("Elementi/Password_Insert_on.png") center / contain no-repeat';
            }
        }
        return;
    }

    if(e.key === "Enter"){
        if(Enter === Password){
            window.location.href = "../Work/DS.html";
        }
        Box.innerHTML = "";
        Enter = "";
        Count = 0;
        Back.style.background = 'url("Elementi/Password_Insert_on.png") center / contain no-repeat';
        return; 
    }

    Back.style.background = 'url("Elementi/Password_insert_Off.png") center / contain no-repeat';
    var Letter = e.key; 
    var Image = "";

    if (LookTable[Letter]) {
        Image = LookTable[Letter];
    } 
    else if (LookTableCapital[Letter.toLowerCase()]) {
        Image = LookTableCapital[Letter.toLowerCase()];
    }

    if (Image && Count < 20) {
        var nuovaImg = document.createElement("img");
        nuovaImg.src = Image;
        nuovaImg.alt = Letter;
        
        Box.appendChild(nuovaImg);
        Count++; 
        
        Enter += Letter; 
    }
});