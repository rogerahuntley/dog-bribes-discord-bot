import dotenv from 'dotenv' 
dotenv.config()

const TOKEN = process.env.DISCORD_BOT_TOKEN || '';
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || '';
const CLIENT_ID = process.env.DISCORD_CLIENT_ID || '';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const DB_SITE = process.env.DB_SITE || '';
const DB_EMAIL = process.env.DB_EMAIL || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DEV = process.env.NODE_ENV != 'production'

export { TOKEN, CLIENT_SECRET, CLIENT_ID, OPENAI_API_KEY, DB_SITE, DB_EMAIL, DB_PASSWORD, DEV }
