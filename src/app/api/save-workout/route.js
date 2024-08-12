// pages/api/save-workout.js
import prisma from '../../lib/prisma'; // Adjust the import path accordingly

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { workout } = req.body;

      if (!workout) {
        return res.status(400).json({ error: 'Workout data is required.' });
      }

      // Save workout to database
      await prisma.workout.create({
        data: {
          exercises: workout,
          userId: 'some-user-id', // Replace with actual user ID
          date: new Date(),
        },
      });

      res.status(200).json({ message: 'Workout saved successfully!' });
    } catch (error) {
      console.error('Error saving workout:', error);
      res.status(500).json({ error: 'Failed to save workout.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
