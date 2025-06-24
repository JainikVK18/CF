const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/ya4aqq0ysfa81ro92sa875d30/tv/stream.mpd?channel=1648&outlet=dazn-row&plang=en",
  m2: "https://dca-co-live-gcr.gcdn.co/1t4yjwei0wq2r1huv4if57jnnj/tv/stream.mpd?channel=1658&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
