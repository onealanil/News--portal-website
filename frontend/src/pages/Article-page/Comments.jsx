
export let commentsData = [
  {
    id: '1',
    text: `Ashley!!! Look... at... Me.`,
    timestamp: '7/23/2023, 5:35:18 PM',
    profileImg: 'https://i.pinimg.com/1200x/9a/bb/94/9abb9492b3743a8d65b3052b969a9221.jpg',
    profileName: 'HomeLander',
  },
  {
    id: '2',
    text: `I am a Barbie Girl in the Barbie world, Life if plastic it's fantastic.`,
    timestamp: '7/23/2023, 5:35:18 PM',
    profileImg: 'https://i.pinimg.com/736x/69/7a/df/697adf5b00ca77e1929840765bd86372.jpg',
    profileName: 'Barb-E',
  },
  {
    id: '3',
    text: 'I am become death, the destroyer of worlds.',
    timestamp: '7/23/2023, 5:35:18 PM',
    profileImg: 'https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/3:2/w_1620,h_1080,c_limit/230222_oppenheimer_HP.jpg',
    profileName: 'Oppenheimer',
  },
  {
    id: '4',
    text: 'Winter is comming, and with winter comes the white walkers.',
    timestamp: '7/23/2023, 5:35:18 PM',
    profileImg: 'https://images.hindustantimes.com/img/2022/12/12/550x309/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg',
    profileName: 'John Snow',
  },
  {
    id: '5',
    text: `And a man, a man provides. And he does it even when he's not appreciated, or respected, or even loved. He simply bears up and he does it. Because he's a man.`,
    timestamp: '7/23/2023, 5:35:18 PM',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2XgnSAnhvrrSXaFujlnjmx533RMXY5fikg&usqp=CAU',
    profileName: 'Gustavo Fring',
  },
];


export const addComment = (comment) => {
  console.log('adding comment:', comment);
  commentsData.push(comment);
  console.log("Updated comment:", commentsData);
};

export const removeComment = (commentId) => {
  console.log("Removing comment with ID:", commentId);
  commentsData = commentsData.filter((comment) => comment.id !== commentId);
  console.log("Updated commentsData:", commentsData);
};