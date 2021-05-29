const random = require("random");

const current = new Date();
const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

exports.getData = (req, res, next) => {
  const result = {
    timestamp: time,
    x: random.int(0, 100),
    y: random.int(0, 100),
  };

  res.status(200).json(result);
  next();
};
