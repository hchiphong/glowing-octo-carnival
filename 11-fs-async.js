const { readFile, writeFile } = require('fs')

readFile('./content/subfolder/test.txt','utf8', (err,result) =>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    console.log(`read: ${first}`)
    
    readFile('./content/subfolder/test.txt','utf8', (err,result) =>{
        if (err){
            console.log(err)
            return
        }
        writeFile('./content/result-async.txt',
`Here is the result ${first}`,
(err, result) =>{
     if (err){
        console.log(err)
        return
     }
     console.log(result)

}
)
} )
})


// console.log(first)

