import React from "react";
import Posting from "./Posting";
import { postings } from "../postings";

export default function Gallery (){
    return <div className="gallery">
            <h1>Gallery</h1>
            {postings.map( p => <Posting post={p}/>)}
        </div>
}