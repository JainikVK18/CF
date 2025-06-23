const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/sljtw7ewvxir1413fcff45t9q/tv/stream.mpd?channel=2651&outlet=dazn-row&plang=en",
  m2: "https://example.com/stream2.mpd",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
