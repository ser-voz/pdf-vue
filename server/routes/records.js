import Router from 'express';
import Record from '../models/Record.js'

const router = new Router();

router.get('/', async (req, res) => {
    res.json(await Record.find());
});

router.post('/', async (req, res) => {
    const record = new Record(req.body);
    await record.save();
    res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
    res.json(await Record.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
    await Record.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Record.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

export default router;
