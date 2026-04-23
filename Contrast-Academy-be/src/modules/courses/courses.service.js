const prisma = require('../../config/prisma');

exports.getCourses = async () => {
    return await prisma.course.findMany({
        orderBy: { createdAt: 'desc' }
    });
};

exports.getCourseBySlug = async (slug) => {
    return await prisma.course.findUnique({
        where: { slug }
    });
};