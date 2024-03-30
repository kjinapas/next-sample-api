import { books } from "../book_data";


export async function GET(request,{params}){
    const data = books.slice(0,params.id)
    return Response.json({"results":data.map((book,index)=>({
        ...book,id:(index+1).toString()
    }))})
}



