const { Comments } = require('../models');

const commentsdata = [
  {
    comment1: 'Nesting as key feature',
    comment2: 'Hierarchy and descent',
    comment3: 'Recursion with variation',
    comment4: 'First designed in 1890 by Sergey Malyutin in Russia, the model of nested dolls now promoted as design principle across several logistics-related fields, starting with computational systems and software design and extending to business, finance, and architecture. ',
    comment5: 'Resilience as valued effect',
    image_id: 1,
  },
  {
    comment1: 'As the base for stacking, lifting and loading goods, the pallet enabled the handling and storage of goods to be standardized and calculated as a generic unit load',
    comment2: 'While most pallets are wooden, they can also be made from plastic, metal, paper and recycled materials.',
    comment3: 'The containerization of shipping helped promote the use of pallets which stack and move efficiently in and out of the smooth level surfaces of containers',
    comment4: 'Beyond the logistics of transport, pallets have enabled all kinds of creative repurposing - check out these examples:...',
    comment5: 'Modularity - part of a set of standardized devices that work together for shipping - including the container, forklift, etc. The development of the forklift and the needs of World War II logistics operations help spur the use of pallets',
    image_id: 2,
  },
  {
    comment1: 'Invented in 1994 by the Japanese automotive company Denso Wave to help track manufacturing parts, the Quick Response Code or QR code is a machine-readable optical label that stores data in four standardized forms - numeric, alphanumeric, byte/binary, and kanji.',
    comment2: 'Error zone',
    comment3: 'Black squares',
    comment4: 'Common applications',
    comment5: '',
    image_id: 3,
  },
  {
    comment1: 'The companion of barcode systems enabling tracking of all sorts - product, inventory, transport, price, labor productivity',
    comment2: 'Corrective beeping - monitoring labor - soundscape of distribution centers',
    comment3: 'Repurposed by dj as music',
    comment4: 'Ubiquitious pandemic interface in service industry',
    comment5: 'Enabling the movement of robots in Amazon distribution centers',
    image_id: 4,
  },
  {
    comment1: 'Wherever there is a transfer of flows across different landscapes and media, you will find ports enabling the logical work of docking, loading and unloading.',
    comment2: 'Seaport for container ships',
    comment3: 'Ports on a computer motherboard',
    comment4: 'Ports off a personal laptop',
    comment5: 'Ports powering internet connectivity at data centers',
    image_id: 5,
  },

];

const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;
