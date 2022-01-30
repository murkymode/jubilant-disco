const express = require('express');
const Project = require('../../database/models/project');

const router = express.Router();

/* get projects */
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

/* get current project */
router.get('/current', async (req, res) => {
  try {
    const { id } = req.query;
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

/* new project */
router.post('/', async (req, res) => {
  try {
    const { title, info } = req.body;
    const project = new Project({
      title,
      info,
    });
    const write = await project.save();
    res.status(200).send(write);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

/* new column */
router.post('/addColumn', async (req, res) => {
  try {
    const { title } = req.body;
    const project = await Project.findById(req.body.id);
    project.columns.push({ title });
    const update = await project.save();
    res.status(200).json(update);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

/* new Task */
router.post('/addTask', async (req, res) => {
  try {
    const { id, columnID, title } = req.body;
    const project = await Project.updateOne(
      { _id: id, 'columns._id': columnID },
      {
        $push: {
          'columns.$.tasks': { title },
        },
      },
    );
    res.status(200).json(project);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

/* remove project */
router.delete('/', async (req, res) => {
  try {
    const project = await Project.findById(req.body.id);
    const removed = await project.remove();
    res.status(200).json(removed);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

module.exports = router;
