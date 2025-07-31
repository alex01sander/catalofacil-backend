"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Listar todos os valores do enum factor_type
router.get('/', (req, res) => {
    res.json(['totp', 'webauthn', 'phone']);
});
exports.default = router;
