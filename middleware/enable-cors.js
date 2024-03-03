
// https://www.shubo.io/what-is-cors/


const enableCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // server accept request from any origin
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS'); // server accept request with these methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // server accept request with these headers
    /*
    
        request method OPTIONS, also called preflight request, 
            is sent by the browser to check if the server will accept the request,
            before browser send [not simple request](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests)
            to the server.
        A non-200 response can and should be returned when a network or server error occurs. 
        In the absence of a server or network error, 
            the response headers should indicate which origins and methods are allowed.
    */
    
    if (req.method === 'OPTIONS') { 
        return res.sendStatus(200); // we simply return 200 status code for preflight request
    }
    next();
}
export default enableCors;