var place = 1
function takeANumber(line) 
{
  place++
  line.push(place)
  return `Welcome, you are number ${place}.`
}

function nowServing(line) {
  if (line.length === 0) 
  { return "There is nobody waiting to be served!" 
} 
  else 
  {return `Currently serving ${line.shift()}.`
}
}

function currentLine(line)  {if (line.length === 0) {
 return "The line is currently empty."}

{
  var newline = []
  for(let i = 0, l = line.length; i < l; i++)
  {
    newline.push(`${i + 1}. ${line[i]}`)
  }
} 
 return `The line is currently: ${newline.join(", ")}`
}