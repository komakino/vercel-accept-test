export default function handler(request, response) {
  const accept = request.headers['accept'] || 'application/json'

  response
    .setHeader('Vary', 'Accept')
    .setHeader('Cache-Control', `max-age=0, s-maxage=86400`)

  switch(accept) {
    case 'text/plain':
      response
        .setHeader('content-type', 'text/html')
        .send(`accept: ${accept}!`)
      break;
    case 'text/html':
      response
        .setHeader('content-type', 'text/html')
        .send(`<strong>accept</strong>: ${accept}!`)
      break;
    default:
    case 'application/json':
      response
        .setHeader('content-type', 'text/html')
        .send({ accept });
      break;
  }
}