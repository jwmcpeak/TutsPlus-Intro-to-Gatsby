exports.createPages = function({actions: {createPage}}) {
    const employees = require('./data/employees.json');

    createPage({
        path: '/employees/',
        component: require.resolve('./src/templates/employee-list.js'),
        context: {
            employees
        }
    });
}