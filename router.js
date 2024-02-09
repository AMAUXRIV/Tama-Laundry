const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.daftarHarga"), [BotController, "product"]);
router.menu(f("menu.cekCucian"), [BotController, "cekCucian"]);
router.keyword("*", [BotController, "introduction"]);

module.exports = router;