const readDatabase = require("../utils")

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const databaseFilename = req.databaseFilename;
            const data = await readDatabase(databaseFilename);
            res.send(`This is the list of our students\n${data}`)
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const vals = ['CS', 'SWE'];
        const major = req.params.major
        const databaseFilename = req.databaseFilename;
        if (vals.includes(major)) {
            try {
                const data = await readDatabase(databaseFilename);
                res.send(`This is the list of our students\n${data}`)
            } catch (err) {
                res.status(500).send('Cannot load the database');
            }
        } else {
            res.status(500).send('Major parameter must be CS or SWE');
        }
    }
}

module.exports = StudentsController;
