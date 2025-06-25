const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/13j1a6agda1er1nxud7yaqxvfy/tv/stream.mpd?channel=1649&outlet=dazn-row&plang=en",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/r82kvk4ble7s1i0vi6hsh2qz3/tv/stream.mpd?channel=1648&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
