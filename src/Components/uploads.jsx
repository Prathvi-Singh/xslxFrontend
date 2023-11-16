import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(true);
  
  const handleFileChange = (e) => {
    console.log(file);
    setCheck1(true); 
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('excelfile', file);
      console.log(formData);
      const response = await axios.post('http://localhost:8000/upload', formData);
      console.log('Response:', response.data);
     

      if(response.status == 200){
        setCheck(false);
        console.log(response.status , check);
      }
      else{
        console.log(response.status);
        setCheck1(false);
      }
    
    } catch (error) {
    setCheck1(false); 
      console.error('Error:', error);
    
    }
  };
   


  return (
    <>
    <div class="card text-center">
    <div class="card-header">
    <h2 class="my-3">File Upload</h2>
    </div>
    <div>
        {

     check ?
   <div>
   <div class="row center d-flex justify-content-center py-5">
     <input type="file" class="btn btn-success" onChange={handleFileChange} />
     </div>
    {check1 == false ?   <h6 class="text-danger"> something wrong</h6> : <h6></h6> }
     <button onClick={handleFileUpload} class="btn btn-primary mb-5">Upload</button>
   
    </div>

     :
     <div>
    <div class=" center d-flex justify-content-center py-3">  
     <h3 class=" text-success">Thank you</h3>
     </div>
     <h6>file uploaded successfully </h6>
     <h6 class="pb-3" >your records will be processed shortly</h6>
    
     </div> 
       }
       </div>
  </div> 

    </>
  );
};

export default FileUpload;
