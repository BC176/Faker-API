const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const user = () => {
    const newUser = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

const company = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return newCompany;
}

app.get("/api/user/new", (req, res) => {
    const person = user();
    console.log(person);
    res.json(person);
})

app.get("/api/company/new", (req, res) => {
    const companyDetails = company();
    res.json(companyDetails);
})

app.get("/api/company/user/new", (req, res) => {
    const newUserAndCompany = {
        User: user(),
        Company: company(),
    }
    res.json(newUserAndCompany);
})

app.listen(port, () => {
})