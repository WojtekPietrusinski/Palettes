import { db } from "../db.js";

export const addPallet = (req, res) => {

    const q = "INSERT INTO palettes(`Report name`, `Area name`, `Report type`, `Report ID`, `Report date`, `Report duration`, `Report quantity`) VALUES(?)"

    const values = [
        req.body.name,
        req.body.place,
        req.body.type,
        req.body.id,
        req.body.date,
        req.body.time,
        req.body.quantity
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Pallet has been created")
    });
};
