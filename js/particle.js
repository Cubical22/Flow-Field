const particles = [];

class Particle {
    constructor(position) {
        this.position = position;
        this.velocity = [0,0];
        this.last_position = [...position];
    }

    draw(c) {
        c.beginPath();
        // c.strokeStyle = "rgba(255,255,255,0.3)";
        if (particle_color)
            c.strokeStyle = `hsla(${this.position[0] / size_and_count[0] * 255}, 50%, 50%, 10%)`;
        else
            c.strokeStyle = "rgba(1,1,1,0.1)";

        c.moveTo(...this.last_position);
        c.lineTo(...this.position);
        c.stroke();

        c.closePath();

        this.last_position = [...this.position];
    }

    update(width, height) {
        this.position[0] += this.velocity[0] * particle_speed_multiplier;
        this.position[1] += this.velocity[1] * particle_speed_multiplier;

        if (this.position[0] > width) {
            this.position[0] = 0;
            this.last_position = [...this.position];
        }

        if (this.position[1] > height + 5) {
            this.position[1] = -3;
            this.last_position = [...this.position];
        } else if (this.position[1] < -5) {
            this.position[1] = height + 5;
            this.last_position = [...this.position];
        }
    }
}

function init_particles(count, width, height) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle([particle_start_from_right? 0 : Math.random() * width,
                                     Math.random() * height]));
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

    return [closest_vector, min_dis];
}

function update_particles_velocity(width, height) {
    particles.forEach(particle => {
        const [vector, dis] = get_the_closest_vector(particle.position);

        particle.velocity[0] += (Math.cos(vector.rotation) - particle.velocity[0]) * dis / 40;
        particle.velocity[1] += (-Math.sin(vector.rotation) - particle.velocity[1]) * dis / 40;

        particle.update(width, height);
    });
}