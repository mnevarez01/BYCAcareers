const router = require("express").Router();
const testRoutes = require("./testimonies");

// Book routes
router.use("/testimonies", testRoutes);

module.exports = router;
