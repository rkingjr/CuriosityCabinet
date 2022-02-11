const { Comments } = require('../models');

const commentsdata = [
  {
    comment1: 'Blossoming Apricot',
    comment2: 'LedyX',
    comment3: 'March 30, 2018',
    comment4: 'LedyX',
    comment5: 'March 30, 2018',
    image_id: 1,
  },
  {
    comment1: 'Blossoming Apricot',
    comment2: 'LedyX',
    comment3: 'March 30, 2018',
    comment4: 'LedyX',
    comment5: 'March 30, 2018',
    image_id: 2,
  },
  {
    comment1: 'Blossoming Apricot',
    comment2: 'LedyX',
    comment3: 'March 30, 2018',
    comment4: 'LedyX',
    comment5: 'March 30, 2018',
    image_id: 3,
  },
  {
    comment1: 'Blossoming Apricot',
    comment2: 'LedyX',
    comment3: 'March 30, 2018',
    comment4: 'LedyX',
    comment5: 'March 30, 2018',
    image_id: 4,
  },
  {
    comment1: 'Blossoming Apricot',
    comment2: 'LedyX',
    comment3: 'March 30, 2018',
    comment4: 'LedyX',
    comment5: 'March 30, 2018',
    image_id: 5,
  },

];

const seedComments = () => Commments.bulkCreate(commentsdata);

module.exports = seedComments;
