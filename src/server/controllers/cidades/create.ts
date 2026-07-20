import type { Request, Response } from "express"

export const create = (req: Request, res: Response) => {

    const data:string = req.body;

    console.log(data);
    
    return res.send('deu bom')

}