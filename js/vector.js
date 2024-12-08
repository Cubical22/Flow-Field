const vector_space = [];

class Vector {
    constructor(position, rotation) {
        this.position = position;
        this.rotation = rotation;
    }
}

function init_vector_space(row_count, col_count, width, height) {
    const lerp_width = width - 40; // 20px space on each side
    const lerp_height = height - 40; // same here

    for (let i = 0; i < col_count; i++) {
        const x = lerp(0 , lerp_width, i / col_count) + 20; // the x position of the vector

        for (let j = 0; j < row_count; j++) {
            const y = lerp(0, lerp_height, j / row_count) + 20; // the y position of the vector

            vector_space.push(new Vector([x, y], 0));
        }
    }
}