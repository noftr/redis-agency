let lottie_target = document.querySelector("#target-lottie");
let lottie_wrapper = document.querySelector(".redis-lottie");
let lottie_sensivity = 14000;
let lottie_play = { speed: -4, };
let rotate_lottie = 0;
let rotate_direction = 1;
let path_even_loop = false;
let path_loop = false;
let path_loop_once = true;
let scroll_loop_once = true;

let rndm_img = [
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a35802afe704ad26e9_team_member_01-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a3e6af713a60f0b492_team_member_02-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a3b00865a656998834_team_member_03-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a37ca03e0ffabc01f5_team_member_04-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a45b930676ad5f093c_team_member_05-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a39c51396f4bfdc471_team_member_06-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a433ecaf980a4dba7b_team_member_07-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a68aa1e43cecfd412c_team_member_08-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a59b69bf3695901ef1_team_member_09-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a532f62285018930b1_team_member_10-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a73566644413876b72_team_member_11-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a5ec165b1d46d430c4_team_member_12-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a5906c4eff021be76b_team_member_13-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a714925ccb8d352178_team_member_14-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a65b930647b55f093e_team_member_15-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a7622e51cb5e3d2851_team_member_16-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a8aedc0d0ad4a7cbac_team_member_17-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a7992d2e39450ddebd_team_member_18-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a733250761c093a97e_team_member_19-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a9faa9cd3058197c11_team_member_20-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a8db13b01c3a3fc083_team_member_21-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a9cfba19b784982acc_team_member_22-1.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628cf5adc81d78cd6e8efe58_team_member_23-1.jpg',
];

let rndm_img_hover = [
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a3919a8b0caecf7bc6_team_member_01-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a3dde2d5293e1249cf_team_member_02-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a3b0086584d1998833_team_member_03-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a4695788ac926e4513_team_member_04-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a4ec165bbd06d430bf_team_member_05-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a5faa9cd44a7197bd6_team_member_06-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a4b008659cd7998835_team_member_07-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a4aac4d7f736e21a48_team_member_08-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a4a2de32048726a2ec_team_member_09-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a75e581b61e2c60135_team_member_10-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a66b2c228a207f6131_team_member_11-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a69b29d6578d5a0f02_team_member_12-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a5968444eddf72d131_team_member_13-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a76b2c2229097f614c_team_member_14-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a79cce2384f1be7839_team_member_15-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a73c696c5c4f22df09_team_member_16-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a71e3f462253cb6836_team_member_17-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628dfdb846000d6d93f55c7f_team_member_18-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a85b93063ce75f0945_team_member_19-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a8e880888b5d1b8f72_team_member_20-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a966f3111269ef3d38_team_member_21-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628ce6a99b69bfee54901ef6_team_member_22-2.jpg',
'https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/628cf3e4e01b2e53d12d36ca_team_member_23-2.jpg',
];


let rndm_count = 0;
let team_img, team_img_hover;

gsap.registerPlugin(MotionPathPlugin);
var path_tween = gsap.to(".lottie-wrapper", {
    ease: "linear",
    motionPath: { path: "#path", align: "#path", alignOrigin: [0.5, 0.5] }
});

animation_lottie = lottie.loadAnimation({
    container: lottie_target,
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: "https://uploads-ssl.webflow.com/6266eeaffe48d61a4d9852b0/627e433282a7882f8b0ff2c4_redis-actual.json"
});

let scroll_wrapper_1 = document.getElementsByClassName("global-wrapper")[0];
let scroll_wrapper_2 = document.getElementsByClassName("image__container")[0];
let scroll_wrapper_3 = document.getElementsByClassName("image__container")[0];
let scroll_wrapper_4 = document.getElementsByClassName("image__container-redis")[0];
let target_1 = document.getElementById("target");
let target_2 = document.getElementById("target2");
let target_3 = document.getElementById("target3");
let target_4 = document.getElementById("target4");
let windowHeight_1 = scroll_wrapper_1.clientHeight;
let windowHeight_2 = scroll_wrapper_2.clientHeight;
let windowHeight_3 = scroll_wrapper_3.clientHeight;
let windowHeight_4 = scroll_wrapper_4.clientHeight;
let windowInnerHeight = window.innerHeight;
let newScrollY = 0;

if (window.screen.width > 479) {
    var scroller_1 = { wheelMultiplier: getLineHeight(), ease: 0.15, speed: 0, y: 0 };
    var scroller_2 = { wheelMultiplier: getLineHeight(), ease: 0.12, speed: 0, y: 0 };
    var scroller_3 = { wheelMultiplier: getLineHeight(), ease: 0.10, speed: 0, y: 0 };
    var scroller_4 = { wheelMultiplier: getLineHeight(), ease: 0.18, speed: 0, y: 0 };
} else {
    var scroller_1 = { wheelMultiplier: getLineHeight(), ease: 0.04, speed: 0, y: 0 };
    var scroller_2 = { wheelMultiplier: getLineHeight(), ease: 0.045, speed: 0, y: 0 };
    var scroller_3 = { wheelMultiplier: getLineHeight(), ease: 0.05, speed: 0, y: 0 };
    var scroller_4 = { wheelMultiplier: getLineHeight(), ease: 0.055, speed: 0, y: 0 };
}

let touch_up = 0;
let touch_down = 0;
let touch_path = 0;
let touch_speed = 0.05;
let touch_inertia = 0;
let point_click = false;
let first_click = false;

function pointer_move(e) {
    touch_up = e.touches[0].clientY;
    if (point_click == true) {
        if (first_click == true) {
            touch_path = touch_up - touch_down;
            let touch_inertia = 0.07*Math.pow(Math.abs(touch_path), 1.05);
            if (touch_inertia > 0.5) {
                scroller_1.speed -= touch_path * scroller_1.wheelMultiplier * touch_speed * touch_inertia;
                scroller_2.speed -= touch_path * scroller_2.wheelMultiplier * touch_speed * touch_inertia;
                scroller_3.speed -= touch_path * scroller_3.wheelMultiplier * touch_speed * touch_inertia;
                scroller_4.speed -= touch_path * scroller_4.wheelMultiplier * touch_speed * touch_inertia;
            } else {
                scroller_1.speed -= touch_path * scroller_1.wheelMultiplier * touch_speed;
                scroller_2.speed -= touch_path * scroller_2.wheelMultiplier * touch_speed;
                scroller_3.speed -= touch_path * scroller_3.wheelMultiplier * touch_speed;
                scroller_4.speed -= touch_path * scroller_4.wheelMultiplier * touch_speed;
            }
        };
        first_click = true;
    };
    touch_down = e.touches[0].clientY;
};
function point_down() {
    if (Math.abs(scroller_1.speed) > 1) {
        scroller_1.speed = 0;
        scroller_2.speed = 0;
        scroller_3.speed = 0;
        scroller_4.speed = 0;
    }
    point_click = true;
};
function point_cancel() {
    point_click = false;
    first_click = false;
};

function onWheel(event) {
    var normalized;
    var delta = event.wheelDelta;
    if (delta) {
        delta = event.deltaY || event.detail || 0;
        normalized = delta % 120 == 0 ? delta / 120 : delta / 120;
    } else {
        normalized = delta % 120 == 0 ? delta / 120 : delta / 120;
    }
    scroller_1.speed += normalized * scroller_1.wheelMultiplier;
    scroller_2.speed += normalized * scroller_2.wheelMultiplier;
    scroller_3.speed += normalized * scroller_3.wheelMultiplier;
    scroller_4.speed += normalized * scroller_4.wheelMultiplier;
}

function getLineHeight() {
    var element = document.createElement("div");
    element.style["font-size"] = "128ex";
    document.body.appendChild(element);
    var value = getComputedStyle(element).getPropertyValue("font-size");
    var size = parseFloat(value, 10) / 128;
    document.body.removeChild(element);
    return size;
}
onFrame();
function onFrame() {
    scroller_1.speed += -this.scroller_1.speed * this.scroller_1.ease;
    scroller_2.speed += -this.scroller_2.speed * this.scroller_2.ease;
    scroller_3.speed += -this.scroller_3.speed * this.scroller_3.ease;
    scroller_4.speed += -this.scroller_4.speed * this.scroller_4.ease;
    scroller_1.y -= Math.round(scroller_1.speed * 1000) / 1000;
    scroller_2.y -= Math.round(scroller_2.speed * 1000) / 1000;
    scroller_3.y -= Math.round(scroller_3.speed * 1000) / 1000;
    scroller_4.y -= Math.round(scroller_4.speed * 1000) / 1000;
    var scroll_1 = scroller_1.y % windowHeight_1;
    var scroll_2 = scroller_2.y % windowHeight_2;
    var scroll_3 = scroller_3.y % windowHeight_3;
    var scroll_4 = scroller_4.y % windowHeight_4;
    if (scroll_1 > 0) {
        scroll_1 = scroll_1 - windowHeight_1;
    };
    if (scroll_2 > 0) {
        scroll_2 = scroll_2 - windowHeight_2;
    };
    if (scroll_3 > 0) {
        scroll_3 = scroll_3 - windowHeight_3;
    };
    if (scroll_4 > 0) {
        scroll_4 = scroll_4 - windowHeight_4;
    };

    if (Math.abs(scroll_1) < 1000) {
        if (scroll_loop_once == true) {
            scroll_loop_once = false;

            let random_start = 1;
            let random_end = 23;
            let allСycles = 11;
            let array = [];

            for(i=random_start;i<=random_end;i++){
               array.push(i);
            };

            for(countCycles=1;countCycles<=allСycles;countCycles++){
                rndm_count = array.splice(Math.random()*array.length,1)[0];

                team_img = document.querySelectorAll(".comands__image")[countCycles-1];
                team_img.setAttribute('src', rndm_img[rndm_count-1]);

                team_img_hover = document.querySelectorAll(".comands__image--hover")[countCycles-1];
                team_img_hover.setAttribute('src', rndm_img_hover[rndm_count-1]);
            };
        }
    } else {
        scroll_loop_once = true;
    };

    if (scroll_1 !== newScrollY) {
        TweenLite.set(target_1, { rotate: 0.01, y: scroll_1, force3D: true });
        scroll_1 = scroller_1.y;
    };
    if (scroll_2 !== newScrollY) {
        TweenLite.set(target_2, { rotate: 0.01, y: scroll_2, force3D: true });
        scroll_2 = scroller_2.y;
    };
    if (scroll_3 !== newScrollY) {
        TweenLite.set(target_3, { rotate: 0.01, y: scroll_3, force3D: true });
        scroll_3 = scroller_3.y;
    };
    if (scroll_4 !== newScrollY) {
        TweenLite.set(target_4, { rotate: 0.01, y: scroll_4, force3D: true });
        scroll_4 = scroller_4.y;
    };

    lottie.setSpeed(lottie_play.speed+(scroller_1.speed * 0.3));
    let progress_path = Math.abs(scroller_4.y % lottie_sensivity / lottie_sensivity);
    path_tween.progress(progress_path);
    let cos_scroller = Math.cos(scroller_4.y*0.0005);
    lottie_target.style.transform = 'rotate(' + cos_scroller*30 + 'deg)';
    window.requestAnimationFrame(onFrame);
};

let progress_bar = document.querySelector(".preloader-line");
let logo_bar = document.querySelector(".logo-bar");
let logo_bar_mob = document.querySelector(".logo-bar-mob");
let bt_bar_1 = document.querySelector(".bt_bar_1");
let bt_bar_2 = document.querySelector(".bt_bar_2");
let bt_bar_3 = document.querySelector(".bt_bar_3");
let header_text = document.querySelector(".animate-header-text");
let left_herb = document.querySelector(".animate-left-herb");
let right_herb = document.querySelector(".animate-right-herb");
let redis_img = document.querySelector(".lottie-container");
let redisBG = document.getElementById("target4");
let botvaDown = document.querySelector(".conatcts__image-is2");
let botvaRightDown = document.querySelector(".about__image");

progress_bar.style.width = 70+"%";

redisBG.style.opacity = "0";
botvaDown.style.opacity = "0";
botvaRightDown.style.opacity = "0";
lottie_load();
function lottie_load(){
    if (animation_lottie.isLoaded == false) {
        setTimeout(() => {
            lottie_load();
        }, 100)
    } else {
        progress_bar.setAttribute("style", "transition-duration: 300ms, 300ms !important;")
        progress_bar.style.width = 100+"%";
        progress_bar.style.height = 0+"px";
        redisBG.style.opacity = "100";
        botvaDown.style.opacity = "100";
        botvaRightDown.style.opacity = "100";
        header_text.style.transform = "translate(0vh)";

        if (window.screen.width > 479) {
            logo_bar.style.transform = "translate(0vh) scale(1)";
        } else {
            logo_bar_mob.style.transform = "translate(0vh) scale(1)";
        }

        setTimeout(() => {
            left_herb.style.transform = "translate(0vh) rotate(0deg)";
            right_herb.style.transform = "translate(0vh) rotateX(-180deg) rotateY(-180deg) rotateZ(0deg)";
        }, 400);

        setTimeout(() => {
            bt_bar_1.style.opacity = "100";
            bt_bar_2.style.opacity = "100";
            bt_bar_3.style.opacity = "100";
        }, 500);

        setTimeout(() => {
            redis_img.style.transform = "translate(0vh) rotate(-33deg)";

            gsap.to( lottie_play, {
                duration: 1,
                speed: 0,
                ease: Power1.easeOut,
                delay: 1.05,
            } );

            window.addEventListener('touchstart', point_down);
            window.addEventListener('touchend', point_cancel);
            window.addEventListener('touchmove', pointer_move);
            window.addEventListener('wheel', onWheel);
        }, 700);
    }
};

bt_anchor_1 = document.querySelector(".bt-anchor-1");
bt_anchor_2 = document.querySelector(".bt-anchor-2");

pageTransition = document.querySelector(".transition");

bt_anchor_1.addEventListener('click', function (event) {

    pageTransition.style.opacity = "100";
    lottie_play = { speed: -4, };

    if (window.screen.width > 479) {
        setTimeout(() => {
            scroller_1.y = innerWidth * -1.04;
            scroller_2.y = innerWidth * -1.04;
            scroller_3.y = innerWidth * -1.04;
            scroller_4.y = innerWidth * -1.325;
        }, 400);
    } else {
        setTimeout(() => {
            scroller_1.y = innerWidth * -2.2;
            scroller_2.y = innerWidth * -2.0;
            scroller_3.y = innerWidth * -2.2;
            scroller_4.y = innerWidth * -10.3;
        }, 400);
    };
    setTimeout(() => {
        pageTransition.style.opacity = "0";
        gsap.to( lottie_play, {
            duration: 1,
            speed: 0,
            ease: Power1.easeOut,
            delay: 0,
        } );
    }, 400);
});

bt_anchor_2.addEventListener('click', function (event) {
    pageTransition.style.opacity = "100";
    lottie_play = { speed: -4, };

    if (window.screen.width > 479) {
        setTimeout(() => {
            scroller_1.y = innerWidth * -1.325;
            scroller_2.y = innerWidth * -1.325;
            scroller_3.y = innerWidth * -1.325;
            scroller_4.y = innerWidth * -1.975;
        }, 400);
    } else {
        setTimeout(() => {
            scroller_1.y = innerWidth * -3.3;
            scroller_2.y = innerWidth * -3.3;
            scroller_3.y = innerWidth * -3.3;
            scroller_4.y = innerWidth * -10.3;
        }, 400);
    }
    setTimeout(() => {
        pageTransition.style.opacity = "0";
        gsap.to( lottie_play, {
            duration: 1,
            speed: 0,
            ease: Power1.easeOut,
            delay: 0,
        } );
    }, 400);
});

window.addEventListener('resize', check_device);
function check_device() {
  document.location.reload();
};
