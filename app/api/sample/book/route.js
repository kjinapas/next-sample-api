import { books } from "./book_data";
import { NextResponse } from 'next/server';

export async function GET(){
    return NextResponse.json({"results":books})

}


