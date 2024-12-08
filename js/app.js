const canvas = document.getElementById("main");
const c = canvas.getContext("2d");

// width, height, row count, col count
const size_and_count = [1000, 600, 10, 20];
const noise_devide = 500;
let rate = Math.random();

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

    vector_space.forEach(vector => {
        vector.rotation = noise.simplex3(vector.position[0] / noise_devide,
                                         vector.position[1] / noise_devide, rate);
    });

    rate += 0.01;

    requestAnimationFrame(animation);
} animation();