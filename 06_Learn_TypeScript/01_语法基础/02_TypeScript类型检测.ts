// args: string | number[]
// args: string | any[]
function getLength(args: {length: number}) {
  return args.length
}

getLength("aaaa")
getLength([1,2,4, "cba"])

const info = {
  length: 100
}
getLength(info)

// getLength(123)
// getLength()

export {}