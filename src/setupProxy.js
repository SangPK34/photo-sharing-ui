const modelsModule = require("./modelData/models.js");
const models = modelsModule.default || modelsModule;

module.exports = function (app) {
  app.get("/test/info", (req, res) => {
    res.json(models.schemaInfo());
  });

  app.get("/user/list", (req, res) => {
    res.json(models.userListModel());
  });

  app.get("/user/:id", (req, res) => {
    const user = models.userModel(req.params.id);
    if (!user) {
      return res.status(400).send("User not found");
    }
    res.json(user);
  });

  app.get("/photosOfUser/:id", (req, res) => {
    const photos = models.photoOfUserModel(req.params.id);
    res.json(photos);
  });
};
