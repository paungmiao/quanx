// Quantumult X script-response-body
// 测试返回：https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/yj.js
let body = $response.body;
if (body) {
  log.info('https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/yj.js')
  body = body.replace(/https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\s"']+)/g, 'https://cdn.jsdelivr.net/gh/$1/$2@$3/$4');
}
$done({ body });
