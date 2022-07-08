import cors, { CorsOptions } from 'cors';

const options: CorsOptions = {
    origin: '*',
    // origin: ['localhost:8080']
};

export default cors(options);
