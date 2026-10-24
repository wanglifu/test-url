var newestUrls = [
  'https://你的最新域名/'
];

(function () {
  var launched = false;
  try {
    launched = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  } catch (e) {}
  var q = location.search || '';
  if (!launched) {
    launched = /(?:^|[?&])utm_source=pwa(?:&|$)/.test(q) && /(?:^|[?&])utm_medium=homescreen(?:&|$)/.test(q);
  }
  var target = newestUrls[0];
  if (!launched || !target || !/^https:\/\//.test(target)) return;
  if (target.indexOf('你的最新域名') >= 0) return;
  if (target.indexOf('?') < 0) target += '?utm_source=pwa&utm_medium=homescreen';
  location.replace(target);
})();

document.addEventListener('DOMContentLoaded', function () {
  var main = document.getElementById('main');
  if (!main) return;
  var html = '<h1>黑料吃瓜网最新地址</h1><ul>';
  for (var i = 0; i < newestUrls.length; i++) {
    html += '<li><a href="' + newestUrls[i] + '">' + newestUrls[i] + '</a></li>';
  }
  html += '</ul>';
  main.innerHTML = html;
});
