const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerObject = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  answerObject.nickname = name;  
  rl.question('What\'s an activity you like doing? ', (activity) => {
    answerObject.activity = activity;
    rl.question('What do you listen to while doing that? ', (music) => {
      answerObject.music = music;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        answerObject.breaklundin = meal;
        rl.question('What\'s your favourite thing to eat for that meal? ', (eatmeal) => {
          answerObject.food = eatmeal;
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answerObject.sport = sport;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answerObject.superpower = superpower;
              console.log('Thanks for your responses. Here\'s your profile!');

              console.log(`\n
              My name is ${answerObject.nickname}.\n
              An activity I like is ${answerObject.activity}.\n
              I like to listen to ${answerObject.music}.\n
              My favourite meal of the day is ${answerObject.breaklundin}.\n
              My favourite food to eat is ${answerObject.food}.\n
              I like to play ${answerObject.sport}.\n
              I have a superpower. It's ${answerObject.superpower}.\n`)

              rl.close();
            });
          });
        });
      });
    });
  });
});
