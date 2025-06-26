const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/42gtonjzh0et1khk0bc48lbmk/web/stream.mpd?channel=1641&outlet=dazn-italy&plang=en&dazn-",
  m2: "https://dca-co-live-gcr.gcdn.co/1bunh4oinlcjx13ba8e44f0jn1/tv/stream.mpd?channel=1659&outlet=dazn-row&plang=en",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
