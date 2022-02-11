const { Image } = require('../models');

const imagedata = [
  {
    title: 'Blossoming Apricot',
    photographer: 'LedyX',
    image_date: 'March 30, 2018',
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
    user_id: 1,
  },
  {
    title: 'Cosmo Flowers',
    photographer: 'WStudio',
    image_date: 'May 05, 2017',
    filename: '02-cosmos-flowers.jpg',
    description:
      'Pink cosmos flowers against a blue sky.',
    user_id: 1,
  },
  {
    title: 'Sand + Sea = Summer',
    photographer: 'icemanphotos',
    image_date: 'July 4, 2020',
    filename: '04-beach-chairs.jpg',
    description:
      'Two beach chairs under a beach umbrella on the beach.',
    user_id: 2,
  },
  {
    title: 'Beach Sunrise',
    photographer: 'VRstudio',
    image_date: 'August 14, 2016',
    filename: '05-beach-sunrise.jpg',
    description:
      'Sun setting in the horizon with waves lapping the shore.',
    user_id: 2,
  },
  {
    title: 'Fall Colors',
    photographer: 'DrivingJack',
    image_date: 'October 15, 2018',
    filename: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
    user_id: 3,
  },
];

const seedImage = () => Image.bulkCreate(imagedata);

module.exports = seedImage;
