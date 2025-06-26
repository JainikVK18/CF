const streamMap = {
  m1: "https://dcb-fl-live.dtcdn.dazn.com/42gtonjzh0et1khk0bc48lbmk/web/stream.mpd?channel=1641&outlet=dazn-italy&plang=en&dazn-",
  m2: "https://dcb-fl-live.dtcdn.dazn.com/vht80ijfon5d10vaiyp6yae1g/web/stream.mpd?channel=1639&outlet=dazn-dach&plang=en&dazn-",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
