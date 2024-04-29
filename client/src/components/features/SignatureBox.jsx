import React, {useState} from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignatureBox = () => {
    const [sign,setSign]=useState()
    const [url,setUrl] = useState()

const handleClear=()=>{
    sign.clear();
}

const handleSave=()=>{
    sign.getTrimmedCanvas().toDataURL('image/png');
}

  return (
    <div>
        <div style={{width:500,height:200}}>
            <SignatureCanvas
            canvasProps={{width:500,height:200,className:'sigCanvas'}}
                ref={data=>setSign(data)}
            />
        </div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default SignatureBox