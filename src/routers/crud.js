export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({
        _id: req.params.id
      })
      .lean()
      .exec();
    if (!doc) {
      return res.status(404).end();
    }
    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const docs = await model.find({});
    return res.status(200).send(docs);
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: "unable to process" });
  }
};

export const createOne = model => async (req, res) => {
  const createdBy = req.body;
  try {
    const doc = await model.create(req.body);
    res.status(201).send(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          _id: req.params.id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec();
    if (!updatedDoc) {
      return res.status(400).end();
    }
    res.status(200).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id
    });
    if (!removed) {
      return res.status(400).end();
    }
    res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
