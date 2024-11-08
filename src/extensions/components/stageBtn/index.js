import React from "react";

const ComponentStage = () => {
  async function handleChange() {
    const confirmed = window.confirm("Are you sure to make stage build?");
    if (confirmed) {
      const url = "https://api.vercel.com/v1/integrations/deploy/prj_4HoJmWRcSZMJyMjO2dAPPx8JDuFI/PUnJMQGaZE"
      try {
        const response = await fetch(url, { method: "POST" });
        if (response.ok) {
          alert("Stage build Scheduled, changes will be live shortly")
        }
        else {
          alert("Fail")
        }
      } catch (error) {
        alert("Error")
      }
    }

  }
  return (
    <button style={{ border: "1px solid lightGrey", borderRadius: "4px", padding: "10px", backgroundColor: "white", fontSize: 14 }} onClick={handleChange} >
      Stage Build
    </button>
  );
};

export default ComponentStage;