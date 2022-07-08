import { Request, Response, Router } from "express";

const routes: Router = Router();

// All routes here
routes.get('/', (_: Request, res: Response) => {
    res.json({
        status: 'ok',
        message: 'Hello World'
    });
    
    res.end();
});

export { routes };
