export const errorHandler = (err, req, res, next) => {
  // Suppress static file ENOENT errors — not real API errors
  if (err.code === 'ENOENT') {
    return res.status(404).json({ success: false, message: 'Resource not found' });
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Only log genuine server / API errors
  if (statusCode >= 500) {
    console.error(`[SERVER ERROR]: ${err.message}`, err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
