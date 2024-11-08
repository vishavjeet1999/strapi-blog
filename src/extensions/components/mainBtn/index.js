import React from "react";

const ComponentMain = () => {
  async function handleChange() {
    const confirmed = window.confirm("Are you sure to make main build?");
    if (confirmed) {
      const url = "https://api.vercel.com/v1/integrations/deploy/prj_bBK2iWNxDhKDYaslBmKfiWuosYiy/4iziqSOBBr"
      try {
        const response = await fetch(url, { method: "POST" });
        if (response.ok) {
          alert("Main build Scheduled, changes will be live shortly")
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
      Main Build
    </button>
  );
};

export default ComponentMain;