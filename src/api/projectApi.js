import {STATIC_PROJECT_API} from './fakeApi'

export  const getAll = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(STATIC_PROJECT_API)
        },1000)
    })
}
export const getProjectById = (pid)=>{
    return new Promise ((resolve,reject) =>{
        const convertedId = Number(pid)
        const newArr = STATIC_PROJECT_API
       const project =  newArr.find((project)=>project.id===convertedId)
       if(project)
       {
        resolve(project)
       }
       else{
           reject(`Cannot find project with id ${pid}`)
       }
    })
}
