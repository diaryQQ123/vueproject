const { faker } = require('@faker-js/faker');
const fs = require('fs');

// 生成用户数据
const generateUsers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 60 }),
    address: {
      city: faker.location.city(),
      country: faker.location.country()
    }
  }));
};

// 生成文章数据
const generatePosts = (count, userCount) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    userId: faker.number.int({ min: 1, max: userCount }),
    createdAt: faker.date.past().toISOString()
  }));
};

// 生成数据并保存到文件
const users = generateUsers(10);
const posts = generatePosts(20, users.length);

const db = {
  users,
  posts
};

fs.writeFileSync('./mock//db.json', JSON.stringify(db, null, 2));
console.log('Data generated successfully!');