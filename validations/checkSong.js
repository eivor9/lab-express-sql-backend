// validations/checkBookmarks.js
const checkName = (req, res, next) => {
  const { name, artist } = req.body;
    if (name && artist) {
      return next();
    } else {
      res.status(400).json({ error: "Name and Artist properties are required" });
    }
};

const checkBoolean = (req, res, next) => {
  let { is_favorite } = req.body;
  if (!is_favorite) is_favorite = false;
  if (typeof is_favorite === "boolean") {
    return next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};
  
module.exports = { checkBoolean, checkName };