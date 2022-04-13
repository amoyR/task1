const fs = require("fs")
const fileName = "index.html"
const filePath = "/Users/amoyr/projects/latestVersion"
//console.log(`${filePath}` + "/" + `${fileName}`)
const outputFile = fs.readFileSync(`${filePath}` + "/" + `${fileName}`, "utf-8")
console.log(outputFile)
