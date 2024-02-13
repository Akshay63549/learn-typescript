type PersonInfo = readonly[string, number, boolean];

const citizen1: PersonInfo = ["vinod", 29, true];
const citizen2: PersonInfo = ["Akshay", 18, false];

const displayCitizenInfo = (person: PersonInfo) => {
    const [name, age, hasDrivingLicense] = person;
    console.log("Name=" + name + " Age=" + age + " hasDrivingLicense=" + (hasDrivingLicense ? "yes" : "no"));
}

displayCitizenInfo(citizen1);
displayCitizenInfo(citizen2);