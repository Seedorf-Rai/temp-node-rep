const {readFile,writeFile} = require('fs');
console.log('start');
writeFile('./content/subfolder/myFirst.txt',`This is my another text here`,(err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  writeFile('./content/subfolder/mySecond.txt',`This is my second text here`,(err,result)=>{
    if(err){
      console.log(err);
      return;
    }
   readFile('./content/subfolder/mySecond.txt','utf8',(err,result) =>{
     if(err){
        console.log(err);
        return ;
     }
     const second = result
     readFile('./content/subfolder/myFirst.txt','utf8',(err,result)=>{
        if(err){
          console.log(err);
          return;
        }
        const first = result
        writeFile('./content/subfolder/result.txt',`This is my third result : ${first} : ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with the task');
        })
      });
   })
  });
});
console.log('starting next task');
