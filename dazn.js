const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/1it1bdbf43q781nsuax6vnq5mc/tv/stream.mpd?channel=2650&outlet=dazn-row&plang=en",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/90g3in72x5d0113bz632x06y6/tv/stream.mpd?channel=4624&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
