import { NextFunction, Request, Response } from "express";

import { errorRes, successRes, removeDubFromArray } from "../helpers";
import { twitterClient } from "../services";


/**
  * This All functions are used for fetch data as required
  * @function me
  * @param { Object | Array | String | Number } req
  * @param { Object | Array | String | Number } res
  * @param { } next apply for go to next function 
  * @returns { Object } return the meta for Send Success & Response
*/

export const fetchTweetsbyHashtag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const onlyMinimumDetails = await twitterClient.v2.get('tweets/search/recent?query=%23cricket&tweet.fields=entities', { max_results: 10 });
        // const fetchTweetsbyHashtag = await twitterClient.v1.get('search/tweets.json?q=%23cricket&result_type=recent');
        // const currentTrends = await twitterClient.v1.trendsByPlace(1);
        // const singleProfile = await twitterClient.v2.singleTweet('1563952421818499073', { "tweet.fields": ['context_annotations', 'entities'] }); // Fetch tweets based on hashtags

        const { search_keyword } = req.params;

        if (!search_keyword)
            return res.json(errorRes('Please pass required parameter!'));

        const search_parameter = {
            "tweet.fields": <any>['context_annotations', 'entities'],
            max_results: 10
        }

        const result = await tweeterSearchApi(`${search_keyword}`, search_parameter); // Fetch tweets based on hashtags

        res.json(successRes(result));
    } catch (error) {
        if(error instanceof TypeError) {
            return res.json(errorRes(`${error.message}-${error.name}`));
        }

        res.json(errorRes('Error!', error));
    }
}

export const fetchHashtagsByTopic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { search_keyword } = req.params;
        let allHashTags = <any>[];

        if (!search_keyword)
            return res.json(errorRes('Please pass required parameter!'));

        const result = <any>await tweeterSearchApi(`${search_keyword}`); // Fetch tweets based on hashtags

        const tweetData = result['_realData']['data']; // .(Dot) syntax not working
        tweetData?.forEach((item: any) => {
            if (item.entities && item.entities.hashtags)
                allHashTags.push(...item.entities.hashtags);
        })

        allHashTags = allHashTags?.map((item: any) => item.tag);

        const updatedData = removeDubFromArray(allHashTags);
        res.json(successRes(updatedData));
    } catch (error) {
        if(error instanceof TypeError) {
            return res.json(errorRes(`${error.message}-${error.name}`));
        }

        res.json(errorRes('Error!', error));
    }
}

const tweeterSearchApi = async (keyword: string, options?: any) => {
    try {
        if (!options)
            options = {
                "tweet.fields": <any>['entities']
            }

        const res = await twitterClient.v2.search(`${keyword}`, options);
        return res;
    } catch (error) {
        console.log('error:: ', error);

        throw error;
    }
}
