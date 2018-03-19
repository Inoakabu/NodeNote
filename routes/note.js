var express = require('express');
var router = express.Router();

var model_controller = require('../mongo/controllers/modelController');

// Note Homepage
router.get('/',model_controller.index);
// Note create get
router.get('/create', model_controller.model_create_get);
// note create post
router.get('/create', model_controller.model_create_post);
// note delete by ID get
router.get('/:id/delete', model_controller.model_delete_get);
// note delete by ID post
router.get('/:id/delete', model_controller.model_delete_post);
// note update by ID get
router.get('/:id/update', model_controller.model_update_get);
// note update by ID post
router.get('/:id/post', model_controller.model_update_post);
// note show detail by ID
router.get('/:id', model_controller.model_detail);
// note show all
router.get('/notes', model_controller.model_list);

module.exports = router;