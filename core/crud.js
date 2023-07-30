const fs = require("fs");
const DB_FILE_PATH = "./core/db";
console.log("[CRUD]");

function create(content) {
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}



// Simulation
console.log(create("Conteúdo a ser armazenado. Alteração 2."));