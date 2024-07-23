const fs = require('node:fs');

module.exports = function countStudents (file) {
  try {
    let data = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
    data = data.slice(1);
    console.log('Number of students:', data.length);
    data = data.map(x => x.split(','));
    const cat = [...new Set(data.map(x => x[x.length - 1].trim()))];
    cat.forEach(category => {
      const students = data.filter(x => x[x.length - 1].trim() === category).map(x => x[0].trim());
      console.log(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
