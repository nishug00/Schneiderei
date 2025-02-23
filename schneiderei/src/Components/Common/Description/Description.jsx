import React from 'react'

function Description() {
    const [description,setDescription]= useState('');
  return (
    <div className="descriptionContainer">
    <div className="descriptionFrame">
      <div className="descriptionContent">
        <div className="title">
          <span className="asterisk">*</span>Beschreibung
        </div>
        <div className="inputContainer">
          <input 
            type="text"
            placeholder="z.B Marke, Farbe, Besonderheit"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>
      </div>
      <div className="linealSection">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7s3OVCHtJJZ6wFI/add-24-dp.png" 
          alt="add" 
          className="addIcon"
        />
        <span className="linealText">Lineal</span>
      </div>
    </div>
  </div>
  )
}

export default Description