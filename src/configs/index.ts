import { config } from 'dotenv';

config();

export const {
  TWITTER_APP_TOKEN,
  TWITTER_APP_SECRET,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_ACCESS_SECRET,
  TWITTER_BEARER_TOKEN
} = process.env as {
  [key: string]: string;
};
