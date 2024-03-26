import { article } from "./article";

import { NextResponse } from 'next/server';

export async function GET(){
    

    const startIndex = Math.floor(Math.random() * article.length); // Generate a random start index
    const subsetSize = Math.min(10, article.length - startIndex); // Ensure the subset size doesn't exceed the array length
    const random_article = article.slice(startIndex, startIndex + subsetSize);
    return NextResponse.json({"results":random_article})

}