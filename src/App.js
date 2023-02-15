import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';

const customers =[{
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '나동빈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday' : '930922',
  'gender' : '남자',
  'job' : '프로그래머'
},{
  'id':3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이세민',
  'birthday' : '945432',
  'gender' : '여자',
  'job' : '사진'
}
]


class App extends Component {
  render(){
  return (
 <div>
 {
  customers.map(c=>{
    return(
      <Customer
      id={c.id}
      image={c.image}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
      
      />
    )
  })
 }
        </div>
 
 

  );
   
  }
}


export default App;
