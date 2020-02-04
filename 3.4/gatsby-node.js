exports.createPages = async function({actions: {createPage}, graphql}) {
    //const employees = require('./data/employees.json');
    const employees = await graphql(`
    {
        allEmployeesJson {
          edges {
            node {
              firstName
              lastName
            }
          }
        }
      }`);


      

    createPage({
        path: '/employees/',
        component: require.resolve('./src/templates/employee-list.js'),
        context: {
            employees: employees.data.allEmployeesJson.edges.map(item => {
                return {
                    firstName: item.node.firstName,
                    lastName: item.node.lastName
                };
            })
        }
    });

    employees.data.allEmployeesJson.edges.forEach(item => {
      const emp = item.node;
      createPage({
          path: `/employees/${emp.firstName.toLowerCase()}-${emp.lastName.toLowerCase()}/`,
          component: require.resolve('./src/templates/employee.js'),
          context: emp
      });
    });
}