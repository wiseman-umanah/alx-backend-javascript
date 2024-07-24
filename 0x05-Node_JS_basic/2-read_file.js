const fs = require('fs');

function countStudents (file) {
  try {
    let data = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).slice(1);
    console.log('Number of students:', data.length);
    data = data.map(x => x.split(','));
    const cat = [...new Set(data.map(x => x[x.length - 1].trim()))];
    cat.forEach(category => {
      const students = data.filter(x => x[x.length - 1].trim() === category).map(x => x[0].trim());
      console.log(`Number of students in ${category}: ${students.length}. List: ${students.join(', ')}`);
    });
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
