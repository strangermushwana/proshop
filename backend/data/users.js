import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@group12.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
