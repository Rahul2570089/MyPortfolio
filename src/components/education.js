import React from 'react'
import '../App.css'

const Education = () => {
  return (
    <>
      <div className="back1" style={{fontWeight: 'bolder'}}>
        <div className='college'>
          <h2 style={{fontWeight: 'bolder'}}>College academics</h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{color: 'white', width: '50'}}>
                <th scope="col">SEM</th>
                <th scope="col">SPI</th>
                <th scope="col">CPI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{color: 'white'}}>
                <th scope="row">1</th>
                <td>8.87</td>
                <td>8.87</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">2</th>
                <td>9.27</td>
                <td>9.08</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">3</th>
                <td>8.96</td>
                <td>8.96</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">4</th>
                <td>8.15</td>
                <td>8.54</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">5</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">6</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">7</th>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">8</th>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='college'>
          <h2 style={{fontWeight: 'bolder'}}>12th class</h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{color: 'white'}}>
                <th scope="col">Exam</th>
                <th scope="col">Marks</th>
                <th scope="col">Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{color: 'white'}}>
                <th scope="row">GSEB (PCM)</th>
                <td>325/400</td>
                <td>96.66</td>
              </tr>
              <tr style={{color: 'white'}}>
                <th scope="row">GUJCET</th>
                <td>85/120</td>
                <td>96.66</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='college'>
          <h2 style={{fontWeight: 'bolder'}}>10th class</h2>
          <table class="table table-bordered my-4">
            <thead>
              <tr style={{color: 'white'}}>
                <th scope="col">Exam</th>
                <th scope="col">Marks</th>
                <th scope="col">Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{color: 'white'}}>
                <th scope="row">GSEB</th>
                <td>562/600</td>
                <td>99.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Education