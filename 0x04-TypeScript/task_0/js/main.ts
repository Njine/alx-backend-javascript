// main.ts

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};

const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Student[] = [
  studentA,
  studentB,
];

export const displayStudents = (students: Student[]): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.innerHTML = '<td>FirstName</td><td>Location</td>'; // Corrected the syntax error here
  tableHead.appendChild(headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    tableBody.appendChild(bodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

displayStudents(studentsList);

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = 'Task 0';
