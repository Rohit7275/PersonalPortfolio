window.onload=function() {
    gsap.registerPlugin(ScrollTrigger);

    /*=============================================
    =                   INTRO                   =
    =============================================*/

    // Overlay Animation Timeline
    const load=gsap.timeline();
    
    // intro message style set
    load.set(".aside span", { y: 200, skewY: 7 });

    // intro message animate
    load.to(".aside span", { duration: 1, y: 0, ease: "power1.out", opacity:1, delay: 1, skewY: 0 });

    // intro screen animate
    load.to(".aside", { duration: 0.5, delay: 0.3, width: 0, ease: "power1.o" });

    // intro message hide
    load.to(".aside span", { duration: 0.1, ease: "power1.in", width: 0, opacity: 0 }, "<");

    // main heading animate
    load.from("h1", { duration:0.8, x: 60, opacity:0, }, ">s");
    gsap.to("h1", { y: 200, ease:"power0", scrollTrigger: { trigger: "h1", start: "top 50px", end: "bottom -180%", scrub: true }, });

    // Description Animation Timeline
    const desc=gsap.timeline({
        scrollTrigger: { trigger: ".description", start: "top 80%" }
    });

    // description border animate
    desc.to(".description .border-top", { duration: 0.3, width: "100%" })
        .to(".description .border-right", { duration: 0.3, height: "100%" })
        .to(".description .border-bottom", { duration: 0.3, width: "100%" })
        .to(".description .border-left", { duration: 0.3, height: "100%" });

    gsap.from(".description", { y: 30, scrollTrigger: { trigger: ".description", start: "top 90%", end: "bottom -100%", scrub: true }, });
    
    /*============  End of INTRO  =============*/

    let heading_wraps = gsap.utils.toArray('.heading-wrap');

    heading_wraps.forEach(wrap => {
        let line = wrap.querySelector(".line");
        let heading = wrap.querySelector("h2");

        const head = gsap.timeline({
            scrollTrigger: { trigger: wrap, start: "top 75%" }
        });

        head.from(line, { duration: 0.6, width: "0%", opacity: 0, ease: "power1.out" });
        head.from(heading, { duration: 0.4, y: 140, opacity: 0, ease: "power1.out", delay: 0.2 });
    });

    /*=============================================
    =                   PROJECTS                    =
    =============================================*/

    gsap.fromTo(".projects .heading-wrap", {y: 110}, { y: -70, scrollTrigger: { trigger: ".projects .heading-wrap", start: "top 105%", end: "top -10%", scrub: true } });
    
    let projects = gsap.utils.toArray('.projects li');
    projects.forEach(project => {

        let cover = project.querySelector(".cover");
        let a = project.querySelector("a");
        let img = project.querySelector("img");
        let figure = project.querySelector("figure");

        const pro = gsap.timeline({
            scrollTrigger: { trigger: project, start: "top 70%" }
        });

        pro.fromTo(cover, { scaleY: 0 }, { duration: 0.6, scaleY: 1, transformOrigin: "top" })
            .to(a, { duration: 0.1, opacity: 0.8 })
            .to(cover, { duration: 0.4, scaleY: 0, transformOrigin: "bottom", delay: 0.2 });

        gsap.to(project, {y: -50,  scrollTrigger: { trigger: project, start: "top 70%", scrub: true }});
        gsap.set(img, {objectPosition: "0px 0px"});
    });

    let text = gsap.utils.toArray('.huge-text');
    text.forEach(text => {
        gsap.to(text, {y: -30, ease: "power0", scrollTrigger: { trigger: text, start: "top 90%", scrub: true }});
    });

    let polygon = gsap.utils.toArray('.polygon');
    polygon.forEach(polygon => {
        gsap.to(polygon, {y: 60, ease: "power0", scrollTrigger: { trigger: polygon, start: "top 90%", scrub: true }});
    });
    
    /*============  End of PROJECTS   =============*/

    /*=============================================
    =                   SKILLS                   =
    =============================================*/

    gsap.to(".skills .heading-wrap", { y: -60, scrollTrigger: { trigger: ".skills .heading-wrap", scrub: true } });
    gsap.to(".skills .categories", { y: -30, scrollTrigger: { trigger: ".skills .heading-wrap", scrub: true } });
    
    const skills = gsap.timeline({
        scrollTrigger: { trigger: ".categories", start: "top 75%" }
    });

    skills.to(".categories .border-top", { duration: 0.4, width: "100%" })
        .to(".categories .border-right", { duration: 0.4, height: "100%" })
        .to(".categories .border-bottom", { duration: 0.4, width: "100%" })
        .to(".categories .border-left", { duration: 0.4, height: "100%" });

    skills.from(".skills .skills-list li", { opacity: 0, x: 40, stagger: 0.25, duration: 0.3 }, "<");
    
    skills.from(".skills .categories li", { opacity: 0, x: -40, stagger: 0.25, duration: 0.3 }, "<");

    
    /*============  End of SKILLS  =============*/

    gsap.to(".contact .heading-wrap", { y: -80, scrollTrigger: { trigger: ".contact .heading-wrap", scrub: true } });
    gsap.to(".contact .contact-info", { y: -60, scrollTrigger: { trigger: ".contact .heading-wrap", scrub: true } });


}