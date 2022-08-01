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
  const text = ctx.request.body.text;

  if (!text || text === "") {
    ctx.status = 400;
    return;
  }

  employeesModel.employees.push({ text });
  ctx.status = 201;
}

function createOffices(ctx) {
  const text = ctx.request.body.text;

  if (!text || text === "") {
    ctx.status = 400;
    return;
  }

  employeesModel.offices.push({ text });
  ctx.status = 201;
}

function createTribes(ctx) {
  const text = ctx.request.body.text;

  if (!text || text === "") {
    ctx.status = 400;
    return;
  }

  employeesModel.tribes.push({ text });
  ctx.status = 201;
}

function searchEmployeeByName(ctx) {
  const name = ctx.request.query.string;
  const result = employeesModel.employees.name.filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );
  ctx.body = result;
}

function searchOfficesByName(ctx) {
  const officeName = ctx.request.query.string;
  const result = employeesModel.offices.name.filter((x) =>
    x.name.toLowerCase().includes(officeName.toLowerCase())
  );
  ctx.body = result;
}

function searchTribesByName(ctx) {
  const tribeName = ctx.request.query.string;
  const result = employeesModel.tribes.name.filter((x) =>
    x.name.toLowerCase().includes(tribeName.toLowerCase())
  );
  ctx.body = result;
}

module.exports = {
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
  createOffices,
  createTribes,
};
