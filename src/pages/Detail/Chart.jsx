import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import '../Grid.css'; // Import your external CSS file

const Grid = () => {
  const [isToggleVisible, setToggleVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleToggleClick = () => {
    setToggleVisible(!isToggleVisible);
  };

  // 예시 handleColumnSelection 함수
  const handleColumnSelection = (columnName) => {
    // 선택한 열이 이미 선택되어 있는지 확인
    const isColumnAlreadySelected = selectedColumns.includes(columnName)
    // 선택한 열이 이미 선택되어 있다면 제거, 아니면 추가
    if (isColumnAlreadySelected) {
      setSelectedColumns(selectedColumns.filter(col => col !== columnName));
    } else {
      setSelectedColumns([...selectedColumns, columnName]);
    }
  };


  const isColumnSelected = (column) => selectedColumns.includes(column);

  return (

    <div className="grid-container mx-auto my-8 text-center" style={{ width: '1900px' }}>
      
      <thead>
          <tr className="grid-row" style={{ width: '1900px' }}>
            <th className="grid-cell grid-header" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', width: '190px' }}>HR</th>
            <th className="grid-cell grid-header" style={{ width: '190px', backgroundColor: "#283443" }}>정상</th>
            <th className="grid-cell grid-header" style={{ width: '190px', backgroundColor: "#283443"  }}>확인하기</th>

          </tr>
        </thead>


      {/* 도표 부분 */}
      <table className="table-auto w-full">
        <thead>
          <tr className="grid-row" style={{ width: '1900px' }}>
            <th className="grid-cell grid-header" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', width: '190px' }}>date/time</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-01 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-07 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-08 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-08 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-09 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-10 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-11 11:44</th>
            <th className="grid-cell grid-header" style={{ width: '190px' }}>2024- 01-11 11:44</th>

          </tr>
        </thead>
        <tbody>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Status</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em' }} /></td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em' }} /></td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>SMART</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>59</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>85</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>84</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>93</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>

          </tr>
          <tr className="grid-row">

            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>HR</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>118</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>125</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>132</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>124</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>103</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>133</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>111</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>111</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", textAlign: "center", width: '190px' }}>O2Sat</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>94</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>75</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>78</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>76</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>68</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>89</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Temp</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>62</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>83</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>71</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>99</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>76</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>76</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>SBP</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>38</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>37</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>44</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>33</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>43</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>40</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>37</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>MAP</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>DBT</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Resp</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>EtCO2</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>BaseExcess</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>HCO3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>FiO2</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>pH</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>PaCO2</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>SaO2</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>AST</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>BUN</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Alkalinephos</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Calcium</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Chloride</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Creatinine</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Bilirubin_direct</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Glucose</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Lactate</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Magnesium</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Phosphate</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Potassium</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Bilirubin_total</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>TroponinI</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Hct</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Hgb</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>PTT</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>WBC</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Fibrinogen</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>
          </tr>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Platelets</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190px' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{ textAlign: "center", fontWeight: 'bold', width: '190PX' }}>36.6</td>

          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Grid;