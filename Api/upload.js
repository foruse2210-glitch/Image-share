module.exports = async (req, res) => {
  // Only allow POST requests for file/data uploads
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Process your request body/upload payload here
    const data = req.body;

    return res.status(200).json({
      message: 'Upload successful!',
      receivedData: data,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
