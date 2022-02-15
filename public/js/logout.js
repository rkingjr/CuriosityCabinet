const multer = require('multer');

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);

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