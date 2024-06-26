const rps = (player1, player2) =>
  {
    if (player1 === 'rock')
      {
          if(playe2 ==='rock')
      {
        return 'draw!';
      }
      if (player2 === 'paper')
        {
          return 'player2 won';
        }
      if (player2 === 'scissors')
        {
          return 'player1 won';
        }
      }
      if(player1 === 'paper')
        {
          if(player2 === 'paper')
            {
              return 'draw!';
            }

            if(player2 === 'paper')
              {
                return 'player1 won';
              }
              if(player2 === 'scissors')
                {
                  return 'player2 won';
                }
        }
        if(player1 === 'scissors')
          {
            if (player2 === 'scissors')
              {
                return 'draw!';
              }
              if(player2 ==='paper')
                {
                  return 'player1 won';
                }
                if(player2 === 'rock')
                  {
                    return 'player2 won';
                  }
          }
  };
  console.log(rps);
  