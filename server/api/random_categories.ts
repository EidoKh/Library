import type { IncomingMessage, ServerResponse } from 'http';
import * as url from "url";
export default async (req: IncomingMessage, res: ServerResponse) => {
    const queryObject = url.parse(req.url as string, true).query;
    // let data = { data: [{ data: "" }] }
    const { search } = queryObject;
    let data = await $fetch(`http://127.0.0.1:8000/api/random-categories`)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(data));
    res.end();
};