const Department = require('./department');
const Student = require('./student');
const courses = require('./courses')
const studentCourses = require('./studentCourses')

Department.hasMany(Student, { foreignKey: 'departmentId' });
Student.belongsTo(Department, { foreignKey: 'departmentId' });

Student.belongsToMany(courses, { through: studentCourses })
courses.belongsToMany(Student, { through: studentCourses })

module.exports = { Department, Student, courses, studentCourses };
