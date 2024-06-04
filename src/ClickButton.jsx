function ClickButton() {
  
  const handleClick = (e) => e.target.textContent = "OUCH!";
    
    return <button onDoubleClick={(e)=> handleClick(e)}>Click me :D</button>
}

export default ClickButton
