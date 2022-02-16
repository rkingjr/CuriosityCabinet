const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const multer = require('multer');


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set storage engine- where to store images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images')
  },
  filename: (req, file, cb) => {
    // naming convention
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
})

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 3000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
});

// checks the filetyp of the image we are uploading
function checkFileType(file, cb){
  
  const filetypes = /jpeg|jpg|png/
  const extname = filtypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true)
  } else {
    console.log('Images only!')
    cb(new Error('Error: Images only'), false)
  }
}

// app.post('/upload', upload.single('myImage'), async (req,res) => {
//   try {
//     const newFile = await Image.create({
//       name:req.file.path,
//     });
//     res.status(200).json({
//       status: 'success',
//       message: 'File created successfully'
//     })
//   } catch (error) {
//     res.json({error,})
//   }
// })

app.post('/upload', upload.single('myImage'), async (req,res) => {
  try {
    const newFile = await Image.create({
      file_path:req.file.path,
    });
    res.status(200).json({
      status: 'success',
      message: 'File created successfully'
    })
  } catch (error) {
    res.json({error,})
  }
})

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
