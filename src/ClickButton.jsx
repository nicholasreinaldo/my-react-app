function ClickButton() {
  const handleClick = () => console.log("OUCH")
  const handleClick2 = (name) => console.log(`${name} stop clicking me`)
  return <button onClick={handleClick2("Nicholas")}>Click me :D</button>
}

export default ClickButton
