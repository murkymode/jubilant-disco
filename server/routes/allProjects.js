const express = require('express');
const Project = require('../../database/models/project');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

router.get('/current', async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    res.json(project);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  const project = new Project({
    title: body.title,
    info: body.info,
  });

  try {
    const write = await project.save();
    res.send(write);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

// router.post('/addTask', async (req, res) => {
//   try {
//     const project = await Project.findById(req.body.id);
//     /* find out what's been changed and assign here. ie. project[target] */
//     const update = await project.save();
//     res.json(update);
//   } catch (err) {
//     res.send(`Error: ${err}`);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     const removed = await project.remove();
//     res.json(removed);
//   } catch (err) {
//     res.send(`Error: ${err}`);
//   }
// });

module.exports = router;
