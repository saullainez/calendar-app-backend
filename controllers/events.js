const { response } = require('express');

const getEvents = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'GetEvents'
    });

}

const createEvent = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'CreateEvent'
    });

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