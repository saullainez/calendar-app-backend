const { response } = require('express');
const Event = require('../models/Event');

const getEvents = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'GetEvents'
    });

}

const createEvent = async (req, res = response) => {

    const event = new Event( req.body );

    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.status(201).json({
            ok: true,
            event: savedEvent
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ocurrió un error, hable con el administrador.'
        })
    }

}

const updateEvent = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'UpdateEvent'
    });

}

const deleteEvent = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'deleteEvent'
    });

}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}