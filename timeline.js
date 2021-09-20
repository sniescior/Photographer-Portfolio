// var tl = new TimelineMax({onUpdate:updatePercentage});

// const controller = new ScrollMagic.Controller();
// // var imagesContainerWidth = $('#image-cards').outerWidth() - ($('#image-cards').outerWidth())/8;
// var imagesContainerWidth = $('#image-cards').outerWidth() - ($('#image-cards').outerWidth())/5;

// tl.from("#image-cards", 1, {x:0});
// // tl.to("#image-cards", 50, {x:-((imagesContainerWidth))});
// tl.to("#image-cards", 1, {x:-((imagesContainerWidth))}, Linear);

// const scene = new ScrollMagic.Scene({
//     triggerElement: "#triggerElement",
//     triggerHook: "onLeave",
//     duration: imagesContainerWidth
// })
//     .setPin(".image-cards")
//     .setTween(tl)
//         .addTo(controller);
        

// function updatePercentage() {
//     tl.progress();
// }