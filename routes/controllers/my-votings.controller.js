const myVotingsService = require('../../services/my-votings.service');

exports.getAllMyVotings = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const myVotings = await myVotingsService.getAllMyVotings(userId);
    req.myVotings = myVotings;
    next();
  } catch (error) {
    next(error);
  }
};

exports.renderMyVotings = (req, res, next) => {
  const myVotings = req.myVotings;
  res.render('my-votings', { myVotings });
};
