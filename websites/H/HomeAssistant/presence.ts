const presence = new Presence({
  clientId: "768942376403075073" //Discord Client ID
}), browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "home" // Banner
  };
  presenceData.startTimestamp = browsingStamp;

  
  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }

});