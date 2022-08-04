import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config()

const config = {};
config.port = process.env.SERVER_PORT
config.isHTTPs = true;

export default config;