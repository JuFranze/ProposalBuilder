import {Schema} from "mongoose";
import {database} from "$lib/mongo/mongo";

export interface Persona extends Document {
    name: string,
    lastModified: Date,
    prompt: string
}

const PersonaSchema = new Schema<Persona>({
    name: {type: String, required: true},
    lastModified: {type: Date, required: true},
    prompt: {type: String, required: true}
});

export const PersonaModel = database.model<Persona>("Persona", PersonaSchema);
