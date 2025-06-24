const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/1j3ihrvqq2ur81o5icgricblbh/tv/stream.mpd?channel=1638&outlet=dazn-row&plang=en",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/1x6ssqzlw7nv21ava694ze0ynq/tv/stream.mpd?channel=1647&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
