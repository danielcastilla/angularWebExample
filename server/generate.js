var faker = require('faker');

var database = { applications: []};

for (var i = 1; i<= 300; i++) {
  database.applications.push({
    id: i,
    name: faker.lorem.word(),
    description: faker.lorem.text(),
    owner: faker.name.firstName(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    mail: faker.internet.email()
  });
}

console.log(JSON.stringify(database));
