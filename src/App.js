import React from 'react';
import TheCalendar from './components/main/calendar/TheCalendar';
import TheTabs from './components/common/TheTabs';
import TheHeader from './components/common/TheHeader';
import { styled } from 'styled-components';
function App() {
  return (
    <div className="App">
      <Container>
        <TheHeader/>
        <TheTabs />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.section`
position: relative;
border: 1px solid #191919;
width: 430px;
height: 932px;
display: flex;
flex-direction: column;
align-items: center;
`
