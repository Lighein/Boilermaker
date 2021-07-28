const { green, red } = require("chalk");
const { Project, db } = require("./server/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const seed = async () => {
  try {
    await db.sync({ force: true });
    await Project.create({ name: "Taya", password: "1234567" });
    await Project.create({ name: "Albina", password: "qwerty" });
    await Project.create({ name: "NotJason", password: "NOTpassword" });
  } catch (e) {
    console.log(e);
  }
};

Project.prototype.generateToken = async function () {
    try {
      const token = await jwt.sign({ id: this.id }, process.env.JWT);
      return { token };
    } catch (err) {
      console.error(err);
    }
  };


Project.byToken = async function (token) {
    try {
      const payload = await jwt.verify(token, process.env.JWT);
      if (payload) {
        //find Project by payload which contains the Project id
        const project = await Project.findByPk(payload.id);
        return project;
      }
    } catch (ex) {
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    }
  };
  
  Project.authenticate = async ({ name, password }) => {
    const project = await Project.findOne({
      where: {
        name,
      },
    });
    const match = await bcrypt.compare(password, Project.password);
    if (match) {
      return project;
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  };
  
  Project.addHook('beforeCreate', async(project)=> {
    if(project.changed('password')){
      project.password = await bcrypt.hash(project.password, 3);
    }
  });

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Successful seeded!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
