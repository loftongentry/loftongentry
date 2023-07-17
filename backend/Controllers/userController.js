const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc   Register a new user
//@route  POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  try {
    //Check to make sure all inputs are filled
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please add all fields' })
    }

    if(email != process.env.NEXT_PUBLIC_EMAIL){
      return res.status(400).json({message: 'Apologies, No New Users'})
    }

    //Check to make sure that the password and the confirmPassword are equal
    if (password != confirmPassword) {
      return res.status(400).json({ message: 'Passwords Do Not Match' })
    }

    //Tests the email submitted to make sure it's an actual email using a RegEx
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please Enter a Valid Email' })
    }

    //Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: 'User Already Exists' })
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    if (user) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
      })
    } else {
      return res.status(400).json({ message: 'Invalid User Data' })
    }
  } catch (error) {
    console.error('An error has occurred: ', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

//@desc   Authenticate a new user
//@route  POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body

    const emailExists = await User.findOne({ email })

    if (!emailExists) {
      res.status(400).json({ message: 'User Does Not Exist' })
    }

    //Check is user has an account or not
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id)
      })
    } else {
      res.status(400).json({ message: 'Invalid Credentials' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

//@desc   Get user data
//@route  POST /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
  })
})

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}