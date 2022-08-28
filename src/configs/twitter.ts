import { TwitterApi } from 'twitter-api-v2';
import { TWITTER_ACCESS_TOKEN_SECRET, TWITTER_APP_TOKEN, TWITTER_BEARER_TOKEN } from './index';

// const twitter = new TwitterApi({ appKey: TWITTER_APP_TOKEN, appSecret: TWITTER_ACCESS_TOKEN_SECRET });
const twitter = new TwitterApi(TWITTER_BEARER_TOKEN);
export const twitterClient = twitter.readWrite;