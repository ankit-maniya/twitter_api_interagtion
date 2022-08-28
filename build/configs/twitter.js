"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterClient = void 0;
const twitter_api_v2_1 = require("twitter-api-v2");
const index_1 = require("./index");
// const twitter = new TwitterApi({ appKey: TWITTER_APP_TOKEN, appSecret: TWITTER_ACCESS_TOKEN_SECRET });
const twitter = new twitter_api_v2_1.TwitterApi(index_1.TWITTER_BEARER_TOKEN);
exports.twitterClient = twitter.readWrite;
