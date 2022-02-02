
import { config } from "../../config";
import type { IncomingMessage, ServerResponse } from 'http';
import * as url from "url";
export default async (req: IncomingMessage, res: ServerResponse) => {
    
let APP_URL = config.APP_URL;
    const queryObject = url.parse(req.url as string, true).query;
    // let data = { data: [{ data: "" }] }
    const { lang } = queryObject;
    const { search } = queryObject;
    let data = await $fetch(`${APP_URL}/api/all_books?lang=${lang}&search=${search}`)
    console.log(lang);
    
    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(data));
    res.end();
};