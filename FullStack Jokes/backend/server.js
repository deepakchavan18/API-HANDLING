import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is READY');
// });

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {     //Standardization for the API
    const jokes = [
        {
          "id": 1,
          "title": "The Math Book",
          "content": "Why was the math book sad? Because it had too many problems."
        },
        {
          "id": 2,
          "title": "The Scarecrow",
          "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "The Computer",
          "content": "Why was the computer cold? It left its Windows open."
        },
        {
          "id": 4,
          "title": "The Pencil",
          "content": "Why did the pencil go to the principal's office? It was acting a little sketchy."
        },
        {
          "id": 5,
          "title": "The Calendar",
          "content": "Why was the calendar always anxious? Its days were numbered."
        },
        {
          "id": 6,
          "title": "The Light Bulb",
          "content": "How many programmers does it take to change a light bulb? None, that's a hardware problem."
        },
        {
          "id": 7,
          "title": "The Ghost",
          "content": "Why don’t ghosts like rain? It dampens their spirits."
        },
        {
          "id": 8,
          "title": "The Elevator",
          "content": "Why did the elevator break up with the escalator? It couldn’t handle the ups and downs."
        },
        {
          "id": 9,
          "title": "The Bicycle",
          "content": "Why can’t a bicycle stand up by itself? It’s two-tired."
        },
        {
          "id": 10,
          "title": "The Chicken",
          "content": "Why did the chicken go to the seance? To talk to the other side."
        },
        {
          "id": 11,
          "title": "The Clock",
          "content": "Why did the clock get kicked out of the classroom? It was always ticking people off."
        },
        {
          "id": 12,
          "title": "The Tomato",
          "content": "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
          "id": 13,
          "title": "The Fish",
          "content": "Why are fish so bad at basketball? They’re afraid of the net."
        },
        {
          "id": 14,
          "title": "The Ladder",
          "content": "Why did the ladder break up with the step stool? It needed space."
        },
        {
          "id": 15,
          "title": "The Coffee",
          "content": "Why did the coffee file a police report? It got mugged."
        },
        {
          "id": 16,
          "title": "The Moon",
          "content": "Why did the moon skip dinner? It was already full."
        },
        {
          "id": 17,
          "title": "The Tree",
          "content": "Why did the tree go to the dentist? It needed a root canal."
        },
        {
          "id": 18,
          "title": "The Shoe",
          "content": "Why did the shoe go to therapy? It had too many soles to deal with."
        },
        {
          "id": 19,
          "title": "The Ice Cream",
          "content": "Why did the ice cream truck break down? It had too many meltdowns."
        },
        {
          "id": 20,
          "title": "The Baseball",
          "content": "Why did the baseball player bring a ladder to the game? He wanted to reach new heights."
        },
        {
          "id": 21,
          "title": "The Banana",
          "content": "Why did the banana go to the doctor? It wasn’t peeling well."
        },
        {
          "id": 22,
          "title": "The Owl",
          "content": "Why don’t owls make good comedians? Their jokes are too hoo-tful."
        },
        {
          "id": 23,
          "title": "The Egg",
          "content": "Why did the egg hide? It didn’t want to crack under pressure."
        },
        {
          "id": 24,
          "title": "The Dog",
          "content": "Why did the dog sit in the shade? It didn’t want to be a hot dog."
        },
        {
          "id": 25,
          "title": "The Cat",
          "content": "Why did the cat sit on the computer? To keep an eye on the mouse."
        },
        {
          "id": 26,
          "title": "The Book",
          "content": "Why did the book go to therapy? It had too many issues."
        },
        {
          "id": 27,
          "title": "The Pizza",
          "content": "Why did the pizza go to the party? It wanted to be a little saucy."
        },
        {
          "id": 28,
          "title": "The Balloon",
          "content": "Why did the balloon go to the party alone? It didn’t want to be deflated."
        },
        {
          "id": 29,
          "title": "The Cookie",
          "content": "Why did the cookie go to the doctor? It felt crummy."
        },
        {
          "id": 30,
          "title": "The Frog",
          "content": "Why did the frog take the bus? His car got toad away."
        },
        {
          "id": 31,
          "title": "The Duck",
          "content": "Why did the duck get a medal? For quacking the code."
        },
        {
          "id": 32,
          "title": "The Snowman",
          "content": "Why did the snowman call his dog Frost? Because Frost bites."
        },
        {
          "id": 33,
          "title": "The Pen",
          "content": "Why did the pen go to jail? It was caught in a sketchy situation."
        },
        {
          "id": 34,
          "title": "The Chair",
          "content": "Why did the chair get promoted? It had great standing in the company."
        },
        {
          "id": 35,
          "title": "The Star",
          "content": "Why did the star go to school? To get a little brighter."
        },
        {
          "id": 36,
          "title": "The Bread",
          "content": "Why did the bread go to the therapist? It was feeling crumby."
        },
        {
          "id": 37,
          "title": "The Cloud",
          "content": "Why did the cloud break up with the wind? It needed some space."
        },
        {
          "id": 38,
          "title": "The Robot",
          "content": "Why did the robot go on a diet? It had too many bytes."
        },
        {
          "id": 39,
          "title": "The Skeleton",
          "content": "Why didn’t the skeleton go to the party? It had no body to go with."
        },
        {
          "id": 40,
          "title": "The Pirate",
          "content": "Why couldn’t the pirate learn the alphabet? He kept getting lost at C."
        },
        {
          "id": 41,
          "title": "The Bee",
          "content": "Why did the bee get married? Because it found its honey."
        },
        {
          "id": 42,
          "title": "The Ant",
          "content": "Why don’t ants get sick? Because they have tiny ant-bodies."
        },
        {
          "id": 43,
          "title": "The Clock",
          "content": "Why did the clock get fired? It kept taking too many seconds off."
        },
        {
          "id": 44,
          "title": "The Tomato",
          "content": "Why did the tomato turn green? It saw the salad dressing!"
        },
        {
          "id": 45,
          "title": "The Fish",
          "content": "Why are fish so smart? They live in schools."
        },
        {
          "id": 46,
          "title": "The Ladder",
          "content": "Why did the ladder break up with the step stool? It needed space."
        },
        {
          "id": 47,
          "title": "The Coffee",
          "content": "Why did the coffee go to the police? It got mugged."
        },
        {
          "id": 48,
          "title": "The Moon",
          "content": "Why did the moon skip dinner? It was already full."
        },
        {
          "id": 49,
          "title": "The Tree",
          "content": "Why did the tree go to the dentist? It needed a root canal."
        },
        {
          "id": 50,
          "title": "The Shoe",
          "content": "Why did the shoe go to therapy? It had too many soles to deal with."
        }
      ];
      res.send(jokes);
});

const port = process.env.PORT || 3000;


app.listen(port,() => {
    console.log(`Server is running on port http://localhost:${port}`);
});