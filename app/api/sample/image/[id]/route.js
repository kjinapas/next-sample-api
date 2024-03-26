import { results } from '../data';


import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    const data = results.slice(0,params.id)
    return Response.json({"results":data})
}



