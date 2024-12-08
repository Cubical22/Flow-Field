const particles = [];

class Particle {
    constructor(position) {
        this.position = position;
        this.velocity = [0,0];
    }

    draw(c) {
        c.beginPath();
        c.fillStyle = "white";
        c.arc(...this.position, 3, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
    }

    update(width, height) {
        this.position[0] += this.velocity[0] * 10;
        this.position[1] += this.velocity[1] * 10;

        if (this.position[0] > width) {
            this.position[0] = 0;
        }
        if (this.position[1] > height) {
            this.position[1] = 0;
        }
    }
}

function init_particles(count, width, height) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle([Math.random() * width, Math.random() * height]));
    }
}

function draw_particles(c) {
    particles.forEach(particle => {
        particle.draw(c);
    });
}

function get_the_closest_vector(position) {
    let min_dis = undefined;
    let closest_vector = 0;

    vector_space.forEach(vector => {
        const dis = Math.sqrt((position[0] - vector.position[0]) ** 2 + (position[1] - vector.position[1]))
        if (!min_dis || dis < min_dis) {
            min_dis = dis;
            closest_vector = vector;
        }
    });

    return closest_vector;
}

function update_particles_velocity(width, height) {
    particles.forEach(particle => {
        const vector = get_the_closest_vector(particle.position);
        particle.velocity = [Math.cos(vector.rotation), -Math.sin(vector.rotation)];
        particle.update(width, height);
    });
}