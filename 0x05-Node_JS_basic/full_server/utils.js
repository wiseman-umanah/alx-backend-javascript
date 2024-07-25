const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(Boolean);

    if (lines.length <= 1) throw new Error('No students found');

    const students = lines.slice(1).map(line => line.split(',')).filter(line => line.length > 0);
    const fields = {};

    students.forEach(student => {
      const field = student[3].trim();
      const firstName = student[0].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
