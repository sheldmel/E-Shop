import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('Test123', 10),
        isAdmin: true
    },
    {
        name: 'Jon Thomas',
        email: 'jon@email.com',
        password: bcrypt.hashSync('Test123', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('Test123', 10),
    }
]

export default users