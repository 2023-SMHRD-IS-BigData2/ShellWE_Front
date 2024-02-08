import React from 'react';
import ContactsWrapper from '../Main/Main';

// 더미 데이터
const cardData1 = [
  { id: 1, content: <ContactsWrapper /> },
];

// 각각의 카드를 렌더링하는 함수형 컴포넌트
const Card = ({ title, content }) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '20px' }}>
      <h1 style={{ fontSize: '24px', margin: '0', paddingBottom: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'  }}>{title}</h1>
      <p style={{ maxHeight: '500px', overflow:'auto' }}>{content}</p>
    </div>
  );
  

// 카드 목록을 렌더링하는 함수형 컴포넌트
const CardList = ({ data }) => (
  <div>
    {data.map(card => (
      <Card key={card.id} title={card.title} content={card.content} />
    ))}
  </div>
);

// App 컴포넌트
const App = () => (
  <div>
    <h2 style={{margin:'50px'}}>전체 환자 수</h2>
    <CardList data={cardData1}/>

  </div>
);

export default App;
