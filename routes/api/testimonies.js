const router = require("express").Router();
const testController = require("../../controllers/testimony");

// Matches with "/api/books"
router.route("/")
  .get(testController.findAll)
  .post(testController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(testController.findById)
  .put(testController.update)
  .delete(testController.remove);

module.exports = router;
