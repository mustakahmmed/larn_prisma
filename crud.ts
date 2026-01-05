import { prisma } from "./lib/prisma";

async function run() {
//  const createUsers = await prisma.user.create({
//         data:{
//             name: 'ritu',
//             email:'ritu@gmail.com'
//         }
//  })
//  console.log('user created', createUsers);

// create post
// const createPost = await prisma.post.create({
//        data:{
//               title:'this is my post',
//               content:'this is big contain',
//               authrId:1
//        }
// })
// console.log('post created',createPost);

// create profile
// const createdProfile = await prisma.prrofile.create({
//        data:{
//               bio:'web devoloper',
//               userId:1
//        }
// })
// console.log("profile created",createdProfile);

const users = await prisma.user.findMany({
       include:{
              posts:true,
              profiles:true
       }
})
console.dir(users, {depth: Infinity});

 
}
run()