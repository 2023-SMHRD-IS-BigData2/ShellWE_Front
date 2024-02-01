import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import '../Grid.css'; // Import your external CSS file
import data from  '../data.json';

const Grid = () => {
  return (
    <div className="grid-container mx-auto my-8">
      <table className="table-auto w-full">
        <thead>
          <tr className="grid-row">
          <th className="grid-cell grid-header">date/time</th>
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
            <td className="grid-cell grid-content-red" style={{color:"red"}}>ROXI</td>
            <td className="grid-cell grid-content">74</td>
            <td className="grid-cell grid-content">87</td>
            <td className="grid-cell grid-content">85</td>
            <td className="grid-cell grid-content">84</td>
            <td className="grid-cell grid-content">89</td>
            <td className="grid-cell grid-content">93</td>
            <td className="grid-cell grid-content">87</td>
          </tr>
          {/* Additional rows can be added following the same pattern */}
          <tr className="grid-row">
          <td className="grid-cell grid-content">SBP</td>
          <td className="grid-cell grid-content">118</td>
            <td className="grid-cell grid-content">125</td>
            <td className="grid-cell grid-content">132</td>
            <td className="grid-cell grid-content">124</td>
            <td className="grid-cell grid-content">103</td>
            <td className="grid-cell grid-content">133</td>
            <td className="grid-cell grid-content">111</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content">DBP</td>
          <td className="grid-cell grid-content">94</td>
            <td className="grid-cell grid-content">75</td>
            <td className="grid-cell grid-content">78</td>
            <td className="grid-cell grid-content">76</td>
            <td className="grid-cell grid-content">68</td>
            <td className="grid-cell grid-content">82</td>
            <td className="grid-cell grid-content">89</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content">HR</td>
          <td className="grid-cell grid-content">62</td>
            <td className="grid-cell grid-content">83</td>
            <td className="grid-cell grid-content">82</td>
            <td className="grid-cell grid-content">71</td>
            <td className="grid-cell grid-content">82</td>
            <td className="grid-cell grid-content">99</td>
            <td className="grid-cell grid-content">76</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content">RR</td>
          <td className="grid-cell grid-content">38</td>
            <td className="grid-cell grid-content">44</td>
            <td className="grid-cell grid-content">33</td>
            <td className="grid-cell grid-content">43</td>
            <td className="grid-cell grid-content">36</td>
            <td className="grid-cell grid-content">40</td>
            <td className="grid-cell grid-content">37</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content">BT</td>
          <td className="grid-cell grid-content">36.8</td>
            <td className="grid-cell grid-content">36.0</td>
            <td className="grid-cell grid-content">35.6</td>
            <td className="grid-cell grid-content">36.3</td>
            <td className="grid-cell grid-content">35.7</td>
            <td className="grid-cell grid-content">35.9</td>
            <td className="grid-cell grid-content">36.6</td>
          </tr>
          <tr className="grid-row">
          <td className="grid-cell grid-content">Status</td>
          <td className="grid-cell grid-content"><FontAwesomeIcon icon={faLandMineOn} style={{ color: "#ff0000" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faLandMineOn} style={{ color: "#ff0000" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faLandMineOn} style={{ color: "#ff0000" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FFD43B" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faShieldHeart} style={{ color: "#2e8d3b" }} /></td>
            <td className="grid-cell grid-content"><FontAwesomeIcon icon={faShieldHeart} style={{ color: "#2e8d3b" }} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
