

let time;
let post=[];

function push(value){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        post.push(value);
        time= new Date();
        console.log("last active time "+time)
        resolve();

       },1000) 
    })
}







function update(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let last_value=post.pop();
           post.push(value);
           time=new Date();
           console.log("last active time "+time)
           resolve();
        },1000)
    })

}




function pop(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(post==0){
              
               reject("Stack is empty");
            }else{
            post.pop();
            console.log("last active time "+time)
            resolve();

            }
        },1000)
    })
}


// push("sekhar")
//     .then(()=>{
//         update("sekhar updated");
//     })
//     .then(()=>{
//         pop();
//     })
//     .catch(error=>{
//         console.log(error);
//     })
const promises = [
    push("sekhar"),
    update("sekhar updated"),
    pop()
];

// Using Promise.all() to execute promises concurrently
Promise.all(promises)
    .catch((error) => {
        console.log(error);
    });