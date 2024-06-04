function ClickButton() {
  
  const handleClick = (e) => console.log(e);
    
    return <button onClick={(e)=> handleClick(e)}>Click me :D</button>
}

export default ClickButton
