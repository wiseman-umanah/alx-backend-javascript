const fs = require('fs');

const countStudents = (filepath) => {
  const promise = (res, rej) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) return rej(new Error('Cannot load the database'));
      try {
        data = data.split('\n').filter(Boolean).slice(1);
        let result = `Number of students: ${data.length}\n`;

        data = data.map(x => x.split(','));
        const categories = [...new Set(data.map(x => x[x.length - 1].trim()))];

        categories.forEach(category => {
          const students = data.filter(x => x[x.length - 1].trim() === category).map(x => x[0].trim());
          result += `Number of students in ${category}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        console.log(result);
        res(result.trim());
      } catch (e) {
        rej(new Error('Cannot process the data'));
      }
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
