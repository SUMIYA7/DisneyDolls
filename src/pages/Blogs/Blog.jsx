import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog');
    return (
      <>
        <div className="card card-side bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Question-01: What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
            <p>
              SQL and NoSQL are two different types of database management
              systems with distinct characteristics. Here's a concise
              comparison: Data Model: SQL databases are based on a structured,
              tabular data model with predefined schemas. NoSQL databases use a
              flexible, schema-less data model that can adapt to evolving data
              structures. Query Language: SQL databases use SQL (Structured
              Query Language) for defining and manipulating data. NoSQL
              databases have various query languages specific to their data
              model, such as document-oriented query languages or key-value
              access methods. Scalability: SQL databases generally scale
              vertically by adding more resources to a single server. NoSQL
              databases are designed for horizontal scalability, distributing
              data across multiple servers to handle high volumes and traffic.
              Data Relationships: SQL databases excel at managing structured
              relationships between tables through joins and foreign keys. NoSQL
              databases are typically better suited for handling unstructured or
              loosely structured data, and relationships are often handled
              differently (e.g., embedding documents or using key-value
              associations). ACID Compliance: SQL databases prioritize ACID
              (Atomicity, Consistency, Isolation, Durability) properties to
              ensure data integrity and transactional consistency. NoSQL
              databases may sacrifice some ACID properties for increased
              scalability and performance, opting for BASE (Basically Available,
              Soft state, Eventually consistent) principles. Use Cases: SQL
              databases are widely used in applications requiring complex
              querying, transactions, and strong data consistency, such as
              financial systems and traditional enterprise applications. NoSQL
              databases are suitable for applications that prioritize
              scalability, handle large amounts of unstructured data, require
              high throughput, and can tolerate eventual consistency, such as
              real-time analytics, content management, and IoT applications.
              It's important to note that this is a general comparison, and
              specific databases within each category may have different
              features and capabilities.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is express js? What is Nest JS?</h2>
            <p>
              Express.js and Nest.js are both popular web application frameworks
              for Node.js, but they differ in terms of their design philosophy
              and features. Here's a concise description of each: Express.js:
              Express.js is a minimalistic and unopinionated web framework for
              Node.js. It provides a lightweight and flexible foundation for
              building web applications and APIs. Express.js focuses on
              simplicity and allows developers to have granular control over the
              application's structure and middleware. It provides basic routing,
              request, and response handling, allowing developers to add
              additional libraries and components as needed. Express.js is known
              for its simplicity and is often chosen for small to medium-sized
              projects or when developers prefer a more hands-on approach.
              Nest.js: Nest.js is a scalable and opinionated web framework for
              building efficient and maintainable server-side applications. It
              is built on top of Express.js and utilizes TypeScript, providing a
              strongly-typed and object-oriented programming experience. Nest.js
              follows the architectural pattern known as "modularity,"
              organizing applications into modules that encapsulate related
              functionality. It offers a rich set of features out of the box,
              including dependency injection, middleware, routing decorators,
              and a module-based approach to application structure. Nest.js
              encourages best practices and code reusability, making it suitable
              for large-scale enterprise applications or complex projects that
              require a structured and maintainable codebase. In summary, while
              Express.js provides a lightweight and flexible foundation for
              building web applications, Nest.js builds upon Express.js and
              offers a more opinionated and structured approach, promoting
              modularity, scalability, and maintainability. The choice between
              the two depends on the project requirements, complexity, and
              developer preferences.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
             Answer: MongoDB's aggregation framework is a powerful tool used for data processing and analysis. It allows you to perform complex operations on documents within a collection and retrieve aggregated results based on specified criteria.
             The aggregation framework in MongoDB works by chaining together multiple stages, where each stage performs a specific operation on the documents. These stages are executed in the order they are specified, and the output of one stage becomes the input for the next stage. The result of the aggregation is returned as a single document or a set of documents, depending on the operations performed.
            </p>
          </div>
        </div>
      </>
    );
};

export default Blog;