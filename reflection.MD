Week 10 Day 2 – API Gateway Assignment
Name: Vani Kamra

Reflection Questions

1. What challenges did you face?
One challenge was managing multiple services running simultaneously and making sure each one was using the correct port. Debugging authentication was also tricky at first, especially when requests were passing unexpectedly due to testing setup issues. Understanding and implementing API composition correctly took some trial and error as well.

2. How does the API Gateway simplify access?
The API Gateway simplifies access by providing a single entry point for the client. Instead of calling multiple services directly, the client sends requests to the gateway, which handles routing internally. This reduces complexity on the client side and keeps service interactions centralized.

3. What are the benefits of API composition?
API composition allows the gateway to combine data from multiple services into one response. This reduces the number of API calls the client needs to make and improves performance. It also keeps client-side logic simpler and more efficient.

4. Why is authentication important?
Authentication ensures that only authorized users can access protected endpoints. By enforcing authentication at the gateway level, security is centralized and consistent across services. This helps protect sensitive data without adding authentication logic to every service.

5. How would this be improved in production?
In a production environment, more secure authentication methods like JWT or OAuth could be used instead of Basic Auth. Environment variables should be used for sensitive information, and additional features such as logging, monitoring, and improved error handling would be important for scalability and reliability.

6. How did you test your services?
Each microservice was tested independently using Postman to verify correct responses. The API Gateway was then tested to ensure proper routing, data composition, and authentication behavior. Requests were tested both with and without credentials to confirm security enforcement.
7. How could rate limiting or caching help?
Rate limiting would help prevent abuse by limiting the number of requests a client can make in a given time frame. Caching could improve performance by storing frequently requested responses at the gateway level, reducing repeated calls to downstream services.

8. How does this connect to course concepts?
This assignment reinforced concepts such as microservices architecture, API gateways, authentication, and API composition. Implementing these ideas in a working system helped connect theoretical concepts from class to real-world application design.
