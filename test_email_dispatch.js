async function testDispatchWithHeaders() {
  console.log("Testing FormSubmit with origin headers...");
  try {
    const res = await fetch("https://formsubmit.co/ajax/shafiq@goldenfibercraftsltd.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://goldenfibercraftsltd.com",
        "Referer": "https://goldenfibercraftsltd.com/"
      },
      body: JSON.stringify({
        _subject: "🔔 [NEW WEBSITE ORDER REQUEST] Golden Fiber Crafts Ltd",
        _template: "table",
        _captcha: "false",
        Reference_ID: "RFQ-TEST-002",
        Buyer_Name: "Safiqul Islam",
        Buyer_Email: "shafiq@goldenfibercraftsltd.com",
        Product_Code: "GFC-SB-030",
        Order_Quantity: "500 pcs"
      })
    });
    const data = await res.json();
    console.log("FormSubmit response:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

testDispatchWithHeaders();
