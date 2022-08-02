const employeesModel = require("../models/employees-model");

function getAllEmployees(ctx) {
  ctx.body = employeesModel.employees;
}

function getAllOffices(ctx) {
  ctx.body = employeesModel.offices;
}

function getAllTribes(ctx) {
  ctx.body = employeesModel.tribes;
}

function getByIdEmployees(ctx) {
  const index = ctx.request.params.id;

  // const employee = employeesModel.employees[id]
  // if(!employees) {
  //   ctx.status = 404
  // }

  if (Number(index) > employeesModel.employees.length - 1) {
    ctx.status = 404;
    return;
  }

  ctx.body = employeesModel.employees[index];
}

function getByIdOffices(ctx) {
  const index = ctx.request.params.id;

  if (Number(index) > employeesModel.offices.length - 1) {
    ctx.status = 404;
    return;
  }

  ctx.body = employeesModel.offices[index];
}

function getByIdTribes(ctx) {
  const index = ctx.request.params.id;

  if (Number(index) > employeesModel.tribes.length - 1) {
    ctx.status = 404;
    return;
  }

  ctx.body = employeesModel.tribes[index];
}

function deleteByIdEmployees(ctx) {
  const index = ctx.request.params.id;
  employeesModel.employees.splice(index, 1);
  ctx.status = 204;
}

function deleteByIdOffices(ctx) {
  const index = ctx.request.params.id;
  employeesModel.offices.splice(index, 1);
  ctx.status = 204;
}

function deleteByIdTribes(ctx) {
  const index = ctx.request.params.id;
  employeesModel.tribes.splice(index, 1);
  ctx.status = 204;
}

function createEmployees(ctx) {
  const id = ctx.request.body.id;
  const name = ctx.request.body.name;
  const title = ctx.request.body.title;
  const tribe_id = ctx.request.body.tribe_id;
  const office_id = ctx.request.body.office_id;

  if (!name || name === "" || !title || title === "" || !tribe_id || tribe_id === "") {
    ctx.status = 400;
    return;
  }

  employeesModel.employees.push({ id, name, title, tribe_id, office_id });
  ctx.status = 201;
}



// function createOffices(ctx) {
//   const text = ctx.request.body.text;

//   if (!text || text === "") {
//     ctx.status = 400;
//     return;
//   }

//   employeesModel.offices.push({ text });
//   ctx.status = 201;
// }

// function createTribes(ctx) {
//   const text = ctx.request.body.text;

//   if (!text || text === "") {
//     ctx.status = 400;
//     return;
//   }

//   employeesModel.tribes.push({ text });
//   ctx.status = 201;
// }

function searchEmployeeByName(ctx) {
  const name = ctx.request.query.name;
  const result = employeesModel.employees.filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );
  ctx.body = result;
}

function filterEmployees(ctx) {
  const title = ctx.request.query.title;
  const tribe = ctx.request.query.tribe;

  const employees = employeesModel.employees.filter((x) => ( title ? x.title === title : true ) && ( tribe ? x.tribe === tribe : true )
  );
  
//     if (title && tribe) {
//       return x.title === title && x.tribe === tribe;
//     } else if (title && !tribe) {
//       return x.title === title;
//     } else if (!title && tribe) {
//       return x.tribe === tribe;
//     }
//   });

  ctx.body = employees;
}

function searchOfficesByName(ctx) {
  const officeName = ctx.request.query.string;
  const result = employeesModel.offices.filter((x) =>
    x.name.toLowerCase().includes(officeName.toLowerCase())
  );
  ctx.body = result;
}

function searchTribesByName(ctx) {
  const tribeName = ctx.request.query.string;
  const result = employeesModel.tribes.filter((x) =>
    x.name.toLowerCase().includes(tribeName.toLowerCase())
  );
  ctx.body = result;
}

module.exports = {
  filterEmployees,
  searchEmployeeByName,
  searchOfficesByName,
  searchTribesByName,
  getAllEmployees,
  getAllOffices,
  getAllTribes,
  getByIdEmployees,
  getByIdOffices,
  getByIdTribes,
  deleteByIdEmployees,
  deleteByIdOffices,
  deleteByIdTribes,
  createEmployees,
  // createOffices,
  // createTribes,
};
