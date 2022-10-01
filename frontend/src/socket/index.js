import { io } from 'socket.io-client';

const socketInit = () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    return io(process.env.SOCKET_SERVER_URL || 'http://localhost:5500', options);
};

export default socketInit;
