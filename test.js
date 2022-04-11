const databaseEmployee = [
    {
      //siavash: 30 roz sAti 30  => 900  mahane
      name: "alireza",
      family: "mohammadi",
      hourPerMonth: 900,
      salaryPerHour: 30,
    },
    {
      name: "abas",
      family: "rezapor",
      hourPerMonth: 110,
      salaryPerHour: 2,
    },
    {
      name: "akbar",
      family: "akbari",
      hourPerMonth: 150,
      salaryPerHour: 5,
    },
    {
      name: "mamad",
      family: "alizade",
      hourPerMonth: 120,
      salaryPerHour: 3,
    },
  ];

function calculateAvg() {
    let avg = 0;
    let sume=0;
    for (let i = 0; i < databaseEmployee.length; i++) {
        sume=databaseEmployee[i].hourPerMonth*databaseEmployee[i].salaryPerHour;
        avg=sume/databaseEmployee.length;
    }
    return `avrage is: ${avg}`
    
  }
  console.log(calculateAvg());
  