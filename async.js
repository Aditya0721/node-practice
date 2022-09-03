const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    const first = result
    console.log("done with reading 1st file")
    readFile('./content/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        console.log("done with reading 2nd file")
        writeFile('./content/result-aync.txt',
            `Here is the result ${first}, ${second} `,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("done with the task")
        })
    })
})
console.log('starting with the new task')