const presence = new Presence({
  clientId: "8146094814609447962935296" //Discord Client ID
}), browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "home" // Banner
  };
  presenceData.startTimestamp = browsingStamp;
  
  function gphotospresence(nome: string, imagetext: string, details: string, state: string) {
    presenceData.smallImageKey = nome;   // SmallImageKey Function
    presenceData.smallImageText = imagetext;   // smallImageText Function
    presenceData.details = details;    // details Function
    presenceData.state = state;    // state Function
  }

  if (document.location.pathname == "/") {  // Homepage
    gphotospresence("google-photos", "Google Photos", "In Google Photos", "Homepage...")
    console.log("Working")
  }

  else { //Generic
    gphotospresence("search", "Google Photos", "Exploring ", "Google Photos...");
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }

});