const body = JSON.parse($response.body)
// console.log('api-map-console',body)
// console.log('$response',$response)
// console.log('$response.body',$response.body)
// body.content.point.x="100.000000"
// body.content.point.y="30.000000"
$done({body:JSON.stringify(body)});
