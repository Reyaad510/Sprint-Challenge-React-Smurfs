1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing works like this. We navigate to a webpage, the website requests data for that webpage, the server returns a document, html file, or a template. to the broswer, and the browser can render that page. All of this done on the server and the server is what compliles that info for the browser to render. Everytime we navigate to a new URL, a fresh page is loaded on the server, then sent to the browser, and the browser refreshes to render the new page. Pros will only request data that is needed no more, no less. Search engines are optomized for this routing so best for SEO. Con is that every request means full page rerenders.

Client-side routing works like this. Javascrip within a client app nmanages the data for that application within it's own memory. The browser now has what it needs in memory to render different pages. If additional data is needed that is not in memory, an api request is made, and simple json is returned, rather than an entire html page. Since server is no longer compiling entire page for browser, the broswers doesn't need to refresh between routes. Pros is that routing is faster. Con is entire website needs to be loaded initially.






2.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

HTTP methods provide a common language that the client can use to let the server know what operation it wants to perform. CRUD stands for Create, Read, Update, and Delete. Create is used with the POST method, Read with GET method, Update with PUT method, and Delete with Delete method. 


3. What does HTTP stand for?
 
 HTTP is the network protocol(set of rules) used by web applications. It means Hypertext Transfer Protocol.




4. What does CRUD stand for?

CRUD stands for Create, Read, Update, and Delete.




5.  Mention three tools we can use to make AJAX requests.

Three tools we can use to make AJAX requests are the HTTP methods. So three tools would be GET, POST, and PUT.

