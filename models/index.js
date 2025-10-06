const Department = require('./department');
const Student = require('./student');

Department.hasMany(Student, { foreignKey: 'departmentId' });
Student.belongsTo(Department, { foreignKey: 'departmentId' });

module.exports = { Department, Student };
