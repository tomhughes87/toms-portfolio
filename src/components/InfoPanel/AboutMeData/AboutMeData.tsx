// interface aboutMeDataInterface {
//   title: string;
//   text: string | [];
// }
import ProcessDataScrollRev from "./ProcessDataScrollRev";

export const AboutMeData = [
  {
    title: "Title testing",
    text: ProcessDataScrollRev(`Ukrainian soldiers have been welcomed into Kherson by jubilant residents,
    after Russia said it had fully withdrawn from the key  southern city.
    Video showed locals on the streets, flying Ukraine's`),
    // image: { pic },
  },
  {
    title: "Water Colours",
    text: ProcessDataScrollRev(`Painting is fun when you are traveling, i like it a lot because it make you
    appricate where you are and keeps you in the moment. i first started painting 6 years ago
    when traveling in the Balkans`),
    // image: { pic },
  },

  {
    title: "3D modeling",
    text: ProcessDataScrollRev(`I've been 3d modeling for many years as a hobby, i use 3dmax, zbrush and substance painter
    and often upload my work to sketchfab. it's fun but i was finidng it hard to break into the industry
    and thought it would be best to keep it as a hobby.`),
    // image: { pic },
  },
  {
    title: "another test modeling",
    text: ProcessDataScrollRev(`I've been 3d modeling for many years as a hobby, i use 3dmax, zbrush and substance painter
    and often upload my work to sketchfab. it's fun but i was finidng it hard to break into the industry
    and thought it would be best to keep it as a hobby. `),
    // image: { pic },
  },
];
