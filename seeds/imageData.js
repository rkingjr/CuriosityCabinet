const { Image } = require('../models');

const imagedata = [
  {
    title: 'Matryoshka Designs',
    // photographer:'', 
    // image_date: '',
    filename: 'maytryosha-web.jpeg',
    // image_date: 
    filename: 'matroyshka-web.jpeg',
    description:
      'A key design model for logistical work',
    user_id: 1,
  },
  {
    title: 'Pallet',
    // photographer: '',
    // image_date: '',
    filename: 'pallet-web.jpeg',
    description:
      'A modular platform for enabling the efficient movement of goods',
    user_id: 1,
  },
  {
    title: 'QR Code',
    // photographer: '',
    // image_date: '',
    filename: 'qrcode-web.jpeg',
    description:
      'An advanced form of the barcode for tracking and processing flows of commerce, information and manufacturing',
    user_id: 2,
  },
  {
    title: 'Scanner',
    // photographer: '',
    // image_date: '',
    filename: 'scanner-web.jpeg',
    description:
      'A key tracking device for coordinating the movement of goods, labor, transport, and information',
    user_id: 2,
  },
  {
    title: 'Ports',
    // photographer: '',
    // image_date: '',
    filename: 'ports.png',
    description:
      'A docking zone for the logistical work of loading and unloading flows',
    user_id: 3,
  },
];

const seedImage = () => Image.bulkCreate(imagedata);

module.exports = seedImage;
