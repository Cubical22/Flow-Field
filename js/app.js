const canvas = document.getElementById("main");
const c = canvas.getContext("2d");
let done_once = false;

let rate = Math.random();

const resize = () => {
    canvas.width = size_and_count[0];
    canvas.height = size_and_count[1];
}; resize();

init_vector_space(size_and_count[2], size_and_count[3], size_and_count[0], size_and_count[1]);
init_particles(particle_count, size_and_count[0], size_and_count[1]);

function animation() {
    if (!done_once || clear_each_frame) {
        c.fillStyle = "rgba(0,0,0,1)";
        c.rect(0,0,size_and_count[0],size_and_count[1]);
        c.fill();
    } done_once = true;

    if (display_vector_space)
        draw_vector_space(c);
    draw_particles(c);
    update_particles_velocity(size_and_count[0], size_and_count[1]);

    vector_space.forEach(vector => {
        vector.rotation = noise.simplex3(vector.position[0] / noise_devide,
                                         vector.position[1] / noise_devide, rate) * 1.7;
    });

    if (update_rate)
        rate += rate_addition;

    requestAnimationFrame(animation);
} animation();