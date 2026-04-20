const prisma = require('../../config/prisma');

exports.getCourses = async (user) => {
    if (user.role === 'COURSE_ADMIN') {
        return await prisma.course.findMany();
    }
    // Students only see their enrollments
    return await prisma.course.findMany({
        where: {
            enrollments: {
                some: { userId: user.id }
            }
        }
    });
};

exports.getCourseBySlug = async (slug, user) => {
    // If Admin, they can see any course
    if (user.role === 'COURSE_ADMIN') {
        return await prisma.course.findUnique({ where: { slug } });
    }

    // If Student, check if they are enrolled in this specific course
    const course = await prisma.course.findFirst({
        where: {
            slug,
            enrollments: {
                some: { userId: user.id }
            }
        }
    });

    return course;
};

exports.createCourse = async (courseData) => {
    return await prisma.course.create({ data: courseData });
};

exports.enrollStudent = async (userId, courseId) => {
    return await prisma.enrollment.create({
        data: { userId, courseId }
    });
};
