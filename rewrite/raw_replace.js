// replace_raw_with_cdn.js
// Quantumult X 脚本：将响应体中所有 raw.githubusercontent.com 链接替换为 jsDelivr CDN

let body = $response.body;
if (body) {
  // 1. 匹配 https://raw.githubusercontent.com/owner/repo/branch/…  
  // 2. 全局替换为 https://cdn.jsdelivr.net/gh/owner/repo@branch/…
  body = body.replace(
    /https?:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\s"'()]+)/g,
    'https://cdn.jsdelivr.net/gh/$1/$2@$3/$4'
  );
}
$done({ body });
