import { books } from "./book_data";
import { NextResponse } from 'next/server';

export async function GET(){

    return NextResponse.json({"results":books.map((book,index)=>({
        ...book,
        id:(index+1).toString()
    }))})

}


