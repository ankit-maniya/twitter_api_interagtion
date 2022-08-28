// import { twitterClient } from "./configs/twitter";

// const getData = async () => {
//     try {
//         // const homeTimeline = await twitterClient.v2.get('tweets/search/recent', { query: 'nodeJS', max_results: 10 });
//         const homeTimeline = await twitterClient.v1.trendsByPlace(23424848);
//         console.log(JSON.stringify(homeTimeline))
//     } catch (error) {
//         console.log('error :: ', error)
        
//     }
// }



getData();