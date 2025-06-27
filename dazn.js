const streamMap = {
  m1: "https://dca-co-live-gcr.gcdn.co/1li3mpnm609ic1shmylel6yjaf/web/stream.mpd?channel=1627&outlet=dazn-us&plang=es&dazn-token=",
  m2: "https://dca-co-live-gcr.gcdn.co/1mxvxpl19cel015znw2ot0uls6/tv/stream.mpd?channel=4615&outlet=dazn",
  m3: "https://example.com/stream3.mpd",
  // Add more as needed
};

function getManifestFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return streamMap[id] || null;
}
