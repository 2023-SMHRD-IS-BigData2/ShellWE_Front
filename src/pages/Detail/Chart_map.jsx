import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import '../Grid.css'; // Import your external CSS file
import data from  '../data.json';

const Grid = () => {
  return (
    
    <div className="grid-container mx-auto my-8 text-center">
      <table className="table-auto w-full">
        <thead>
          <tr className="grid-row">
          <th className="grid-cell grid-header" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold' }}>date/time</th>
            <th className="grid-cell grid-header">2024- 01-01 11:44</th>
            <th className="grid-cell grid-header">2024- 01-07 11:44</th>
            <th className="grid-cell grid-header">2024- 01-08 11:44</th>
            <th className="grid-cell grid-header">2024- 01-08 11:44</th>
            <th className="grid-cell grid-header">2024- 01-09 11:44</th>
            <th className="grid-cell grid-header">2024- 01-10 11:44</th>
            <th className="grid-cell grid-header">2024- 01-11 11:44</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center"  }}>SMART</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>74</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>85</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>84</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>93</td>
            <td className="grid-cell grid-content text-center" style={{color:"red", textAlign:"center", fontWeight: 'bold' }}>87</td>
          </tr>
          {/* Additional rows can be added following the same pattern */}
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center" }}>SBP</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>118</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>125</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>132</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>124</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>103</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>133</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>111</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", textAlign:"center"}}>DBP</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>94</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>75</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>78</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>76</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>68</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>89</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center" }}>HR</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>62</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>83</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>71</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>82</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>99</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>76</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center" }}>RR</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>38</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>44</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>33</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>43</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>36</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>40</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>37</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign:"center" }}>BT</td>
          <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>36.8</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>36.0</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>35.6</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>36.3</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>35.7</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>35.9</td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}>36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign:"center" }}>Status</td>
           <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'}} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#e43e31", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em'  }} /></td>
            <td className="grid-cell grid-content text-center" style={{textAlign:"center", fontWeight: 'bold' }}><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#259745", fontSize: '2em'  }} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
