"use strict";

const testOnload = () => {
    const src = "0.jpg";
    let img = new Image();
    img.onload = () => {
        console.log(img.naturalWidth);
    };
    img.src = src;
    document.getElementById("image").src = src;
}