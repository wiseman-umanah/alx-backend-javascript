/* eslint-disable no-underscore-dangle */
class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (!(Number.isInteger(length))) throw TypeError('Length must be a number');
    if (!(Array.isArray(students))) throw TypeError('Students must be an array');
    students.forEach((element) => {
      if (typeof element !== 'string') throw TypeError('Students must be an array of strings');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter name
  get name() {
    return this._name;
  }

  // Setter name
  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    else this._name = value;
  }

  // Getter length
  get length() {
    return this._length;
  }

  // Setter length
  set length(value) {
    if (!(Number.isInteger(value))) throw TypeError('Length must be a number');
    else this._length = value;
  }

  // Getter students
  get students() {
    return this._students;
  }

  // Setter students
  set students(value) {
    if (!(Array.isArray(value))) throw TypeError('Students must be an array');
    value.forEach((element) => {
      if (typeof element !== 'string') throw TypeError('Students must be an array of strings');
    });
    this._students = value;
  }
}

export default HolbertonCourse;
