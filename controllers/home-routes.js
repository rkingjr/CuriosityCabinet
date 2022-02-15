const router = require('express').Router();
const { User, Image, Comments } = require('../models');
// Import the custom middleware - this will be just for the api routes
// const withAuth = require('../utils/auth');

// GET all artifacts for homepage
router.get('/', async (req, res) => {
  try {
    const dbImageData = await Image.findAll({
      include: [
        {
          model: User,
          attributes: [
            'id',
            'name', 
            'title', 
            'affiliation'],
        },
      ],
    });

    const images = dbImageData.map((image) =>
      image.get({ plain: true })
    );

    res.render('homepage', { images });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one image with annotated comments
router.get('/comments/:id', async (req, res) => {
  try {
    const dbCommentsData = await Comments.findByPk(req.params.id, {
      include: [
        {
          model: Image,
          attributes: [
            'title',
            'photographer',
            'image_date',
            'filename',
            'description',
            'user_id'
          ],
        },
      ],
    });

    const comments = dbCommentsData.get({ plain: true });
    res.render('comments', { comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
