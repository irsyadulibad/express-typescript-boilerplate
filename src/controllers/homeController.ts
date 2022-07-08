import { Request, Response } from "express";

class HomeController {
    index(_: Request, res: Response): void {
        res.render('index');
    }
}

export default new HomeController;
