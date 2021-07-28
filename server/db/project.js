const Sequelize = require("sequelize");
const db = require("./database");

const Project = db.define("project", {
  name: { type: Sequelize.STRING, defaultValue: "Jason" },
  password: {type: Sequelize.STRING},
});

module.exports = Project;
