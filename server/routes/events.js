import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('attendees');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create an event
router.post('/', async (req, res) => {
  const { name, date, location, description } = req.body;
  const newEvent = new Event({ name, date, location, description });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
