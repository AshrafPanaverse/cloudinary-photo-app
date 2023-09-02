"use client"

import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import { setASFavoriteAction } from "./actions";
import { useState } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/full-heart";

export function CloudinaryImage(props: any & {imageData:SearchResult}) {
    const [transition, startTransition] = useState();
    const {imageData}=props;
    const isFavorited = imageData.tags.includes("favorite");
    console.log('i am here '+imageData)
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorited ?
                <FullHeart
                        onClick={() => {
                            startTransition(() => {
                                setASFavoriteAction(imageData.publicId,false);
                            })
                        }}
                        className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer" />

                :

                    <Heart
                        onClick={() => {
                            startTransition(() => {
                                setASFavoriteAction(imageData.publicId,true);
                            })
                        }}
                        className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
            }
        </div>
    )
}