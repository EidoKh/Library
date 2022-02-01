// import posts from "../../data/posts.json";
// import { IncomingMessage, ServerResponse } from 'http';
// export default async (req: IncomingMessage, res: ServerResponse) => {
//     const { pathname } = new URL(req.url!, `http://${req.headers.host}`)
//     let data = await $fetch(`http://127.0.0.1:8000/api/most-liked`)
//     const id = pathname.split('/')[1];
//     if (!id) {
//         return { data }
//     }
//     else {
//         return posts.find(post => post.id = parseInt(id));
        
//     }
// };

import type { IncomingMessage, ServerResponse } from 'http';
import * as url from "url";
export default async (req: IncomingMessage, res: ServerResponse) => {
    const queryObject = url.parse(req.url as string, true).query;
    // let data = { data: [{ data: "" }] }
    const { search } = queryObject;
    let data = await $fetch(`http://127.0.0.1:8000/api/most-liked`)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(data));
    res.end();
};