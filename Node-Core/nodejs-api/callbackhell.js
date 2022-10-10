const fs = require("fs")

fs.readFile("start.txt", "utf-8", (err, data1)=>{
    fs.readFile(`${data1}.txt`, "utf-8", (err,data2)=>{
        console.log(data2);
        fs.readFile("append.txt", "utf-8", (err, data3)=>{
            console.log(data3);
            fs.writeFile("final.txt", `this is the new final file: ${data2}\n${data3}`, err=>{
                console.log("file is wriiten");
            } )
        })
    })
})

console.log("file will be read");