/* eslint-disable */  //terminal에 warnings 안보이게

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';

// jsx문법
function App() {

  let data = '변수 바인딩 가능';

  function binding(){
    return '함수 바인딩 가능'
  }
  let cName = 'black-nav';

  // 스타일은 무조건 중괄호
  let styleLet = {color: 'skyblue', fontSize: '30px'};

  // 데이터 넣는 방법 state
  // useState를 생성하면 [a,b] 형식의 array가 생성되어 짐 a는 값이고 b는 데이터 변경 함수
  // 그것을 let을 이용하여 각각 a에 값 b에 함수를 저장하게 함
  // state 사용 이유 웹이 App처럼 동작하게 만들고 싶을 때 사용, 새로고침 없이 렌더링
  let [desc, fnDesc] = useState(['let 대신 state에 저장', 'array도 가능']);

  let [favCnt, fnFavCnt] = useState(0);

  let btnStyle = {marginLeft:'5px'};
  function btnAction(){
    // fnDesc(['변경함수를 사용', '성공']);
    // array나 Obejct 자료형은 deep copy 해야 함(reference data type 특징)
    // array는 [] Object는 {}
    var modArray = [...desc]; /* deep copy를 하지 않으면 값 공유만 */
    modArray[0] = 'onClick 이벤트로 0번째만 변경 가능';
    fnDesc(modArray);
    /*
      1. 기존 state 카피본을 만든다.
      2. 카피본에 수정사항 반영
      3. 변경함수()에 넣기
    */
  }

  return (
    <div className="App">
      <Header/>
      <Contents/>
    </div>

















    /*
    <div className="App">
      <div className={cName}>
        <div style={styleLet}>React</div>
        <button style={btnStyle} onClick={btnAction}>✔</button>
      </div>
      <h4>{data}</h4>
      <h4>{binding()}</h4>
      <img src={logo} />

      <div className="list">
        <hr/>
        <h3>{desc[0]} <span onClick={ ()=>{fnFavCnt(favCnt+1)} }>👍</span> {favCnt}</h3>
                      // function (){} :: ()=>
        <p>{desc[1]}</p>
      </div>

      <Modal/>
      
    </div>
    */
  );
}

/* Commponent 생성
  유의사항 1. 이름은 대문자 시작
           2. return() 안에 있는건 태그 하나로 묶어야함.
              의미없는 <div> 생략하려면 <>, </> 사용.
*/
function Modal(){
  return (
    <div className="modal">
      <p>모달화면</p>
    </div>
  )
}

export default App;
