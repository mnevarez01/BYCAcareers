const router = require("express").Router();
const testRoutes = require("./testimonies");
// const emailRoute = require('./email')

// Book routes
router.use("/testimonies", testRoutes);
// router.use('/contact', emailRoute)

module.exports = router;
