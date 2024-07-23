const fs = require('fs');

const countStudents = (filepath) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) throw new Error('Cannot load database');
    data = data.split('\n').filter(Boolean).slice(1);
    console.log('Number of students:', data.length);
    data = data.map(x => x.split(','));
    const cat = [...new Set(data.map(x => x[x.length - 1].trim()))];
    cat.forEach(category => {
      const students = data.filter(x => x[x.length - 1].trim() === category).map(x => x[0].trim());
      console.log(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
    });
  });
};

module.exports = countStudents;
