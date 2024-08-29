import React from "react";

const ComponentStage = () => {
  async function handleChange() {
    const url = "https://api.vercel.com/v1/integrations/deploy/prj_EJKj9f3ITuknNf46aDrwqvzPiTks/WnGCNERaYJ"
    try {
      const response = await fetch(url, { method: "POST" });
      if (response.ok) {
        alert("Success")
      }
      else{
        alert("Fail")
      }
    } catch (error) {
      alert("Error")
    }
  }
    return (
        <button style={{border:"1px solid lightGrey", borderRadius:"5px", padding:"10px", backgroundColor:"white", fontSize:14}} onClick={handleChange} >
            Stage Build
        </button>
    );
};

export default ComponentStage;