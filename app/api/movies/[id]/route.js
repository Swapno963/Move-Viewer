import { getDataById ,editDataById,deleteDataById} from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const id = params?.id;
    // console.log(id);
    const data = await getDataById(id)
    return NextResponse.json(data)
}
export async function PATCH(request, {params}){
    const id = params?.id;
    const title = await request.json();
    console.log(id,title);
    const data = await editDataById({id,title})

    return NextResponse.json(data)
}
export async function DELETE(request, {params}){
    const id = params?.id;
    const data = await deleteDataById(id)
    return NextResponse.json(data)
}


