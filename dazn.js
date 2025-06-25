const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/13j1a6agda1er1nxud7yaqxvfy/tv/stream.mpd?channel=1649&outlet=dazn-row&plang=en",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/i3q78xd1a67d1wg4m7dwbetju/tv/stream.mpd?channel=1637&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
