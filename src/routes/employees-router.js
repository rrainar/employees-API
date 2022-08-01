const Router = require("@koa/router");
const router = new Router();

const employeesController = require("../controllers/employees-controller");

router.get("/employees", employeesController.getAllEmployees);
router.get("/employees/:id", employeesController.getByIdEmployees);
router.delete("/employees/:id", employeesController.deleteByIdEmployees);
router.post("/employees", employeesController.createEmployees);
router.get("/api/employees/empName", employeesController.searchEmployeeByName);

router.get("/offices", employeesController.getAllOffices);
router.get("/offices/:id", employeesController.getByIdOffices);
router.delete("/offices/:id", employeesController.deleteByIdOffices);
// router.post("/offices", employeesController.createOffices);
router.get("/api/offices/officeName", employeesController.searchOfficesByName);

router.get("/tribes", employeesController.getAllTribes);
router.get("/tribes/:id", employeesController.getByIdTribes);
router.delete("/tribes/:id", employeesController.deleteByIdTribes);
// router.post("/tribes", employeesController.createTribes);
router.get("/api/tribes/tribeName", employeesController.searchTribesByName);

// router.get("/report", employeesController.employeesGroupedByTribe);

module.exports = router;