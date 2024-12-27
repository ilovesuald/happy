function gun(cursor) {
    var img = document.createElement("img");
    img.id = "newcursor";
    img.src = cursor;
    img.style.position = "absolute";
    img.style.pointerEvents = "none";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = 10;
    document.body.appendChild(img);
    document.addEventListener("mousemove", function(event) {
        img.style.left = event.clientX + 250 + "px";
        img.style.top = event.clientY * 0.2 + 400 + "px";
    });
}

function failed(){
    try {
        document.getElementById("newcursor").remove()
    } catch (err){
        return
    }
    document.getElementById("thegame").innerHTML = "";
    document.getElementById("thegame").style.background = "url(/images/pixelbackgrounded.png)";

    document.getElementById("thegame").innerHTML = '<p style="top: 25%; bottom: 25%; left: 25%; right: 25%; z-index: 4px; font-size: 30px; -webkit-text-stroke: 3px black;">you failed to save packgod. try again.</p>';

    setTimeout(() => {
        window.location.reload()
    }, 1500);
}

function start(){
    let click = 0;

    document.getElementById("thegame").innerHTML = "";
    document.getElementById("thegame").style.backgroundColor = "#000000";
    document.getElementById("thegame").style.background = "url(/images/basement_bg.png)";
    document.getElementById("thegame").innerHTML = '<img src="/images/packgod.png" width="179" height="207" id="packgodRight" style="pointer-events: all; bottom: 50px; left: 350px; position: absolute; z-index: 2; transform: rotateY(-180deg);">\n<img src="/images/packgod.png" width="199" height="207" id="packgod" style="bottom: 0; left: 50px; position: absolute; pointer-events: all;">';

    var splatter = document.createElement("img");
    splatter.id = "bloodsplatter";
    splatter.src = "/images/bloodsplatter.png";
    splatter.style.position = "absolute";
    splatter.style.pointerEvents = "none";
    splatter.style.zIndex = 11;
    splatter.style.bottom = "10px";
    splatter.style.left = "0px";
    splatter.style.width = "840px";
    splatter.style.height = "616px";
    splatter.style.visibility = "hidden";
    document.getElementById("thegame").appendChild(splatter);

    gun("/images/weaponpov.png");

    document.getElementById("packgodRight").addEventListener("click", function(){
        if (click < 1){
            click += 1;

            document.getElementById("packgodRight").src = "/images/deadpackgod.png";
            document.getElementById("packgodRight").style.pointerEvents = "none";

            splatter.style.visibility = "";

            try {
                document.getElementById("newcursor").remove()
            } catch (err){
                return
            }

            setTimeout(() => {
                startLevel2();
            }, 1500);
        }
    });

    document.getElementById("packgod").addEventListener("click", function(){
        if (click < 1){
            click += 1;

            document.getElementById("packgod").src = "/images/deadpackgod.png";
            document.getElementById("packgod").style.pointerEvents = "none";

            splatter.style.visibility = "";

            setTimeout(() => {
                failed()
            }, 500);
        }
    });
}

function startLevel2(){
    let click = 0;

    document.getElementById("thegame").innerHTML = "";
    document.getElementById("thegame").style.backgroundColor = "#000000";
    document.getElementById("thegame").style.background = "url(/images/level2room.png)";
    document.getElementById("thegame").innerHTML = '<img src="/images/packgod.png" width="79" height="107" id="packgodRight" style="pointer-events: all; bottom: 20px; left: 400px; position: absolute; z-index: 2; transform: rotateY(-180deg);"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 335px; position: absolute; pointer-events: all;"><img src="/images/packgod.png" width="79" height="107" id="packgodRight" style="pointer-events: all; bottom: 30px; left: 310px; position: absolute; z-index: 2; transform: rotateY(-180deg);"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 410px; position: absolute; pointer-events: all;"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 450px; position: absolute; pointer-events: all;"><img src="/images/packgod.png" width="79" height="107" id="packgodRight" style="pointer-events: all; bottom: 20px; left: 550px; position: absolute; z-index: 2; transform: rotateY(-180deg);"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 585px; position: absolute; pointer-events: all;"><img src="/images/packgod.png" width="79" height="107" id="packgodRight" style="pointer-events: all; bottom: 10px; left: 270px; position: absolute; z-index: 1; transform: rotateY(-180deg);"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 175px; position: absolute; pointer-events: all;"><img src="/images/packgod.png" width="79" height="107" id="packgodRight" style="pointer-events: all; bottom: 50px; left: 350px; position: absolute; z-index: 2; transform: rotateY(-180deg);"><img src="/images/packgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 250px; position: absolute; pointer-events: all;">';

    '<img src="/images/evilpackgod.png" width="79" height="107" id="packgod" style="bottom: 0; left: 500px; position: absolute; pointer-events: all;">'

    var evilpackgod = document.createElement("img");
    evilpackgod.src = "/images/evilpackgod.png";
    evilpackgod.style.position = "absolute";
    evilpackgod.style.pointerEvents = "none";
    evilpackgod.style.zIndex = 11;
    evilpackgod.style.bottom = "0px";
    evilpackgod.style.left = "500px";
    evilpackgod.width = "79";
    evilpackgod.height = "107";
    document.getElementById("thegame").appendChild(evilpackgod);

    evilpackgod.addEventListener("click", function(){
        if (click < 1){
            click += 1;

            document.getElementById("packgod").src = "/images/deadpackgod.png";
            document.getElementById("packgod").style.pointerEvents = "none";

            splatter.style.visibility = "";

            setTimeout(() => {
                failed()
            }, 500);
        }
    });
}
