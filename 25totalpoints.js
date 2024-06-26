function points(gamesarray)
{
  let totalpoints =0;
  for (let i = 0 ; i < gamesarray.length;i++)
    {
      const values = gamesarray[i];
      let  parts = values.split(" : ");
      const x = parts[0];
      const y = parts[1];
      if(x>y)
        {
          totalpoins = totalpoints + 1;
        }
        else if(x===y)
          {
            totalpoints += 1;
          }
    }
    return totalpoints;
}
let gamesarray=['2:4', '3:4'];
console.log(points(gamesarray));
