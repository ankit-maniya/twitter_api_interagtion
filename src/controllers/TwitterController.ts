import { NextFunction, Request, Response } from "express"
import { successRes } from "../helpers";
import { twitterClient } from "../services/Twitter";

export const getTweets = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const homeTimeline = await twitterClient.v2.get('tweets/search/recent', { query: 'nodeJS', max_results: 10 });
        // const currentTrends = await twitterClient.v1.trendsByPlace(23424848);
        const homeTimeline = await twitterClient.v2.search('#cricket', { "tweet.fields": ['context_annotations', 'entities'] }); // Fetch most trending hashtags based on topics
        // const homeTimeline = await twitterClient.v2.singleTweet('1563952421818499073', { "tweet.fields": ['context_annotations', 'entities'] }); // Fetch tweets based on hashtags
        const convertedData = successRes(homeTimeline)
    
        res.json(convertedData)
    } catch (error) {
        res.json(error)
    }
}