import React, { useState } from 'react';

const Calculator = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [saleTax, setSaleTax] = useState(0);

 
  const total = subTotal + saleTax;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '800px' }}>
        {/* First Column */}
        <div style={{ width: '600px',paddingBottom: '19px', textAlign: 'right',marginRight: 0 ,paddingRight:0 }}>
          <div style={{ ...rowStyle, borderBottom: 'none',fontSize:'30px' }}>Sub Total</div>
          <div style={{...rowStyle,fontSize:'30px'}}>Sale Tax (15%)</div>
          <div style={{ ...rowStyle, borderBottom: 'none',fontSize:'30px', backgroundColor: 'lightgray' }}>Total</div>
        </div>

        {/* Second Column */}
        <div style={{ width: '600px',paddingBottom: '20px',  textAlign: 'right' }}>
          <div style={rowStyle}>
            <input
              type="text"
              value={subTotal}
              onChange={(e) => setSubTotal(parseFloat(e.target.value) || 0)}
              style={{ ...inputStyle, textAlign: 'right',fontSize:'30px',  }}
            />
          </div>
          <div style={rowStyle}>
            <input
              type="text"
              value={saleTax}
              onChange={(e) => setSaleTax(parseFloat(e.target.value) || 0)}
              style={{ ...inputStyle, textAlign: 'right',fontSize:'30px',  }}
            />
          </div>
          <div style={{ ...rowStyle, backgroundColor: 'lightgray' , justifyContent: 'flex-end',fontSize:'30px'}}>
            $&nbsp;&nbsp;&nbsp;{total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};



const rowStyle = {
  height: '85px',
  
  display: 'flex',
  alignItems: 'center',
};


const inputStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
};

export default Calculator;
