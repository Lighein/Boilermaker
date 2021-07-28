const router = require('express').Router();
const {Project} = require('../db/index')

router.get('/login', async (req, res, next) => {
  try {
    res.send("login successful"); 
  } catch (err) {
    next(err)
}})
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await Project.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
})

router.post("/signup", async (req, res, next)=>{
try{
const user = await Project.create(req.body);
const token= await user.generateToken();
res.send(token);
} catch(e){
next(e);
}
})
module.exports = router;
