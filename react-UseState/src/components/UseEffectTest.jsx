import React from 'react'

const UseEffecetTest = () => {
    const [name, setName] = useState("김개똥");
    const [num, setNum] = useState(0);

    const handleChangeName = (ev) => setName(ev.target.value);
    const handleChangeNum = (ev) => setNum(prev => prev+1);


    return (
  <div>

    <h2>useEffect 테스트</h2>
    <p>안녕하세요. <strong>{name}</strong>입니다.</p>

    <input
      type="text"
      onChange={handleChangeName}
      value={name}
      placeholder='이름을 입력...'
    />

    <p>버튼을 <strong>{num}</strong>번 클릭하셨습니다.</p>
    <button onClick={handleChangeNum}>+1</button>

  </div>
)

}

export default UseEffectTest