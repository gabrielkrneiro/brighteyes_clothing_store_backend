"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const logger_1 = __importDefault(require("../logger/logger"));
const Employee_1 = require("./../../modules/employee/Employee");
const Client_1 = require("./../../modules/client/Client");
const Clothes_1 = require("./../../modules/clothes/Clothes");
const ClothesStatus_1 = require("./../../modules/clothes_status/ClothesStatus");
const EmployeeClientStatus_1 = require("./../../modules/employee_client_status/EmployeeClientStatus");
const EmployeeTitle_1 = require("./../../modules/employee_title/EmployeeTitle");
const ShoppingCart_1 = require("./../../modules/shopping-cart/ShoppingCart");
const ShoppingCartStatus_1 = require("./../../modules/shopping_cart_status/ShoppingCartStatus");
class Db {
    async init() {
        try {
            this.instance = await typeorm_1.createConnection({
                synchronize: true,
                logging: false,
                type: 'sqlite',
                database: path_1.default.join(__dirname, '..', '..', '..', 'data', 'data.db'),
                entities: [
                    Employee_1.Employee,
                    Client_1.Client,
                    Clothes_1.Clothes,
                    ClothesStatus_1.ClothesStatus,
                    Employee_1.Employee,
                    EmployeeClientStatus_1.EmployeeClientStatus,
                    EmployeeTitle_1.EmployeeTitle,
                    ShoppingCart_1.ShoppingCart,
                    ShoppingCartStatus_1.ShoppingCartStatus
                ]
            });
        }
        catch (error) {
            logger_1.default.error('Error at try to connect in database...');
            throw error;
        }
    }
    getInstance() {
        return this.instance;
    }
}
exports.Db = Db;
//# sourceMappingURL=Db.js.map