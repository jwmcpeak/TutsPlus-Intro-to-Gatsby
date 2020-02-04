exports.createPages = function({actions: {createPage}}) {
    const employees = require('./data/employees.json');

    createPage({
        path: '/employees/',
        component: require.resolve('./src/templates/employee-list.js'),
        context: {
            employees
        }
    });

    employees.forEach(emp => {
        createPage({
            path: `/employees/${emp.firstName.toLowerCase()}-${emp.lastName.toLowerCase()}/`,
            component: require.resolve('./src/templates/employee.js'),
            context: emp
        });
    })
}