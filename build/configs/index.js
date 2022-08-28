"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWITTER_BEARER_TOKEN = exports.TWITTER_ACCESS_SECRET = exports.TWITTER_ACCESS_TOKEN_SECRET = exports.TWITTER_APP_SECRET = exports.TWITTER_APP_TOKEN = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.TWITTER_APP_TOKEN = _a.TWITTER_APP_TOKEN, exports.TWITTER_APP_SECRET = _a.TWITTER_APP_SECRET, exports.TWITTER_ACCESS_TOKEN_SECRET = _a.TWITTER_ACCESS_TOKEN_SECRET, exports.TWITTER_ACCESS_SECRET = _a.TWITTER_ACCESS_SECRET, exports.TWITTER_BEARER_TOKEN = _a.TWITTER_BEARER_TOKEN;
