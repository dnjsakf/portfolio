import express from 'express'

const router = express.Router();

router.get("/session", (req,res)=>{
    res.status(200).json(
        {
            result: "success",
            data: req.session.data
        }
    )
});
router.post("/session", (req, res)=>{
    if( req.body.data ){
        req.session.data = req.body.data;
        res.status(200).json(
            {
                result: "success",
                data: req.session.data
            }
        )
    } else {
        res.status(404).json(
            {
                result: "error",
                data: "Invalid Data",
            }
        )
    }
    
});

export default router