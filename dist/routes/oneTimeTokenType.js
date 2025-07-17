"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Listar todos os valores do enum one_time_token_type
router.get('/', (req, res) => {
    res.json([
        'confirmation_token',
        'reauthentication_token',
        'recovery_token',
        'email_change_token_new',
        'email_change_token_current',
        'phone_change_token',
    ]);
});
exports.default = router;
