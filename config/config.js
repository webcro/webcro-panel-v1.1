const SERVER_A_IP = process.env.SERVER_A_IP || 'localhost'; // Default to 'localhost' if not set
const SERVER_A_PORT = process.env.SERVER_A_PORT || '3000';  // Default to '4000' if not set
const SERVER_A = `http://${SERVER_A_IP}:${SERVER_A_PORT}`;

const SERVER_B_IP = process.env.SERVER_B_IP || 'localhost'; // Default to 'localhost' if not set
const SERVER_B_PORT = process.env.SERVER_B_PORT || '3000';  // Default to '4000' if not set
const SERVER_B = `http://${SERVER_B_IP}:${SERVER_B_PORT}`;

module.exports = {
    SERVER_A,
    SERVER_B
};
