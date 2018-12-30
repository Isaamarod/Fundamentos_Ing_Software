module.exports = function () {
    "use strict";
     
    var faker = require("faker"),
        _ = require("lodash");
         
    return {
        users: _.times(50, function (n) {
            return {
                id: n,
                address: faker.address.streetAddress(),
                avatar: faker.internet.avatar(),
                color: faker.internet.color(),
                description: faker.hacker.phrase(),
                email: faker.internet.email(),
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                title: faker.name.title()
            }
        })
    }
};