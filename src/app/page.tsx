import Screen1 from './screen1/page';
  import { Metadata } from "next";

  export const metadata: Metadata = {
                title: 'Camila Rueda',
description: 'Rockstart business card',

}

  export default function Home() {
    return (
        <Screen1 />
    );
  }
  