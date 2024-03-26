import { article } from "../article";

import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    const article_data = article.slice(0,params.id)
    return NextResponse.json({"results":article_data})

}