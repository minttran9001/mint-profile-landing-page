import {STATIC_PROJECT_API} from './fakeApi'

 const getAll = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(STATIC_PROJECT_API)
        },1000)
    })
}
const getProjectById = (pid)=>{
    return new Promise (resolve =>{
        debugger
        const convertedId = Number(pid)
        const newArr = STATIC_PROJECT_API
       const project =  newArr.find((project)=>project.id===convertedId)
       resolve(project)
    })
}
export default {
    getAll,
    getProjectById
}
