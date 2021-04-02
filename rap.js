lines = document.getElementsByClassName("line");
images = document.getElementsByClassName("image");

LINE_COUNT = 11;
IMAGE_COUNT = 9;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


function playsound(id, action) {
    if (action === "play"){
        document.getElementById(id).play();
    }
    else if (action === "pause"){
        document.getElementById(id).pause();
    }
}

sleep_times = [[0, 1200], [1300, 1200], [1400, 1500], [1200, 1200], [1600, 1200], [1300, 1400], 1300, [2400, 1000], [1500, 1300], [1400, 1300], [1400, 1300]];
half_lines = [["Hi my name is Ryan,", " and I like cheese"], ["Slayin' all these sweats", " with my Ratatouille"], ["Got a couple of hobbies,", " besides my click-speed"], ["Like sniping them nombres", " while collecting all them seeds"], ["I drink lots of sparkling water,", " and hang out on my bed"], ["I used to like Liz,", " but we broke up instead"], "(it was really because she wouldn't give me head)", ["Now I just sit back", " and watch Colin run the show"], ["Waiting for my keyboard", " whilst on Visual Studio Code"], ["I love NameMC", " and hangin' with Charles, my bae"], ["Now to end it off,", " Bedwars, I will play"]];

async function play_rap_words(){
    for (var i = 0; i < LINE_COUNT; i++){
        lines[i].style.visibility = "hidden";
    }

    for (var i = 0; i < IMAGE_COUNT; i++){
        images[i].style.visibility = "hidden";
    }

    for (var i = 0; i < LINE_COUNT; i++){
        if (i != 6){
            await sleep(sleep_times[i][0]);
            lines[i].innerHTML = half_lines[i][0];
            lines[i].style.visibility = "visible";
            await sleep(sleep_times[i][1]);
            lines[i].innerHTML += half_lines[i][1];
        }
        else{
            await sleep(sleep_times[i]);
            lines[i].innerHTML = half_lines[i];
            lines[i].style.visibility = "visible";
            images[0].style.visibility = "visible";
        }
    }

    for (var i = 0; i < IMAGE_COUNT; i++){
        images[i].style.visibility = "visible";
    }
    document.getElementById("scroll").style.fontSize = "large";
}


async function start(){
    await sleep(1000);
    playsound("wii", "play");
    await sleep(2500);
    playsound("wii", "pause");
    playsound("rap", "play");
    await play_rap_words();
    playsound("mii", "play")
}