// apply cors middlware --- cors stands for "Cross Origin Resource Sharing"
const whitelist = [
  'https://www.yoursite.com',
  'https://yoursite.com',
  'http://127.0.0.1:5500',
  'https://localhost:3000',
  'https://localhost:1300',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Now allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
