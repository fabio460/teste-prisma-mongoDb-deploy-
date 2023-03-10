"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_controller_1.listar);
userRouter.post('/', user_controller_1.criar);
userRouter.get('/:id', user_controller_1.listarPorId);
userRouter.delete('/:id', user_controller_1.deletar);
userRouter.put('/:id', user_controller_1.atualizar);
exports.default = userRouter;
