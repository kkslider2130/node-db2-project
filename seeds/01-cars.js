exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "YV1622FS1C2092392\n",
          make: "Ford",
          model: "F150",
          mileage: 50000,
          "transmition-type": "manual",
          status: null,
        },
        {
          id: 2,
          VIN: "1G1JC1241W7328439",
          make: "Toyota",
          model: "Camry",
          mileage: 40000,
          "transmition-type": "automatic",
          status: null,
        },
        {
          id: 3,
          VIN: "5XYKUCA67CG301512",
          make: "Tesla",
          model: "3",
          mileage: 1000,
          "transmition-type": "automatic",
          status: "used",
        },
        {
          id: 4,
          VIN: "3N1AB6AP7BL729215",
          make: "Tesla",
          model: "cyber truck",
          mileage: 0,
          "transmition-type": "automatic",
          status: "new",
        },
        {
          id: 5,
          VIN: "2G1JC5241W73Y8439",
          make: "BMW",
          model: "E30",
          mileage: 10000,
          "transmition-type": "manual",
          status: null,
        },
      ]);
    });
};
