const Pool = require('pg').Pool;
require('dotenv').config();

// const devConfig = {
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // host: process.env.DB_HOST,
    // database: process.env.DB_NAME,
    // port: process.env.DB_PORT,
// };

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const proConfig = `postgresql://postgres:CL5mhyl8kmYz451Pu6vS@containers-us-west-143.railway.app:7608/railway`;

// const proConfig = process.env.DATABASE_URL //heroku addons

// postgresql://postgres:CL5mhyl8kmYz451Pu6vS@containers-us-west-143.railway.app:7608/railway

const pool = new Pool({
	
    connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,	
    
});

module.exports = pool;