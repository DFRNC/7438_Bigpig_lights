anim_7438();

function anim_7438()
{
        let id = "anim_7438v3";


        let scriptAnimArr = [
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js'
        ]

        function gsapAnim()
        {
            gsap.registerPlugin(MotionPathPlugin);
            MotionPathPlugin.convertToPath("polyline")
            gsap.set(id, { opacity: 1 })
       
            gsap.set("#radianceBtn1, #radianceBtn2, #radianceBtn3, #radianceBtn4, #radianceBtn5", {opacity: .5})
            gsap.set("#lampBtn1 > *, #lampOBtn3 > *, #lampOBtn4 > *", {opacity: .1, scale: 3, transformOrigin: "center"})
            gsap.set("#lampOBtn5 > *", {opacity: .1})
            gsap.set("#lampBtn2 > *", {scale: 2, transformOrigin: "center"})
            gsap.set("#lampBtn5 > *", {opacity: 0})
            gsap.set("#lamp1Btn3 > *, #lamp2Btn3 > *, #lamp3Btn3 > *", {scale: 1.5, transformOrigin: "center"})
            gsap.set("#gL2, #gL3, #gL4, #gL5", {opacity: 0})
            gsap.set("#lightBtn2, #lightBtn3, #lightBtn4, #lightBtn5", {opacity: 0})
            gsap.set("#lampO1Btn4 > *", {opacity: .3, scale: 2, transformOrigin: "center"})

            const diamond = ["#diamondBtn1", "#diamondBtn2", "#diamondBtn3", "#diamondBtn4", "#diamondBtn5"];

            diamond.forEach(btn => {
            gsap.to(`${btn} > *`, {y: -20, scale: 1.1, delay: -3, duration: 1, transformOrigin: "center",ease: "sine.inOut", stagger: { each: 0.25, repeat: -1, yoyo: true }});
            });
            gsap.timeline({repeat: -1, yoyo: true, defaults: {ease: "sine.inOut", duration: 1}})
            .to("#handR", {rotation: 10, transformOrigin: "center"})
            .to("#leg", {rotation: -10, transformOrigin: "center"}, "<")
            gsap.timeline({repeat: -1, yoyo: true, defaults: {ease: "sine.inOut", duration: 1}})
            .to("#handL", {rotation: -20, transformOrigin: "center"})
            .to("#pig", {y: -10, scaleY: 1.05, scaleX: .95, transformOrigin: "center"},"<")
            .to("#leg", {rotation: -10, transformOrigin: "center"}, "<")
            .to("#leg2", {rotation: -10, transformOrigin: "center"}, "<")

            gsap.timeline({repeat: -1, defaults: {ease: "sine.inOut", duration: .25}})
            .to("#eye1, #eye2", {scaleY: .1, transformOrigin: "center", repeat: 1, yoyo: true})
            .to("#face", {y: 2, repeat: 1, yoyo: true}, "<")
            .to("#ear", {scaleY: 1.05, transformOrigin: "50% 100%", repeat: 1, yoyo: true}, "<")

            .to("#eye1, #eye2", {delay: .5, scaleY: .1, transformOrigin: "center", repeat: 3, yoyo: true})
            .to("#face", {y: 2, repeat: 3, yoyo: true}, "<")
            .to("#ear", {scaleY: 1.05, transformOrigin: "50% 100%", repeat: 3, yoyo: true}, "<")

            .to("#eye1, #eye2", {delay: .5, scaleY: .1, transformOrigin: "center", repeat: 1, yoyo: true})
            .to("#face", {y: 2, repeat: 1, yoyo: true}, "<")
            .to("#ear", {scaleY: 1.05, transformOrigin: "50% 100%", repeat: 1, yoyo: true}, "<")

            ////1
            const anim1 = gsap.timeline({paused: false})
            .to("#radianceBtn1", {opacity: 1, ease: "sine.inOut", duration: 1.5, repeat: -1, yoyo: true})
            .to("#lampBtn1 > *", {opacity: .4, scale: 1, transformOrigin: "center", delay: -50, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")
            .to("#grWBtn1 > *", {opacity: .1, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")
            
            const anim1L = gsap.timeline({ paused: false });

            for (let i = 1; i <= 12; i++) {
            anim1L.to(`#b1R${i}`, {
                repeat: -1,
                duration: 6,
                ease: "none",
                motionPath: {
                path: "#pL1",
                align: "#pL1",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                }
            }, ">-5.3");
            }

            const btn1 = document.querySelector("#btn1")
            btn1.addEventListener("click", function () { 
            gsap.set("#gL2, #gL3, #gL4, #gL5", {opacity: 0})
            gsap.set("#gL1", {opacity: 1})
            gsap.set("#lightBtn2, #lightBtn3, #lightBtn4, #lightBtn5", {opacity: 0})
            gsap.to("#lightBtn1", {opacity: .5, ease: "sine.inOut", duration: .2})
            });
            ///2
            const anim2 = gsap.timeline({paused: false})
            .to("#radianceBtn2", {opacity: .3, ease: "sine.inOut", duration: 1.5, repeat: -1, yoyo: true})
            .to("#lampBtn2 > *", {opacity: .1, scale: 1, transformOrigin: "center", delay: -50, ease: "sine.inOut", duration: 1.5, stagger: {each: .35, from: "random", repeat: -1, yoyo: true}}, "<")
            .to("#grWBtn2 > *", {opacity: .4, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")

            const btn2 = document.querySelector("#btn2")
            btn2.addEventListener("click", function () { 
            gsap.set("#gL1, #gL3, #gL4, #gL5", {opacity: 0})
            gsap.set("#gL2", {opacity: 1})
            gsap.set("#lightBtn1, #lightBtn3, #lightBtn4, #lightBtn5", {opacity: 0})
            gsap.to("#lightBtn2", {opacity: .5, ease: "sine.inOut", duration: .2})
            });
            // ///3
            const anim3 = gsap.timeline({paused: false})
            .to("#radianceBtn3", {opacity: .3, ease: "sine.inOut", duration: 1.5, repeat: -1, yoyo: true})
            .to("#lampOBtn3 > *", {opacity: .4, scale: 1, transformOrigin: "center", delay: -50, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")
            .to("#grWBtn3 > *", {opacity: .4, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")
            
            gsap.timeline({repeat: -1, yoyo: true})
            .to("#lamp1Btn3 > *", {fill: "#ff3364", scale: 1, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}})
            .to("#lamp1Btn3 > *", {fill: "#ffffff", scale: 1.5, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}}, ">-1.5")
        
            gsap.timeline({repeat: -1, yoyo: true})
            .to("#lamp2Btn3 > *", {fill: "#ff3364", scale: 1, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}})
            .to("#lamp2Btn3 > *", {fill: "#ffffff", scale: 1.5, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}}, ">-1.5")
            
            gsap.timeline({repeat: -1, yoyo: true})
            .to("#lamp3Btn3 > *", {fill: "#ff3364", scale: 1, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}})
            .to("#lamp3Btn3 > *", {fill: "#ffffff", scale: 1.5, transformOrigin: "center", ease: "sine.inOut", duration: .25, stagger: {each: .1, from: "center"}}, ">-1.5")
            const btn3 = document.querySelector("#btn3")
            btn3.addEventListener("click", function () { 
            gsap.set("#gL1, #gL2, #gL4, #gL5", {opacity: 0})
            gsap.set("#gL3", {opacity: 1})
            gsap.set("#lightBtn1, #lightBtn2, #lightBtn4, #lightBtn5", {opacity: 0})
            gsap.to("#lightBtn3", {opacity: .5, ease: "sine.inOut", duration: .2})
            });
            ///4
            const anim4 = gsap.timeline({paused: false})
            .to("#radianceBtn4", {opacity: .3, ease: "sine.inOut", duration: 1.5, repeat: -1, yoyo: true})
            .to("#grWBtn4 > *", {opacity: .4, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")

            gsap.timeline({repeat: -1, repeatDelay: 1})
            .to("#lampBtn4 > *", {opacity: 0, ease: "sine.inOut", duration: .75})
            .to("#lampOBtn4 > *", {opacity: .4, scale: 1, transformOrigin: "center", ease: "sine.inOut", duration: .75}, "<")

            .to("#lampBtn4 > *", {delay: 1.5, opacity: 1, ease: "sine.inOut", duration: .75})
            .to("#lampOBtn4 > *", {opacity: .1, scale: 3, transformOrigin: "center", ease: "sine.inOut", duration: .75}, "<")

            const btn4 = document.querySelector("#btn4")
            btn4.addEventListener("click", function () { 
            gsap.set("#gL1, #gL2, #gL3, #gL5", {opacity: 0})
            gsap.set("#gL4", {opacity: 1})
            gsap.set("#lightBtn1, #lightBtn2, #lightBtn3, #lightBtn5", {opacity: 0})
            gsap.to("#lightBtn4", {opacity: .5, ease: "sine.inOut", duration: .2})
            });
            ///5
            const anim5 = gsap.timeline({paused: false})
            .to("#radianceBtn5", {opacity: .3, ease: "sine.inOut", duration: 1.5, repeat: -1, yoyo: true})
            .to("#grWBtn5 > *", {opacity: .4, ease: "sine.inOut", duration: .75, stagger: {each: .35, repeat: -1, yoyo: true}}, "<")
            const anim5L = gsap.timeline({repeat: -1})
            .to("#lampBtn5 > *", {opacity: 1, ease: "none", duration: .1, stagger: {each: .05}})
            .to("#lampOBtn5 > *", {scale: 3, transformOrigin: "center", ease: "none", duration: .1, stagger: {each: .05}}, "<")

            .to("#lampBtn5 > *", { opacity: 0, ease: "none", duration: .2, stagger: {each: .04}}, ">-1.5")
            .to("#lampOBtn5 > *", { scale: 1, transformOrigin: "center", ease: "none", duration: .2, stagger: {each: .04}}, "<")

            const btn5 = document.querySelector("#btn5")
            btn5.addEventListener("click", function () { 
            anim5L.restart()
            gsap.set("#gL1, #gL2, #gL3, #gL4", {opacity: 0})
            gsap.set("#gL5", {opacity: 1})
            gsap.set("#lightBtn1, #lightBtn2, #lightBtn3, #lightBtn4", {opacity: 0})
            gsap.to("#lightBtn5", {opacity: .5, ease: "sine.inOut", duration: .2})
            });

        }




        let contents =
        `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1169.21 957.77">
  <defs>
    <linearGradient id="linear-gradient" x1="304.82" y1="672.04" x2="305.1" y2="561.62" gradientTransform="translate(1375.58) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#33e3ff"/>
      <stop offset="1" stop-color="#f7a9dd"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="-350.97" y1="2189.13" x2="-353.54" y2="2164.34" gradientTransform="translate(2198.12 -1305.41) rotate(-140.79) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#33e3ff"/>
      <stop offset="1" stop-color="#40dffd"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="274.71" y1="103.2" x2="272.83" y2="85.08" gradientTransform="translate(1329.17 456.55) rotate(168.64) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-4" x1="943.86" y1="564.51" x2="943.86" y2="774.91" gradientTransform="translate(1375.58) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1395c9"/>
      <stop offset="1" stop-color="#014385"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="943.86" y1="589.47" x2="943.86" y2="756.02" gradientTransform="translate(1375.58) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0165a8"/>
      <stop offset="1" stop-color="#0b76b3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="1374.6" y1="785.31" x2="1378.89" y2="728.75" gradientTransform="translate(1851.37) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff95c3"/>
      <stop offset="1" stop-color="#eebff9"/>
    </linearGradient>
    <linearGradient id="linear-gradient-7" x1="336.91" y1="724.62" x2="337.11" y2="623.19" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-8" x1="-4496.5" y1="-1108.74" x2="-4499.07" y2="-1133.52" gradientTransform="translate(4836.45 -1305.41) rotate(-42.16) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-9" x1="-4905.56" y1="1210.47" x2="-4907.45" y2="1192.35" gradientTransform="translate(5619.45 456.55) rotate(12.56) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-10" x1="128.84" y1="1591.09" x2="147.48" y2="1591.09" gradientTransform="translate(1730.18 -750.35) rotate(-158.84) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-11" x1="762.52" y1="807.51" x2="762.85" y2="656.15" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-12" x1="-5214.55" y1="1389.92" x2="-5217.12" y2="1365.13" gradientTransform="translate(5807.83 1041.44) rotate(18.29) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-13" x1="-5158.62" y1="-357.66" x2="-5160.5" y2="-375.78" gradientTransform="translate(5004.04 -890.64) rotate(-24.34) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-14" x1="-2551.13" y1="3412.93" x2="-2532.49" y2="3412.93" gradientTransform="translate(4481.56 -1185.54) rotate(-79.64) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-15" x1="1113.22" y1="685.68" x2="1102.89" y2="586.23" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-16" x1="-5690" y1="182.12" x2="-5692.57" y2="157.33" gradientTransform="translate(5626.55 463.44) rotate(.21) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-17" x1="-4666.59" y1="2952.21" x2="-4668.47" y2="2934.08" gradientTransform="translate(5017.49 2292.83) rotate(54.94) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-18" x1="917.05" y1="1810.43" x2="935.7" y2="1810.43" gradientTransform="translate(1730.18 -750.35) rotate(-158.84) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <clipPath id="clippath">
      <path d="m760.98,521.77c-.52-2,1.04-4.19,3.49-4.88s4.86.37,5.38,2.37c.52,2-1.04,4.19-3.49,4.88-2.45.69-4.86-.37-5.38-2.37Zm19.67,10.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.14-9.44c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm63.98,13.48c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-228.88,31.63c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16.43-4.26c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.47,2.89c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-64.3-75.27c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-182.35-89.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Z" fill="none" stroke-width="0"/>
    </clipPath>
    <linearGradient id="_gradient_33" data-name="Градієнт без назви 33" x1="591.95" y1="670.4" x2="660.12" y2="629.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".05" stop-color="#f9fcff"/>
      <stop offset=".13" stop-color="#e8f4ff"/>
      <stop offset=".21" stop-color="#cce6ff"/>
      <stop offset=".3" stop-color="#a5d4ff"/>
      <stop offset=".4" stop-color="#73bcff"/>
      <stop offset=".5" stop-color="#37a0ff"/>
      <stop offset=".51" stop-color="#339eff"/>
      <stop offset=".6" stop-color="#6a80d4"/>
      <stop offset=".69" stop-color="#9f65ac"/>
      <stop offset=".78" stop-color="#c84f8d"/>
      <stop offset=".86" stop-color="#e63f76"/>
      <stop offset=".93" stop-color="#f83668"/>
      <stop offset=".97" stop-color="#ff3364"/>
    </linearGradient>
    <linearGradient id="_gradient_33-2" data-name="Градієнт без назви 33" x1="285.71" y1="546.49" x2="355.42" y2="587.09" xlink:href="#_gradient_33"/>
    <linearGradient id="_gradient_33-3" data-name="Градієнт без назви 33" x1="938.2" y1="671.07" x2="1007.26" y2="631.2" xlink:href="#_gradient_33"/>
    <linearGradient id="_gradient_64" data-name="Градієнт без назви 64" x1="592.25" y1="669.84" x2="660.42" y2="629.24" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#af33ff"/>
      <stop offset=".06" stop-color="#b439f0"/>
      <stop offset=".51" stop-color="#dc698b"/>
      <stop offset=".83" stop-color="#f5884b"/>
      <stop offset=".97" stop-color="#ff9433"/>
    </linearGradient>
    <linearGradient id="_gradient_64-2" data-name="Градієнт без назви 64" x1="286.01" y1="545.93" x2="355.71" y2="586.53" xlink:href="#_gradient_64"/>
    <linearGradient id="_gradient_64-3" data-name="Градієнт без назви 64" x1="938.49" y1="670.51" x2="1007.55" y2="630.64" xlink:href="#_gradient_64"/>
    <linearGradient id="_gradient_114" data-name="Градієнт без назви 114" x1="591.53" y1="670.04" x2="659.7" y2="629.44" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".01" stop-color="#fff0f4"/>
      <stop offset=".1" stop-color="#ff8ba7"/>
      <stop offset=".16" stop-color="#ff4b76"/>
      <stop offset=".19" stop-color="#ff3364"/>
      <stop offset=".38" stop-color="#fff"/>
      <stop offset=".6" stop-color="#ff3364"/>
      <stop offset=".82" stop-color="#fff"/>
      <stop offset="1" stop-color="#ff3364"/>
    </linearGradient>
    <linearGradient id="_gradient_114-2" data-name="Градієнт без назви 114" x1="285.29" y1="546.13" x2="354.99" y2="586.73" xlink:href="#_gradient_114"/>
    <linearGradient id="_gradient_114-3" data-name="Градієнт без назви 114" x1="937.77" y1="670.71" x2="1006.84" y2="630.84" xlink:href="#_gradient_114"/>
    <linearGradient id="_gradient_161" data-name="Градієнт без назви 161" x1="590.72" y1="670.23" x2="658.89" y2="629.64" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".02" stop-color="#fff0f4"/>
      <stop offset=".15" stop-color="#ff8ba7"/>
      <stop offset=".25" stop-color="#ff4b76"/>
      <stop offset=".29" stop-color="#ff3364"/>
      <stop offset=".68" stop-color="#33ff7c"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_gradient_161-2" data-name="Градієнт без назви 161" x1="284.48" y1="546.33" x2="354.18" y2="586.92" xlink:href="#_gradient_161"/>
    <linearGradient id="_gradient_161-3" data-name="Градієнт без назви 161" x1="936.96" y1="670.9" x2="1006.02" y2="631.03" xlink:href="#_gradient_161"/>
    <linearGradient id="_gradient_166" data-name="Градієнт без назви 166" x1="591.42" y1="670.39" x2="659.59" y2="629.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".23" stop-color="#fff" stop-opacity=".75"/>
      <stop offset=".61" stop-color="#fff" stop-opacity=".35"/>
      <stop offset=".88" stop-color="#fff" stop-opacity=".1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="_gradient_166-2" data-name="Градієнт без назви 166" x1="285.18" y1="546.49" x2="354.89" y2="587.08" xlink:href="#_gradient_166"/>
    <linearGradient id="_gradient_166-3" data-name="Градієнт без назви 166" x1="937.67" y1="671.06" x2="1006.73" y2="631.19" xlink:href="#_gradient_166"/>
    <linearGradient id="_gradient_10" data-name="Градієнт без назви 10" x1="60.27" y1="60.84" x2="101.69" y2="89.83" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".5" stop-color="#339eff"/>
      <stop offset=".73" stop-color="#9c66ae"/>
      <stop offset=".95" stop-color="#ff3364"/>
    </linearGradient>
    <linearGradient id="_gradient_4" data-name="Градієнт без назви 4" x1="138.61" y1="62.78" x2="175.89" y2="88.74" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#af33ff"/>
      <stop offset=".06" stop-color="#b439f0"/>
      <stop offset=".53" stop-color="#dc698b"/>
      <stop offset=".85" stop-color="#f5884b"/>
      <stop offset="1" stop-color="#ff9433"/>
    </linearGradient>
    <linearGradient id="_gradient_31" data-name="Градієнт без назви 31" x1="81.15" y1="121.58" x2="81.15" y2="162.93" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".54" stop-color="#ff3b6a"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_gradient_44" data-name="Градієнт без назви 44" x1="139.91" y1="129.04" x2="174.57" y2="158.32" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".28" stop-color="#ff3364"/>
      <stop offset=".74" stop-color="#33ff7c"/>
      <stop offset=".87" stop-color="#9cffbf"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_gradient_52" data-name="Градієнт без назви 52" x1="103.1" y1="196.79" x2="148.63" y2="228.65" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset=".95" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_gradient_52-2" data-name="Градієнт без назви 52" x1="111.74" y1="209.96" x2="131.72" y2="209.96" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-3" data-name="Градієнт без назви 52" x1="114.08" y1="199.15" x2="119.18" y2="199.15" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-4" data-name="Градієнт без назви 52" x1="108.89" y1="201.95" x2="112.27" y2="201.95" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-5" data-name="Градієнт без назви 52" x1="126.72" y1="201.33" x2="130.11" y2="201.33" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-6" data-name="Градієнт без назви 52" x1="108.35" y1="209.77" x2="117.95" y2="209.77" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-7" data-name="Градієнт без назви 52" x1="114.94" y1="193.75" x2="116.83" y2="193.75" xlink:href="#_gradient_52"/>
    <linearGradient id="_gradient_52-8" data-name="Градієнт без назви 52" x1="105.48" y1="209.96" x2="107.38" y2="209.96" xlink:href="#_gradient_52"/>
  </defs>
  <g isolation="isolate">
    <g id="bigpigLights">
      <g>
        <g>
          <path d="m1161.08,682.02l-473.84,273.57c-5.05,2.92-11.28,2.91-16.32-.03l-188.34-109.53-202.58-117.81-117-68.05c-10.81-6.29-10.79-21.91.04-28.16l473.85-273.58c5.05-2.91,11.28-2.9,16.32.03l241.35,140.37,90.63,52.71,175.93,102.31c10.81,6.29,10.79,21.91-.04,28.16Z" fill="#1195cb" stroke-width="0"/>
          <g>
            <path d="m1027.51,591.03c7.49-12.92,22.15-19.51,35.85-16.45,11.37,2.55,20.56,11.42,24.07,23.01,4.99-3.13,11.36-2.94,16,.45,5.04,3.67,7.08,10.39,4.93,16.43,1.05-.2,6-1.03,10.2,2.06,4.52,3.32,6.33,9.83,4.21,16.02,1.97,1.29,8.93,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.28,28.08-7.97,5.55-25.73,16.29-50.77,18.35-19.59,1.61-35.21-2.78-43.94-5.97,1.33-32.29,2.66-64.58,3.99-96.86Z" fill="#001f3f" stroke-width="0"/>
            <path d="m1019.52,585.15c7.49-12.92,22.15-19.51,35.85-16.45,11.37,2.55,20.56,11.42,24.07,23.01,4.99-3.13,11.36-2.94,16,.45,5.04,3.67,7.08,10.39,4.93,16.43,1.05-.2,6-1.03,10.2,2.06,4.52,3.32,6.33,9.83,4.21,16.02,1.97,1.29,8.93,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.28,28.08-7.97,5.55-25.73,16.29-50.77,18.35-19.59,1.61-35.21-2.78-43.94-5.97,1.33-32.29,2.66-64.58,3.99-96.86Z" fill="url(#linear-gradient)" stroke-width="0"/>
            <g>
              <path d="m1083.73,614.66c.74,0,11.58-.18,16.93-8.92,2.89-4.73,2.7-9.55,2.51-11.47-2.17.21-6.77.96-11.13,4.34-7.44,5.77-8.2,14.54-8.3,16.05Z" fill="url(#linear-gradient-2)" stroke-width="0"/>
              <path d="m1080.22,614.11c.34-.42,5.28-6.62,2.83-13.7-1.33-3.83-4.14-5.96-5.32-6.74-.89,1.32-2.6,4.27-2.72,8.3-.2,6.88,4.41,11.38,5.21,12.14Z" fill="url(#linear-gradient-3)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m858.19,360.68v227.14c-1.44,1.34-3.04,2.53-4.78,3.54l-329.69,191.61-.13.08v-227.9l1.06-.61,333.54-193.86Z" fill="#067cba" stroke-width="0"/>
            <path d="m266.67,620.18c-.04,9.8,5.19,18.86,13.7,23.72l243.35,139.25v-.18s.59-146.15.59-146.15l.34-82.28.3-74.98-195.63-111.93c-15.17,6.57-30.33,13.15-45.5,19.73-5.41,2.35-10.83,4.7-16.24,7.05v2.34s-.37,90.54-.37,90.54l-.54,132.89Z" fill="#00468f" stroke-width="0"/>
          </g>
          <g>
            <path d="m386.4,566.21c3.91-2.72,7.83-5.44,11.74-8.16.49-.42,1.02-.79,1.58-1.1.03-.02.05-.04.08-.06,0,0,0,0,0,.01,2.56-1.36,5.76-1.52,8.64.11l73.59,41.67c6.88,3.89,11.13,11.18,11.13,19.09v139.46c0,3.49-1.91,6.31-4.57,7.82,0,0,0,0,0,0l-12.94,8.98-6.41-14.92-69.66-39.45c-2.82-1.6-4.56-4.58-4.56-7.82v-125.55s-8.62-20.08-8.62-20.08Z" fill="#001f3f" stroke-width="0"/>
            <path d="m393.77,732.06l73.59,41.67c5.99,3.39,13.42-.94,13.42-7.82v-139.46c0-7.9-4.25-15.19-11.13-19.09l-73.59-41.67c-5.99-3.39-13.42.94-13.42,7.82v139.46c0,7.9,4.25,15.19,11.13,19.09Z" fill="url(#linear-gradient-4)" stroke-width="0"/>
            <path d="m402.98,722.84l56.95,32.25c4.74,2.69,10.62-.74,10.62-6.19v-108.9c0-7.18-3.86-13.8-10.11-17.34l-56.95-32.25c-4.74-2.69-10.62.74-10.62,6.19v108.9c0,7.18,3.86,13.8,10.11,17.34Z" fill="url(#linear-gradient-5)" stroke-width="0"/>
            <ellipse cx="452.78" cy="684.93" rx="5.32" ry="9.05" transform="translate(-278.31 311.24) rotate(-29.46)" fill="#001f3f" stroke-width="0"/>
          </g>
          <g>
            <g>
              <path d="m584.36,574.61l61.9-35.41c1.92-1.1,4.13-.65,5.52.7l9.82,7.16-8.42,14.12v48.95c0,3.73-2,7.17-5.23,9.02l-44.57,25.5-10.74,17.99-11.11-8.04c-1.4-.77-2.41-2.23-2.41-4.05v-66.92c0-3.73,2-7.17,5.23-9.02Z" fill="#0a87c1" stroke-width="0"/>
              <path d="m590.09,591.6v66.91c0,3.56,3.84,5.78,6.93,4.02l38.07-21.78,23.83-13.64c.36-.2.7-.43,1.02-.68,1.46-1.06,2.59-2.49,3.31-4.12.59-1.3.9-2.74.9-4.22v-66.91c0-3.56-3.84-5.78-6.92-4.02l-52.7,30.15-9.2,5.27c-.23.13-.46.27-.67.42-1.52,1.02-2.71,2.41-3.49,4.01-.7,1.4-1.08,2.97-1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
              <g>
                <path d="m594.18,593.53v20.78s40.02,22.94,40.02,22.94l21.19-12.13c.32-.18.62-.38.91-.6l-61.16-35.06c-.62,1.25-.96,2.64-.96,4.08Z" fill="#05446b" stroke-width="0"/>
                <path d="m598.25,585.88l61,34.96c.52-1.16.8-2.44.8-3.75v-5.87s-53.03-30.4-53.03-30.4l-8.18,4.69c-.2.12-.41.24-.6.37Z" fill="#05446b" stroke-width="0"/>
              </g>
            </g>
            <g>
              <path d="m370.87,495.2l-61.9-35.41c-1.92-1.1-4.13-.65-5.52.7l-9.82,7.16,8.42,14.12v48.95c0,3.73,2,7.17,5.23,9.02l44.57,25.5,10.74,17.99,11.11-8.04c1.4-.77,2.41-2.23,2.41-4.05v-66.92c0-3.73-2-7.17-5.23-9.02Z" fill="#015199" stroke-width="0"/>
              <path d="m365.14,512.19v66.91c0,3.56-3.84,5.78-6.93,4.02l-38.07-21.78-23.83-13.64c-.36-.2-.7-.43-1.02-.68-1.46-1.06-2.59-2.49-3.31-4.12-.59-1.3-.9-2.74-.9-4.22v-66.91c0-3.56,3.84-5.78,6.92-4.02l52.7,30.15,9.2,5.27c.23.13.46.27.67.42,1.52,1.02,2.71,2.41,3.49,4.01.7,1.4,1.08,2.97,1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
              <g>
                <path d="m361.04,514.12v20.78s-40.02,22.94-40.02,22.94l-21.19-12.13c-.32-.18-.62-.38-.91-.6l61.16-35.06c.62,1.25.96,2.64.96,4.08Z" fill="#05446b" stroke-width="0"/>
                <path d="m356.98,506.47l-61,34.96c-.52-1.16-.8-2.44-.8-3.75v-5.87l53.03-30.4,8.18,4.69c.2.12.41.24.6.37Z" fill="#05446b" stroke-width="0"/>
              </g>
            </g>
          </g>
          <g>
            <polygon points="1033.11 473.03 1033.11 688.73 885 774.24 885 542.68 957.62 451.83 1033.11 473.03" fill="#067cba" stroke-width="0"/>
            <polygon points="885 542.68 885 774.24 711.29 673.95 711.29 448.76 885 542.68" fill="#00468f" stroke-width="0"/>
          </g>
          <g>
            <path d="m927.07,578.02l61.9-35.41c1.92-1.1,4.13-.65,5.52.7l9.82,7.16-8.42,14.12v48.95c0,3.73-2,7.17-5.23,9.02l-44.57,25.5-10.74,17.99-11.11-8.04c-1.4-.77-2.41-2.23-2.41-4.05v-66.92c0-3.73,2-7.17,5.23-9.02Z" fill="#0a87c1" stroke-width="0"/>
            <path d="m932.79,595.01v66.91c0,3.56,3.84,5.78,6.93,4.02l38.07-21.78,23.83-13.64c.36-.2.7-.43,1.02-.68,1.46-1.06,2.59-2.49,3.31-4.12.59-1.3.9-2.74.9-4.22v-66.91c0-3.56-3.84-5.78-6.92-4.02l-52.7,30.15-9.2,5.27c-.23.13-.46.27-.67.42-1.52,1.02-2.71,2.41-3.49,4.01-.7,1.4-1.08,2.97-1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
            <g>
              <path d="m936.89,596.94v20.78s40.02,22.94,40.02,22.94l21.19-12.13c.32-.18.62-.38.91-.6l-61.16-35.06c-.62,1.25-.96,2.64-.96,4.08Z" fill="#05446b" stroke-width="0"/>
              <path d="m940.95,589.29l61,34.96c.52-1.16.8-2.44.8-3.75v-5.87s-53.03-30.4-53.03-30.4l-8.18,4.69c-.2.12-.41.24-.6.37Z" fill="#05446b" stroke-width="0"/>
            </g>
          </g>
          <g id="pig">
            <g id="handL">
              <path d="m508.52,747.95c3.22-2.03,7.09-4.89,10.93-8.88,6.12-6.35,9.61-12.89,11.58-17.46.46,1.41.99,3.59.9,6.28-.07,2.07-.49,3.79-.9,5.02.7-.61,1.79-1.42,3.3-2.03,1.97-.8,3.73-.87,4.77-.84-1.73,4.82-4.81,11.65-10.31,18.71-5.83,7.48-12.1,12.3-16.51,15.17-.36-.11-4.98-1.63-6.38-6.41-.99-3.38.03-7.08,2.62-9.56Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="511.02" cy="754.76" r="41.36" fill="none" stroke-width="0"/>
            </g>
            <g id="leg2">
              <path d="m472.72,824.46c1.71-.03,5.45-.35,8.68-3,.82-.67,1.47-1.38,1.99-2.05-.03,1.05,0,2.21.11,3.45.23,2.62.79,4.88,1.39,6.69,2.38-4.16,5.41-10.56,7.09-18.87.48-2.37.8-4.64.99-6.79.5-5.34.23-9.89-.17-13.27-1.26-2.4-3.75-3.88-6.41-3.8-2.87.09-5.43,2-6.39,4.78.67,3.14,1.25,7.59.67,12.86-.02.21-.04.42-.07.63-1.18,9.44-5.46,16.13-7.88,19.37Z" fill="#ff96c5" stroke-width="0"/>
              <path d="m480,791.6c.67,3.14,1.25,7.59.67,12.86,1.55-.56,3.38-1.01,5.44-1.17,2.71-.21,5.06.13,6.86.6.5-5.34.23-9.89-.17-13.27-1.26-2.4-3.75-3.88-6.41-3.8-2.87.09-5.43,2-6.39,4.78Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="486.51" cy="791.52" r="42.89" fill="none" stroke-width="0"/>
            </g>
            <g id="leg">
              <path d="m449.68,812.87c-1.54.95-3.01,1.63-4.25,2.11,1.54.34,12.83,2.58,22.64-4.69,1.98-1.47,3.57-3.09,4.85-4.72,4.07-5.18,5-10.54,5.21-11.96-.76-3.25-3.64-5.68-7.11-5.99-3.41-.3-6.68,1.52-8.08,4.52-.31,1.52-1.5,6.3-6.1,10.04-.12.09-.23.19-.35.27-5.87,4.54-12.67,3.91-13.87,3.78.73.75,2.49,2.34,5.32,3.13,2.69.76,4.96.41,6,.19-1.04,1.01-2.45,2.2-4.26,3.32Z" fill="#ff96c5" stroke-width="0"/>
              <path d="m456.49,802.45c2.37-.08,5.12.06,8.13.61,3.26.6,6.05,1.54,8.3,2.51,4.07-5.18,5-10.54,5.21-11.96-.76-3.25-3.64-5.68-7.11-5.99-3.41-.3-6.68,1.52-8.08,4.52-.31,1.52-1.5,6.3-6.1,10.04-.12.09-.23.19-.35.27Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="471.58" cy="791.14" r="38.3" fill="none" stroke-width="0"/>
            </g>
            <path d="m471.27,798.05l11.41-1.62c19.03-2.69,33.59-20.36,32.54-39.46h0c-1.06-19.1-17.34-32.4-36.36-29.7l-11.41,1.62c-19.03,2.69-33.59,20.36-32.54,39.46h0c1.06,19.1,17.34,32.4,36.36,29.7Z" fill="url(#linear-gradient-6)" stroke-width="0"/>
            <g id="face">
              <g>
                <ellipse id="eye2" cx="499.01" cy="761.35" rx="5.81" ry="2.57" transform="translate(-196.9 174.51) rotate(-16.62)" fill="#271a21" stroke-width="0"/>
                <ellipse id="eye1" cx="470.68" cy="768.99" rx="5.81" ry="2.57" transform="translate(-200.27 166.73) rotate(-16.62)" fill="#271a21" stroke-width="0"/>
              </g>
              <g id="nose">
                <ellipse cx="489.01" cy="779.49" rx="10.2" ry="9.61" fill="#ba6290" stroke-width="0"/>
                <path d="m483.15,765.59c4.05-2.11,8.64-1.64,11.4.87h0s0,0,0,0c.3.27.57.58.83.9l3.83,4.19-2.37,1.85c-.51,2.93-2.57,5.77-5.74,7.42-1.79.93-3.69,1.36-5.49,1.33l-2.31,1.8-3.35-3.78c-.58-.48-1.08-1.05-1.5-1.69h0s0,0,0,0c-.12-.18-.23-.36-.33-.56-2.19-4.21.06-9.72,5.04-12.32Z" fill="#efbef7" stroke-width="0"/>
                <ellipse cx="491.04" cy="777.51" rx="10.16" ry="8.59" transform="translate(-303.98 315.35) rotate(-27.56)" fill="#ffa0d0" stroke-width="0"/>
                <ellipse cx="494.55" cy="776.93" rx="1.75" ry="2.56" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="488.59" cy="779.18" rx="1.75" ry="2.56" fill="#ba6290" stroke-width="0"/>
              </g>
            </g>
            <g id="ear">
              <g>
                <ellipse cx="454.45" cy="741.11" rx="13.01" ry="8.3" transform="translate(-339.53 387.05) rotate(-34.45)" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="454.17" cy="737.46" rx="13.01" ry="8.3" transform="translate(-337.52 386.25) rotate(-34.45)" fill="#ff96c4" stroke-width="0"/>
              </g>
              <g>
                <ellipse cx="494.27" cy="734.02" rx="8.3" ry="13.01" transform="translate(-372.98 910.01) rotate(-67.52)" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="493.69" cy="731.15" rx="8.3" ry="13.01" transform="translate(-370.68 907.7) rotate(-67.52)" fill="#ff96c4" stroke-width="0"/>
              </g>
            </g>
            <g id="handR">
              <path d="m437.61,765.84c-8.61,1.45-19,12.42-15.87,21.49,3.1,8.98,17.99,11.84,26.59,6.72,3.05-1.81,4.95-4.41,6.12-6.57-.75.07-2.1.08-3.55-.58-.57-.26-1.02-.56-1.38-.85.21-.63.42-1.26.63-1.89.51-1.54.99-3.07,1.46-4.58-6.42,1.76-9.89,2.11-10.4,1.05-.37-.78.84-2.33,3.65-4.63,1.64-3.41,1.6-6.88-.18-8.79-2.05-2.21-5.72-1.6-7.07-1.37Z" fill="#ba6290" stroke-width="0"/>
              <path d="m438.62,762.66c-12.02,1.77-19.14,12.12-17.59,20.1,1.92,9.92,16.99,14.92,25.65,10.7,1.53-.75,3.33-2.01,5.01-4.24-1.1-.19-2.38-.52-3.76-1.06-.71-.28-1.35-.58-1.92-.88.49-.43,1.02-.96,1.53-1.62,1.13-1.46,1.71-2.91,2.02-3.95-2.28.87-6.13,2.01-9.79,1.37-1.71-.3-2.45-.83-2.81-1.47-.72-1.27.07-2.86.14-2.98,1.02-1.98,4.18-2.86,7.9-2.26,2.65-4.56,2.91-9.34.55-11.75-2.52-2.58-6.45-2.02-6.93-1.95Z" fill="#ff96c5" stroke-width="0"/>
              <circle cx="442.47" cy="769.95" r="30.89" fill="none" stroke-width="0"/>
            </g>
          </g>
        </g>
        <path d="m670.99,637.92l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="#1195cb" stroke-width="0"/>
        <path d="m366.85,585.02c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="#1195cb" stroke-width="0"/>
        <path d="m1013.7,641.33l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="#1195cb" stroke-width="0"/>
        <g>
          <g>
            <g>
              <path d="m382.21,416.02c.29-.07.56-.18.81-.33,118.24-69.61,218.33-136.99,336.57-206.59,2.92-1.72,1.12-6.21-2.18-5.43-30.81,7.24-103.35-9.42-134.16-2.18-.28.07-.55.17-.8.32l-307.88,192.18-.76-3.8-24.52,8.12v12.63s.08-.03.08-.03c.34,1.46,1.72,2.68,3.58,2.24l129.25,2.88Z" fill="#0b719e" stroke-width="0"/>
              <path d="m382.96,403.86c.29-.07.56-.18.81-.33,122.66-72.21,209.24-127.03,331.9-199.24.62-.36.24-1.31-.46-1.15-34.1,8.01-92.21-13.9-126.31-5.89-3.68.86-7.21,2.26-10.49,4.15l-327.64,194.74c-2.96,1.71-1.15,6.24,2.17,5.44l130.02,2.26Z" fill="#001f3f" stroke-width="0"/>
            </g>
            <g>
              <path d="m382.98,404.26l6.98,5.03,332.39-190.4c3.42-1.97,7.76-1.18,10.27,1.87l122.18,138.28,7.81.87v10.9c.04.47.04.94,0,1.41v.02h0c-.23,2.5-1.61,4.87-3.99,6.24l-333.89,193.3c-3.42,1.97-7.76,1.18-10.27-1.87l-134.08-156.82c-1.22-1.48-.31-3.38-.31-3.38l2.91-5.44Z" fill="#0b719e" stroke-width="0"/>
              <path d="m525.81,556l333.48-192.58c4.31-2.49,5.36-8.25,2.2-12.1l-129.98-146.8c-3.38-4.12-9.24-5.18-13.85-2.52l-331.41,191.38c-4.31,2.49-5.36,8.25-2.2,12.1l131.5,148.64c2.5,3.05,6.85,3.84,10.27,1.87Z" fill="#043c61" stroke-width="0"/>
              <g>
                <path d="m519.9,527.39c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#17538b" stroke-width="0"/>
                <path d="m506.87,512.32c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#096595" stroke-width="0"/>
                <path d="m493.84,497.24c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#0070a3" stroke-width="0"/>
                <path d="m480.81,482.16c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#077ebb" stroke-width="0"/>
                <path d="m467.78,467.09c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#0c8cc5" stroke-width="0"/>
                <path d="m454.75,452.01c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#1195cb" stroke-width="0"/>
                <path d="m441.72,436.94c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#22a5da" stroke-width="0"/>
                <path d="m428.69,421.86c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-21.17-23.25l-308.15,177.98,21.17,23.25Z" fill="#33e3ff" stroke-width="0"/>
              </g>
            </g>
          </g>
          <g>
            <path d="m1044.68,477.98c0,1.98-1.89,3.42-3.8,2.89l-83.32-22.94h0l.06-12.08-178.45-91.03,86.74,23.88h.01l178.76,91.21v8.06Z" fill="#0b719e" stroke-width="0"/>
            <path d="m957.62,457.86l-.06.08-74.22,108.29c-1.18,1.72-3.49,2.25-5.3,1.2l-175.53-101.35v-12l76.32-99.34.34.09,178.78,91.22-.33,11.81Z" fill="#0b719e" stroke-width="0"/>
            <polygon points="1044.68 469.92 957.95 446.05 957.94 446.04 957.62 445.86 779.17 342.83 865.91 366.71 865.92 366.71 1044.68 469.92" fill="#043c61" stroke-width="0"/>
            <path d="m955.63,437.22c3.18,1.7,4.09,5.83,1.93,8.72h0s-74.22,108.29-74.22,108.29c-1.18,1.72-3.49,2.25-5.3,1.2l-175.53-101.35,76.32-111.34h0c2-2.92,5.91-3.82,8.98-2.05l167.82,96.54Z" fill="#001f3f" stroke-width="0"/>
          </g>
          <g>
            <path d="m1090.91,691.09c-9.22,7.76-20.94,16.42-35.29,24.56-15.79,8.96-30.54,14.91-42.79,18.92-7.71,1.95-15.56-1.38-19.01-7.74-4.25-7.83.49-15.97.7-16.32-4.32-10.61-.47-21.55,7.04-25.34,6.92-3.5,14.6.28,15.63.8-4.23-7.03-1.96-16.19,4.79-20.34,7.01-4.31,16.6-1.85,20.73,5.61,1.23-1.69,9.07-12.14,22.43-12.95,10.61-.65,23.97,4.83,27.48,16.19,2.28,7.37-.54,14.14-1.72,16.61Z" fill="#001f3f" stroke-width="0"/>
            <path d="m1086.74,684.69c-9.22,7.76-20.94,16.42-35.29,24.56-15.79,8.96-30.54,14.91-42.79,18.92-7.71,1.95-15.56-1.38-19.01-7.74-4.25-7.83.49-15.97.7-16.32-4.32-10.61-.47-21.55,7.04-25.34,6.92-3.5,14.6.28,15.63.8-4.23-7.03-1.96-16.19,4.79-20.34,7.01-4.31,16.6-1.85,20.73,5.61,1.23-1.69,9.07-12.14,22.43-12.95,10.61-.65,23.97,4.83,27.48,16.19,2.28,7.37-.54,14.14-1.72,16.61Z" fill="url(#linear-gradient-7)" stroke-width="0"/>
            <g>
              <path d="m1067.62,680.27c-.67,0-10.44-.18-15.25-8.92-2.61-4.73-2.43-9.55-2.26-11.47,1.95.21,6.1.96,10.03,4.34,6.71,5.77,7.39,14.54,7.48,16.05Z" fill="url(#linear-gradient-8)" stroke-width="0"/>
              <path d="m1070.78,679.72c-.31-.42-4.76-6.62-2.55-13.7,1.2-3.83,3.73-5.96,4.79-6.74.8,1.32,2.35,4.27,2.45,8.3.18,6.88-3.97,11.38-4.69,12.14Z" fill="url(#linear-gradient-9)" stroke-width="0"/>
              <path d="m1034.25,690.9c-.52-.03-8.13-.6-12.15-6.83-2.17-3.37-2.18-6.68-2.1-8,1.53.23,4.78.94,7.94,3.44,5.4,4.28,6.19,10.35,6.31,11.39Z" fill="url(#linear-gradient-10)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m581.52,797.29c20.47-6.84,44.97-17.41,70.78-34.14,11.94-7.74,22.55-15.75,31.89-23.57,11.9-11.08,14-28.76,6.76-39.43-5.08-7.48-14.37-10.95-23.86-9.51-.43-.8-5.91-10.61-16.98-11.17-10.84-.55-17.44,8.26-18.03,9.07-.36-1.89-1.82-8.45-7.14-11.98-6.72-4.45-16.99-2.33-24.14,6.1-9.29-4.75-19.64-1.67-24.12,5.84-4.38,7.33-1.47,16.03-1.1,17.07-6.61-1.14-13.14,2.07-16.34,7.94-3.68,6.74-1.27,13.8-.95,14.7-8-2.7-16.41,1.28-19.67,8.59-2.53,5.67-1.67,12.68,2.13,17.94-1.19,2.16-8.17,15.29-3.68,27.59,5.23,14.34,24.35,22.89,44.46,14.96Z" fill="#001f3f" stroke-width="0"/>
            <path d="m580.81,788.7c19.42-6.63,42.65-16.88,67.14-33.09,11.33-7.5,21.39-15.26,30.25-22.84,11.29-10.74,13.28-27.88,6.41-38.22-4.82-7.25-13.63-10.62-22.63-9.22-.41-.78-5.61-10.28-16.11-10.82-10.28-.53-16.55,8.01-17.1,8.79-.34-1.83-1.72-8.19-6.77-11.61-6.38-4.32-16.11-2.26-22.9,5.91-8.81-4.61-18.63-1.62-22.88,5.66-4.16,7.11-1.39,15.54-1.05,16.54-6.27-1.11-12.46,2.01-15.5,7.7-3.49,6.53-1.2,13.38-.9,14.24-7.59-2.62-15.57,1.24-18.66,8.33-2.4,5.49-1.59,12.29,2.02,17.39-1.13,2.1-7.75,14.82-3.49,26.75,4.96,13.9,23.1,22.19,42.17,14.5Z" fill="url(#linear-gradient-11)" stroke-width="0"/>
            <g>
              <path d="m597.41,723.12c-.33-.58-4.99-9.17.23-17.67,2.83-4.6,7.11-6.82,8.87-7.62.78,1.8,2.18,5.78,1.17,10.87-1.71,8.68-9.01,13.6-10.27,14.42Z" fill="url(#linear-gradient-12)" stroke-width="0"/>
              <path d="m591.4,717.3c-.5-.15-7.78-2.44-10.26-9.43-1.34-3.78-.59-7-.22-8.27,1.44.57,4.44,2,6.94,5.17,4.28,5.4,3.66,11.49,3.54,12.53Z" fill="url(#linear-gradient-13)" stroke-width="0"/>
              <path d="m661.49,709.72c-.07-.51-.94-8.1,4.43-13.21,2.91-2.77,6.16-3.39,7.46-3.57.06,1.54-.02,4.87-1.9,8.45-3.19,6.1-9,8.02-10,8.33Z" fill="url(#linear-gradient-14)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m318.29,712.71c-19.76-5.46-44.88-14.56-71.76-30.25-16.82-9.82-30.88-20.21-42.32-29.81-11.61-5-17.69-16.92-15.1-26.72,2.8-10.61,14.47-13.89,15.16-14.07-.09-.91-.93-11.81,7.01-17.93,7.35-5.66,19.1-4.82,27.53,2.84.48-.66,3.39-4.53,7.89-4.57,5.2-.05,10.68,5.01,11.64,12.35,3.77-5.53,9.78-8.92,15.83-8.3,8.88.91,17.07,10.38,16.64,22.2,1.02-.12,8.33-.87,13.8,4.41,5.17,4.99,6.54,13.29,3.1,20.34.84-.67,7.83-5.98,17.11-3.56,8.05,2.1,12,8.5,12.69,9.66,8.37,4.51,13.41,13.37,12.74,22.27-.86,11.57-10.88,17.01-11.66,17.42.59.9,5.11,7.99,2.54,14.96-2.74,7.43-12.51,11.93-22.86,8.77Z" fill="#001f3f" stroke-width="0"/>
            <path d="m315.87,703.35c-19.76-5.46-44.88-14.56-71.76-30.25-16.82-9.82-30.88-20.21-42.32-29.81-11.61-5-17.69-16.92-15.1-26.72,2.8-10.61,14.47-13.89,15.16-14.07-.09-.91-.93-11.81,7.01-17.93,7.35-5.66,19.1-4.82,27.53,2.84.48-.66,3.39-4.53,7.89-4.57,5.2-.05,10.68,5.01,11.64,12.35,3.77-5.53,9.78-8.92,15.83-8.3,8.88.91,17.07,10.38,16.64,22.2,1.02-.12,8.33-.87,13.8,4.41,5.17,4.99,6.54,13.29,3.1,20.34.84-.67,7.83-5.98,17.11-3.56,8.05,2.1,12,8.5,12.69,9.66,8.37,4.51,13.41,13.37,12.74,22.27-.86,11.57-10.88,17.01-11.66,17.42.59.9,5.11,7.99,2.54,14.96-2.74,7.43-12.51,11.93-22.86,8.77Z" fill="url(#linear-gradient-15)" stroke-width="0"/>
            <g>
              <path d="m249.07,620.63c-.49-.45-7.59-7.17-5.26-16.87,1.26-5.25,4.64-8.69,6.06-10,1.31,1.47,3.86,4.82,4.48,9.97,1.06,8.78-4.35,15.72-5.29,16.9Z" fill="url(#linear-gradient-16)" stroke-width="0"/>
              <path d="m251.77,622.35c.05-.52.95-8.1,7.35-11.84,3.47-2.02,6.77-1.89,8.08-1.75-.3,1.52-1.14,4.73-3.79,7.79-4.51,5.2-10.61,5.73-11.65,5.81Z" fill="url(#linear-gradient-17)" stroke-width="0"/>
              <path d="m220,610.98c-.52-.03-8.13-.6-12.15-6.83-2.17-3.37-2.18-6.68-2.1-8,1.53.23,4.78.94,7.94,3.44,5.4,4.28,6.19,10.35,6.31,11.39Z" fill="url(#linear-gradient-18)" stroke-width="0"/>
            </g>
          </g>
        </g>
        <g id="gL1">
          <g id="diamondBtn1">
            <path d="m959.4,282.01l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#339eff" stroke-width="0"/>
            <path d="m1009.84,359.19l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#ff3364" stroke-width="0"/>
            <path d="m959.64,361.5l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <path d="m760.98,521.77c-.52-2,1.04-4.19,3.49-4.88s4.86.37,5.38,2.37c.52,2-1.04,4.19-3.49,4.88-2.45.69-4.86-.37-5.38-2.37Zm19.67,10.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.14-9.44c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm63.98,13.48c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-228.88,31.63c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16.43-4.26c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.47,2.89c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-64.3-75.27c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-182.35-89.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Z" fill="#096595" stroke-width="0"/>
          <g clip-path="url(#clippath)">
            <g>
              <g id="b1R1">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R2">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R3">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R4">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R5">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R6">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R7">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R8">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R9">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R10">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R11">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R12">
                <rect x="182.87" y="414.86" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="210.87" y="414.86" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="238.87" y="414.86" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
            </g>
          </g>
          <g id="lampBtn1">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn1">
            <image width="892" height="312" transform="translate(202.06 378.63)" xlink:href="https://dfrnc.github.io/7438_Bigpig_lights/img/radiance1.png"/>
          </g>
          <g id="grWBtn1">
            <path d="m671.01,637.89l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_gradient_33)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m366.87,584.99c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_gradient_33-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1013.72,641.3l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_gradient_33-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL2">
          <g>
            <g>
              <ellipse cx="272.41" cy="428.9" rx="4.61" ry="3.75" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="290.3" cy="429.2" rx="4.61" ry="3.75" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="308.19" cy="429.49" rx="4.61" ry="3.75" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="326.08" cy="429.79" rx="4.61" ry="3.75" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="343.97" cy="430.09" rx="4.61" ry="3.75" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="361.86" cy="430.39" rx="4.61" ry="3.75" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="379.74" cy="430.69" rx="4.61" ry="3.75" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="390.46" cy="443.23" rx="4.61" ry="3.75" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="401.18" cy="455.77" rx="4.61" ry="3.75" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="411.89" cy="468.32" rx="4.61" ry="3.75" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="422.61" cy="480.86" rx="4.61" ry="3.75" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="433.32" cy="493.41" rx="4.61" ry="3.75" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="444.04" cy="505.95" rx="4.61" ry="3.75" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="454.76" cy="518.5" rx="4.61" ry="3.75" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="465.47" cy="531.04" rx="4.61" ry="3.75" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="476.19" cy="543.59" rx="4.61" ry="3.75" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="486.9" cy="556.13" rx="4.61" ry="3.75" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="497.62" cy="568.67" rx="4.61" ry="3.75" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="519.05" cy="593.76" rx="4.61" ry="3.75" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="533.52" cy="590.87" rx="4.61" ry="3.75" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="550.78" cy="580.94" rx="4.61" ry="3.75" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="568.04" cy="571.02" rx="4.61" ry="3.75" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="585.3" cy="561.09" rx="4.61" ry="3.75" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="602.56" cy="551.16" rx="4.61" ry="3.75" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="619.82" cy="541.24" rx="4.61" ry="3.75" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="637.08" cy="531.31" rx="4.61" ry="3.75" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="654.34" cy="521.38" rx="4.61" ry="3.75" transform="translate(-129 227.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="508.34" cy="581.22" rx="4.61" ry="3.75" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="671.6" cy="511.46" rx="4.61" ry="3.75" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="688.86" cy="501.53" rx="4.61" ry="3.75" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="706.12" cy="491.6" rx="4.61" ry="3.75" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="722.55" cy="495.86" rx="4.61" ry="3.75" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="736.83" cy="504.08" rx="4.61" ry="3.75" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="751.12" cy="512.3" rx="4.61" ry="3.75" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <ellipse cx="765.41" cy="520.52" rx="4.61" ry="3.75" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="4.61" ry="3.75" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="4.61" ry="3.75" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="4.61" ry="3.75" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="4.61" ry="3.75" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="4.61" ry="3.75" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="4.61" ry="3.75" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="4.61" ry="3.75" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="4.61" ry="3.75" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="4.61" ry="3.75" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="4.61" ry="3.75" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="4.61" ry="3.75" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="4.61" ry="3.75" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="4.61" ry="3.75" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="4.61" ry="3.75" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="4.61" ry="3.75" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="4.61" ry="3.75" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="4.61" ry="3.75" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="4.61" ry="3.75" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="4.61" ry="3.75" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="4.61" ry="3.75" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampBtn2">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
          </g>
          <g id="radianceBtn2">
            <image width="847" height="296" transform="translate(200.91 378.48) scale(1.05 1)" xlink:href="https://dfrnc.github.io/7438_Bigpig_lights/img/radiance2.png"/>
          </g>
          <g id="diamondBtn2">
            <path d="m959.4,282.01l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#af33ff" stroke-width="0"/>
            <path d="m1009.84,359.19l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#af33ff" stroke-width="0"/>
            <path d="m959.64,361.5l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#ff9433" stroke-width="0"/>
          </g>
          <g id="grWBtn2">
            <path d="m671.3,637.33l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_gradient_64)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m367.16,584.43c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_gradient_64-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1014.01,640.74l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_gradient_64-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL3">
          <g>
            <ellipse cx="903.88" cy="562.62" rx="4.61" ry="3.75" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="4.61" ry="3.75" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="4.61" ry="3.75" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="4.61" ry="3.75" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="4.61" ry="3.75" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="4.61" ry="3.75" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="4.61" ry="3.75" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="4.61" ry="3.75" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="4.61" ry="3.75" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="4.61" ry="3.75" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="4.61" ry="3.75" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="4.61" ry="3.75" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="4.61" ry="3.75" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="4.61" ry="3.75" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="4.61" ry="3.75" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="4.61" ry="3.75" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="4.61" ry="3.75" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="4.61" ry="3.75" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="4.61" ry="3.75" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="4.61" ry="3.75" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="4.61" ry="3.75" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="4.61" ry="3.75" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="4.61" ry="3.75" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="4.61" ry="3.75" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="4.61" ry="3.75" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="4.61" ry="3.75" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="4.61" ry="3.75" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="4.61" ry="3.75" transform="translate(-129 227.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="4.61" ry="3.75" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="4.61" ry="3.75" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="4.61" ry="3.75" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="4.61" ry="3.75" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="4.61" ry="3.75" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="4.61" ry="3.75" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="4.61" ry="3.75" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="4.61" ry="3.75" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="4.61" ry="3.75" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="4.61" ry="3.75" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="4.61" ry="3.75" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="4.61" ry="3.75" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="4.61" ry="3.75" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="4.61" ry="3.75" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="4.61" ry="3.75" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="4.61" ry="3.75" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="4.61" ry="3.75" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="4.61" ry="3.75" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="4.61" ry="3.75" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="4.61" ry="3.75" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="4.61" ry="3.75" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="4.61" ry="3.75" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="4.61" ry="3.75" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="4.61" ry="3.75" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="4.61" ry="3.75" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="4.61" ry="3.75" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="272.41" cy="428.9" rx="4.61" ry="3.75" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn3">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g>
            <g id="lamp1Btn3">
              <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
            <g id="lamp2Btn3">
              <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
            <g id="lamp3Btn3">
              <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
          </g>
          <g id="radianceBtn3">
            <image width="847" height="296" transform="translate(209.14 373.01) scale(1.04 1)" xlink:href="https://dfrnc.github.io/7438_Bigpig_lights/img/radiance3.png"/>
          </g>
          <g id="diamondBtn3">
            <path d="m959.4,282.01l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1009.84,359.19l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#ff3364" stroke-width="0"/>
            <path d="m959.64,361.5l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn3">
            <path d="m670.58,637.53l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_gradient_114)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m366.44,584.63c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_gradient_114-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1013.29,640.94l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_gradient_114-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL4">
          <g>
            <ellipse cx="1028" cy="490.77" rx="4.61" ry="3.75" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="4.61" ry="3.75" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="4.61" ry="3.75" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="4.61" ry="3.75" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="4.61" ry="3.75" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="4.61" ry="3.75" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="4.61" ry="3.75" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="4.61" ry="3.75" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="4.61" ry="3.75" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="4.61" ry="3.75" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="4.61" ry="3.75" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="4.61" ry="3.75" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="4.61" ry="3.75" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="4.61" ry="3.75" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="4.61" ry="3.75" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="4.61" ry="3.75" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="4.61" ry="3.75" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="4.61" ry="3.75" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="4.61" ry="3.75" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="4.61" ry="3.75" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="4.61" ry="3.75" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="4.61" ry="3.75" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="4.61" ry="3.75" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="4.61" ry="3.75" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="4.61" ry="3.75" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="4.61" ry="3.75" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="4.61" ry="3.75" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="4.61" ry="3.75" transform="translate(-129 227.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="4.61" ry="3.75" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="4.61" ry="3.75" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="4.61" ry="3.75" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="4.61" ry="3.75" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="4.61" ry="3.75" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="4.61" ry="3.75" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="4.61" ry="3.75" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="4.61" ry="3.75" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="4.61" ry="3.75" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="4.61" ry="3.75" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="4.61" ry="3.75" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="4.61" ry="3.75" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="4.61" ry="3.75" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="4.61" ry="3.75" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="4.61" ry="3.75" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="4.61" ry="3.75" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="4.61" ry="3.75" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="4.61" ry="3.75" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="4.61" ry="3.75" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="4.61" ry="3.75" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="4.61" ry="3.75" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="4.61" ry="3.75" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="4.61" ry="3.75" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="4.61" ry="3.75" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="4.61" ry="3.75" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="4.61" ry="3.75" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="272.41" cy="428.9" rx="4.61" ry="3.75" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn4">
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="lampBtn4">
            <g>
              <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
          </g>
          <g id="lampO1Btn4">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g>
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn4">
            <image width="847" height="296" transform="translate(204.59 368.54) scale(1.06 1)" xlink:href="https://dfrnc.github.io/7438_Bigpig_lights/img/radiance4.png"/>
          </g>
          <g id="diamondBtn4">
            <path d="m959.4,282.01l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1009.84,359.19l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#33ff7c" stroke-width="0"/>
            <path d="m959.64,361.5l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn4">
            <path d="m669.77,637.72l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_gradient_161)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m365.63,584.82c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_gradient_161-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1012.48,641.13l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_gradient_161-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL5">
          <g>
            <ellipse cx="996" cy="484.04" rx="4.61" ry="3.75" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="4.61" ry="3.75" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="4.61" ry="3.75" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="4.61" ry="3.75" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="4.61" ry="3.75" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="4.61" ry="3.75" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="4.61" ry="3.75" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="4.61" ry="3.75" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="4.61" ry="3.75" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="4.61" ry="3.75" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="4.61" ry="3.75" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="4.61" ry="3.75" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="4.61" ry="3.75" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="4.61" ry="3.75" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="4.61" ry="3.75" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="4.61" ry="3.75" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="4.61" ry="3.75" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="4.61" ry="3.75" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="4.61" ry="3.75" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="4.61" ry="3.75" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="4.61" ry="3.75" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="4.61" ry="3.75" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="4.61" ry="3.75" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="4.61" ry="3.75" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="4.61" ry="3.75" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="4.61" ry="3.75" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="4.61" ry="3.75" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="4.61" ry="3.75" transform="translate(-129 227.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="4.61" ry="3.75" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="4.61" ry="3.75" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="4.61" ry="3.75" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="4.61" ry="3.75" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="4.61" ry="3.75" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="4.61" ry="3.75" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="4.61" ry="3.75" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="4.61" ry="3.75" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="4.61" ry="3.75" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="4.61" ry="3.75" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="4.61" ry="3.75" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="4.61" ry="3.75" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="4.61" ry="3.75" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="4.61" ry="3.75" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="4.61" ry="3.75" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="4.61" ry="3.75" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="4.61" ry="3.75" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="4.61" ry="3.75" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="4.61" ry="3.75" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="4.61" ry="3.75" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="4.61" ry="3.75" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="4.61" ry="3.75" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="4.61" ry="3.75" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="4.61" ry="3.75" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="4.61" ry="3.75" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="4.61" ry="3.75" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="272.41" cy="428.9" rx="4.61" ry="3.75" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn5">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="lampBtn5">
            <ellipse cx="272.41" cy="428.9" rx="3.07" ry="2.5" transform="translate(-119.11 105.06) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="290.3" cy="429.2" rx="3.07" ry="2.5" transform="translate(-118.33 110.59) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="308.19" cy="429.49" rx="3.07" ry="2.5" transform="translate(-117.55 116.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="326.08" cy="429.79" rx="3.07" ry="2.5" transform="translate(-116.76 121.67) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="343.97" cy="430.09" rx="3.07" ry="2.5" transform="translate(-115.98 127.21) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="361.86" cy="430.39" rx="3.07" ry="2.5" transform="translate(-115.2 132.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="379.74" cy="430.69" rx="3.07" ry="2.5" transform="translate(-114.42 138.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="390.46" cy="443.23" rx="3.07" ry="2.5" transform="translate(-117.77 142.2) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="401.18" cy="455.77" rx="3.07" ry="2.5" transform="translate(-121.12 146.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="411.89" cy="468.32" rx="3.07" ry="2.5" transform="translate(-124.47 150.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="422.61" cy="480.86" rx="3.07" ry="2.5" transform="translate(-127.81 153.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="433.32" cy="493.41" rx="3.07" ry="2.5" transform="translate(-131.16 157.89) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="444.04" cy="505.95" rx="3.07" ry="2.5" transform="translate(-134.51 161.81) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="454.76" cy="518.5" rx="3.07" ry="2.5" transform="translate(-137.86 165.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="465.47" cy="531.04" rx="3.07" ry="2.5" transform="translate(-141.21 169.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="476.19" cy="543.59" rx="3.07" ry="2.5" transform="translate(-144.56 173.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="486.9" cy="556.13" rx="3.07" ry="2.5" transform="translate(-147.91 177.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="497.62" cy="568.67" rx="3.07" ry="2.5" transform="translate(-151.26 181.42) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="508.34" cy="581.22" rx="3.07" ry="2.5" transform="translate(-154.61 185.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="519.05" cy="593.76" rx="3.07" ry="2.5" transform="translate(-157.96 189.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="533.52" cy="590.87" rx="3.07" ry="2.5" transform="translate(-156.36 193.58) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="550.78" cy="580.94" rx="3.07" ry="2.5" transform="translate(-152.45 198.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="568.04" cy="571.02" rx="3.07" ry="2.5" transform="translate(-148.54 203.27) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="585.3" cy="561.09" rx="3.07" ry="2.5" transform="translate(-144.64 208.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="602.56" cy="551.16" rx="3.07" ry="2.5" transform="translate(-140.73 212.96) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="619.82" cy="541.24" rx="3.07" ry="2.5" transform="translate(-136.82 217.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="637.08" cy="531.31" rx="3.07" ry="2.5" transform="translate(-132.91 222.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="654.34" cy="521.38" rx="3.07" ry="2.5" transform="translate(-129 227.49) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="671.6" cy="511.46" rx="3.07" ry="2.5" transform="translate(-125.1 232.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="688.86" cy="501.53" rx="3.07" ry="2.5" transform="translate(-121.19 237.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="706.12" cy="491.6" rx="3.07" ry="2.5" transform="translate(-117.28 242.02) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="722.55" cy="495.86" rx="3.07" ry="2.5" transform="translate(-117.79 247.3) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="736.83" cy="504.08" rx="3.07" ry="2.5" transform="translate(-119.63 252.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="751.12" cy="512.3" rx="3.07" ry="2.5" transform="translate(-121.47 256.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="765.41" cy="520.52" rx="3.07" ry="2.5" transform="translate(-123.31 261.74) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="779.7" cy="528.74" rx="3.07" ry="2.5" transform="translate(-125.15 266.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="793.99" cy="536.96" rx="3.07" ry="2.5" transform="translate(-126.99 271.37) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="808.28" cy="545.18" rx="3.07" ry="2.5" transform="translate(-128.83 276.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="822.56" cy="553.4" rx="3.07" ry="2.5" transform="translate(-130.67 280.99) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="836.85" cy="561.62" rx="3.07" ry="2.5" transform="translate(-132.51 285.8) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="851.14" cy="569.84" rx="3.07" ry="2.5" transform="translate(-134.35 290.62) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="865.43" cy="578.06" rx="3.07" ry="2.5" transform="translate(-136.19 295.43) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="879.72" cy="586.28" rx="3.07" ry="2.5" transform="translate(-138.03 300.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="893.86" cy="576.84" rx="3.07" ry="2.5" transform="translate(-134.42 304.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="903.88" cy="562.62" rx="3.07" ry="2.5" transform="translate(-129.54 306.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="913.9" cy="548.4" rx="3.07" ry="2.5" transform="translate(-124.66 308.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="923.92" cy="534.18" rx="3.07" ry="2.5" transform="translate(-119.78 311.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="933.95" cy="519.96" rx="3.07" ry="2.5" transform="translate(-114.9 313.75) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="943.97" cy="505.74" rx="3.07" ry="2.5" transform="translate(-110.03 316.14) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="953.99" cy="491.52" rx="3.07" ry="2.5" transform="translate(-105.15 318.54) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="964.01" cy="477.3" rx="3.07" ry="2.5" transform="translate(-100.27 320.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="980.01" cy="480.67" rx="3.07" ry="2.5" transform="translate(-100.52 326.05) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="996" cy="484.04" rx="3.07" ry="2.5" transform="translate(-100.78 331.15) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1012" cy="487.41" rx="3.07" ry="2.5" transform="translate(-101.04 336.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1028" cy="490.77" rx="3.07" ry="2.5" transform="translate(-101.3 341.36) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn5">
            <image width="847" height="296" transform="translate(197.18 373.23) scale(1.07 1)" xlink:href="https://dfrnc.github.io/7438_Bigpig_lights/img/radiance5.png"/>
          </g>
          <g id="diamondBtn5">
            <path d="m959.4,282.01l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#fff" stroke-width="0"/>
            <path d="m1009.84,359.19l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#fff" stroke-width="0"/>
            <path d="m959.64,361.5l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn5">
            <path d="m670.48,637.88l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_gradient_166)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m366.34,584.98c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_gradient_166-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1013.19,641.29l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_gradient_166-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
      </g>
      <g id="control">
        <g>
          <rect x="0" y="0" width="237.96" height="396.82" rx="54" ry="54" fill="#075990" stroke-width="0"/>
          <rect x="7.67" y="7.58" width="222.61" height="381.66" rx="50" ry="50" fill="#001f3f" stroke-width="0"/>
        </g>
        <g>
          <g>
            <circle cx="120.4" cy="307.05" r="36.41" fill="#33e3ff" stroke-width="0"/>
            <path d="m150.13,307.05c0,16.42-13.31,29.73-29.73,29.73s-29.73-13.31-29.73-29.73c0-7.38,2.69-14.14,7.15-19.33,5.45-6.36,13.55-10.39,22.58-10.39,16.42,0,29.73,13.31,29.73,29.73Z" fill="#fff" opacity=".5" stroke-width="0"/>
          </g>
          <g id="btnAll">
            <g id="btn1">
              <circle id="lightBtn1" cx="81.15" cy="75.46" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="81.15" cy="75.46" r="22.09" fill="url(#_gradient_10)" stroke-width="0"/>
              <circle cx="81.15" cy="75.46" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m72.3,73.12v-1.72h-2.94v-.56l2.82-4.04h.92v3.93h.89v.67h-.89v1.72h-.81Zm0-2.39v-2.11c0-.33,0-.66.03-.99h-.03c-.19.37-.35.64-.53.93l-1.55,2.15v.02h2.07Z" fill="#fff" stroke-width="0"/>
                <path d="m75.95,67.06v1.35h1.23v.65h-1.23v2.54c0,.58.17.91.64.91.22,0,.39-.03.5-.06l.04.64c-.16.07-.43.12-.76.12-.4,0-.72-.13-.92-.36-.24-.25-.33-.67-.33-1.23v-2.57h-.73v-.65h.73v-1.13l.84-.22Z" fill="#fff" stroke-width="0"/>
                <path d="m78.14,66.21h.86v2.94h.02c.14-.24.35-.46.61-.6.25-.15.55-.24.87-.24.63,0,1.64.39,1.64,2.01v2.8h-.86v-2.7c0-.76-.28-1.4-1.09-1.4-.55,0-.99.39-1.15.86-.05.12-.06.24-.06.41v2.84h-.86v-6.91Z" fill="#fff" stroke-width="0"/>
                <path d="m89.87,70.72c0,1.74-1.21,2.5-2.34,2.5-1.27,0-2.26-.93-2.26-2.42,0-1.58,1.03-2.5,2.34-2.5s2.27.98,2.27,2.42Zm-3.74.05c0,1.03.59,1.81,1.43,1.81s1.43-.77,1.43-1.83c0-.8-.4-1.81-1.41-1.81s-1.45.93-1.45,1.83Z" fill="#ff3364" stroke-width="0"/>
                <path d="m91.04,73.12v-4.06h-.66v-.65h.66v-.22c0-.66.15-1.26.54-1.64.32-.31.75-.44,1.15-.44.3,0,.56.07.73.14l-.12.66c-.13-.06-.3-.11-.55-.11-.73,0-.91.64-.91,1.36v.25h1.14v.65h-1.14v4.06h-.85Z" fill="#ff3364" stroke-width="0"/>
                <path d="m73.36,75.73h1.13v5.85c0,2.32-1.14,3.04-2.65,3.04-.42,0-.92-.09-1.21-.21l.17-.92c.23.09.57.17.95.17,1.01,0,1.61-.45,1.61-2.17v-5.76Z" fill="#ff3364" stroke-width="0"/>
                <path d="m81.59,82.76c0,.65.01,1.22.05,1.71h-1.01l-.06-1.03h-.03c-.3.51-.96,1.17-2.08,1.17-.99,0-2.17-.55-2.17-2.75v-3.67h1.14v3.48c0,1.19.36,2,1.4,2,.77,0,1.3-.53,1.51-1.04.06-.17.1-.38.1-.58v-3.85h1.14v4.57Z" fill="#ff3364" stroke-width="0"/>
                <path d="m83.48,75.26h1.14v9.21h-1.14v-9.21Z" fill="#ff3364" stroke-width="0"/>
                <path d="m86.96,78.19l1.38,3.71c.14.42.3.91.4,1.28h.03c.12-.38.25-.86.4-1.31l1.25-3.68h1.21l-1.71,4.48c-.82,2.15-1.38,3.26-2.15,3.93-.56.49-1.12.69-1.4.74l-.29-.96c.29-.09.66-.27,1-.56.31-.25.7-.69.96-1.27.05-.12.09-.21.09-.27s-.03-.16-.08-.3l-2.32-5.79h1.25Z" fill="#ff3364" stroke-width="0"/>
              </g>
              <circle cx="81.15" cy="75.46" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn2">
              <circle id="lightBtn2" cx="156.81" cy="75.46" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="156.81" cy="75.46" r="22.09" fill="url(#_gradient_4)" stroke-width="0"/>
              <circle cx="156.81" cy="75.46" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m168.74,76.95c0,4.06-2.53,7.35-5.63,7.35-.51,0-.98-.09-1.44-.25-.39.16-.81.25-1.22.25-.71,0-1.38-.24-1.96-.66-.48.43-1.01.66-1.57.66-.63,0-1.22-.3-1.74-.84-.66.54-1.4.84-2.2.84-.31,0-.62-.04-.92-.13-.34.09-.7.13-1.07.13-3.11,0-5.63-3.29-5.63-7.35s2.53-7.35,5.63-7.35c.37,0,.73.04,1.07.13.3-.09.61-.13.92-.13.8,0,1.53.3,2.19.83h.01c.52-.53,1.11-.83,1.74-.83.56,0,1.09.24,1.57.66.13-.1.28-.19.43-.27.48-.26,1-.39,1.54-.39.42,0,.83.09,1.22.25.46-.16.93-.25,1.44-.25,3.11,0,5.63,3.29,5.63,7.35Z" fill="#ff9433" stroke-width="0"/>
                <path d="m158.9,69.99c-.15.08-.29.17-.43.27-.48-.43-1.01-.66-1.57-.66-.63,0-1.22.3-1.74.84h-.01c.38-1.66.26-3.31-.88-4.73l1.29-1.45c1.9,1.19,3.03,3.5,3.33,5.72Z" fill="#001f3f" stroke-width="0"/>
                <polygon points="154.79 75.41 152.53 72.4 150.17 74.76 154.79 75.41" fill="#001f3f" stroke-width="0"/>
                <polygon points="159 75.41 161.25 72.4 163.62 74.76 159 75.41" fill="#001f3f" stroke-width="0"/>
                <path d="m155.76,77.22l.86-1.82.32.48.27-.48.81,1.82c0,.62-2.27.62-2.27,0Z" fill="#001f3f" stroke-width="0"/>
                <path d="m163.62,76.55c0,3.41-2.82,5.3-5.93,5.65v-.88h-1.61v.92c-3.33-.17-6.5-2.08-6.5-5.69.71.98,2.23,1.64,4.03,1.99v1.59h1.59v-1.37c1.09.09,2.21.09,3.28-.01v1.38h1.61v-1.63c1.71-.36,3.06-1.02,3.52-1.95Z" fill="#001f3f" stroke-width="0"/>
              </g>
              <circle cx="156.81" cy="75.46" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn3">
              <circle id="lightBtn3" cx="81.15" cy="143.32" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="81.15" cy="143.32" r="22.09" fill="url(#_gradient_31)" stroke-width="0"/>
              <circle cx="81.15" cy="143.32" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m80.6,156.87c-1.09-.28-1.74-1.38-1.46-2.47l4.37-17.12c.3-1.16-.24-2.35-1.18-2.59s-1.98.52-2.28,1.7l-.71,2.78c-.28,1.09-1.38,1.74-2.47,1.46s-1.74-1.38-1.46-2.47l.71-2.78c.86-3.35,4.09-5.43,7.21-4.63,3.12.8,4.96,4.17,4.11,7.52l-4.37,17.12c-.28,1.09-1.38,1.74-2.47,1.46Z" fill="#fff" stroke-width="0"/>
                <path d="m84.32,150.49l-.98,3.84c-1.34.41-2.77.68-4.26.81-.02-.24,0-.49.05-.72l.67-2.61c1.61-.22,3.1-.67,4.52-1.31Z" fill="#ff3364" stroke-width="0"/>
                <path d="m85.93,144.17l-.98,3.84c-1.4.43-2.86.69-4.39.8l.85-3.33c1.61-.22,3.1-.67,4.52-1.31Z" fill="#ff3364" stroke-width="0"/>
                <path d="m87.43,138.29l-.92,3.6c-1.38.43-2.84.7-4.4.82l.85-3.35c1.59-.21,3.09-.63,4.5-1.3,0,.08-.02.15-.04.22Z" fill="#ff3364" stroke-width="0"/>
                <path d="m87.48,135.2c-1.2.85-2.53,1.53-3.98,2.1v-.02c.26-1.02-.11-2.05-.84-2.46h-.02c-.03-.21-.06-.42-.11-.63,1.27-.5,2.39-1.11,3.42-1.87.76.78,1.29,1.78,1.52,2.88Z" fill="#ff3364" stroke-width="0"/>
                <path d="m82.64,134.82c-.1-.06-.21-.1-.32-.13-.39-.1-.8-.04-1.15.18-.52.28-.95.83-1.13,1.54l-.07.27c-.14-.12-.27-.24-.42-.34-.14-1.63-.47-3.13-1.05-4.55.89-.66,1.92-1.08,3.01-1.17.46,1.14.79,2.35,1.01,3.59.05.21.08.42.11.63Z" fill="#ff3364" stroke-width="0"/>
                <path d="m79.98,136.67l-.64,2.5c-.09.36-.27.65-.51.89-.95-1.01-2.02-1.86-3.25-2.57l.53-2.09c.1-.38.22-.75.38-1.11,1.11.58,2.12,1.26,3.06,2.04.14.1.28.22.42.34Z" fill="#ff3364" stroke-width="0"/>
              </g>
              <circle cx="81.15" cy="143.32" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn4">
              <circle id="lightBtn4" cx="156.81" cy="143.32" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="156.81" cy="143.32" r="22.23" fill="url(#_gradient_44)" stroke-width="0"/>
              <circle cx="156.81" cy="143.32" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <polygon points="167.11 152.34 158.84 152.34 158.84 156.41 154.77 156.41 154.77 152.34 146.51 152.34 150.57 145.2 149.25 145.2 153.08 137.69 152.04 137.69 152.04 137.38 156.81 128.52 161.56 137.38 161.56 137.69 160.54 137.69 164.37 145.2 163.04 145.2 167.11 152.34" fill="#33ff7c" stroke-width="0"/>
                <circle cx="156.91" cy="145.4" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="154.37" cy="140.14" r=".91" fill="#fff" stroke-width="0"/>
                <circle cx="157.83" cy="133.89" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="162.18" cy="149.84" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="151.34" cy="149.35" r=".91" fill="#fff" stroke-width="0"/>
                <circle cx="161.93" cy="143.73" r=".91" fill="#fff" stroke-width="0"/>
              </g>
              <circle cx="156.81" cy="143.32" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn5">
              <circle id="lightBtn5" cx="120.4" cy="208.89" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="120.4" cy="208.89" r="22.09" fill="#17538b" stroke-width="0"/>
              <circle cx="120.4" cy="208.89" r="22.09" fill="url(#_gradient_52)" stroke-width="0"/>
              <circle cx="120.4" cy="208.89" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m130.82,216.41c.25.37.88,2.09.9,2.5.03.45-.47.82-.61,1.19-.15.41-.06,1.03-.42,1.27s-.9-.06-1.34-.07c-.4,0-.92.33-1.33.14-.37-.17-1.75-1.37-2.01-1.74-.35-.52-1.51-2.79-3.45-5.37-1.17-1.57-2.86-3.07-4.17-4.85-1.31-1.8-2.22-3.86-3.32-5.47-2.02-2.96-3.69-5.3-3.28-5.58s2.46,1.78,5.09,4.24c1.45,1.35,3.39,2.61,4.99,4.21,1.59,1.6,2.84,3.54,4.22,4.99,2.28,2.39,4.36,4.02,4.72,4.54Z" fill="url(#_gradient_52-2)" stroke-width="0"/>
                <ellipse cx="128.42" cy="218.06" rx="1.9" ry="2.68" transform="translate(-100.87 110.96) rotate(-34.47)" fill="#fff" stroke-width="0"/>
                <path d="m118.98,201.94c-.06,0-.11-.02-.15-.07l-4.69-5.18c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l4.69,5.18c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_gradient_52-3)" stroke-width="0"/>
                <path d="m112.07,203.79c-.06,0-.11-.02-.15-.07l-2.98-3.28c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l2.98,3.28c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_gradient_52-4)" stroke-width="0"/>
                <path d="m129.9,203.17c-.06,0-.11-.02-.15-.07l-2.98-3.28c-.07-.08-.07-.21.01-.29.08-.07.21-.07.29.01l2.98,3.28c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_gradient_52-5)" stroke-width="0"/>
                <path d="m117.74,215.44c-.06,0-.12-.02-.16-.07l-9.19-10.95c-.07-.09-.06-.21.03-.29.09-.07.21-.06.29.02l9.19,10.95c.07.09.06.21-.03.29-.04.03-.08.05-.13.05Z" fill="url(#_gradient_52-6)" stroke-width="0"/>
                <path d="m116.63,194.77c-.06,0-.11-.02-.15-.07l-1.49-1.64c-.07-.08-.07-.21.01-.29.08-.07.21-.07.29.01l1.49,1.64c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_gradient_52-7)" stroke-width="0"/>
                <path d="m107.18,210.98c-.06,0-.11-.02-.15-.07l-1.49-1.64c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l1.49,1.64c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_gradient_52-8)" stroke-width="0"/>
              </g>
              <circle cx="120.4" cy="208.89" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
          </g>
        </g>
      </g>
      <polyline id="pL1" points="264.38 428.94 380.43 430.76 518.81 594.29 711.89 488.2 880.21 587.2 964.01 477.3 1047.58 494.97" fill="none" stroke-width="0"/>
    </g>
  </g>
</svg>
        `
        ;


        let animWrapper = document.getElementById(id);
        id = "#"+id+" ";


        function importSVG()
        {
            animWrapper.innerHTML = contents;
            // document.querySelector(".animation_wrapper svg").style.width = "100%";
            // document.querySelector(".animation_wrapper svg").style.height = "100%";
            
            window.addEventListener("load", gsapAnim)
        }

        function addScripts()
        {
            let finalAddList = [];


            let scriptList;
            if(document.body != null && document.getElementsByClassName('containerScriptList').length == 0){
                scriptList = document.createElement('div');
                scriptList.classList.add('containerScriptList')
                document.body.appendChild(scriptList);
                finalAddList = scriptAnimArr;
            }
            else
            {
                scriptList = document.getElementsByClassName('containerScriptList')[0];
                let existArr = [];
                let existScriptsLinks =  document.getElementsByClassName('containerScriptList')[0].getElementsByTagName("script");
                for (let i = 0; i < existScriptsLinks.length; i++) {
                    existArr.push(existScriptsLinks[i].src);
                }
                scriptAnimArr.forEach((elem)=>{
                    if(existArr.indexOf(elem) == -1)
                    {
                        finalAddList.push(elem);
                    }
                })
            }
            finalAddList.forEach((elem)=>{
                let tempScript = document.createElement('script')
                tempScript.src = elem
                scriptList.appendChild(tempScript);
            })
        }

        addScripts();
        importSVG();
}
console.log(21);
