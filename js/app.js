const canvas = document.getElementById("main");
const c = canvas.getContext("2d");

// width, height, row count, col count
const size_and_count = [1000, 600, 5, 10];

const resize = () => {
    canvas.width = size_and_count[0];
    canvas.height = size_and_count[1];
}; resize();

init_vector_space(size_and_count[2], size_and_count[3], size_and_count[0], size_and_count[1]);

function animation() {
    c.fillStyle = "black";
    c.rect(0,0,size_and_count[0],size_and_count[1]);
    c.fill();

    draw_vector_space(c);

    requestAnimationFrame(animation);
} animation();