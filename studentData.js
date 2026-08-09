const students = [];

function addStudent(name, roll, course) {
    students.push({
        name,
        roll,
        course
    });
}

module.exports = {
    students,
    addStudent
};