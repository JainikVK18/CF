const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/9iswtiwixvbn11zle8cwsb5gu/tv/stream.mpd?channel=1658&outlet=dazn-row&plang=en",
  m2: "https://dca-co-live-gcr.gcdn.co/9iswtiwixvbn11zle8cwsb5gu/tv/stream.mpd?channel=2654&outlet=dazn-mena&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
