const Hello1 = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>Hello world, it's {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  )
}
  
const Hello2 = (props) => {
  console.log(props)
  const bornYear=()=>{
    return new Date().getFullYear() - props.age
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>so you were born in {bornYear()} </p>
    </div>
  )
}

export { Hello1, Hello2};