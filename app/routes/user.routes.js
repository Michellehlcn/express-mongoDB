const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

// Authorization
// GET /api/test/all
// GET /api/test/user
// GET /api/test/mod
// GET /api/test/admin

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [authJwt.veriffyToken], controller.userBoard);
    app.get("/api/test/mod", 
                    [authJwt.veriffyToken, authJwt.isModerator],
                     controller.moderateBoard);
    app.get("/api/test/admin", [authJwt.veriffyToken, authJwt.isAdmin],
                                controller.adminBoard);
};