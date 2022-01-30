import posts from "../../data/posts.json";
import { IncomingMessage, ServerResponse } from 'http';
export default (req: IncomingMessage, res: ServerResponse) => {
    const { pathname } = new URL(req.url!, `http://${req.headers.host}`)
    const id = pathname.split('/')[1];
    if (!id) {
        return { posts }
    }
    else {
        return posts.find(post => post.id = parseInt(id));
        
    }
};