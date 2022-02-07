// This is an object
const team = {
  // This property stores an array of team players full name and age
    _players:[
        {fistName: 'Tim', lastName: 'Cheng', age: 14},
        {fistName: 'Nando', lastName: 'Boom', age: 15},
        {fistName: 'Nate', lastName: 'Quin', age: 13}
     ],
     // This property stores soccer teams statistics
    _games: [
      {opponent: 'Barcelona', teamPoints: 3, opponentPoints: 1},
      {opponent: 'Real Madrid', teamPoints: 4, opponentPoints: 2},
      {opponent: 'Chelsea', teamPoints: 5, opponentPoints: 3}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    //This method will add players to the _players property
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      this._players.push(player);
    },
    //This method will add games to the _games property
    
    addGame(opponentsName, teamsPoint, opponentsPoint) {
      let game = {
        opponentsName: opponentsName,
        teamsPoint: teamsPoint,
        opponentsPoint: opponentsPoint,            
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Celtic', 2, 4);
  team.addGame('Juventus', 5, 2);
  team.addGame('Chivas', 1, 3);
  
  console.log(team._games);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  