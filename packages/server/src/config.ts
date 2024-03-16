import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../../../.env") });

const isDev = process.env.NODE_ENV !== "production";

export const config = {
  DATABASE_CONNECTION_STRING: process.env.DATABASE_PRIVATE_URL,
  PORT: isDev ? 8080 : parseInt(process.env.PORT!, 10),
};
