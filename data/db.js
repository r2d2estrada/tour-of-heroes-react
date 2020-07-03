const fs = require("fs");
const path = require("path");

function createDb() {
  console.info(
    "Checking if DB exists",
    fs.existsSync(path.join(__dirname, "./db.json"))
  );

  if (!fs.existsSync(path.join(__dirname, "./db.json"))) {
    console.info("Creating DEV Database");
    const data = {
      heroes: [
        {
          id: 11,
          name: "Dr. Nice",
        },
        {
          id: 12,
          name: "Narco",
        },
        {
          id: 13,
          name: "Mr. Bombastic",
        },
        {
          id: 14,
          name: "Celeritas",
        },
        {
          id: 15,
          name: "Magneta",
        },
        {
          id: 16,
          name: "Rubber Man",
        },
        {
          id: 17,
          name: "Dynama",
        },
        {
          id: 18,
          name: "Dr. IQ",
        },
        {
          id: 19,
          name: "Magma",
        },
        {
          id: 20,
          name: "Tornado",
        },
      ],
    };
    fs.writeFileSync(path.join(__dirname, "./db.json"), JSON.stringify(data));
    console.info("Created database success!");
  } else {
  }
}

module.exports = createDb();
