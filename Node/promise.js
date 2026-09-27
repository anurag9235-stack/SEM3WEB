// const fetchUserData = new Promise((resolve,reject)=>{
//     let success=true;
//     setTimeout(()=> {
//         if (success){
//             resolve ({id:222, username:"anurag"});
//         }
//         else{
//             reject("failed to fetch the user data");
//         }
//     },1000);
// });
//     console.log(fetchUserData);

// const promise1 = new Promise((resolve, reject)=>{
//     let success = false
//     if(success){
//         resolve({

//          id:11122,
//          username:"anurag"

//         })
//     }else{
//         reject(new Error("Data not fetched"))
//     }
// })

// // promise1
// // .then((response)=>{
// //      console.log(response);

// // })
// // .catch((error)=>{
// //     console.log(error);
// // })

// const promise2 = new Promise((resolve, reject) => {
//     let success = false
//     if(success){
//         resolve({

//          id:11122,
//          username:"anurag"

//         })
//     }else{
//         reject(new Error("Data not fetched"))
//     }
// })

// promise2
// .then((response)=>{
//      console.log(response);

// })
// .catch((error)=>{
//     console.log(error);
// })
// promise2()

Promise.race([promise1,promise2])
.then((response)=>{
    console.logresponse
})
Promise(){
    console.log
    
}


Promise.any([promise1,promise2])
.then((response)=>{
    console.log()
})
async function getUser(){
    const uder= await fetchUserData()c 
}
