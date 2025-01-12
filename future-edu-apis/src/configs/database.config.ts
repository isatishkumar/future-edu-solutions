import { ConnectOptions, connect } from "mongoose"

export const dbConnect = () =>{
    connect(`mongodb+srv://root:root1@adminapi.sfoxnmm.mongodb.net/?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    } as ConnectOptions).then(
        () => console.log("connect sucessfully"),
        (error)=> console.log(error)
    )
}