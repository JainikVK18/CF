const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/7duo8psqww011itpj3188d968/tv/stream.mpd?channel=1659&outlet=dazn-row&plang=en",
  m2: "https://example.com/stream2.mpd",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
