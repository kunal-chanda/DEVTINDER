const adminAuth = (req, res, next) => {
  console.log("Admin Auth called!!!");
  const key = "xyz";
  const userAuthenticated = key === "xyz";
  if (userAuthenticated) {
    console.info("User Authenticated!!");
    next();
  } else {
    res.status(401).send("Unauthorised token!!");
  }
};

module.exports = { adminAuth };
