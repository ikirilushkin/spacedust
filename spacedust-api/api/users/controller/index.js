const postUser = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };
    console.log(userData);
    return res.json({ message: "user created" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postUser
};
