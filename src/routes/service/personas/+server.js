import {PersonaModel} from "$lib/mongo/schema/persona";
import {json} from "@sveltejs/kit";

export async function POST({request}) {
    const newDocument = await PersonaModel.create(await request.json())
    return json(newDocument)
}

export async function GET({request}) {
    const personas = await PersonaModel.find({}).sort({lastModified: -1}).lean();
    return json(personas)
}
