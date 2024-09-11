import { db } from "../db.js";

export const Download = (req, res) => {

    const q = "SELECT * FROM palettes"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data)
    });
   
};