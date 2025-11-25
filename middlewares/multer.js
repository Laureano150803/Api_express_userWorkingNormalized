import multer from "multer";


const Multer = multer({
    storage:multer.memoryStorage(),
    limits:10240 *10240
})
export default Multer