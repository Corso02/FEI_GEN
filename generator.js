import { writeFileSync } from "fs"
import { resolve } from "path"

if(process.argv.length < 3){
    console.log("Pass length as argument!");
}
else{
    let arr = []
    let max_n = process.argv[2]

    for(let i = 0; i < max_n; i++){
        arr.push(Math.floor(Math.random() * 9))
    }

    let arr_str = arr.join("")
    console.log(`LEN: ${arr_str.length}`)

    writeFileSync(resolve("./", "output.txt"), arr_str, {encoding: "utf-8"});


    while(arr_str.length > 1){
        let res = 0;
        for(let i = 0; i < arr_str.length; i++){
            res += arr_str[i];
        }
        arr_str = res.toString().split("").map(e => Number(e))
    }

    console.log(`res: ${arr_str[0]}`)
}

