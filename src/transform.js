const transformDate = (date) => {
  const year = date.toString().slice(0,2)
  const month = date.toString().slice(2,4)
  const day = date.toString().slice(4,6)
  return `${day}.${month}.${year}`
}

console.log(transformDate(201131))