const vector_space = [];
const vector_display_r = 10;

class Vector {
    constructor(position, rotation) {
        this.position = position;
        this.rotation = rotation;
    }

    draw(c) {
        c.beginPath();
        c.strokeStyle = "white";
        c.moveTo(...this.position);
        c.lineTo(Math.cos(this.rotation) * vector_display_r + this.position[0],
                 -Math.sin(this.rotation) * vector_display_r + this.position[1]);
        c.stroke();
        c.closePath();

        c.beginPath();
        c.fillStyle = "white";
        c.arc(...this.position, 2, 0, Math.PI * 2, false);
        c.fill();  
        c.closePath();
    }
}

function init_vector_space(row_count, col_count, width, height) {
    const lerp_width = width - 40; // 20px space on each side
    const lerp_height = height - 40; // same here

    for (let i = 0; i < col_count; i++) {
        const x = lerp(0 , lerp_width, i / (col_count - 1)) + 20; // the x position of the vector

        for (let j = 0; j < row_count; j++) {
            const y = lerp(0, lerp_height, j / (row_count - 1)) + 20; // the y position of the vector

            vector_space.push(new Vector([x, y], 0));
        }
    }
}

function draw_vector_space(c) {
    vector_space.forEach(vector => {
        vector.draw(c)        
    });
}