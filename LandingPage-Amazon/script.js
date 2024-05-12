var t1 = gsap.timeline();

t1
    .from(".navbar", {
        delay: 1,
        y: 20,
        opacity: 0,
        // duration:1
    })
    .from(".panel", {
        y: 20,
        opacity: 0,
        // duration:1
    })
    // .from(".fa-location-dot",{
    //     y:"-10",
    // })
    // .to(".fa-location-dot", {
    //     y: "-10",
    //     yoyo: "true",
    //     repeat: "-1",
    // })
    .from(".hero-section", {
        opacity: 0,
        scale: 1.3,
        duration: 2
    })
    .from(["#left1", "#left2"], {
        x: -60,
        // scale:1.6,
        opacity: 0,
        duration: 1
    })
    .from(["#right1", "#right2"], {
        x: 60,
        // scale:1.6,
        opacity: 0,
        duration: 1,
        delay: "-1"
    })
    .from(["#b_left1", "#b_left2"], {
        x: -60,
        // scale:1.6,
        opacity: 0,
        duration: 1
    })
    .from(["#b_right1", "#b_right2"], {
        x: 60,
        // scale:1.6,
        opacity: 0,
        duration: 1,
        delay: "-1"
    })
    .from(".hero-msg-para", {
        onStart: function () {
            $('.hero-msg-para').textillate({
                in: {
                    effect: 'fadeInRightBig',
                    callback: function () {
                        $('#hero-msg').textillate('out');
                    }
                },
                out: { effect: 'shuffle' }
            })
        }
    })













