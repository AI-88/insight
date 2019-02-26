module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'Access denied! Please log in first!' });
  }
  next();
};
