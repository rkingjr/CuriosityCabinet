const router = require('express').Router();
const { User, Comments } = require('../../models');

// Import the custom middleware to restrict uploading functions
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Upload image withAuth - use custom middleware before allowing user to add image

// Upload comments withAuth - use custom middleware before allowing user to add comments
router.post('/newcomments', withAuth, async (req, res) => {
  try {
    const commentsData = await Comments.create({
      comments1: req.body.comments1,
      comments2: req.body.comments2,
      comments3: req.body.comments3,
      comments4: req.body.comments4,
      comments5: req.body.comments5,
    });
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update comments withAuth - use custom middleware before allowing user to edit comments
router.put('/updatecomments/:id', withAuth, async (req, res) => {
  try {
    const updateComments = await Comments.update(
      {
        comments1: req.body.comments1,
        comments2: req.body.comments2,
        comments3: req.body.comments3,
        comments4: req.body.comments4,
        comments5: req.body.comments5,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
