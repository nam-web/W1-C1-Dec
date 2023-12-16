const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper(data) {
  const dev = data.filter((person) => person.profession === "developer");
  dev.forEach((developer) => {
    console.log(
      `Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`
    );
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newData = { name, age, profession };
  data.push(newData);
  console.log("New data added:", newData);
  console.log("Updated data array:", data);
}

// 3. Remove Admins
function removeAdmin() {
  const nonAdmins = data.filter((person) => person.profession !== "admin");
  console.log("Admins removed:", nonAdmins);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "alice", age: 30, profession: "designer" },
    { name: "bob", age: 22, profession: "engineer" },
  ];
  const resultArray = data.concat(dummyArray);
  console.log("Concatenated array:", resultArray);
  console.log("Original data array:", data);
  console.log("Dummy array:", dummyArray);
}

// 5. Average Age
function averageAge() {
  const sumOfAges = data.reduce((total, person) => total + person.age, 0);
  const average = sumOfAges / data.length;
  console.log("Average age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  if (isAbove25) {
    console.log("At least one person is older than 25.");
  } else {
    console.log("No one is older than 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const allProfessions = data.map((person) => person.profession);
  const uniqueProfessionsSet = new Set(allProfessions);
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  console.log("Unique professions:", uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted data by age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex((person) => person.name === "john");
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
    console.log("Updated data:", data);
  } else {
    console.log("John not found in the data array.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(
    (person) => person.profession === "developer"
  ).length;
  const adminCount = data.filter(
    (person) => person.profession === "admin"
  ).length;
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
