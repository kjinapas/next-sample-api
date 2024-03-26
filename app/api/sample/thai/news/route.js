import { data_news } from "./news";


import { NextResponse } from 'next/server';

export async function GET(){
    return NextResponse.json({"results":data_news})

}