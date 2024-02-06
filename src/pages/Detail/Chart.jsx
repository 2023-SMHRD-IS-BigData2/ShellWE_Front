import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import '../Grid.css'; // Import your external CSS file
import data from  '../data.json';

const Grid = () => {
  const [isToggleVisible, setToggleVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleToggleClick = () => {
    setToggleVisible(!isToggleVisible);
  };

  // 예시 handleColumnSelection 함수
const handleColumnSelection = (columnName) => {
  // 선택한 열이 이미 선택되어 있는지 확인
  const isColumnAlreadySelected = selectedColumns.includes(columnName);

  // 선택한 열이 이미 선택되어 있다면 제거, 아니면 추가
  if (isColumnAlreadySelected) {
    setSelectedColumns(selectedColumns.filter(col => col !== columnName));
  } else {
    setSelectedColumns([...selectedColumns, columnName]);
  }
};


  const isColumnSelected = (column) => selectedColumns.includes(column);

  return (
    <div className="grid-container mx-auto my-8 text-center" style={{width:'1900px'}}>
      <div style={{ position: 'relative'}} >
        <button style={{marginLeft: '1670px' }} onClick={handleToggleClick}>
          원하시는 컬럼을 선택해주세요
          </button>
          {isToggleVisible && (
        <div style={{ position: 'absolute', top: '40px', left: '1360px', width: '500px', backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px', zIndex: 1 }}>
          {/* 여기에 나타날 토글 컨텐츠를 추가하세요 */}
          <table border="1">
  <thead>
    <tr>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="HR"
          checked={isColumnSelected('HR')}
          onChange={() => handleColumnSelection('HR')}
        />
        HR
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="O2Sat"
          checked={isColumnSelected('O2Sat')}
          onChange={() => handleColumnSelection('O2Sat')}
        />
        O2Sat
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Temp"
          checked={isColumnSelected('Temp')}
          onChange={() => handleColumnSelection('Temp')}
        />
        Temp
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="SBP"
          checked={isColumnSelected('SBP')}
          onChange={() => handleColumnSelection('SBP')}
        />
        SBP
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="MAP"
          checked={isColumnSelected('MAP')}
          onChange={() => handleColumnSelection('MAP')}
        />
        MAP
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="DBP"
          checked={isColumnSelected('DBP')}
          onChange={() => handleColumnSelection('DBP')}
        />
        DBP
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Resp"
          checked={isColumnSelected('Resp')}
          onChange={() => handleColumnSelection('Resp')}
        />
        Resp
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="EtCO2"
          checked={isColumnSelected('EtCO2')}
          onChange={() => handleColumnSelection('EtCO2')}
        />
        EtCO2
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="BaseExcess"
          checked={isColumnSelected('BaseExcess')}
          onChange={() => handleColumnSelection('BaseExcess')}
        />
        BaseExcess
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="HCO3"
          checked={isColumnSelected('HCO3')}
          onChange={() => handleColumnSelection('HCO3')}
        />
        HCO3
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="FiO2"
          checked={isColumnSelected('FiO2')}
          onChange={() => handleColumnSelection('FiO2')}
        />
        FiO2
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="pH"
          checked={isColumnSelected('pH')}
          onChange={() => handleColumnSelection('pH')}
        />
        pH
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="PaCO2"
          checked={isColumnSelected('PaCO2')}
          onChange={() => handleColumnSelection('PaCO2')}
        />
        PaCO2
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="SaO2"
          checked={isColumnSelected('SaO2')}
          onChange={() => handleColumnSelection('SaO2')}
        />
        SaO2
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="AST"
          checked={isColumnSelected('AST')}
          onChange={() => handleColumnSelection('AST')}
        />
        AST
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="BUN"
          checked={isColumnSelected('BUN')}
          onChange={() => handleColumnSelection('BUN')}
        />
        BUN
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Alkalinephos"
          checked={isColumnSelected('Alkalinephos')}
          onChange={() => handleColumnSelection('Alkalinephos')}
        />
        Alkalinephos
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Calcium"
          checked={isColumnSelected('Calcium')}
          onChange={() => handleColumnSelection('Calcium')}
        />
        Calcium
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Chloride"
          checked={isColumnSelected('Chloride')}
          onChange={() => handleColumnSelection('Chloride')}
        />
        Chloride
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Creatinine"
          checked={isColumnSelected('Creatinine')}
          onChange={() => handleColumnSelection('Creatinine')}
        />
        Creatinine
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Bilirubin_direct"
          checked={isColumnSelected('Bilirubin_direct')}
          onChange={() => handleColumnSelection('Bilirubin_direct')}
        />
        Bilirubin_direct
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Glucose"
          checked={isColumnSelected('Glucose')}
          onChange={() => handleColumnSelection('Glucose')}
        />
        Glucose
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Lactate"
          checked={isColumnSelected('Lactate')}
          onChange={() => handleColumnSelection('Lactate')}
        />
        Glucose
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Magnesium"
          checked={isColumnSelected('Magnesium')}
          onChange={() => handleColumnSelection('Magnesium')}
        />
        Magnesium
      </td>
      <td>
        <input
          type="checkbox"
          name="columm"
          value="Phosphate"
          checked={isColumnSelected('Phosphate')}
          onChange={() => handleColumnSelection('Phosphate')}
        />
        Phosphate
      </td>
    </tr>
  </tbody>
</table>

        </div>
      )}
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="grid-row"  style={{width:'1900px'}}>
            <th className="grid-cell grid-header" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold',width:'190px'}}>date/time</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-01 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-07 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-08 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-08 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-09 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-10 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-11 11:44</th>
            <th className="grid-cell grid-header" style={{width:'190px'}}>2024- 01-11 11:44</th>
          </tr>
        </thead>
        <tbody>
        <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Status</td>
           <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'}} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em'  }} /></td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px'  }}>SMART</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>74</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>85</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>84</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>93</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold',width:'190px' }}>87</td>
          </tr>
          {/* Additional rows can be added following the same pattern */}
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>HR</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>118</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>125</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>132</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>124</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>103</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>133</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>111</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>111</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", textAlign:"center",width:'190px'}}>O2Sat</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>94</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>75</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>78</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>76</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>68</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>89</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Temp</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>62</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>83</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>71</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>99</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>76</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>76</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>SBP</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>38</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>37</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>44</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>33</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>43</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>40</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>37</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>MAP</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>DBT</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Resp</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>EtCO2</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>BaseExcess</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>HCO3</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>FiO2</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>pH</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>PaCO2</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>SaO2</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>AST</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>BUN</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Alkalinephos</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Calcium</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Chloride</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Creatinine</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Bilirubin_direct</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Glucose</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Lactate</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Magnesium</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Phosphate</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Potassium</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Bilirubin_total</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>TroponinI</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Hct</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Hgb</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>PTT</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>WBC</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Fibrinogen</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center",width:'190px' }}>Platelets</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold',width:'190PX' }}>36.6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
