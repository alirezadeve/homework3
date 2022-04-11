const databaseEmployee = [
  {
    //siavash: 30 roz sAti 30  => 900  mahane
    name: "alireza",
    family: "mohammadi",
    hourPerMonth: 1,
    salaryPerHour: 3000,
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
let plus = 0;
function addEmployee(
  nameEmployee,
  familyEmployee,
  hourEmployee,
  salaryEmployee
) {
  let isAvailable = false;
  for (let i = 0; i < databaseEmployee.length; i++) {
    if (
      nameEmployee == databaseEmployee[i].name &&
      nameEmployee == databaseEmployee[i].family
    ) {
      isAvailable = true;
    }
  }
  if (isAvailable) {
    return `${nameEmployee} ${familyEmployee} has been added before`;
  } else if (hourEmployee <= 160) {
    databaseEmployee.push({
      name: nameEmployee,
      family: familyEmployee,
      hourPerMonth: hourEmployee,
      salaryPerHour: salaryEmployee,
    });
    plus++;
  }

  return `${nameEmployee} ${familyEmployee} is added`;
}
let minus = 0;
function remove(nameEmployee, familyEmployee) {
  for (let i = 0; i <= databaseEmployee.length; i++) {
    if (
      nameEmployee == databaseEmployee[i].name ||
      familyEmployee == databaseEmployee[i].family
    ) {
      let nafar = databaseEmployee[i];
      databaseEmployee.splice(i, 1);
      minus++;
      return `this user data removed: ${JSON.stringify(nafar)}`;
    }
  }
}
// console.log(remove("mamad","alizade"));
// console.log(databaseEmployee);

function removeWithRange(min, max) {
  let userRemove = [];
  for (let i = 0; i < databaseEmployee.length; i++) {
    let salary =
      databaseEmployee[i].hourPerMonth * databaseEmployee[i].salaryPerHour;
    if (salary < max && salary > min) {
      userRemove.push(databaseEmployee[i]);
      databaseEmployee.splice(i, 1);
    }
  }
  return userRemove;
}

// console.log(removeWithRange(200,400));

function min() {
  let min = databaseEmployee[0];
  for (let i = 0; i < databaseEmployee.length; i++) {
    if (databaseEmployee[i].salaryPerHour < min) {
      // console.log(databaseEmployee[i].salaryPerHour);
      min = databaseEmployee[i];
      // console.log(min);
    }
  }

  return `the min is: ${JSON.stringify(min)}`;
}

function max() {
  let max = databaseEmployee[0];
  for (let i = 0; i < databaseEmployee.length; i++) {
    if (databaseEmployee[i].salaryPerHour > max) {
      max = databaseEmployee[i];
    }
  }
  return `the max is: ${JSON.stringify(max)}`;
}

function calculateAvg() {
  let sumAll = 0;
  for (let i = 0; i < databaseEmployee.length; i++) {
    let sum =
      databaseEmployee[i].hourPerMonth * databaseEmployee[i].salaryPerHour;
    sumAll = sumAll + sum;
  }
  let avg = sumAll / databaseEmployee.length;
  return avg;
}

function salaryInfo() {
  const below = [];
  const above = [];
  let belowAndAbove = {};
  let avg = calculateAvg();
  for (let i = 0; i < databaseEmployee.length; i++) {
    let sum =
      databaseEmployee[i].hourPerMonth * databaseEmployee[i].salaryPerHour;

    if (avg < sum) {
      above.push(databaseEmployee[i]);
      // console.log(above);
    } else {
      below.push(databaseEmployee[i]);
    }
  }
  belowAndAbove.below = below;
  belowAndAbove.above = above;
  return belowAndAbove;
}

function history() {
  let abj = {};
  abj.add = plus;
  abj.remove = minus;
  return abj;
}

let input;
while (input !== "end") {
  input = prompt("enter your Command");
  switch (input) {
    case "add":
      const enterInput = prompt(
        "enter your name , family , hourPerMonth, salaryPerHour"
      );
      let arr = enterInput.split(",");
      console.log(addEmployee(arr[0], arr[1], arr[2], arr[3]));
      break;
    case "remove":
      const removEinput = prompt("enter your name , family");
      let arr2 = removEinput.split(",");
      console.log(remove(arr2[0], arr2[1]));
      break;
  }
}

function calculateAvg() {
  let Counter = 0;
  let sum = 0;

  for (let i = 0; i > databaseEmployee.length; i++) {
    sum = databaseEmployee[i].salaryPerHour + sum;
    Counter++;
    console.log(Counter);
  }
}

run();

function run() {
  //   let test = addEmployee("alireza", "mohammadi", 105, 5);
  //  console.log(test);
  // console.log("this user data removed range: \n ", removeWithRange(200, 300));
  //   // console.log(min());
  //   // console.log(max());
  // console.log(calculateAvg());
  // console.log(salaryInfo());
  console.log(history());
}
