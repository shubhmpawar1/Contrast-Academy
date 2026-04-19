const prisma = require('../../config/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async ({ name, email, password }) => {
    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) throw new Error('User exists');

    const hashed = await bcrypt.hash(password, 10);

    return await prisma.user.create({
        data: { name, email, password: hashed }
    });
};

exports.login = async ({ email, password }) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new Error('Invalid password');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return { 
        token, 
        user: { 
            name: user.name, 
            email: user.email 
        } 
    };
};