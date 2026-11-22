import dotenv from "dotenv"
import path from "path"
import { deflate } from "zlib"

dotenv.config(
    {
        path: path.join(process.cwd(), ".env")
    }
)

const config = {
    port: process.env.PORT,
    db: process.env.DATABASE_URI
}

export default config;