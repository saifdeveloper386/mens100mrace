const express =require("express");
const router =new express.Router();
const MensRanking =require("../models/mens")
router.post('/mens', async(req, res) => {
    try {
        const addingMensRecord = new MensRanking(req.body)
        console.log(req.body)
        const insertData =await addingMensRecord.save();
        res.status(201).send(insertData);
    } catch (error) {
        res.status(400).send(error);
    }
})
router.get('/mens', async(req, res) => {
    try {
        const getMens=await MensRanking.find().sort({"name":1})

        res.status(201).send(getMens);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/mens/:id', async(req, res) => {
    try {
        const _id=req.params.id;
        const getOneMen=await MensRanking.findById({_id})

        res.status(201).send(getOneMen);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch('/mens/:id', async(req, res) => {
    try {
        const _id=req.params.id;
        const updateMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })

        res.status(201).send(updateMen);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/mens/:id', async(req, res) => {
    try {

        const deleteMen=await MensRanking.findByIdAndDelete(req.params.id)
        res.status(201).send(deleteMen);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports= router