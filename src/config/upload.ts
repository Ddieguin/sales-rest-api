import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadDirectory = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    directory: uploadDirectory,
    storage: multer.diskStorage({
        destination: uploadDirectory,
        filename(req, file, cb) {
            const fileHash = crypto.randomBytes(10).toString('hex');

            const fileName = `${fileHash}-${file.originalname}`;

            cb(null, fileName);
        },
    }),
};
