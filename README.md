# CS465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The customer-facing side of the Travlr application used Express with Handlebars templates to generate HTML on the server. This approach worked well for displaying travel information because the pages were rendered before being sent to the browser. The administrative side used an Angular SPA, where JavaScript and TypeScript handled updates without reloading the page, creating a more responsive experience for managing trip data.

•	Why did the backend use a NoSQL MongoDB database?

MongoDB was a used because travel packages contain a variety of fields that can be stored as JSON documents, making it easy to create, update, delete, and retrieve trip information through the API. MongoDB also integrated well with Mongoose and the Node.js backend used throughout the project.

Functionality

•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a used to store and transfer data, while JavaScript is a programming language used to create application logic and functionality. In this project, the backend returned trip data as JSON through API endpoints, and the Angular frontend used that data to display trips and forms. 

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One example of refactoring was moving trip retrieval logic into a dedicated Angular service instead of placing API calls directly inside components. I also created reusable components such as the Trip Card component so trip information could be displayed consistently throughout the application. Reusable components reduce duplicate code and make updates easier.

Testing

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods are defined by the action being performed on data, such as GET for retrieving records, POST for creating records, PUT for updating records, and DELETE for removing records. Endpoints provide the specific URLs that connect the frontend to backend resources. During development, I used Postman to test requests, validate responses, and troubleshoot errors before connecting the Angular application. Security added another layer because authenticated users needed valid credentials and tokens before gaining access to administrative features.

Reflection

•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me understand how all parts of a web application work together. I gained experience building APIs, working with MongoDB, creating Angular components, implementing authentication, and testing endpoints. These skills expanded my technical knowledge and gave me experience with technologies commonly used in software and data-driven environments, which supports my goal. It will be great taking the skills I learned from this course into future projects and eventually into a data analyst or healthcare technology role, where understanding both the frontend and backend of an application can help me work more productively with data and systems.

