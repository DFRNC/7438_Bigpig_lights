anim_7438();

function anim_7438()
{
        let id = "anim_7438";


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
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1276.35 1008.71">
  <defs>
    <linearGradient id="linear-gradient" x1="346.34" y1="675.29" x2="346.63" y2="564.86" gradientTransform="translate(1458.63) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#33e3ff"/>
      <stop offset="1" stop-color="#f7a9dd"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="-309.44" y1="2192.37" x2="-312.01" y2="2167.59" gradientTransform="translate(2273.88 -1278.43) rotate(-140.79) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#33e3ff"/>
      <stop offset="1" stop-color="#40dffd"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="316.24" y1="106.45" x2="314.36" y2="88.33" gradientTransform="translate(1410.78 448.44) rotate(168.64) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-4" x1="985.39" y1="567.76" x2="985.39" y2="778.16" gradientTransform="translate(1458.63) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1395c9"/>
      <stop offset="1" stop-color="#014385"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="985.39" y1="592.72" x2="985.39" y2="759.27" gradientTransform="translate(1458.63) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0165a8"/>
      <stop offset="1" stop-color="#0b76b3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="1416.13" y1="788.56" x2="1420.42" y2="732" gradientTransform="translate(1934.43) rotate(-180) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff95c3"/>
      <stop offset="1" stop-color="#eebff9"/>
    </linearGradient>
    <linearGradient id="linear-gradient-7" x1="378.44" y1="727.87" x2="378.64" y2="626.44" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-8" x1="-4454.97" y1="-1105.49" x2="-4457.54" y2="-1130.27" gradientTransform="translate(4847.13 -1278.43) rotate(-42.16) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-9" x1="-4864.04" y1="1213.72" x2="-4865.92" y2="1195.6" gradientTransform="translate(5624.87 448.44) rotate(12.56) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-10" x1="170.37" y1="1594.34" x2="189.01" y2="1594.34" gradientTransform="translate(1811.61 -735.15) rotate(-158.84) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-11" x1="804.05" y1="810.76" x2="804.38" y2="659.4" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-12" x1="-5173.02" y1="1393.17" x2="-5175.6" y2="1368.38" gradientTransform="translate(5813.5 1029.57) rotate(18.29) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-13" x1="-5117.09" y1="-354.41" x2="-5118.97" y2="-372.53" gradientTransform="translate(5009.87 -874.79) rotate(-24.34) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-14" x1="-2509.6" y1="3416.18" x2="-2490.96" y2="3416.18" gradientTransform="translate(4518.82 -1140.86) rotate(-79.64) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-15" x1="1154.75" y1="688.93" x2="1144.42" y2="589.48" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-16" x1="-5648.47" y1="185.37" x2="-5651.04" y2="160.58" gradientTransform="translate(5629.29 463.44) rotate(.21) scale(.94 .96) skewX(-5.93)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-17" x1="-4625.06" y1="2955.46" x2="-4626.94" y2="2937.33" gradientTransform="translate(5040 2263.35) rotate(54.94) scale(.91 1) skewX(2.54)" xlink:href="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-18" x1="958.58" y1="1813.68" x2="977.23" y2="1813.68" gradientTransform="translate(1811.61 -735.15) rotate(-158.84) scale(1 -1)" xlink:href="#linear-gradient-2"/>
    <clipPath id="clippath">
      <path d="m802.5,525.02c-.52-2,1.04-4.19,3.49-4.88s4.86.37,5.38,2.37c.52,2-1.04,4.19-3.49,4.88-2.45.69-4.86-.37-5.38-2.37Zm19.67,10.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.14-9.44c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm63.98,13.48c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-228.88,31.63c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16.43-4.26c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.47,2.89c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-64.3-75.27c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-182.35-89.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Z" fill="none" stroke-width="0"/>
    </clipPath>
    <linearGradient id="_Градієнт_без_назви_33" data-name="Градієнт без назви 33" x1="633.48" y1="673.65" x2="701.65" y2="633.05" gradientUnits="userSpaceOnUse">
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
    <linearGradient id="_Градієнт_без_назви_33-2" data-name="Градієнт без назви 33" x1="327.24" y1="549.74" x2="396.94" y2="590.34" xlink:href="#_Градієнт_без_назви_33"/>
    <linearGradient id="_Градієнт_без_назви_33-3" data-name="Градієнт без назви 33" x1="979.72" y1="674.32" x2="1048.79" y2="634.45" xlink:href="#_Градієнт_без_назви_33"/>
    <linearGradient id="_Градієнт_без_назви_64" data-name="Градієнт без назви 64" x1="633.78" y1="673.09" x2="701.95" y2="632.49" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#af33ff"/>
      <stop offset=".06" stop-color="#b439f0"/>
      <stop offset=".51" stop-color="#dc698b"/>
      <stop offset=".83" stop-color="#f5884b"/>
      <stop offset=".97" stop-color="#ff9433"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_64-2" data-name="Градієнт без назви 64" x1="327.54" y1="549.18" x2="397.24" y2="589.78" xlink:href="#_Градієнт_без_назви_64"/>
    <linearGradient id="_Градієнт_без_назви_64-3" data-name="Градієнт без назви 64" x1="980.02" y1="673.76" x2="1049.08" y2="633.89" xlink:href="#_Градієнт_без_назви_64"/>
    <linearGradient id="_Градієнт_без_назви_114" data-name="Градієнт без назви 114" x1="633.06" y1="673.29" x2="701.23" y2="632.69" gradientUnits="userSpaceOnUse">
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
    <linearGradient id="_Градієнт_без_назви_114-2" data-name="Градієнт без назви 114" x1="326.82" y1="549.38" x2="396.52" y2="589.98" xlink:href="#_Градієнт_без_назви_114"/>
    <linearGradient id="_Градієнт_без_назви_114-3" data-name="Градієнт без назви 114" x1="979.3" y1="673.96" x2="1048.36" y2="634.09" xlink:href="#_Градієнт_без_назви_114"/>
    <linearGradient id="_Градієнт_без_назви_161" data-name="Градієнт без назви 161" x1="632.24" y1="673.48" x2="700.41" y2="632.89" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".02" stop-color="#fff0f4"/>
      <stop offset=".15" stop-color="#ff8ba7"/>
      <stop offset=".25" stop-color="#ff4b76"/>
      <stop offset=".29" stop-color="#ff3364"/>
      <stop offset=".68" stop-color="#33ff7c"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_161-2" data-name="Градієнт без назви 161" x1="326" y1="549.58" x2="395.71" y2="590.17" xlink:href="#_Градієнт_без_назви_161"/>
    <linearGradient id="_Градієнт_без_назви_161-3" data-name="Градієнт без назви 161" x1="978.49" y1="674.15" x2="1047.55" y2="634.28" xlink:href="#_Градієнт_без_назви_161"/>
    <linearGradient id="_Градієнт_без_назви_166" data-name="Градієнт без назви 166" x1="632.95" y1="673.64" x2="701.12" y2="633.04" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".23" stop-color="#fff" stop-opacity=".75"/>
      <stop offset=".61" stop-color="#fff" stop-opacity=".35"/>
      <stop offset=".88" stop-color="#fff" stop-opacity=".1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_166-2" data-name="Градієнт без назви 166" x1="326.71" y1="549.73" x2="396.41" y2="590.33" xlink:href="#_Градієнт_без_назви_166"/>
    <linearGradient id="_Градієнт_без_назви_166-3" data-name="Градієнт без назви 166" x1="979.19" y1="674.31" x2="1048.26" y2="634.44" xlink:href="#_Градієнт_без_назви_166"/>
    <linearGradient id="_Градієнт_без_назви_10" data-name="Градієнт без назви 10" x1="101.79" y1="64.09" x2="143.22" y2="93.08" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".5" stop-color="#339eff"/>
      <stop offset=".73" stop-color="#9c66ae"/>
      <stop offset=".95" stop-color="#ff3364"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_4" data-name="Градієнт без назви 4" x1="180.14" y1="66.03" x2="217.42" y2="91.99" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#af33ff"/>
      <stop offset=".06" stop-color="#b439f0"/>
      <stop offset=".53" stop-color="#dc698b"/>
      <stop offset=".85" stop-color="#f5884b"/>
      <stop offset="1" stop-color="#ff9433"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_31" data-name="Градієнт без назви 31" x1="122.67" y1="124.83" x2="122.67" y2="166.18" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".54" stop-color="#ff3b6a"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_44" data-name="Градієнт без назви 44" x1="181.44" y1="132.29" x2="216.1" y2="161.57" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".28" stop-color="#ff3364"/>
      <stop offset=".74" stop-color="#33ff7c"/>
      <stop offset=".87" stop-color="#9cffbf"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_52" data-name="Градієнт без назви 52" x1="144.63" y1="200.03" x2="190.16" y2="231.9" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset=".95" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="_Градієнт_без_назви_52-2" data-name="Градієнт без назви 52" x1="153.27" y1="213.21" x2="173.25" y2="213.21" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-3" data-name="Градієнт без назви 52" x1="155.61" y1="202.39" x2="160.71" y2="202.39" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-4" data-name="Градієнт без назви 52" x1="150.42" y1="205.2" x2="153.8" y2="205.2" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-5" data-name="Градієнт без назви 52" x1="168.25" y1="204.58" x2="171.63" y2="204.58" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-6" data-name="Градієнт без назви 52" x1="149.88" y1="213.01" x2="159.47" y2="213.01" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-7" data-name="Градієнт без назви 52" x1="156.47" y1="197" x2="158.36" y2="197" xlink:href="#_Градієнт_без_назви_52"/>
    <linearGradient id="_Градієнт_без_назви_52-8" data-name="Градієнт без назви 52" x1="147.01" y1="213.21" x2="148.91" y2="213.21" xlink:href="#_Градієнт_без_назви_52"/>
  </defs>
  <g isolation="isolate">
    <g id="bigpigLights">
      <g>
        <g>
          <path d="m1202.6,685.27l-473.84,273.57c-5.05,2.92-11.28,2.91-16.32-.03l-188.34-109.53-202.58-117.81-117-68.05c-10.81-6.29-10.79-21.91.04-28.16l473.85-273.58c5.05-2.91,11.28-2.9,16.32.03l241.35,140.37,90.63,52.71,175.93,102.31c10.81,6.29,10.79,21.91-.04,28.16Z" fill="#1195cb" stroke-width="0"/>
          <g>
            <path d="m1069.04,594.27c7.49-12.92,22.15-19.51,35.85-16.45,11.37,2.55,20.56,11.42,24.07,23.01,4.99-3.13,11.36-2.94,16,.45,5.04,3.67,7.08,10.39,4.93,16.43,1.05-.2,6-1.03,10.2,2.06,4.52,3.32,6.33,9.83,4.21,16.02,1.97,1.29,8.93,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.28,28.08-7.97,5.55-25.73,16.29-50.77,18.35-19.59,1.61-35.21-2.78-43.94-5.97,1.33-32.29,2.66-64.58,3.99-96.86Z" fill="#001f3f" stroke-width="0"/>
            <path d="m1061.05,588.4c7.49-12.92,22.15-19.51,35.85-16.45,11.37,2.55,20.56,11.42,24.07,23.01,4.99-3.13,11.36-2.94,16,.45,5.04,3.67,7.08,10.39,4.93,16.43,1.05-.2,6-1.03,10.2,2.06,4.52,3.32,6.33,9.83,4.21,16.02,1.97,1.29,8.93,6.17,10.74,14.89,2.17,10.41-3.87,22.06-15.28,28.08-7.97,5.55-25.73,16.29-50.77,18.35-19.59,1.61-35.21-2.78-43.94-5.97,1.33-32.29,2.66-64.58,3.99-96.86Z" fill="url(#linear-gradient)" stroke-width="0"/>
            <g>
              <path d="m1125.25,617.91c.74,0,11.58-.18,16.93-8.92,2.89-4.73,2.7-9.55,2.51-11.47-2.17.21-6.77.96-11.13,4.34-7.44,5.77-8.2,14.54-8.3,16.05Z" fill="url(#linear-gradient-2)" stroke-width="0"/>
              <path d="m1121.75,617.36c.34-.42,5.28-6.62,2.83-13.7-1.33-3.83-4.14-5.96-5.32-6.74-.89,1.32-2.6,4.27-2.72,8.3-.2,6.88,4.41,11.38,5.21,12.14Z" fill="url(#linear-gradient-3)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m899.72,363.93v227.14c-1.44,1.34-3.04,2.53-4.78,3.54l-329.69,191.61-.13.08v-227.9l1.06-.61,333.54-193.86Z" fill="#067cba" stroke-width="0"/>
            <path d="m308.2,623.43c-.04,9.8,5.19,18.86,13.7,23.72l243.35,139.25v-.18s.59-146.15.59-146.15l.34-82.28.3-74.98-195.63-111.93c-15.17,6.57-30.33,13.15-45.5,19.73-5.41,2.35-10.83,4.7-16.24,7.05v2.34s-.37,90.54-.37,90.54l-.54,132.89Z" fill="#00468f" stroke-width="0"/>
          </g>
          <g>
            <path d="m427.93,569.46c3.91-2.72,7.83-5.44,11.74-8.16.49-.42,1.02-.79,1.58-1.1.03-.02.05-.04.08-.06,0,0,0,0,0,.01,2.56-1.36,5.76-1.52,8.64.11l73.59,41.67c6.88,3.89,11.13,11.18,11.13,19.09v139.46c0,3.49-1.91,6.31-4.57,7.82,0,0,0,0,0,0l-12.94,8.98-6.41-14.92-69.66-39.45c-2.82-1.6-4.56-4.58-4.56-7.82v-125.55s-8.62-20.08-8.62-20.08Z" fill="#001f3f" stroke-width="0"/>
            <path d="m435.3,735.31l73.59,41.67c5.99,3.39,13.42-.94,13.42-7.82v-139.46c0-7.9-4.25-15.19-11.13-19.09l-73.59-41.67c-5.99-3.39-13.42.94-13.42,7.82v139.46c0,7.9,4.25,15.19,11.13,19.09Z" fill="url(#linear-gradient-4)" stroke-width="0"/>
            <path d="m444.51,726.09l56.95,32.25c4.74,2.69,10.62-.74,10.62-6.19v-108.9c0-7.18-3.86-13.8-10.11-17.34l-56.95-32.25c-4.74-2.69-10.62.74-10.62,6.19v108.9c0,7.18,3.86,13.8,10.11,17.34Z" fill="url(#linear-gradient-5)" stroke-width="0"/>
            <ellipse cx="494.31" cy="688.18" rx="5.32" ry="9.05" transform="translate(-274.54 332.09) rotate(-29.46)" fill="#001f3f" stroke-width="0"/>
          </g>
          <g>
            <g>
              <path d="m625.89,577.86l61.9-35.41c1.92-1.1,4.13-.65,5.52.7l9.82,7.16-8.42,14.12v48.95c0,3.73-2,7.17-5.23,9.02l-44.57,25.5-10.74,17.99-11.11-8.04c-1.4-.77-2.41-2.23-2.41-4.05v-66.92c0-3.73,2-7.17,5.23-9.02Z" fill="#0a87c1" stroke-width="0"/>
              <path d="m631.62,594.85v66.91c0,3.56,3.84,5.78,6.93,4.02l38.07-21.78,23.83-13.64c.36-.2.7-.43,1.02-.68,1.46-1.06,2.59-2.49,3.31-4.12.59-1.3.9-2.74.9-4.22v-66.91c0-3.56-3.84-5.78-6.92-4.02l-52.7,30.15-9.2,5.27c-.23.13-.46.27-.67.42-1.52,1.02-2.71,2.41-3.49,4.01-.7,1.4-1.08,2.97-1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
              <g>
                <path d="m635.71,596.78v20.78s40.02,22.94,40.02,22.94l21.19-12.13c.32-.18.62-.38.91-.6l-61.16-35.06c-.62,1.25-.96,2.64-.96,4.08Z" fill="#05446b" stroke-width="0"/>
                <path d="m639.78,589.13l61,34.96c.52-1.16.8-2.44.8-3.75v-5.87s-53.03-30.4-53.03-30.4l-8.18,4.69c-.2.12-.41.24-.6.37Z" fill="#05446b" stroke-width="0"/>
              </g>
            </g>
            <g>
              <path d="m412.4,498.45l-61.9-35.41c-1.92-1.1-4.13-.65-5.52.7l-9.82,7.16,8.42,14.12v48.95c0,3.73,2,7.17,5.23,9.02l44.57,25.5,10.74,17.99,11.11-8.04c1.4-.77,2.41-2.23,2.41-4.05v-66.92c0-3.73-2-7.17-5.23-9.02Z" fill="#015199" stroke-width="0"/>
              <path d="m406.67,515.44v66.91c0,3.56-3.84,5.78-6.93,4.02l-38.07-21.78-23.83-13.64c-.36-.2-.7-.43-1.02-.68-1.46-1.06-2.59-2.49-3.31-4.12-.59-1.3-.9-2.74-.9-4.22v-66.91c0-3.56,3.84-5.78,6.92-4.02l52.7,30.15,9.2,5.27c.23.13.46.27.67.42,1.52,1.02,2.71,2.41,3.49,4.01.7,1.4,1.08,2.97,1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
              <g>
                <path d="m402.57,517.37v20.78s-40.02,22.94-40.02,22.94l-21.19-12.13c-.32-.18-.62-.38-.91-.6l61.16-35.06c.62,1.25.96,2.64.96,4.08Z" fill="#05446b" stroke-width="0"/>
                <path d="m398.51,509.72l-61,34.96c-.52-1.16-.8-2.44-.8-3.75v-5.87l53.03-30.4,8.18,4.69c.2.12.41.24.6.37Z" fill="#05446b" stroke-width="0"/>
              </g>
            </g>
          </g>
          <path d="m899.72,363.93v117.25l-284.15,164.05c-12.68,7.32-28.31,7.3-40.96-.06l-8.77-5.1-.72-.42-256.38-149.11.36-90.54,16.25-9.39c15.17-6.58,30.33-13.16,45.5-19.73l195.63,111.93-.3,74.98,333.54-193.86Z" fill="#1195cb" mix-blend-mode="multiply" stroke-width="0"/>
          <g>
            <polygon points="1074.64 476.28 1074.64 691.98 926.53 777.49 926.53 545.93 999.15 455.07 1074.64 476.28" fill="#067cba" stroke-width="0"/>
            <polygon points="926.53 545.93 926.53 777.49 752.82 677.2 752.82 452.01 926.53 545.93" fill="#00468f" stroke-width="0"/>
          </g>
          <g>
            <path d="m968.59,581.27l61.9-35.41c1.92-1.1,4.13-.65,5.52.7l9.82,7.16-8.42,14.12v48.95c0,3.73-2,7.17-5.23,9.02l-44.57,25.5-10.74,17.99-11.11-8.04c-1.4-.77-2.41-2.23-2.41-4.05v-66.92c0-3.73,2-7.17,5.23-9.02Z" fill="#0a87c1" stroke-width="0"/>
            <path d="m974.32,598.26v66.91c0,3.56,3.84,5.78,6.93,4.02l38.07-21.78,23.83-13.64c.36-.2.7-.43,1.02-.68,1.46-1.06,2.59-2.49,3.31-4.12.59-1.3.9-2.74.9-4.22v-66.91c0-3.56-3.84-5.78-6.92-4.02l-52.7,30.15-9.2,5.27c-.23.13-.46.27-.67.42-1.52,1.02-2.71,2.41-3.49,4.01-.7,1.4-1.08,2.97-1.08,4.59Z" fill="#001f3f" stroke-width="0"/>
            <g>
              <path d="m978.42,600.19v20.78s40.02,22.94,40.02,22.94l21.19-12.13c.32-.18.62-.38.91-.6l-61.16-35.06c-.62,1.25-.96,2.64-.96,4.08Z" fill="#05446b" stroke-width="0"/>
              <path d="m982.48,592.54l61,34.96c.52-1.16.8-2.44.8-3.75v-5.87s-53.03-30.4-53.03-30.4l-8.18,4.69c-.2.12-.41.24-.6.37Z" fill="#05446b" stroke-width="0"/>
            </g>
          </g>
          <g id="pig">
            <g id="handL">
              <path d="m550.05,751.2c3.22-2.03,7.09-4.89,10.93-8.88,6.12-6.35,9.61-12.89,11.58-17.46.46,1.41.99,3.59.9,6.28-.07,2.07-.49,3.79-.9,5.02.7-.61,1.79-1.42,3.3-2.03,1.97-.8,3.73-.87,4.77-.84-1.73,4.82-4.81,11.65-10.31,18.71-5.83,7.48-12.1,12.3-16.51,15.17-.36-.11-4.98-1.63-6.38-6.41-.99-3.38.03-7.08,2.62-9.56Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="552.55" cy="758.01" r="41.36" fill="none" stroke-width="0"/>
            </g>
            <g id="leg2">
              <path d="m514.25,827.71c1.71-.03,5.45-.35,8.68-3,.82-.67,1.47-1.38,1.99-2.05-.03,1.05,0,2.21.11,3.45.23,2.62.79,4.88,1.39,6.69,2.38-4.16,5.41-10.56,7.09-18.87.48-2.37.8-4.64.99-6.79.5-5.34.23-9.89-.17-13.27-1.26-2.4-3.75-3.88-6.41-3.8-2.87.09-5.43,2-6.39,4.78.67,3.14,1.25,7.59.67,12.86-.02.21-.04.42-.07.63-1.18,9.44-5.46,16.13-7.88,19.37Z" fill="#ff96c5" stroke-width="0"/>
              <path d="m521.53,794.85c.67,3.14,1.25,7.59.67,12.86,1.55-.56,3.38-1.01,5.44-1.17,2.71-.21,5.06.13,6.86.6.5-5.34.23-9.89-.17-13.27-1.26-2.4-3.75-3.88-6.41-3.8-2.87.09-5.43,2-6.39,4.78Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="528.04" cy="794.77" r="42.89" fill="none" stroke-width="0"/>
            </g>
            <g id="leg">
              <path d="m491.21,816.12c-1.54.95-3.01,1.63-4.25,2.11,1.54.34,12.83,2.58,22.64-4.69,1.98-1.47,3.57-3.09,4.85-4.72,4.07-5.18,5-10.54,5.21-11.96-.76-3.25-3.64-5.68-7.11-5.99-3.41-.3-6.68,1.52-8.08,4.52-.31,1.52-1.5,6.3-6.1,10.04-.12.09-.23.19-.35.27-5.87,4.54-12.67,3.91-13.87,3.78.73.75,2.49,2.34,5.32,3.13,2.69.76,4.96.41,6,.19-1.04,1.01-2.45,2.2-4.26,3.32Z" fill="#ff96c5" stroke-width="0"/>
              <path d="m498.02,805.7c2.37-.08,5.12.06,8.13.61,3.26.6,6.05,1.54,8.3,2.51,4.07-5.18,5-10.54,5.21-11.96-.76-3.25-3.64-5.68-7.11-5.99-3.41-.3-6.68,1.52-8.08,4.52-.31,1.52-1.5,6.3-6.1,10.04-.12.09-.23.19-.35.27Z" fill="#ba6290" stroke-width="0"/>
              <circle cx="513.1" cy="794.39" r="38.3" fill="none" stroke-width="0"/>
            </g>
            <path d="m512.79,801.3l11.41-1.62c19.03-2.69,33.59-20.36,32.54-39.46h0c-1.06-19.1-17.34-32.4-36.36-29.7l-11.41,1.62c-19.03,2.69-33.59,20.36-32.54,39.46h0c1.06,19.1,17.34,32.4,36.36,29.7Z" fill="url(#linear-gradient-6)" stroke-width="0"/>
            <g id="face">
              <g>
                <ellipse id="eye2" cx="540.53" cy="764.6" rx="5.81" ry="2.57" transform="translate(-196.09 186.52) rotate(-16.62)" fill="#271a21" stroke-width="0"/>
                <ellipse id="eye1" cx="512.2" cy="772.24" rx="5.81" ry="2.57" transform="translate(-199.46 178.74) rotate(-16.62)" fill="#271a21" stroke-width="0"/>
              </g>
              <g id="nose">
                <ellipse cx="530.54" cy="782.74" rx="10.2" ry="9.61" fill="#ba6290" stroke-width="0"/>
                <path d="m524.68,768.84c4.05-2.11,8.64-1.64,11.4.87h0s0,0,0,0c.3.27.57.58.83.9l3.83,4.19-2.37,1.85c-.51,2.93-2.57,5.77-5.74,7.42-1.79.93-3.69,1.36-5.49,1.33l-2.31,1.8-3.35-3.78c-.58-.48-1.08-1.05-1.5-1.69h0s0,0,0,0c-.12-.18-.23-.36-.33-.56-2.19-4.21.06-9.72,5.04-12.32Z" fill="#efbef7" stroke-width="0"/>
                <ellipse cx="532.56" cy="780.76" rx="10.16" ry="8.59" transform="translate(-300.77 334.93) rotate(-27.56)" fill="#ffa0d0" stroke-width="0"/>
                <ellipse cx="536.08" cy="780.18" rx="1.75" ry="2.56" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="530.12" cy="782.43" rx="1.75" ry="2.56" fill="#ba6290" stroke-width="0"/>
              </g>
            </g>
            <g id="ear">
              <g>
                <ellipse cx="495.98" cy="744.36" rx="13.01" ry="8.3" transform="translate(-334.09 411.11) rotate(-34.45)" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="495.7" cy="740.71" rx="13.01" ry="8.3" transform="translate(-332.07 410.31) rotate(-34.45)" fill="#ff96c4" stroke-width="0"/>
              </g>
              <g>
                <ellipse cx="535.8" cy="737.27" rx="8.3" ry="13.01" transform="translate(-350.34 950.39) rotate(-67.52)" fill="#ba6290" stroke-width="0"/>
                <ellipse cx="535.22" cy="734.4" rx="8.3" ry="13.01" transform="translate(-348.04 948.08) rotate(-67.52)" fill="#ff96c4" stroke-width="0"/>
              </g>
            </g>
            <g id="handR">
              <path d="m479.14,769.09c-8.61,1.45-19,12.42-15.87,21.49,3.1,8.98,17.99,11.84,26.59,6.72,3.05-1.81,4.95-4.41,6.12-6.57-.75.07-2.1.08-3.55-.58-.57-.26-1.02-.56-1.38-.85.21-.63.42-1.26.63-1.89.51-1.54.99-3.07,1.46-4.58-6.42,1.76-9.89,2.11-10.4,1.05-.37-.78.84-2.33,3.65-4.63,1.64-3.41,1.6-6.88-.18-8.79-2.05-2.21-5.72-1.6-7.07-1.37Z" fill="#ba6290" stroke-width="0"/>
              <path d="m480.15,765.91c-12.02,1.77-19.14,12.12-17.59,20.1,1.92,9.92,16.99,14.92,25.65,10.7,1.53-.75,3.33-2.01,5.01-4.24-1.1-.19-2.38-.52-3.76-1.06-.71-.28-1.35-.58-1.92-.88.49-.43,1.02-.96,1.53-1.62,1.13-1.46,1.71-2.91,2.02-3.95-2.28.87-6.13,2.01-9.79,1.37-1.71-.3-2.45-.83-2.81-1.47-.72-1.27.07-2.86.14-2.98,1.02-1.98,4.18-2.86,7.9-2.26,2.65-4.56,2.91-9.34.55-11.75-2.52-2.58-6.45-2.02-6.93-1.95Z" fill="#ff96c5" stroke-width="0"/>
              <circle cx="484" cy="773.2" r="30.89" fill="none" stroke-width="0"/>
            </g>
          </g>
          <polygon points="1074.64 476.28 1074.64 580.93 926.53 666.44 926.45 666.48 752.82 566.24 752.82 452.01 926.53 545.93 999.15 455.07 1074.64 476.28" fill="#1195cb" mix-blend-mode="multiply" stroke-width="0"/>
        </g>
        <path d="m712.52,641.17l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="#1195cb" stroke-width="0"/>
        <path d="m408.38,588.27c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="#1195cb" stroke-width="0"/>
        <path d="m1055.23,644.58l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="#1195cb" stroke-width="0"/>
        <g>
          <g>
            <g>
              <path d="m423.74,419.27c.29-.07.56-.18.81-.33,118.24-69.61,218.33-136.99,336.57-206.59,2.92-1.72,1.12-6.21-2.18-5.43-30.81,7.24-103.35-9.42-134.16-2.18-.28.07-.55.17-.8.32l-307.88,192.18-.76-3.8-24.52,8.12v12.63s.08-.03.08-.03c.34,1.46,1.72,2.68,3.58,2.24l129.25,2.88Z" fill="#0b719e" stroke-width="0"/>
              <path d="m424.48,407.1c.29-.07.56-.18.81-.33,122.66-72.21,209.24-127.03,331.9-199.24.62-.36.24-1.31-.46-1.15-34.1,8.01-92.21-13.9-126.31-5.89-3.68.86-7.21,2.26-10.49,4.15l-327.64,194.74c-2.96,1.71-1.15,6.24,2.17,5.44l130.02,2.26Z" fill="#001f3f" stroke-width="0"/>
            </g>
            <g>
              <path d="m424.51,407.51l6.98,5.03,332.39-190.4c3.42-1.97,7.76-1.18,10.27,1.87l122.18,138.28,7.81.87v10.9c.04.47.04.94,0,1.41v.02h0c-.23,2.5-1.61,4.87-3.99,6.24l-333.89,193.3c-3.42,1.97-7.76,1.18-10.27-1.87l-134.08-156.82c-1.22-1.48-.31-3.38-.31-3.38l2.91-5.44Z" fill="#0b719e" stroke-width="0"/>
              <path d="m567.34,559.24l333.48-192.58c4.31-2.49,5.36-8.25,2.2-12.1l-129.98-146.8c-3.38-4.12-9.24-5.18-13.85-2.52l-331.41,191.38c-4.31,2.49-5.36,8.25-2.2,12.1l131.5,148.64c2.5,3.05,6.85,3.84,10.27,1.87Z" fill="#043c61" stroke-width="0"/>
              <g>
                <path d="m561.43,530.64c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#17538b" stroke-width="0"/>
                <path d="m548.4,515.57c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#096595" stroke-width="0"/>
                <path d="m535.37,500.49c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#0070a3" stroke-width="0"/>
                <path d="m522.34,485.41c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#077ebb" stroke-width="0"/>
                <path d="m509.31,470.34c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#0c8cc5" stroke-width="0"/>
                <path d="m496.27,455.26c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#1195cb" stroke-width="0"/>
                <path d="m483.24,440.18c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-25.3-29.15l-308.15,177.98,25.3,29.15Z" fill="#22a5da" stroke-width="0"/>
                <path d="m470.21,425.11c1.7.52,18.37,5.35,33.99-4.88,13.37-8.75,16.07-22.05,16.48-24.27,1.94.46,21.97,4.93,38.57-7.94,10.88-8.43,13.94-19.39,14.75-22.86,12.59,4.64,26.96,2.43,36.86-5.76,10.24-8.46,11.55-19.86,11.77-22.33,1.06.36,20.05,6.5,36.41-5.32,12.43-8.99,14.5-21.96,14.83-24.27,2.4.51,21.26,4.23,37.8-7.85,11.66-8.52,15.24-19.83,16.2-23.34,2.3.53,18.27,3.94,33.45-5.98,12.74-8.33,16.31-20.41,17.05-23.18-8.43-9.72-16.87-19.44-21.17-23.25l-308.15,177.98,21.17,23.25Z" fill="#33e3ff" stroke-width="0"/>
              </g>
            </g>
          </g>
          <g>
            <path d="m1086.21,481.23c0,1.98-1.89,3.42-3.8,2.89l-83.32-22.94h0l.06-12.08-178.45-91.03,86.74,23.88h.01l178.76,91.21v8.06Z" fill="#0b719e" stroke-width="0"/>
            <path d="m999.15,461.11l-.06.08-74.22,108.29c-1.18,1.72-3.49,2.25-5.3,1.2l-175.53-101.35v-12l76.32-99.34.34.09,178.78,91.22-.33,11.81Z" fill="#0b719e" stroke-width="0"/>
            <polygon points="1086.21 473.17 999.48 449.3 999.47 449.29 999.15 449.11 820.7 346.08 907.44 369.96 907.45 369.96 1086.21 473.17" fill="#043c61" stroke-width="0"/>
            <path d="m997.16,440.47c3.18,1.7,4.09,5.83,1.93,8.72h0s-74.22,108.29-74.22,108.29c-1.18,1.72-3.49,2.25-5.3,1.2l-175.53-101.35,76.32-111.34h0c2-2.92,5.91-3.82,8.98-2.05l167.82,96.54Z" fill="#001f3f" stroke-width="0"/>
          </g>
          <g>
            <path d="m1132.44,694.34c-9.22,7.76-20.94,16.42-35.29,24.56-15.79,8.96-30.54,14.91-42.79,18.92-7.71,1.95-15.56-1.38-19.01-7.74-4.25-7.83.49-15.97.7-16.32-4.32-10.61-.47-21.55,7.04-25.34,6.92-3.5,14.6.28,15.63.8-4.23-7.03-1.96-16.19,4.79-20.34,7.01-4.31,16.6-1.85,20.73,5.61,1.23-1.69,9.07-12.14,22.43-12.95,10.61-.65,23.97,4.83,27.48,16.19,2.28,7.37-.54,14.14-1.72,16.61Z" fill="#001f3f" stroke-width="0"/>
            <path d="m1128.27,687.94c-9.22,7.76-20.94,16.42-35.29,24.56-15.79,8.96-30.54,14.91-42.79,18.92-7.71,1.95-15.56-1.38-19.01-7.74-4.25-7.83.49-15.97.7-16.32-4.32-10.61-.47-21.55,7.04-25.34,6.92-3.5,14.6.28,15.63.8-4.23-7.03-1.96-16.19,4.79-20.34,7.01-4.31,16.6-1.85,20.73,5.61,1.23-1.69,9.07-12.14,22.43-12.95,10.61-.65,23.97,4.83,27.48,16.19,2.28,7.37-.54,14.14-1.72,16.61Z" fill="url(#linear-gradient-7)" stroke-width="0"/>
            <g>
              <path d="m1109.15,683.52c-.67,0-10.44-.18-15.25-8.92-2.61-4.73-2.43-9.55-2.26-11.47,1.95.21,6.1.96,10.03,4.34,6.71,5.77,7.39,14.54,7.48,16.05Z" fill="url(#linear-gradient-8)" stroke-width="0"/>
              <path d="m1112.31,682.97c-.31-.42-4.76-6.62-2.55-13.7,1.2-3.83,3.73-5.96,4.79-6.74.8,1.32,2.35,4.27,2.45,8.3.18,6.88-3.97,11.38-4.69,12.14Z" fill="url(#linear-gradient-9)" stroke-width="0"/>
              <path d="m1075.78,694.15c-.52-.03-8.13-.6-12.15-6.83-2.17-3.37-2.18-6.68-2.1-8,1.53.23,4.78.94,7.94,3.44,5.4,4.28,6.19,10.35,6.31,11.39Z" fill="url(#linear-gradient-10)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m623.05,800.54c20.47-6.84,44.97-17.41,70.78-34.14,11.94-7.74,22.55-15.75,31.89-23.57,11.9-11.08,14-28.76,6.76-39.43-5.08-7.48-14.37-10.95-23.86-9.51-.43-.8-5.91-10.61-16.98-11.17-10.84-.55-17.44,8.26-18.03,9.07-.36-1.89-1.82-8.45-7.14-11.98-6.72-4.45-16.99-2.33-24.14,6.1-9.29-4.75-19.64-1.67-24.12,5.84-4.38,7.33-1.47,16.03-1.1,17.07-6.61-1.14-13.14,2.07-16.34,7.94-3.68,6.74-1.27,13.8-.95,14.7-8-2.7-16.41,1.28-19.67,8.59-2.53,5.67-1.67,12.68,2.13,17.94-1.19,2.16-8.17,15.29-3.68,27.59,5.23,14.34,24.35,22.89,44.46,14.96Z" fill="#001f3f" stroke-width="0"/>
            <path d="m622.34,791.95c19.42-6.63,42.65-16.88,67.14-33.09,11.33-7.5,21.39-15.26,30.25-22.84,11.29-10.74,13.28-27.88,6.41-38.22-4.82-7.25-13.63-10.62-22.63-9.22-.41-.78-5.61-10.28-16.11-10.82-10.28-.53-16.55,8.01-17.1,8.79-.34-1.83-1.72-8.19-6.77-11.61-6.38-4.32-16.11-2.26-22.9,5.91-8.81-4.61-18.63-1.62-22.88,5.66-4.16,7.11-1.39,15.54-1.05,16.54-6.27-1.11-12.46,2.01-15.5,7.7-3.49,6.53-1.2,13.38-.9,14.24-7.59-2.62-15.57,1.24-18.66,8.33-2.4,5.49-1.59,12.29,2.02,17.39-1.13,2.1-7.75,14.82-3.49,26.75,4.96,13.9,23.1,22.19,42.17,14.5Z" fill="url(#linear-gradient-11)" stroke-width="0"/>
            <g>
              <path d="m638.94,726.37c-.33-.58-4.99-9.17.23-17.67,2.83-4.6,7.11-6.82,8.87-7.62.78,1.8,2.18,5.78,1.17,10.87-1.71,8.68-9.01,13.6-10.27,14.42Z" fill="url(#linear-gradient-12)" stroke-width="0"/>
              <path d="m632.93,720.55c-.5-.15-7.78-2.44-10.26-9.43-1.34-3.78-.59-7-.22-8.27,1.44.57,4.44,2,6.94,5.17,4.28,5.4,3.66,11.49,3.54,12.53Z" fill="url(#linear-gradient-13)" stroke-width="0"/>
              <path d="m703.01,712.97c-.07-.51-.94-8.1,4.43-13.21,2.91-2.77,6.16-3.39,7.46-3.57.06,1.54-.02,4.87-1.9,8.45-3.19,6.1-9,8.02-10,8.33Z" fill="url(#linear-gradient-14)" stroke-width="0"/>
            </g>
          </g>
          <g>
            <path d="m359.82,715.96c-19.76-5.46-44.88-14.56-71.76-30.25-16.82-9.82-30.88-20.21-42.32-29.81-11.61-5-17.69-16.92-15.1-26.72,2.8-10.61,14.47-13.89,15.16-14.07-.09-.91-.93-11.81,7.01-17.93,7.35-5.66,19.1-4.82,27.53,2.84.48-.66,3.39-4.53,7.89-4.57,5.2-.05,10.68,5.01,11.64,12.35,3.77-5.53,9.78-8.92,15.83-8.3,8.88.91,17.07,10.38,16.64,22.2,1.02-.12,8.33-.87,13.8,4.41,5.17,4.99,6.54,13.29,3.1,20.34.84-.67,7.83-5.98,17.11-3.56,8.05,2.1,12,8.5,12.69,9.66,8.37,4.51,13.41,13.37,12.74,22.27-.86,11.57-10.88,17.01-11.66,17.42.59.9,5.11,7.99,2.54,14.96-2.74,7.43-12.51,11.93-22.86,8.77Z" fill="#001f3f" stroke-width="0"/>
            <path d="m357.39,706.6c-19.76-5.46-44.88-14.56-71.76-30.25-16.82-9.82-30.88-20.21-42.32-29.81-11.61-5-17.69-16.92-15.1-26.72,2.8-10.61,14.47-13.89,15.16-14.07-.09-.91-.93-11.81,7.01-17.93,7.35-5.66,19.1-4.82,27.53,2.84.48-.66,3.39-4.53,7.89-4.57,5.2-.05,10.68,5.01,11.64,12.35,3.77-5.53,9.78-8.92,15.83-8.3,8.88.91,17.07,10.38,16.64,22.2,1.02-.12,8.33-.87,13.8,4.41,5.17,4.99,6.54,13.29,3.1,20.34.84-.67,7.83-5.98,17.11-3.56,8.05,2.1,12,8.5,12.69,9.66,8.37,4.51,13.41,13.37,12.74,22.27-.86,11.57-10.88,17.01-11.66,17.42.59.9,5.11,7.99,2.54,14.96-2.74,7.43-12.51,11.93-22.86,8.77Z" fill="url(#linear-gradient-15)" stroke-width="0"/>
            <g>
              <path d="m290.59,623.88c-.49-.45-7.59-7.17-5.26-16.87,1.26-5.25,4.64-8.69,6.06-10,1.31,1.47,3.86,4.82,4.48,9.97,1.06,8.78-4.35,15.72-5.29,16.9Z" fill="url(#linear-gradient-16)" stroke-width="0"/>
              <path d="m293.3,625.6c.05-.52.95-8.1,7.35-11.84,3.47-2.02,6.77-1.89,8.08-1.75-.3,1.52-1.14,4.73-3.79,7.79-4.51,5.2-10.61,5.73-11.65,5.81Z" fill="url(#linear-gradient-17)" stroke-width="0"/>
              <path d="m261.53,614.22c-.52-.03-8.13-.6-12.15-6.83-2.17-3.37-2.18-6.68-2.1-8,1.53.23,4.78.94,7.94,3.44,5.4,4.28,6.19,10.35,6.31,11.39Z" fill="url(#linear-gradient-18)" stroke-width="0"/>
            </g>
          </g>
        </g>
        <g id="gL1">
          <g id="diamondBtn1">
            <path d="m1000.93,285.26l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#339eff" stroke-width="0"/>
            <path d="m1051.37,362.44l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1001.16,364.75l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <path d="m802.5,525.02c-.52-2,1.04-4.19,3.49-4.88s4.86.37,5.38,2.37c.52,2-1.04,4.19-3.49,4.88-2.45.69-4.86-.37-5.38-2.37Zm19.67,10.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.29,8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm14.14-9.44c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.02-14.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm63.98,13.48c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16-3.37c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-228.88,31.63c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.29-8.22c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-16.43-4.26c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-17.26,9.93c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-14.47,2.89c2.45-.69,4.01-2.88,3.49-4.88s-2.93-3.07-5.38-2.37c-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm-10.72-12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-64.3-75.27c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88s2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm-182.35-89.6c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Zm17.89.3c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37-2.45.69-4.01,2.88-3.49,4.88.52,2,2.93,3.07,5.38,2.37Zm10.72,12.54c2.45-.69,4.01-2.88,3.49-4.88-.52-2-2.93-3.07-5.38-2.37s-4.01,2.88-3.49,4.88c.52,2,2.93,3.07,5.38,2.37Z" fill="#096595" stroke-width="0"/>
          <g clip-path="url(#clippath)">
            <g>
              <g id="b1R1">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R2">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R3">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R4">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R5">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R6">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R7">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R8">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                <g>
                  <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                  <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                  <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
                </g>
              </g>
              <g id="b1R9">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R10">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R11">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
              <g id="b1R12">
                <rect x="224.4" y="418.11" width="27.96" height="27.96" fill="#fff" stroke-width="0"/>
                <rect x="252.4" y="418.11" width="27.96" height="27.96" fill="#339eff" stroke-width="0"/>
                <rect x="280.4" y="418.11" width="27.96" height="27.96" fill="#ff3364" stroke-width="0"/>
              </g>
            </g>
          </g>
          <g id="lampBtn1">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn1">
            <image width="892" height="312" transform="translate(243.59 381.88)" xlink:href="../img/radiance1.png"/>
          </g>
          <g id="grWBtn1">
            <path d="m712.53,641.14l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_33)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m408.39,588.24c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_Градієнт_без_назви_33-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1055.24,644.55l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_33-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL2">
          <g>
            <g>
              <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
              <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            </g>
            <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampBtn2">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#ff9433" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#af33ff" stroke-width="0"/>
          </g>
          <g id="radianceBtn2">
            <image width="847" height="296" transform="translate(242.43 381.73) scale(1.05 1)" xlink:href="../img/radiance2.png"/>
          </g>
          <g id="diamondBtn2">
            <path d="m1000.93,285.26l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#af33ff" stroke-width="0"/>
            <path d="m1051.37,362.44l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#af33ff" stroke-width="0"/>
            <path d="m1001.16,364.75l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#ff9433" stroke-width="0"/>
          </g>
          <g id="grWBtn2">
            <path d="m712.83,640.58l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_64)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m408.69,587.68c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_Градієнт_без_назви_64-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1055.54,643.99l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_64-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL3">
          <g>
            <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn3">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g>
            <g id="lamp1Btn3">
              <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
            <g id="lamp2Btn3">
              <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
            <g id="lamp3Btn3">
              <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
              <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            </g>
          </g>
          <g id="radianceBtn3">
            <image width="847" height="296" transform="translate(250.67 376.26) scale(1.04 1)" xlink:href="../img/radiance3.png"/>
          </g>
          <g id="diamondBtn3">
            <path d="m1000.93,285.26l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1051.37,362.44l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1001.16,364.75l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn3">
            <path d="m712.11,640.78l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_114)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m407.97,587.88c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_Градієнт_без_назви_114-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1054.82,644.19l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_114-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL4">
          <g>
            <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn4">
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="lampBtn4">
            <g>
              <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <g>
              <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
              <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#33ff7c" stroke-width="0"/>
            </g>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#ff3364" stroke-width="0"/>
          </g>
          <g id="lampO1Btn4">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g>
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn4">
            <image width="847" height="296" transform="translate(246.11 371.79) scale(1.06 1)" xlink:href="../img/radiance4.png"/>
          </g>
          <g id="diamondBtn4">
            <path d="m1000.93,285.26l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#ff3364" stroke-width="0"/>
            <path d="m1051.37,362.44l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#33ff7c" stroke-width="0"/>
            <path d="m1001.16,364.75l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn4">
            <path d="m711.3,640.97l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_161)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m407.16,588.07c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_Градієнт_без_назви_161-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1054.01,644.38l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_161-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
        <g id="gL5">
          <g>
            <ellipse cx="1037.53" cy="487.29" rx="4.61" ry="3.75" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="4.61" ry="3.75" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="4.61" ry="3.75" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="4.61" ry="3.75" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="4.61" ry="3.75" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="4.61" ry="3.75" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="4.61" ry="3.75" transform="translate(-109 329.12) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="4.61" ry="3.75" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="4.61" ry="3.75" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="4.61" ry="3.75" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="4.61" ry="3.75" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="4.61" ry="3.75" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="4.61" ry="3.75" transform="translate(-137 313.22) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="4.61" ry="3.75" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="4.61" ry="3.75" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="4.61" ry="3.75" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="4.61" ry="3.75" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="4.61" ry="3.75" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="4.61" ry="3.75" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="4.61" ry="3.75" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="4.61" ry="3.75" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="4.61" ry="3.75" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="4.61" ry="3.75" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="4.61" ry="3.75" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="4.61" ry="3.75" transform="translate(-116.26 255) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="4.61" ry="3.75" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="4.61" ry="3.75" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="4.61" ry="3.75" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="4.61" ry="3.75" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="4.61" ry="3.75" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="4.61" ry="3.75" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="4.61" ry="3.75" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="4.61" ry="3.75" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="4.61" ry="3.75" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="4.61" ry="3.75" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="4.61" ry="3.75" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="4.61" ry="3.75" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="4.61" ry="3.75" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="4.61" ry="3.75" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="4.61" ry="3.75" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="4.61" ry="3.75" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="4.61" ry="3.75" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="4.61" ry="3.75" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="4.61" ry="3.75" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="4.61" ry="3.75" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="4.61" ry="3.75" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="4.61" ry="3.75" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="4.61" ry="3.75" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="4.61" ry="3.75" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="4.61" ry="3.75" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="4.61" ry="3.75" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="4.61" ry="3.75" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="4.61" ry="3.75" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="4.61" ry="3.75" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#096595" stroke-width="0"/>
            <ellipse cx="313.94" cy="432.15" rx="4.61" ry="3.75" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#096595" stroke-width="0"/>
          </g>
          <g id="lampOBtn5">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="lampBtn5">
            <ellipse cx="313.94" cy="432.15" rx="3.07" ry="2.5" transform="translate(-118.08 118.04) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="331.83" cy="432.45" rx="3.07" ry="2.5" transform="translate(-117.3 123.57) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="349.72" cy="432.74" rx="3.07" ry="2.5" transform="translate(-116.52 129.11) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="367.6" cy="433.04" rx="3.07" ry="2.5" transform="translate(-115.74 134.65) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="385.49" cy="433.34" rx="3.07" ry="2.5" transform="translate(-114.96 140.19) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="403.38" cy="433.64" rx="3.07" ry="2.5" transform="translate(-114.17 145.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="421.27" cy="433.93" rx="3.07" ry="2.5" transform="translate(-113.39 151.26) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="431.99" cy="446.48" rx="3.07" ry="2.5" transform="translate(-116.74 155.18) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="442.7" cy="459.02" rx="3.07" ry="2.5" transform="translate(-120.09 159.1) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="453.42" cy="471.57" rx="3.07" ry="2.5" transform="translate(-123.44 163.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="464.14" cy="484.11" rx="3.07" ry="2.5" transform="translate(-126.79 166.95) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="474.85" cy="496.66" rx="3.07" ry="2.5" transform="translate(-130.14 170.87) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="485.57" cy="509.2" rx="3.07" ry="2.5" transform="translate(-133.49 174.79) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="496.28" cy="521.75" rx="3.07" ry="2.5" transform="translate(-136.84 178.71) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="507" cy="534.29" rx="3.07" ry="2.5" transform="translate(-140.19 182.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="517.72" cy="546.83" rx="3.07" ry="2.5" transform="translate(-143.54 186.55) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="528.43" cy="559.38" rx="3.07" ry="2.5" transform="translate(-146.89 190.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="539.15" cy="571.92" rx="3.07" ry="2.5" transform="translate(-150.24 194.4) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="549.86" cy="584.47" rx="3.07" ry="2.5" transform="translate(-153.58 198.32) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="560.58" cy="597.01" rx="3.07" ry="2.5" transform="translate(-156.93 202.24) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="575.05" cy="594.12" rx="3.07" ry="2.5" transform="translate(-155.33 206.56) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="592.31" cy="584.19" rx="3.07" ry="2.5" transform="translate(-151.43 211.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="609.57" cy="574.27" rx="3.07" ry="2.5" transform="translate(-147.52 216.25) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="626.83" cy="564.34" rx="3.07" ry="2.5" transform="translate(-143.61 221.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="644.09" cy="554.41" rx="3.07" ry="2.5" transform="translate(-139.7 225.94) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="661.35" cy="544.49" rx="3.07" ry="2.5" transform="translate(-135.79 230.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="678.61" cy="534.56" rx="3.07" ry="2.5" transform="translate(-131.89 235.63) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="695.87" cy="524.63" rx="3.07" ry="2.5" transform="translate(-127.98 240.47) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="713.13" cy="514.71" rx="3.07" ry="2.5" transform="translate(-124.07 245.31) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="730.39" cy="504.78" rx="3.07" ry="2.5" transform="translate(-120.16 250.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="747.65" cy="494.85" rx="3.07" ry="2.5" transform="translate(-116.26 255) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="764.07" cy="499.11" rx="3.07" ry="2.5" transform="translate(-116.77 260.28) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="778.36" cy="507.33" rx="3.07" ry="2.5" transform="translate(-118.61 265.09) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="792.65" cy="515.55" rx="3.07" ry="2.5" transform="translate(-120.45 269.91) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="806.94" cy="523.77" rx="3.07" ry="2.5" transform="translate(-122.29 274.72) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="821.23" cy="531.99" rx="3.07" ry="2.5" transform="translate(-124.13 279.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="835.52" cy="540.21" rx="3.07" ry="2.5" transform="translate(-125.97 284.35) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="849.8" cy="548.43" rx="3.07" ry="2.5" transform="translate(-127.81 289.16) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="864.09" cy="556.65" rx="3.07" ry="2.5" transform="translate(-129.65 293.97) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="878.38" cy="564.87" rx="3.07" ry="2.5" transform="translate(-131.49 298.78) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="892.67" cy="573.09" rx="3.07" ry="2.5" transform="translate(-133.33 303.6) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="906.96" cy="581.31" rx="3.07" ry="2.5" transform="translate(-135.17 308.41) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="921.25" cy="589.53" rx="3.07" ry="2.5" transform="translate(-137 313.22) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="935.39" cy="580.09" rx="3.07" ry="2.5" transform="translate(-133.4 317.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="945.41" cy="565.87" rx="3.07" ry="2.5" transform="translate(-128.52 319.53) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="955.43" cy="551.65" rx="3.07" ry="2.5" transform="translate(-123.64 321.93) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="965.45" cy="537.43" rx="3.07" ry="2.5" transform="translate(-118.76 324.33) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="975.47" cy="523.21" rx="3.07" ry="2.5" transform="translate(-113.88 326.73) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="985.5" cy="508.99" rx="3.07" ry="2.5" transform="translate(-109 329.12) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="995.52" cy="494.77" rx="3.07" ry="2.5" transform="translate(-104.12 331.52) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1005.54" cy="480.55" rx="3.07" ry="2.5" transform="translate(-99.24 333.92) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1021.54" cy="483.92" rx="3.07" ry="2.5" transform="translate(-99.5 339.03) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1037.53" cy="487.29" rx="3.07" ry="2.5" transform="translate(-99.76 344.13) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1053.53" cy="490.65" rx="3.07" ry="2.5" transform="translate(-100.02 349.23) rotate(-17.98)" fill="#fff" stroke-width="0"/>
            <ellipse cx="1069.52" cy="494.02" rx="3.07" ry="2.5" transform="translate(-100.27 354.34) rotate(-17.98)" fill="#fff" stroke-width="0"/>
          </g>
          <g id="radianceBtn5">
            <image width="847" height="296" transform="translate(238.71 376.47) scale(1.07 1)" xlink:href="../img/radiance5.png"/>
          </g>
          <g id="diamondBtn5">
            <path d="m1000.93,285.26l-9.15,21.55c3.21,6.71,6.42,13.43,9.63,20.14,3.15-6.71,6.31-13.43,9.46-20.14l-9.94-21.55Z" fill="#fff" stroke-width="0"/>
            <path d="m1051.37,362.44l-5.96,14.02c2.09,4.37,4.18,8.74,6.26,13.11,2.05-4.37,4.1-8.74,6.16-13.11l-6.46-14.02Z" fill="#fff" stroke-width="0"/>
            <path d="m1001.16,364.75l-3.69,8.68c1.29,2.71,2.59,5.41,3.88,8.12,1.27-2.71,2.54-5.41,3.81-8.12l-4-8.68Z" fill="#fff" stroke-width="0"/>
          </g>
          <g id="grWBtn5">
            <path d="m712,641.13l.05.08-.5.29c-.35.25-.72.45-1.1.62l-67.44,38.09c-1.38.7-3.05.82-4.85.19-4.78-1.66-8.66-7.94-8.66-14.02,0-2.99.94-5.38,2.47-6.83.01-.02.02-.03.04-.03l2.35-1.34,66.13-37.48h.01c1.49-1.01,3.38-1.27,5.44-.55,4.79,1.67,8.66,7.95,8.66,14.03,0,3.07-.99,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_166)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m407.86,588.23c0,6.08-3.87,12.36-8.66,14.02-1.8.63-3.46.51-4.85-.19l-67.44-38.09c-.38-.17-.75-.37-1.09-.62l-.51-.29.05-.08c-1.6-1.44-2.6-3.87-2.6-6.95,0-6.08,3.88-12.36,8.66-14.03,2.06-.72,3.96-.46,5.45.56h0s66.08,37.46,66.08,37.46l2.44,1.38c1.53,1.44,2.47,3.83,2.47,6.83Z" fill="url(#_Градієнт_без_назви_166-2)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
            <path d="m1054.71,644.54l.05.08-.51.29c-.34.25-.71.45-1.1.62l-67.43,38.09c-1.38.71-3.05.82-4.85.2-4.79-1.67-8.67-7.95-8.67-14.03,0-2.99.94-5.38,2.47-6.83h.01s2.42-1.38,2.42-1.38l66.1-37.47h0c1.49-1,3.38-1.27,5.45-.55,4.78,1.67,8.66,7.95,8.66,14.03,0,3.08-1,5.51-2.6,6.95Z" fill="url(#_Градієнт_без_назви_166-3)" mix-blend-mode="hard-light" opacity=".75" stroke-width="0"/>
          </g>
        </g>
      </g>
      <g id="control">
        <g>
          <rect x="41.53" y="3.25" width="237.96" height="396.82" rx="54" ry="54" fill="#075990" stroke-width="0"/>
          <rect x="49.2" y="10.83" width="222.61" height="381.66" rx="50" ry="50" fill="#001f3f" stroke-width="0"/>
        </g>
        <g>
          <g>
            <circle cx="161.93" cy="310.3" r="36.41" fill="#33e3ff" stroke-width="0"/>
            <path d="m191.65,310.3c0,16.42-13.31,29.73-29.73,29.73s-29.73-13.31-29.73-29.73c0-7.38,2.69-14.14,7.15-19.33,5.45-6.36,13.55-10.39,22.58-10.39,16.42,0,29.73,13.31,29.73,29.73Z" fill="#fff" opacity=".5" stroke-width="0"/>
          </g>
          <g id="btnAll">
            <g id="btn1">
              <circle id="lightBtn1" cx="122.67" cy="78.7" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="122.67" cy="78.7" r="22.09" fill="url(#_Градієнт_без_назви_10)" stroke-width="0"/>
              <circle cx="122.67" cy="78.7" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m113.83,76.36v-1.72h-2.94v-.56l2.82-4.04h.92v3.93h.89v.67h-.89v1.72h-.81Zm0-2.39v-2.11c0-.33,0-.66.03-.99h-.03c-.19.37-.35.64-.53.93l-1.55,2.15v.02h2.07Z" fill="#fff" stroke-width="0"/>
                <path d="m117.48,70.3v1.35h1.23v.65h-1.23v2.54c0,.58.17.91.64.91.22,0,.39-.03.5-.06l.04.64c-.16.07-.43.12-.76.12-.4,0-.72-.13-.92-.36-.24-.25-.33-.67-.33-1.23v-2.57h-.73v-.65h.73v-1.13l.84-.22Z" fill="#fff" stroke-width="0"/>
                <path d="m119.67,69.46h.86v2.94h.02c.14-.24.35-.46.61-.6.25-.15.55-.24.87-.24.63,0,1.64.39,1.64,2.01v2.8h-.86v-2.7c0-.76-.28-1.4-1.09-1.4-.55,0-.99.39-1.15.86-.05.12-.06.24-.06.41v2.84h-.86v-6.91Z" fill="#fff" stroke-width="0"/>
                <path d="m131.4,73.97c0,1.74-1.21,2.5-2.34,2.5-1.27,0-2.26-.93-2.26-2.42,0-1.58,1.03-2.5,2.34-2.5s2.27.98,2.27,2.42Zm-3.74.05c0,1.03.59,1.81,1.43,1.81s1.43-.77,1.43-1.83c0-.8-.4-1.81-1.41-1.81s-1.45.93-1.45,1.83Z" fill="#ff3364" stroke-width="0"/>
                <path d="m132.57,76.36v-4.06h-.66v-.65h.66v-.22c0-.66.15-1.26.54-1.64.32-.31.75-.44,1.15-.44.3,0,.56.07.73.14l-.12.66c-.13-.06-.3-.11-.55-.11-.73,0-.91.64-.91,1.36v.25h1.14v.65h-1.14v4.06h-.85Z" fill="#ff3364" stroke-width="0"/>
                <path d="m114.89,78.98h1.13v5.85c0,2.32-1.14,3.04-2.65,3.04-.42,0-.92-.09-1.21-.21l.17-.92c.23.09.57.17.95.17,1.01,0,1.61-.45,1.61-2.17v-5.76Z" fill="#ff3364" stroke-width="0"/>
                <path d="m123.11,86.01c0,.65.01,1.22.05,1.71h-1.01l-.06-1.03h-.03c-.3.51-.96,1.17-2.08,1.17-.99,0-2.17-.55-2.17-2.75v-3.67h1.14v3.48c0,1.19.36,2,1.4,2,.77,0,1.3-.53,1.51-1.04.06-.17.1-.38.1-.58v-3.85h1.14v4.57Z" fill="#ff3364" stroke-width="0"/>
                <path d="m125.01,78.51h1.14v9.21h-1.14v-9.21Z" fill="#ff3364" stroke-width="0"/>
                <path d="m128.49,81.44l1.38,3.71c.14.42.3.91.4,1.28h.03c.12-.38.25-.86.4-1.31l1.25-3.68h1.21l-1.71,4.48c-.82,2.15-1.38,3.26-2.15,3.93-.56.49-1.12.69-1.4.74l-.29-.96c.29-.09.66-.27,1-.56.31-.25.7-.69.96-1.27.05-.12.09-.21.09-.27s-.03-.16-.08-.3l-2.32-5.79h1.25Z" fill="#ff3364" stroke-width="0"/>
              </g>
              <circle cx="122.67" cy="78.7" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn2">
              <circle id="lightBtn2" cx="198.34" cy="78.7" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="198.34" cy="78.7" r="22.09" fill="url(#_Градієнт_без_назви_4)" stroke-width="0"/>
              <circle cx="198.34" cy="78.7" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m210.27,80.2c0,4.06-2.53,7.35-5.63,7.35-.51,0-.98-.09-1.44-.25-.39.16-.81.25-1.22.25-.71,0-1.38-.24-1.96-.66-.48.43-1.01.66-1.57.66-.63,0-1.22-.3-1.74-.84-.66.54-1.4.84-2.2.84-.31,0-.62-.04-.92-.13-.34.09-.7.13-1.07.13-3.11,0-5.63-3.29-5.63-7.35s2.53-7.35,5.63-7.35c.37,0,.73.04,1.07.13.3-.09.61-.13.92-.13.8,0,1.53.3,2.19.83h.01c.52-.53,1.11-.83,1.74-.83.56,0,1.09.24,1.57.66.13-.1.28-.19.43-.27.48-.26,1-.39,1.54-.39.42,0,.83.09,1.22.25.46-.16.93-.25,1.44-.25,3.11,0,5.63,3.29,5.63,7.35Z" fill="#ff9433" stroke-width="0"/>
                <path d="m200.43,73.24c-.15.08-.29.17-.43.27-.48-.43-1.01-.66-1.57-.66-.63,0-1.22.3-1.74.84h-.01c.38-1.66.26-3.31-.88-4.73l1.29-1.45c1.9,1.19,3.03,3.5,3.33,5.72Z" fill="#001f3f" stroke-width="0"/>
                <polygon points="196.32 78.66 194.06 75.65 191.69 78.01 196.32 78.66" fill="#001f3f" stroke-width="0"/>
                <polygon points="200.53 78.66 202.78 75.65 205.15 78.01 200.53 78.66" fill="#001f3f" stroke-width="0"/>
                <path d="m197.29,80.47l.86-1.82.32.48.27-.48.81,1.82c0,.62-2.27.62-2.27,0Z" fill="#001f3f" stroke-width="0"/>
                <path d="m205.15,79.8c0,3.41-2.82,5.3-5.93,5.65v-.88h-1.61v.92c-3.33-.17-6.5-2.08-6.5-5.69.71.98,2.23,1.64,4.03,1.99v1.59h1.59v-1.37c1.09.09,2.21.09,3.28-.01v1.38h1.61v-1.63c1.71-.36,3.06-1.02,3.52-1.95Z" fill="#001f3f" stroke-width="0"/>
              </g>
              <circle cx="198.34" cy="78.7" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn3">
              <circle id="lightBtn3" cx="122.67" cy="146.57" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="122.67" cy="146.57" r="22.09" fill="url(#_Градієнт_без_назви_31)" stroke-width="0"/>
              <circle cx="122.67" cy="146.57" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m122.13,160.12c-1.09-.28-1.74-1.38-1.46-2.47l4.37-17.12c.3-1.16-.24-2.35-1.18-2.59s-1.98.52-2.28,1.7l-.71,2.78c-.28,1.09-1.38,1.74-2.47,1.46s-1.74-1.38-1.46-2.47l.71-2.78c.86-3.35,4.09-5.43,7.21-4.63,3.12.8,4.96,4.17,4.11,7.52l-4.37,17.12c-.28,1.09-1.38,1.74-2.47,1.46Z" fill="#fff" stroke-width="0"/>
                <path d="m125.85,153.74l-.98,3.84c-1.34.41-2.77.68-4.26.81-.02-.24,0-.49.05-.72l.67-2.61c1.61-.22,3.1-.67,4.52-1.31Z" fill="#ff3364" stroke-width="0"/>
                <path d="m127.46,147.42l-.98,3.84c-1.4.43-2.86.69-4.39.8l.85-3.33c1.61-.22,3.1-.67,4.52-1.31Z" fill="#ff3364" stroke-width="0"/>
                <path d="m128.96,141.54l-.92,3.6c-1.38.43-2.84.7-4.4.82l.85-3.35c1.59-.21,3.09-.63,4.5-1.3,0,.08-.02.15-.04.22Z" fill="#ff3364" stroke-width="0"/>
                <path d="m129.01,138.45c-1.2.85-2.53,1.53-3.98,2.1v-.02c.26-1.02-.11-2.05-.84-2.46h-.02c-.03-.21-.06-.42-.11-.63,1.27-.5,2.39-1.11,3.42-1.87.76.78,1.29,1.78,1.52,2.88Z" fill="#ff3364" stroke-width="0"/>
                <path d="m124.17,138.07c-.1-.06-.21-.1-.32-.13-.39-.1-.8-.04-1.15.18-.52.28-.95.83-1.13,1.54l-.07.27c-.14-.12-.27-.24-.42-.34-.14-1.63-.47-3.13-1.05-4.55.89-.66,1.92-1.08,3.01-1.17.46,1.14.79,2.35,1.01,3.59.05.21.08.42.11.63Z" fill="#ff3364" stroke-width="0"/>
                <path d="m121.5,139.92l-.64,2.5c-.09.36-.27.65-.51.89-.95-1.01-2.02-1.86-3.25-2.57l.53-2.09c.1-.38.22-.75.38-1.11,1.11.58,2.12,1.26,3.06,2.04.14.1.28.22.42.34Z" fill="#ff3364" stroke-width="0"/>
              </g>
              <circle cx="122.67" cy="146.57" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn4">
              <circle id="lightBtn4" cx="198.34" cy="146.57" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="198.34" cy="146.57" r="22.23" fill="url(#_Градієнт_без_назви_44)" stroke-width="0"/>
              <circle cx="198.34" cy="146.57" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <polygon points="208.64 155.59 200.37 155.59 200.37 159.66 196.29 159.66 196.29 155.59 188.04 155.59 192.09 148.45 190.78 148.45 194.61 140.94 193.57 140.94 193.57 140.63 198.34 131.77 203.09 140.63 203.09 140.94 202.07 140.94 205.9 148.45 204.57 148.45 208.64 155.59" fill="#33ff7c" stroke-width="0"/>
                <circle cx="198.44" cy="148.65" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="195.9" cy="143.38" r=".91" fill="#fff" stroke-width="0"/>
                <circle cx="199.35" cy="137.14" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="203.7" cy="153.08" r=".91" fill="#ff3364" stroke-width="0"/>
                <circle cx="192.87" cy="152.6" r=".91" fill="#fff" stroke-width="0"/>
                <circle cx="203.46" cy="146.97" r=".91" fill="#fff" stroke-width="0"/>
              </g>
              <circle cx="198.34" cy="146.57" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
            <g id="btn5">
              <circle id="lightBtn5" cx="161.93" cy="212.14" r="28.27" fill="#fff" opacity=".35" stroke-width="0"/>
              <circle cx="161.93" cy="212.14" r="22.09" fill="#17538b" stroke-width="0"/>
              <circle cx="161.93" cy="212.14" r="22.09" fill="url(#_Градієнт_без_назви_52)" stroke-width="0"/>
              <circle cx="161.93" cy="212.14" r="18.66" fill="#17538b" stroke-width="0"/>
              <g>
                <path d="m172.35,219.66c.25.37.88,2.09.9,2.5.03.45-.47.82-.61,1.19-.15.41-.06,1.03-.42,1.27s-.9-.06-1.34-.07c-.4,0-.92.33-1.33.14-.37-.17-1.75-1.37-2.01-1.74-.35-.52-1.51-2.79-3.45-5.37-1.17-1.57-2.86-3.07-4.17-4.85-1.31-1.8-2.22-3.86-3.32-5.47-2.02-2.96-3.69-5.3-3.28-5.58s2.46,1.78,5.09,4.24c1.45,1.35,3.39,2.61,4.99,4.21,1.59,1.6,2.84,3.54,4.22,4.99,2.28,2.39,4.36,4.02,4.72,4.54Z" fill="url(#_Градієнт_без_назви_52-2)" stroke-width="0"/>
                <ellipse cx="169.94" cy="221.31" rx="1.9" ry="2.68" transform="translate(-95.41 135.03) rotate(-34.47)" fill="#fff" stroke-width="0"/>
                <path d="m160.51,205.19c-.06,0-.11-.02-.15-.07l-4.69-5.18c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l4.69,5.18c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_Градієнт_без_назви_52-3)" stroke-width="0"/>
                <path d="m153.6,207.04c-.06,0-.11-.02-.15-.07l-2.98-3.28c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l2.98,3.28c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_Градієнт_без_назви_52-4)" stroke-width="0"/>
                <path d="m171.43,206.42c-.06,0-.11-.02-.15-.07l-2.98-3.28c-.07-.08-.07-.21.01-.29.08-.07.21-.07.29.01l2.98,3.28c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_Градієнт_без_назви_52-5)" stroke-width="0"/>
                <path d="m159.27,218.69c-.06,0-.12-.02-.16-.07l-9.19-10.95c-.07-.09-.06-.21.03-.29.09-.07.21-.06.29.02l9.19,10.95c.07.09.06.21-.03.29-.04.03-.08.05-.13.05Z" fill="url(#_Градієнт_без_назви_52-6)" stroke-width="0"/>
                <path d="m158.16,198.02c-.06,0-.11-.02-.15-.07l-1.49-1.64c-.07-.08-.07-.21.01-.29.08-.07.21-.07.29.01l1.49,1.64c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_Градієнт_без_назви_52-7)" stroke-width="0"/>
                <path d="m148.7,214.23c-.06,0-.11-.02-.15-.07l-1.49-1.64c-.07-.08-.07-.21.01-.29.08-.08.21-.07.29.01l1.49,1.64c.07.08.07.21-.01.29-.04.03-.09.05-.14.05Z" fill="url(#_Градієнт_без_назви_52-8)" stroke-width="0"/>
              </g>
              <circle cx="161.93" cy="212.14" r="28.27" fill="#fff" opacity="0" stroke-width="0"/>
            </g>
          </g>
        </g>
      </g>
      <polyline id="pL1" points="305.91 432.19 421.95 434.01 560.34 597.54 753.42 491.45 921.74 590.45 1005.54 480.55 1089.1 498.22" fill="none" stroke-width="0"/>
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

        console.log(12);
}
