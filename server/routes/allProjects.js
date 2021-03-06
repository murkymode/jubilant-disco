/* look into breaking these routes out to smaller files */
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
    const {
      projectID, columnID, title, info,
    } = req.body;

    const project = await Project.updateOne(
      { _id: projectID, 'columns._id': columnID },
      {
        $push: {
          'columns.$.tasks': { title, info },
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

/* remove task */
router.delete('/removeTask', async (req, res) => {
  try {
    const {
      projectID, taskID, columnID,
    } = req.body;

    const update = await Project.updateOne(
      { _id: projectID, 'columns._id': columnID },
      {
        $pull: {
          'columns.$.tasks': {
            _id: taskID,
          },
        },
      },
    );

    res.status(200).json(update);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

module.exports = router;
