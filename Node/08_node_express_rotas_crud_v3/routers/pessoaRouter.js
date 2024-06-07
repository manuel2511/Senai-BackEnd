const Router = require("express").Router;
const router = Router();
const pessoaController = require("../controller/pessoaController.js");

router.get(
    "/pessoa",
    pessoaController.readList
);
router.get(
    "/pessoa/:id",
    pessoaController.read
);
router.get(
    "/pessoa/nome/:nome", 
    pessoaController.readByName    
);

router.post(
    "/pessoa",
    pessoaController.create
);
router.put(
    "/pessoa/:id",
    pessoaController.update
);
router.delete(
    "/pessoa/:id",
    pessoaController.update
);

module.exports = router;