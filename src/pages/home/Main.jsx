import React from 'react';

// 더미 데이터
const cardData = [
  { id: 1, title: '카드 1', content: '이것은 첫 번째 카드입니다.' },
  { id: 2, title: '카드 2', content: '이것은 두 번째 카드입니다.' },
  { id: 3, title: '카드 3', content: '이것은 세 번째 카드입니다.' },
];

// 각각의 카드를 렌더링하는 함수형 컴포넌트
const Card = ({ title, content }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
    <h2>{title}</h2>
    <p>{content}</p>
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
    <h1>카드 형식의 화면</h1>
    <CardList data={cardData} />
  </div>
);

export default App;
