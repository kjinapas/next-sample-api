import { data_news } from "../news";


import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    const id  = params.id
    return NextResponse.json({"results":data_news.slice(0,id)})

}