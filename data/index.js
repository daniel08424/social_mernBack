import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Rogers",
    email: "steverogers@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "istockphoto-1399565382-612x612.jpeg",
    friends: [],
    location: "New York, CA",
    occupation: "Motivational Speaker",
    viewedProfile: 20,
    impressions: 1000,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "John",
    lastName: "Williams",
    email: "johnwick@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "360_F_241800383_iDZI5KL0G44EiMEcgQXToVFRA0GGoS3M.jpeg",
    friends: [],
    location: "Korea, CA",
    occupation: "Hacker",
    viewedProfile: 50,
    impressions: 2000,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Tony",
    lastName: "Stark",
    email: "tonystark@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpeg",
    friends: [],
    location: "Utah, CA",
    occupation: "Data Analyst",
    viewedProfile: 20,
    impressions: 1500,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Steve",
    lastName: "Harvey",
    email: "steveharvey@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "MV5BYzFlMjgwOTgtMjVlNy00NzliLTgxYzgtYTlmMmMzZTFiMTc2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Comedian",
    viewedProfile: 100,
    impressions: 3000,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Jennifer",
    lastName: "Lowrance",
    email: "jenniferLowrance@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpeg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Developer",
    viewedProfile: 1000,
    impressions: 5000,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "Canva-by-Viktor-Gladkov-Portrait-of-Young-Beautiful-Business-Woman-852x572.jpeg",
    friends: [],
    location: "Washington, DC",
    occupation: "Cloud Engineer",
    viewedProfile: 500,
    impressions: 2000,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Rogers",
    location: "New York, CA",
    description: "Hey, I'm Steve. I am a Motivational Speaker",
    picturePath: "istockphoto-1399565382-612x612.jpeg",
    userPicturePath: "istockphoto-1399565382-612x612.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Your motivated me a lot",
      "Nice post",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "John",
    lastName: "Williams",
    location: "Korea, CA",
    description:
      "Hey i am John Williams. I am a Cyber Security Engineer",
    picturePath: "360_F_241800383_iDZI5KL0G44EiMEcgQXToVFRA0GGoS3M.jpeg",
    userPicturePath: "360_F_241800383_iDZI5KL0G44EiMEcgQXToVFRA0GGoS3M.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Nice post",
      "Can you provide some resourse to study cyber security",
      "is there any job openings in your company?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Tony",
    lastName: "Stark",
    location: "Utah, CA",
    description:
      "Hey i am Tony Stark. I am a Data Scientist Engineer",
    picturePath: "360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpeg",
    userPicturePath: "360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "is Data Analyst is good option start my career?",
      "Can you refer for job on your company.",
      "Can you provide some resourse to study data science",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Steve",
    lastName: "Harvey",
    location: "Los Angeles, CA",
    description:
      "Can make everyone smile :)",
    picturePath: "MV5BYzFlMjgwOTgtMjVlNy00NzliLTgxYzgtYTlmMmMzZTFiMTc2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpeg",
    userPicturePath: "MV5BYzFlMjgwOTgtMjVlNy00NzliLTgxYzgtYTlmMmMzZTFiMTc2XkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Nice post",
      "Thats funny",
      "you can make everyone smila",
      "i dont like it",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Jennifer",
    lastName: "Lawrence",
    location: "Chicago, IL",
    description:
      "Hey i am Jennifer Lawrance. I am a Full stack developer at Google",
    picturePath: "360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpeg",
    userPicturePath: "360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Can you provide the experience how you joined Google",
      "you are beautiful",
      "tips to join on google",
      "Are you a Full time employee at google"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "Hey i am Jessica Dunn, i am a Cloud Engineer",
    picturePath: "Canva-by-Viktor-Gladkov-Portrait-of-Young-Beautiful-Business-Woman-852x572.jpeg",
    userPicturePath: "Canva-by-Viktor-Gladkov-Portrait-of-Young-Beautiful-Business-Woman-852x572.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "is cloud is an emerging technology",
      "can you provide some tips for placement",
    ],
  },
];
