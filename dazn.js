const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/1c85w1ockfu6j1m71c82q664ng/tv/stream.mpd?channel=1659&outlet=dazn-row&plang=en",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/5h03ihnwbmm6173ichv41k5wf/tv/stream.mpd?channel=1637&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
