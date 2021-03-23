import chatApp from "../images/100ppi/appchat.PNG";
import ReactjsImg from "../images/100ppi/icons8-react-native-240.png";
import FirebaseImg from "../images/100ppi/icons8-firebase-240 (1).png";
import SassImg from "../images/100ppi/icons8-sass-240.png";
import coffeeShop from "../images/100ppi/ceremony.PNG";
import videoTest from "../images/100ppi/React App - Opera 2021-02-26 22-42-31.mp4";
import flappyBird from "../images/100ppi/flappy-bird.PNG";
import spotifyImg from '../images/100ppi/projects/spotify/Capture.PNG'
import spotifyVideo from "../images/100ppi/projects/spotify/Mint's Music Player - Opera 2021-03-23 15-56-10.mp4"
import quizzImg from '../images/100ppi/projects/Quizz/Capture.PNG'
import quizzVideo from '../images/100ppi/projects/Quizz/React App - Opera 2021-03-23 15-58-23.mp4'
import TypescriptImg from '../images/100ppi/icons8-typescript-240.png'
import flappyBirdVidep from "../images/100ppi/Mint's App - Opera 2021-03-06 22-46-37.mp4"
export const STATIC_PROJECT_API = [
  {
    image: chatApp,
    name: "Realtime Chat Application",
    id: 1,
    url: "https://minttran9001.github.io/realtime-chat-application",
    video: videoTest,
    technologies: [
      {
        name: "Reactjs",
        image: ReactjsImg,
      },
      {
        name: "Firebase",
        image: FirebaseImg,
      },
      {
        name: "Sass",
        image: SassImg,
      },
    ],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
  },
  {
    image: coffeeShop,
    id: 2,
    name: "Ceremony Coffee Website",
    url: "https://minttran9001.github.io/ceremony-coffee-shop/",
    video: videoTest,
    technologies: [
      {
        name: "Reactjs",
        image: ReactjsImg,
      },
      {
        name: "Sass",
        image: SassImg,
      },
    ],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
  },
  {
    image: flappyBird,
    id: 3,
    name: "Flappy Bird Clone",
    video: flappyBirdVidep,
    url: "https://minttran9001.github.io/flappy-bird-clone/",
    technologies: [
      {
        name: "Reactjs",
        image: ReactjsImg,
      },
    ],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
  },
  {
   image :  quizzImg,
   name : "Quiz App",
   video : quizzVideo,
   url : "https://quizz-app-dbc0e.web.app",
   technologies : [
     {
       name : "Reactjs",
       image : ReactjsImg,
     },
     {
       name : "Typescript",
      image : TypescriptImg,
     }
   ],
   description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
  },
  {
    image :  spotifyImg,
    name : "Spotify Music Player",
    video : spotifyVideo,
    url : "https://spotify-clone-app-414f0.web.app",
    technologies : [
      {
        name : "Reactjs",
        image : ReactjsImg,
      },
    ],
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et minima quos! Odio debitis fugiat minus officiis incidunt enim id quo sed beatae animi, quibusdam quisquam facilis velit molestias? Voluptatem",
   }
];
