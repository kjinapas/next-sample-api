import { books } from "../book_data";


export async function GET(request,{params}){
    const data = books.slice(0,params.id)
    return Response.json({"results":data})
}



