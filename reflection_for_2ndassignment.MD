1. What are the advantages and disadvantages of using Postman versus Jest for API testing?
Postman is easy to use and great for manual testing and debugging because it has a visual interface. However, it is not ideal for full automation. Jest is better for automated testing and works well in CI/CD pipelines, but it requires writing code and is less visual.

2. How did you test different authentication methods in Postman?
I tested authentication by sending requests with valid credentials and confirming successful responses. I also removed authentication to verify that protected endpoints correctly returned 401 errors.

3. What types of assertions did you find most useful for testing your API?
Status code checks were the most useful, especially 200, 401, and 404. I also checked that responses contained required fields like id or user data.

4. How can you incorporate API testing into a continuous integration/continuous deployment (CI/CD) pipeline?
API tests can be run automatically using tools like Jest during the build process. If any test fails, the pipeline stops and prevents faulty code from being deployed.

5. What are some best practices for writing maintainable and effective API tests?
Tests should have clear names, cover both success and error cases, and remain independent. Reusing setup code and constants helps keep tests clean and maintainable.

6. How would you approach performance testing of your APIs?  (Consider tools like k6 or JMeter). 
I would use tools like k6 or JMeter to simulate multiple users and measure response times and error rates under load. This helps identify performance issues before deployment.