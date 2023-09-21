"use client";
import React from 'react';
import Link from 'next/link';
import styles from './screen1.module.css';
import { Metadata } from "next";

import Image from 'next/image';
import * as fonts from '../../agua/assets/fonts';




function Screen1() {
    
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    

    function aguaRender(){
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen1"]}>
                
<div id="layer-1-ebfe2b71cb0344d99f558c9ca238032a" className={"baseLayer hide-native-scrollbar " + styles["layer-1-ebfe2b71cb0344d99f558c9ca238032a"]}    >
<div className={"baseImageView " + styles["imageview-2-e0d3affffb734576aa03bd8099d8e215"]}  >
    <Image id="imageview-2-e0d3affffb734576aa03bd8099d8e215" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-2" src='/assets/Logo Rockstart.png' />
</div>
</div>
<div id="layer-2-75d7957b5e234fc0aec79dc3babb9593" className={"baseLayer hide-native-scrollbar " + styles["layer-2-75d7957b5e234fc0aec79dc3babb9593"]}    >
<div id="layer-3-693ee6165c254266b69ce5da5d5ea43e" className={"baseLayer hide-native-scrollbar " + styles["layer-3-693ee6165c254266b69ce5da5d5ea43e"]}    >
<div className={"baseImageView " + styles["imageview-1-06a67255167e4090938c971bbc69ee1a"]}  >
    <Image id="imageview-1-06a67255167e4090938c971bbc69ee1a" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='/assets/Camila_Square.jpeg' />
</div>
</div>
</div>

<div className={"" + " " + styles["text-1-6f3f1afef81c4746b36caf0e0c26422a"]}>
    <div id="text-1-6f3f1afef81c4746b36caf0e0c26422a" className={"baseText " + styles["text-1-6f3f1afef81c4746b36caf0e0c26422a"]}   >
        Camila Rueda
    </div>
</div>

<div className={"" + " " + styles["text-2-9393376b468b4647a12329b9637eeb7f"]}>
    <div id="text-2-9393376b468b4647a12329b9637eeb7f" className={"baseText " + styles["text-2-9393376b468b4647a12329b9637eeb7f"]}   >
        Partner, Rockstart
    </div>
</div>
<div id="layer-4-af479bac78554c30b729088709bb0226" className={"baseLayer hide-native-scrollbar " + styles["layer-4-af479bac78554c30b729088709bb0226"]}    >
<div id="layer-5-1b75cdee692e43df9f9ce13e128f9557" className={"baseLayer hide-native-scrollbar " + styles["layer-5-1b75cdee692e43df9f9ce13e128f9557"]}    onClick={() => openInNewTab("https://www.linkedin.com/in/maria-camila-rueda/")}>
<div className={"baseImageView " + styles["imageview-3-99f84dd28f344ec5bad28467ea635d32"]}  >
    <Image id="imageview-3-99f84dd28f344ec5bad28467ea635d32" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-3" src='/assets/linkedInWhite.png' />
</div>
</div>
<div id="layer-6-1cf1ac7e32da4ade99d17bcb304b3bd7" className={"baseLayer hide-native-scrollbar " + styles["layer-6-1cf1ac7e32da4ade99d17bcb304b3bd7"]}    onClick={() => openInNewTab("mailto:camila@rockstart.com")}>
<div className={"baseImageView " + styles["imageview-4-ece5c658ef5b4dbf90f27c1128a365c4"]}  >
    <Image id="imageview-4-ece5c658ef5b4dbf90f27c1128a365c4" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-4" src='/assets/mailWhite.png' />
</div>
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Screen1;
            