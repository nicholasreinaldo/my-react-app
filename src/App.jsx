import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ]

  const vegetables = [
    { id: 6, name: 'potatoes', calories: 110 },
    { id: 7, name: 'celery', calories: 15 },
    { id: 8, name: 'carrots', calories: 25 },
    { id: 9, name: 'corn', calories: 63 },
    { id: 10, name: 'brocolli', calories: 50 },
  ]
  return (
    <>
      <List items={vegetables} category="Vegetables" />
      <List items={fruits} category="Fruits" />
    </>
  )
}

export default App
