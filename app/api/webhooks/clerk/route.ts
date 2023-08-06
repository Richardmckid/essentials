import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    

    console.log(request.body)

    return NextResponse.json({ message: 'GET Method' }, { status: 200 })
}

export async function POST(request: NextRequest) {
    const body = await request.json()

    if (!body) {
        return NextResponse.json({ message: 'Request body is empty' }, { status: 500 })
    }

    console.log(body)
    return NextResponse.json({ message: 'POST Method' }, { status: 200 })
}

export async function PUT(request: NextRequest) {
    return NextResponse.json({ error: 'PUT is not allowed' }, { status: 405 })
}

export async function PATCH(request: NextRequest) {
    return NextResponse.json({ error: 'PATCH is not allowed' }, { status: 405 })
}

export async function DELETE(request: NextRequest) {
    return NextResponse.json({ error: 'DELETE is not allowed' }, { status: 405 })
}

export async function OPTIONS(request: NextRequest) {
    return NextResponse.json({ error: 'OPTIONS is not allowed' }, { status: 405 })
}

