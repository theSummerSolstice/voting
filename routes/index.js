const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');

const loginRouter = require('./login');
const logoutRouter = require('./logout');
const signupRouter = require('./signup');
const votingRouter = require('./votings');
const myVotingRouter = require('./my-votings');

router.get('/',
  mainController.getAllVotings,
  mainController.renderIndex,
);

router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/signup', signupRouter);
router.use('/votings', votingRouter);
router.use('/my-votings', myVotingRouter);

module.exports = router;
