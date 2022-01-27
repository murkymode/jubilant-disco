const express = require('express');
const Project = require('../../database/models/project');

const router = express.Router();

/* get projects */
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

/* get current project */
router.get('/current', async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    res.json(project);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

/* new project */
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

/* new column */
router.post('/addColumn', async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    const { title } = req.body;
    project.columns.push({ title });
    const update = await project.save();
    res.json(update);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

/* remove project */
router.delete('/', async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    const removed = await project.remove();
    res.json(removed);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

module.exports = router;
