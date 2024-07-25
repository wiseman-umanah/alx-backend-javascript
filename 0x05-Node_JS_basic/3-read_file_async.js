const fs = require('fs');

const countStudents = (filepath) => {
  const promise = (res, rej) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) return rej(new Error('Cannot load the database'));
      try {
        const lines = data.split('\n').filter(Boolean); // Split by lines and remove empty lines

        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).map(line => line.split(',')).filter(line => line.length > 0);
        const numberOfStudents = students.length;

        console.log(`Number of students: ${numberOfStudents}`);

        const fields = new Map();

        students.forEach(student => {
          const field = student[3].trim();
          if (fields.has(field)) {
            fields.get(field).push(student[0].trim());
          } else {
            fields.set(field, [student[0].trim()]);
          }
        });

        fields.forEach((list, field) => {
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        rej(new Error('Cannot load the database'));
      }
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
