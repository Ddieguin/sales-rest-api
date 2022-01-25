import createConnection from '../typeorm/index';
import dotenv from 'dotenv';
dotenv.config();

createConnection()
    .then(async () => {
        const app = (await import('./config/app')).default;
        app.listen(process.env.PORT || 3333, () => {
            console.log(
                `Server running at http://localhost:${
                    process.env.PORT || 3333
                }`,
            );
        });
    })
    .catch(console.error);
