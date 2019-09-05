const User = require("./../resources/user/user.model");
const jwt = require("jsonwebtoken");
const config = require("./../config/index");

const checkEmail = email => {
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+.[A-Z]{2,}$/gim;
  return regExp.test(email);
};
const checkPass = pass => {
  return pass.match(/^[a-z0-9_-]{3,16}$/gim);
};
const checkUsername = username => {
  return username.match(/^[A-z0-9_-\s]{3,26}$/gim);
};

const newToken = user => {
  return jwt.sign({ id: user._id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};

const register = async (req, res) => {
  console.log(req.body);
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(401).json({ message: "Unesite sifru i email" });
  }

  if (!checkEmail(email)) {
    return res.status(401).json({ message: "Unesite odgovarajuci email" });
  } else if (!checkPass(password)) {
    return res.status(401).json({ message: "Unesite odgovarajucu sifru" });
  } else if (!checkUsername(username)) {
    return res.status(401).json({ message: "Unesite odgovarajuci username" });
  }

  try {
    console.log("user");
    var user = await User.create({ email, password, username });
    console.log(user);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }

  const token = newToken(user);

  res.status(200).json({
    message: "User registered",
    payload: {
      user: {
        username: user.username
        // friends
      },
      userId: user._id,
      token: token
    }
  });

  // isLoggedIn: false,
  // user: {
  //   userID: null,
  //   username: null,
  //   friends: []
  // },
  // token: null
};

module.exports = { register };
