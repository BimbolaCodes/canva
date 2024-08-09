
import { Document, Schema, model, models } from "mongoose";



export interface Image extends Document{
    title: string;
    transformationType: string;
    publicId: URL;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object; 
    transformationURL?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        id: string;
        firstName: string;
        lastname: string;
    } 
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    transformationType: {
        type: String,
        required: true
    }, 
    publicId: {
        type: URL,
        required: true
    },
    secureUrl: {
        type: String,
        required: true
    },
    width: {
        type: Number
    },
    height: { 
        type: Number
    },
    config: {
        type: Object
    },
    transformationURL: {
        type: URL
    },
    aspectRatio: {
        type: String
    },
    color: {
        type: String
    },
    prompt: {
        type:String
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;   