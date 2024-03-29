const { Project } = require('@models');

const createController = async (req, res) => {
  const { name } = req.body;
  try {
    const project = await Project.create({ name });
    res.status(201).json({
      message: 'Project created successfully',
      createdProject: project,
    });
  } catch(error) {
    res.status(500).json({
      message: 'Project creation failed: ' + error
    });
  }
}

module.exports = createController;