// Quantumult X script-response-body
let body = $response.body;
if (body) {
  body = body.replace(/https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\s"']+)/g, 'https://cdn.jsdelivr.net/gh/$1/$2@$3/$4');
}
$done({ body });
