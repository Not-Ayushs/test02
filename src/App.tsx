import React, {useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    "name": "Jason Miller",
    "age": 28,
    "city": "New York",
    "profession": "Software Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Priya Sharma",
    "age": 24,
    "city": "Mumbai",
    "profession": "Graphic Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "name": "Liam Johnson",
    "age": 31,
    "city": "London",
    "profession": "Data Scientist",
    "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    "name": "Sophia Chen",
    "age": 26,
    "city": "Singapore",
    "profession": "Marketing Specialist",
    "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    "name": "Carlos Martinez",
    "age": 35,
    "city": "Madrid",
    "profession": "Architect",
    "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
  }
]


//   const[a, setA] = useState(0);
  
//   // const changeA = () => {
//   //   setA(300);
//   //   console.log("Chal gya...");
//   // }
//   const submitHandler = () => {
//     console.log();
//   };
//   return (
//     <div>
//       <h1 className='text-5xl bg-red-300 text-white'>User is {a}</h1>
//       <button onClick={() =>setA(a+10)}>SUBMIT</button>
//       <button onClick={() =>setA(a-10)}>DECREMENT</button>
//       <div>
//         <form onSubmit={submitHandler}>
//           <input className='px-4 py-3' type="text"  placeholder='Enter your name' />
//           <button className='px-4 py-3 font-semibold text-xl text-white bg-emerald-600 rounded'>Submit</button>
//         </form>
//       </div>
//     </div>
//   )

    return (
    
      <div className='p-10 flex gap-6'>
        {users.map(function(elem){
          return <Card username={elem.name} age={elem.age} city={elem.city} profilePhoto={elem.profilePhoto}  />
        })}
              
      </div>
    
    );  
}

export default App