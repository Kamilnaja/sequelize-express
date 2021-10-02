const errorHandler = (err, req, res, next) => {
  const error = err.errors
    ? err.errors?.map((item) => ({
        message: item.message,
        type: item.type,
      }))
    : err;
  res.json(error);
  next();
};

module.exports = errorHandler;
