const express = require('express');
const app = express();
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API is running!!!! 123456' });
});

// Send message API
app.post('/send-message', (req, res) => {
  const { message, to } = req.body;

  if (!message || !to) {
    return res.status(400).json({
      success: false,
      error: 'message and to are required'
    });
  }

  // Sample logic (replace with SMS, Email, WhatsApp, etc.)
  console.log(`Message sent to ${to}: ${message}`);

  res.json({
    success: true,
    message: 'Message sent successfully 1111111111111!!!!!!!!!!!',
    data: { to, message }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
