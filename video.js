function downloadMp4(url) {
  var meta = document.createElement("meta");
  meta.setAttribute("http-equiv", "Content-Security-Policy");
  meta.setAttribute("content", "upgrade-insecure-requests");
  document.head.appendChild(meta);

  fetch(url).then(res =>
    res.blob().then(blob => {
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(blob);
      var filename = "video.MP4";
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    })
  );
}
