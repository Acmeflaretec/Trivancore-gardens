const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { getVideos, addVideo, updateVideo, deleteVideo, getVideoById,getClientSideVideos } = require('../controllers/videoController');
const { upload } = require('../middlewares/multer');

router.get('/', getVideos);
router.get('/clientFetching', getClientSideVideos);
router.get('/:id', getVideoById);
router.post('/', upload.single('image'), addVideo);
router.patch('/', upload.single('image'), updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router;
