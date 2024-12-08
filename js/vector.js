const vector_space = [];
const vector_display_r = 10;

class Vector {
    constructor(position, rotation) {
        this.position = position;
        this.rotation = rotation;
    }

    draw(c) {
        // purple means moving down and yellow means moving up
        const color = `hsla(${this.rotation * 100}, 30%, 30%, 80%)`;

        c.beginPath();
        c.strokeStyle = color;
        c.moveTo(...this.position);
        c.lineTo(Math.cos(this.rotation) * vector_display_r + this.position[0],
                 -Math.sin(this.rotation) * vector_display_r + this.position[1]);
        c.stroke();
        c.closePath();

        c.beginPath();
        c.fillStyle = color;
        c.arc(...this.position, 1, 0, Math.PI * 2, false);
        c.fill();  
        c.closePath();
    }
}

function init_vector_space(row_count, col_count, width, height) {
    for (let i = 0; i < col_count; i++) {
        const x = lerp(0 , width, i / (col_count - 1)); // the x position of the vector

        for (let j = 0; j < row_count; j++) {
            const y = lerp(0, height, j / (row_count - 1)); // the y position of the vector

            vector_space.push(new Vector([x, y], 0));
        }
    }
}

function draw_vector_space(c) {
    vector_space.forEach(vector => {
        vector.draw(c)        
    });
}