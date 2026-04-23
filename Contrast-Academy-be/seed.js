const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  const courses = [
    {
      slug: 'html',
      title: 'HTML Mastery Course',
      description: 'Master the backbone of the web with our multi-level curriculum.',
    },
    {
      slug: 'css',
      title: 'CSS (Styling + Layout Mastery)',
      description: 'Learn to style, layout, and animate beautiful responsive websites.',
    },
    {
      slug: 'javascript',
      title: 'JavaScript (Frontend + Core)',
      description: 'Become a pro at logic, DOM manipulation, and building interactive apps.',
    },
    {
      slug: 'angular',
      title: 'Angular Framework',
      description: 'Build scalable, enterprise-grade web apps with Angular.',
    },
  ];

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: {},
      create: course,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
