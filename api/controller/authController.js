export const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // get password from db

  // hash password sent by user

  // compare password from db already hashed with password sent by user once hashed

  // if true, send token
  // use bcrypt to generqte new token
  // get salt from environment variable
  // save token in db
  //

  // if false, send error
  res.send("hello authControllerlogin");
};
