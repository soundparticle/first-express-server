module.exports = (req, res, next, value, name) => {
    res[name] = value;
    next();
};