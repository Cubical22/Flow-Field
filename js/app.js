const canvas = document.getElementById("main");
const c = canvas.getContext("2d");

const resize = () => {
    canvas.width = 1000;
    canvas.height = 600;
}; resize();

function animation() {
    c.fillStyle = "black";
    c.rect(0,0,1000,600);
    c.fill();

    requestAnimationFrame(animation);
} animation();