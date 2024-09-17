# What is MongoDB?

MongoDB is an open-source, document oriented NoSQL Database Management system. It stores information in the form of documents. The documents are JSON documents.

# Why MongoDB?

It was designed for flexibility, scalability and performance in handling unstructured and semi structured data. It scales documents horizontally.

# About MongoDB

It was created by a company cal;led "10gen", which is now know as MongoDB Inc. The company was founded by Eliot Horowitz and Dwite Merriman in 2007. The first version of MongoDB was release in 2009.

# Why name is MongoDB?

Because it can handle "HUMONGOUS" data hence MongoDB.

# SQL vs NoSQL

1. SQL databases are relational databases.
2. They use structured tables to store data in rows and columns.
3. Suitable for applications with well-defined schemas and fixed data structures.
4. E-Commerce platform, HR Management etc.
5. E.g. MySQL, PostgreSQL, Oracle etc.

6. NoSQL databases are non-relational databases.
7. They provide flexibility in data storage, allowing varied data types and structures.
8. It is schemaless.
9. Ideal for applications with dynamic or evolving data models.
10. CMS, Social Media Platforms, Gaming platform.
11. E.g. MongoDB, Cassandra, Redis etc.

# MongoDB Terminologies

> Database > Collections > Documents (JSON)

# Key Features

1. Flexible Schema Design
   a. MongoDB allows dynamic, schema-less data structures.
   b. Easily accommodate changing data requirements.

2. Scalability and Performance
   a. Horizontal scaling supports large datasets and high traffic.
   b. Optimized read and write operations for fast performance.

3. Document Oriented Storage
   a. Data is stored in flexible JSON like BSON documents.
   b. Self-contained units with rich data types and nested arrays.

4. Dynamic Queries
   a. Rich query language with support for complex queries.
   b. Utilize indexes to speed up query execution.

5. Aggregation Framework
   a. Perform advanced data transformations and analysis.
   b. Process data using multiple pipeline stages.

6. Open Source and Community
   a. MongoDB is open source with a vibrant community.
   b. Regular updates, improvements, and support.

# How MongoDB works?

1. Frontend -> HTML, CSS, JS, ReactJS, NextJS
2. Backend -> NodeJS, ExpressJS, NextJS, Python
3. Database -> MongoDB.

Backend requests or send data from "MongoDB server" by connecting to it and MongoDB server has a "Storage Engine (WiredTiger)" which perform "Read & Write operations (communicate)" on Database by converting JSON data to BSON.

# JSON vs BSON

1. In MongoDB, we write in JSON format only but behind the scene data is stored in BSON (Binary JSON) format, a binary representation of JSON.
2. By utilizing BSON, MongoDB can achieve higher read and write speed, reduced storage requirements, and improved data manipulation capabilities, making it well-suited for handling large and complex datasets while maintaining performance efficiency.

# BSON in MongoDB

1. Binary JSON Format : BSON, Binary JSON, is used in MongoDB for data storage and transmission.
2. Efficient Storage : Designed for efficient data storage and transmission in MongoDB.
3. Diverse Data Types : Supports a wider range of data types, including Binary, Date and Regular Expressions.
4. Compact & Fast : BSON's binary format is more compact, leading to smaller storage and faster processing.
5. Native to MongoDB : MongoDB stores data in BSON format, ensuring seamless integration.
6. Performance Boost : Faster serialization improves data access and manipulation speed.

# Installation

1. MongoDB Community (MongoDB server)
2. MongoDB Shell
3. MongoDB Compass
4. Database tools
5. Mongoose

# Working in MongoDB

> To check version -> mongod --version -> Gives details in JS object format (JSON format).
> Server is already started which we can check from Task manager.
> To connect with Mongo Shell -> mogosh -> It will connect MongoDB server and we will get the shell CLI to work with MongoDB.

# Commands

> Show database -> show dbs; or show databases;
> Create or switch to another database -> use database-name;
> Delete database -> db.dropDatabase();
> Show collections -> show collections;
> Create collection -> db.createCollection("collection-name");
> Delete collection -> db.collection-name.drop();
> Clear screen in CLI -> cls

NOTE : Database will not show in show dbs query if there are no collection in that but it will still be there.

# Insert Operation in MongoDB

> Inserting Documents in MongoDB
> When to use quotes and when not to?
> Ordered and unordered inserts
> Case sensitivity in MongoDB

> Inserting Documents in MongoDB

=> Insert one document in collection (insertOne).

-> db.collection-name.insertOne({
field1 : value1,
field2 : value2,
field3 : value3,
.
.
.
.
});

=> Insert multiple document in collection (insertMany).

-> db.collection-name.insertMany([
{ field1 : value1, field2 : value2, field3 : value3,...},
{ field1 : value1, field2 : value2, field3 : value3,...},
{ field1 : value1, field2 : value2, field3 : value3,...},
.
.
.
]);

-> Returns an object with Acknowledgement status and and ID.

Note : MongoDB provides a unique ID (\_id) to each document to identify it by default.

> Read Documents in MongoDB

=> Show all data in the collection.
-> db.collection-name.find(); -> return array of objects (documents) as output.

> When to use quotes and when not to?

1. Special Characters
   -> If a field name contains special characters or space, or starts with a numeric digit, using quotes is necessary.

2. Reserved Words
   -> If a field name is a reserved keyword in MongoDB, use quotes to distinguish it from the reserved keyword.

> Ordered and unordered inserts

=> When executing bulk write operations. "ordered" and "unordered" determine the batch behavior.

1. Ordered Inserts
   -> Default behavior is ordered, where MongoDB stops whenever it encounters first error while inserting documents.
   db.collection-name.insertMany([ doc1, doc2, doc3, ...]);

   -> If it encounters while inserting doc2, it will stope there. It will insert doc1 fine but will not reach to doc3.

2. Unordered Inserts
   -> When executing bulk write operations with unordered flag, MongoDB continues processing after encountering and error.
   db.collection-name.insertMany([ doc1, doc2, doc3, ...], {ordered : false});

   -> -> If it encounters while inserting doc2, it will not stop there. It will insert doc1 and doc3 as well and will show the error for doc2.

> Case sensitivity in MongoDB

1. Collection names are case-sensitive.
2. Field names withing documents are also case-sensitive.

-> db.Product.insertOne({field1 : value1, field2 : value2});
-> db.product.insertOne({field1 : value1, field2 : value2});

=> Both the queries are pointing to different collections where "Product" and "product" are different collections.

# Read Operations in MongoDB

> Reading Documents in MongoDB
> Comparison Operators
> Logical Operators
> Cursors in MongoDB

> Reading Documents in MongoDB
