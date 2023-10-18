"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Flight Controller:

const Flight = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "List Flights"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const data = await res.getModelList(Flight, {}, "passengers");

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Flight),
      data,
    });
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Create Flight"
        */

    const data = await Flight.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Get Single Flight"
        */

    const data = await Flight.findOne({ _id: req.params.id }).populate(
      "passengers"
    );

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Update Flight"
        */

    const data = await Flight.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Flight.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Delete Flight"
        */

    const data = await Flight.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },

  // Add passengers to Flight.passengers:
  pushPassengers: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Add Passengers to Flight"
        */

    const passengers = req.body?.passengers; // ObjectId or [ ObjectIds ]

    // const data = await Flight.findOne({ _id: req.params.id })
    // data.passengers.push(passengers)
    // await data.save()
    const data = await Flight.updateOne(
      { _id: req.params.id },
      { $push: { passengers: passengers } }
    );
    const newData = await Flight.findOne({ _id: req.params.id }).populate(
      "passengers"
    );

    res.status(202).send({
      error: false,
      data,
      passengersCount: newData.passengers.length,
      new: newData,
    });
  },

  // Remove passengers from Flight.passengers:
  pullPassengers: async (req, res) => {
    /*
            #swagger.tags = ["Flights"]
            #swagger.summary = "Remove Passengers from Flight"
        */

    const passengers = req.body?.passengers; // ObjectId

    // const data = await Flight.findOne({ _id: req.params.id })
    // data.passengers.pull(passengers)
    // await data.save()
    const data = await Flight.updateOne(
      { _id: req.params.id },
      { $pull: { passengers: passengers } }
    );
    const newData = await Flight.findOne({ _id: req.params.id }).populate(
      "passengers"
    );

    res.status(202).send({
      error: false,
      data,
      passengersCount: newData.passengers.length,
      new: newData,
    });
  },
};
