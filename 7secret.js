function greet(name)
{
  return "hello ," +(name=="jonny"?"hey there!" :name)+"!";
}
var name = "jonny";
console.log(greet(name));