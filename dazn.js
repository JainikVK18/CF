const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/qe922kaanmoj1q9a0v3dk2iii/tv/stream.mpd?channel=1658&outlet=dazn-row&plang=en",
  m2: "https://dca-co-live-gcr.gcdn.co/ldljt9s40nfq1cba0crx9baox/tv/stream.mpd?channel=4615&outlet=dazn",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
