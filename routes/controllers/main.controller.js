const mainService = require('../../services/main.service');

exports.getAllVotings = async (req, res, next) => {
  try {
    const allVotingsData = await mainService.getAllVotings();
    req.votingsData = allVotingsData;
    next();
  } catch (error) {
    next(error);
  }
};

exports.renderIndex = (req, res, next) => {
  const votingsData = req.votingsData;
  res.render('index', { votingsData });
};
