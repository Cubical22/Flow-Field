const particle_start_from_right = true; // default: true
const clear_each_frame = false; // default: false
const display_vector_space = false; // default: false
const update_rate = false; // default: false
let rate_addition = 0.006;

// width, height, row count, col count (for vector space)
const size_and_count = [1000, 600, 50, 100]; // default: [1000, 600, 50, 100]
const particle_count = 300; // default: 300

const particle_speed_multiplier = 2; // default: 2

// at around 100 to 1000, makes detailed bumps
// makes bigger bumps, over, flatter bumpy lines, below
const noise_devide = 250; // default: 250