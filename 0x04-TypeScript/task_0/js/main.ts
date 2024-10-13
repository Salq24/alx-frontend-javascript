interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
	
}
const studentA:  Student = {
	firstName: "Queen",
	lastName: "Salawu",
	age: 28,
	location: "Enugu"
};

const studentB: Student = {
        firstName: "Wale",
        lastName: "Hammed",
        age: 37,
        location: "Osun"
};

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid blue";
  locationCell.style.border = "1px solid blue";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
