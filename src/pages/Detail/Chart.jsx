import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import '../Grid.css'; // Import your external CSS file
import data from '../data.json';

const Grid = () => {
  return (
    <div className="grid-container mx-auto my-8 text-center" style={{ width: '1900px' }}>
      <table className="table-auto w-full">
        <thead>
          <tr className="grid-row" style={{ width: '1900px' }}>
            <th className="grid-cell grid-header" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', width: '190px' }}>date/time</th>
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
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>Status</td>
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
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>74</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>85</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>84</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>89</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>93</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>
            <td className="grid-cell grid-content text-center" style={{ color: "red", textAlign: "center", fontWeight: 'bold', width: '190px' }}>87</td>
          </tr>
          {/* Additional rows can be added following the same pattern */}
          <tr className="grid-row">
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>SBP</td>
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
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", textAlign: "center", width: '190px' }}>DBP</td>
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
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>HR</td>
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
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#283443", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>RR</td>
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
            <td className="grid-cell grid-content text-center" style={{ backgroundColor: "#3e4956", color: "white", fontWeight: 'bold', textAlign: "center", width: '190px' }}>BT</td>
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