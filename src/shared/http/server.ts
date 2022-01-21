import createConnection from '../typeorm/index';
import app from './config/app';

createConnection().then(() => {
    app.listen(process.env.PORT || 3333, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
});
