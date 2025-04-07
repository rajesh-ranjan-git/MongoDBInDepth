# What is MongoDB?

MongoDB is an open-source, document oriented NoSQL Database Management system. It stores information in the form of documents. The documents are JSON documents.

# Why MongoDB?

It was designed for flexibility, scalability and performance in handling unstructured and semi-structured data. It scales documents horizontally.

# About MongoDB

It was created by a company called "10gen", which is now know as MongoDB Inc. The company was founded by Eliot Horowitz and Dwite Merriman in 2007. The first version of MongoDB was release in 2009.

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
> Get current database name -> db.getName();
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
-> db.collection-name.findOne(); -> return a single object, without parameter it return the first document in the collection.

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

   -> If it encounters any error while inserting doc2, it will stop there. It will insert doc1 fine but will not reach to doc3.

2. Unordered Inserts
   -> When executing bulk write operations with unordered flag, MongoDB continues processing after encountering an error.
   db.collection-name.insertMany([ doc1, doc2, doc3, ...], {ordered : false});

   -> If it encounters any error while inserting doc2, it will not stop there. It will insert doc1 and doc3 as well and will show the error for doc2.

> Case sensitivity in MongoDB

1. Collection names are case-sensitive.
2. Field names withing documents are also case-sensitive.

-> db.Product.insertOne({field1 : value1, field2 : value2});
-> db.product.insertOne({field1 : value1, field2 : value2});

=> Both the queries are pointing to different collections where "Product" and "product" are different collections.

# Read Operations in MongoDB

> Finding Documents in MongoDB
> Importing / Exporting JSON in MongoDB
> Comparison Operators
> Cursors in MongoDB
> Logical Operators
> Complex Expressions
> Elements Operators

> Finding Documents in MongoDB

-> db.collection-name.find({key : value}) -> returns multiple documents satisfying the filter ({key : value}) in argument.
-> db.collection-name.findOne({key : value}) -> returns first document satisfying the filter ({key : value}) in argument.

Note : At once only 21 documents are displayed. For next 21 documents type "it".

> Importing / Exporting JSON in MongoDB

=> mongoimport and mongoexport are command-line utilities that are a part of the MongoDB Database Tools. These tools are used for importing data into MongoDB (using mongoimport) and exporting data from MongoDB (using mongoexport).

-> mongoimport jsonfile.json -d database-name -c collection-name (if data is not in array of object)
-> mongoimport jsonfile.json -d database-name -c collection-name --jsonArray (if data is in array of object)

=> Here, --jsonArray accepts the import of data expressed with multiple MOngoDB documents within a single JSON Array.
=> Imports are limited to 16 MB or smaller

-> mongoexport -d database-name -c collection-name -o path-to-destination\file-name.json

> Comparison Operators

===> Syntax -> db.collection-name.find({"fieldname" : {$operator : value}});

=> $eq -> Equal to
-> db.collection-name.find({"fieldname" : {$eq : value}});

=> $ne -> Not Equal to
-> db.collection-name.find({"fieldname" : {$ne : value}});

=> $gt -> Greater than
-> db.collection-name.find({"fieldname" : {$gt : value}});

=> $lt -> Less than
-> db.collection-name.find({"fieldname" : {$lt : value}});

=> $gte -> Greater than and equal to
-> db.collection-name.find({"fieldname" : {$gte : value}});

=> $lte -> Less than and equal to
-> db.collection-name.find({"fieldname" : {$lte : value}});

=> $in -> In
-> db.collection-name.find({"fieldname" : {$in : [value1, value2, value3, ...]}});

=> $nin -> Not in
-> db.collection-name.find({"fieldname" : {$nin : [value1, value2, value3, ...]}});

> Cursors in MongoDB

1. Cursors in MongoDB are used to efficiently retrieve large sets from queries, providing control over the data retrieval process.

-> MongoDB retrieves query results in batches using cursors.
-> Cursors are a pointer to the result set in the server.
-> Cursors are used to iterate through the query results.

2. Automatic Batching

-> MongoDB retrieves query results in batches not all at once.
-> Default batch size is usually 101 documents (Shows only 21 documents at once).
-> This improves memory efficiency and network usage.

==> Cursor methods

=> count()
-> db.collection-name.find({"fieldname" : "value"}).count();

=> limit()
-> db.collection-name.find({"fieldname" : "value"}).limit(number-of-documents);

=> skip()
-> db.collection-name.find({"fieldname" : "value"}).skip(number-of-documents);

=> sort()
-> db.collection-name.find({"fieldname" : "value"}).sort({ fieldname : 1}); -> 1 for ascending
-> db.collection-name.find({"fieldname" : "value"}).sort({ fieldname : -1}); -> -1 for descending

==> Cursor methods (Caveats)

=> Performance Implications

-> skip() can be inefficient for large offsets.
-> Using sort() on large result sets may impact performance.

=> Use with Caution

-> Be cautious when using limit() and skip() on large collections.
-> Consider using indexing to optimize query performance.

> Logical Operators

===> Syntax -> db.collection-name.find({$operator : [{condition 1}, {condition2}, ...]});

==> $and -> And
--> db.collection-name.find({$and : [{condition 1}, {condition2}, ...]});
-> $and performs a logical AND operation an array of expressions, where all expressions must be true for the document to match.
-> E.g. --> db.collection-name.find({$and : [{"fieldname" : {$conditional-operator : value}}, {"fieldname : "value"}, ...]});

It could be done using db.collection-name.find({"fieldname" : {$conditional-operator : value}, "fieldname : "value", ...});
Then, why to use this complex method?
-> In MongoDB, when we provide multiple fields within a single query document, MongoDB treats it as an implicit AND operation.
-> So if we do or not, it works the same way but just for AND. For other operators, we have to follow the previous approach only.

==> $or -> Or
--> db.collection-name.find({$or : [{condition 1}, {condition2}, ...]});
-> $or performs a logical OR operation on an array of expressions, where any one of the expressions must be true for the document to match.

==> $nor -> Nor
-> db.collection-name.find({$nor : [{condition 1}, {condition2}, ...]});
-> $nor performs a logical NOR operation in an array of expressions, where none of the expressions must be true for the document to match.

==> $not -> Not
-> db.collection-name.find({fieldname : {$not : {operator : value}}});

> Complex Expressions

=> The $expr operator allows using aggregation expressions within a query.
=> Useful when you need to compare fields from the same document in a more complex manner.

=> Syntax -> db.collection-name.find({$expr : {"$field", "value"}});

=> E.g. -> db.collection-name.find({$expr : {$conditional-operator : [{$arithmetic-operator : ["$fieldname", "value"]}, "$targetfield"]}})

Here, arithmetic-operator can be $add or $sub or $multiply or $divide.

> Elements Operators

==> $exists
=> $exists matches documents that have a specific field, regardless of its value.
-> db.collection-name.find({"fieldname" : {$exists : boolean}});

==> $type
=> $type matches documents based on BSON data type of a field.
-> db.collection-name.find({"fieldname" : {$type : "bson-data-type"}});

Note : We can use BSON type values as well instead of writing the complete name of the type. The numbers are listed below that can be used.

1. Double
2. String
3. Object
4. Array
5. Binary Data
6. Undefined
7. Object id
8. Boolean (bool)
9. Date
10. Null
11. Regular Expression
12. Javascript code
13. Symbol
14. Javascript code with scope
15. 64-bit integer

-> db.collection-name.find({"fieldname" : {$type : "bson-data-type-number"}});
-> This is also valid.

==> $size
=> $size matches documents where the size of an array field matches a specified value.
-> db.collection-name.find({"fieldname" : {$size : array-length}});

# Projection

=> db.collection-name.find({condition}, {"fieldname1" : 1, "fieldname2": 1, ...})

-> To include specific fields, use projection with value of 1 for the fields you want.
-> To exclude fields, use projection with a value of 0 for the fields you want to exclude.
-> You cannot include and exclude fields simultaneously in the same query projection.

Note : db.collection-name.find({condition}, {"fieldname1" : 1, fieldname2 : 0, ...}); this approach is not possible.
-> You can either use inclusion or exclusion, not both.
-> There is only one exception i.e. \_id.
--> db.collection-name.find({condition}, {"fieldname1" : 1, \_id : 0})
-> Only this valid as id is not created by us, it is created by MongoDB implicitly so we can choose to omit it.

# Embedded Documents

-> Query documents inside embedded documents using dot notation (valid for both object and array).
-> db.collection-name.find({"parent.child" : "value"})

> $all

=> The $all operator selects the documents where the value of a field is in array that contains all the specified elements.
-> db.collection-name.find({"fieldname" : {$all : ["value1", "value2", ...]}})

> $elemMatch
=> The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
-> db.collection-name.find({"fieldname" : {$elemMatch : ["value1", "value2", ...]}})

# Update operations in MongoDB

1. updateOne() and updateMany()
2. Removing and renaming fields
3. Updating arrays and embedded documents
4. Delete operations

> updateOne() and updateMany()

-> db.collection-name.updateOne( {filter}, {$set: {"existingField" : "newValue", "newField" : "new value", ...}});
-> db.collection-name.updateMany( {filter}, {$set: {"existingField" : "newValue", ...}});

> Removing and renaming fields

->db.collection-name.updateOne/updateMany({filter}, {$unset: {"fieldName": 1}});
->db.collection-name.updateOne/updateMany({filter}, {$rename: {"oldFieldName": "newFieldName}});

> Updating arrays and embedded documents

-> db.collection-name.updateOne/updateMany({filter}, {$push : {arrayFiled : "new element"}});
-> db.collection-name.updateOne/updateMany({filter}, {$pop : {arrayFiled : "value"}});
-> db.collection-name.updateOne/updateMany({filter}, {$set : {"arrayFiled.$.text" : "Updated text"}});

> Delete operations -> To delete documents in MongoDB

-> db.collection-name.deleteOne({filter});
-> db.collection-name.deleteMany({filter});

# Indexing in MongoDB

1. What are Indexes?
2. Benefits of Indexes
3. Managing Indexes
4. Unique, Text Index
5. When not to use Indexes?

> What are Indexes?

=> Indexes are specialized data structures that optimize data retrieval speed in MongoDB

-> Indexes store a fraction of data in a more searchable format.
-> They enable MongoDB to locate data transfer during queries.
-> Indexes are separate from collections and multiple indexes can exist per collection.

> Benefits of Indexes

-> Faster Querying : Indexes drastically accelerate data retrieval, particularly for large collections.
-> Efficient Sorting : facilitate rapid sorting based on specific fields.
-> Improved Aggregation : Aggregation operations become more efficient with optimized indexes.
-> Indexing on Multiple Fields : Complex queries can be executed efficiently by utilizing multiple fields in indexes.

==> explain() method gives information or metadata about the query performed. Use this to understand query execution in detail.
==> explain("executionStats") method gives extra information about execution of the query. Use it get time taken for query to execute.

> Managing Indexes

-> db.collection-name.createIndex({"fieldName" : 1}); -> 1 for storing index in ascending order and -1 for descending order
-> db.collection-name.getIndexes(); -> \_id is default unique index.
-> db.collection-name.dropIndex({"fieldName" : 1}); -> to delete index.
-> db.collection-name.dropIndex("index-name");

=> db.collection-name.createIndex({"fieldName" : 1}, {unique : true}); -> If we want to restrict from entering duplicate data.

> When not to use Indexes?

=> Indexes on rarely used fields -> Indexing fields that are seldom used in queries can consume unnecessary space and resources.
=> Balancing Act -> Indexing requires disk space and memory. Over-indexing can lead to resource strain and impact overall performance.
=> Indexing Small Collections -> In smaller collections, the cost of index maintenance might outweigh the benefits gained from querying.

# Aggregation in MongoDB

> What is aggregation?

=> Definition : Aggregation is the process of performing transformations on documents and combining them to produce computed results.
=> Pipelining Stages : Aggregations consists of multiple pipeline stages, each performing a specific operation on the input data.
=> Benefits
-> Aggregating Data : Complex calculations and operations are possible.
-> Advanced Transformations : Data can be combined, reshaped, and computed for insights.
-> Efficient Processing : Aggregation handles large datasets efficiently.

=> $match -> The $match stage is similar to query used as the first argument in find(). It filters documents based on specified conditions.
-> db.collection-name.aggregate([ {$match : {<query>}}]);

=> $group -> The $group stage groups documents by specified fields and performs aggregate operations on grouped data.
-> db.collection-name.aggregate([ {$group : {\_id : {<expression>}, <field1> : {<accumulator1> : <expression>}, ...}}]);

=> $sort -> db.collection-name.aggregate([{$sort : {<field> : <order>}}]);

=> $project -> The $project stage reshapes documents, includes or excludes fields, and performs operations on fields.
-> db.collection-name.aggregate([ {$project : { <field1> : <expression>, ...}}]);
-> $sum, $subtract, $multiply, $avg etc. are types of expression operator.

=> $push -> The $push stage adds elements to an array field within documents.
-> db.collection-name.aggregate([ {$push : <expression>}]);

=> $unwind -> The $unwind stage deconstructs an array field and produces multiple documents.
-> db.collection-name.aggregate([ {$unwind : <array>}]);

=> $addToSet -> The #addToSet stage adds elements to an array field while preventing duplicates.
-> db.collection-name.aggregate([ {$addToSet : <field>}]);

=> $size -> The $size stage calculates the length of an array field.
-> db.collection-name.aggregate([ {$size : <field>}]);
-> This cannot be used inside $group stage but can be used with other aggregation stages.

=> $limit and $skip -> The $limit and $skip stages are useful for pagination, limiting and skipping results.
-> db.collection-name.aggregate([ {$limit : <value>}]);
-> db.collection-name.aggregate([ {$skip : <value>}]);

=> $filter -> The $filter stage filters elements of an array based on specified conditions.
-> db.collection-name.aggregate([ {$project : {<field> : {$filter : {input : "$<array>", as : "<variable>", cond : <expression>}}}}]);

# Interview Questions

1.  What is MongoDB?

    > MongoDB is NoSQL Database which is designed to handle structured, semi-structured as well as non-structured data. It handles data in the BSON format, documents and collections.

2.  What is the difference between NoSQL and RDBMS?

    > In RDBMS, records are stored in rows and columns in a table where as in NoSQL, every record is stored in documents similar to a row in RDBMS which looks like a Javascript object (In BSON format) and a all the documents are stored in a collection similar to tables in RDBMS.
    > RDBMS is designed to handle structured data with predefined and fixed schemas. NoSQL database is designed to handled structured, semi-structured and non-structured data with no fixed schema.
    > RDBMS uses relational model where data is stored in tables with rows and columns. NoSQL databases uses a variety of flexible data models, such as document oriented, column oriented, graph oriented etc. MongoDB is document which the most used NoSQL Database.

3.  When to use RDBMS and when to use NoSQL DB in your applications?

    > RDBMS is better for application which required high data integrity and complex transactions (ACID) such as finance, banking, e-commerce applications. As it is not possible to feed invalid data in RDBMS databases due to datatype constraints. NoSQL databases are best for handling large volume of data with high read-write operations such as IOT, gaming applications, social media applications.

4.  What are documents and collections in NoSQl?

    > A Document is a semi-structured data structure (XML, JSON format) that stores information in a NoSQL database. It is similar to a row in a table in an RDBMS.
    > A Collection is a group of documents that are stored together in a NoSQL Database. It is similar to a table in an RDBMS.

5.  What are CRUD operations in MongoDB?

    > CRUD is Create Read Update Delete

6.  How to establish connection with MongoDB from Node.js?

    > MongoDB can be connected from Node by calling the connect() method of MongoClient class.

    1.  Install MongoDB
        ## mongodb: npm install mongodb
    2.  Import mongodb
    3.  Create a new MongoClient using connection URI
    4.  Connect to MongoDB Server
    5.  return the database object
    6.  Throw error if connection fails
        const { MongoClient } = require("mongodb);
        const uri = "mongodb://127.0.0.1:27017/myDB";
        const client = new MongoClient(uri);
        async function connectToMongoDB() {
        try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db();
        } catch (error) {
        throw error;
        }}
    7.  Export the connect function
        module.exports = connectToMongoDB;

7.  What are query operators in MongoDB?

    > Query operators are special keywords or symbols used to perform operations like comparison, logical operations in queries.
    > e.g. $lt, $gt, $lte, $gte etc.

8.  What is projection in MongoDB and how to implement it?

    > Projection is a way of specifying which fields should be returned in the query results.
    > Projection can be implemented by using project method.
    > e.g const data = collection.find({}).project({name: 1});
    > This will always include \_id field as wel
    > If need to exclude \_id, const data = collection.find({}).project({name: 1, \_id: 0});

9.  What are indexes in MongoDB? How indexing make data retrieval faster?

    > Indexes are data structures that improve the speed of data retrieval operations on collections.
    > Before creating index, data is directly received, after creating index, data is retrieved via indexes (index tree is created).

10. What is mongoose? What are the advantages of using it?

    > Mongoose is an Object Data Modelling (ODM) library for MongoDB and NodeJS that helps to connect to mongodb and perform operations seamlessly. It provides schema-based solution to model application data.
    > Features : Data Validation, Middleware support, define relationships between collections.

11. What is the role of schema in mongoose? How to define it?

    > A schema in Mongoose defines the structure, validation rules, and behavior of MongoDB documents, ensuring data consistency and integrity.

    > Define Mongoose schema

         const mongoose = require("mongoose");
         const userSchema = new mongoose.schema({
         name: {
         type: String,
         required: true,
         minlength: 3,
         },
         email: {
         type: String,
         required: true,
         },
         age: Number,
         })

    > Create Mongoose model from schema

         const User = mongoose.model("User", userSchema);
         module.exports = User;

12. Can we define our own find function? How?

    > Yes, we can by creating function and passing the query parameters with what you need to find and the projection to choose what to you need to get from the results.

13. What is the difference between find and findOne function?

    > find function checks for all the records to find the result which matches the query parameters where as findOne return the first record that matches the query parameter.

14. How do we scale up documents using mongodb?

    > There are 2 types of scaling horizontal scaling or vertical scaling. Horizontal scaling means to add more machines to distribute data and store the data at multiple storage whereas vertical scaling means to increase the capacity of the single machine to accommodate large data.
    > Horizontal scaling is easier and efficient as we do not have less downtime as installing new device would not impact the storage but vertical scaling involves upgrading the machine (increasing RAM, faster CPU, large storage) which incurs more downtime.

    > Two main methods:

    1. Sharding:
       Concept: Distributes data across multiple servers (shards) based on a shard key, allowing for virtually unlimited storage capacity.
       How it works: A mongos (query router) acts as an interface between client applications and the sharded cluster, routing queries to the appropriate shards.
       Components: Shards (replica sets), mongos, and config servers.
       Benefits: Increased storage capacity, improved performance, and better availability.

    2. Replication:
       Concept: Creating multiple copies of your data on different servers (replica set) to ensure high availability and fault tolerance.
       How it works: Data is replicated across multiple nodes, and one node is designated as the primary, while others are secondaries.
       Benefits: Increased availability and data resilience.

15. How can we perform transactions in MongoDB?

    > A transaction in database means that either an operation should complete or it should not to provide consistency in database. E.g if we are making a payment then either the money will be deducted and received at the other end or the transaction will not happen at all. If anything happens in between then the operation will be rolled back.
    > 2 APIs used for transaction : Core & Callback API
    > Core API : Similar like Relational Database (Start transaction, commit transaction), we will define the start of the transaction and the end of transaction by commit transaction. If any happens in between we have roll back the transaction and there will be no change in the database. It is generally used where we are performing more than 1 database operations.
    > Callback API :

16. What is a replica set in MongoDB and what are primary and secondary replica sets?

    > This is creating multiple copies of the database at multiple locations to ensure faster availability and also helps in disaster management. Lets consider if a data center or server goes down then all thr connection will still get the data from the replicas and will not have to face downtimes.
    > MongoDB manages replication using Replica Sets, which are collections of related MOngoDB nodes.
    > A replica set require a minimum of 3 MongoDB nodes.
    > One of the nodes will be considered as primary node that receives all the write operations.
    > The others are secondary nodes will replicate data from the primary node.
    > A failed node is recovered, works as a secondary node again.

17. What is aggregation framework in MongoDB?

    > MongoDB aggregation operations act on groups of values from multiple documents, perform operations on the grouped values and return a single computed result.
    > It helps to perform multiple operation on the database like perform projection, sorting etc. It uses the concept of pipelines where output of one query acts as input to another pipeline and finally gives us the computed data. We can also perform operation on multiple collections as an alternative to join operation in relational database.

    > 3 ways of performing aggregation :

    => Aggregation Pipeline -> Multiple documents enter the pipeline and aggregated result is returned after processing.
    => Map Reduce Operation -> Performing map operation on each document and later reducing the output of map operations to combine the result.
    => Single purpose Aggregation -> It aggregate all the documents from a single collection.

    > 3 aggregation pipeline methods or phases :

    => match -> To filter the data based on the conditions
    => group -> aggregation phase
    => sort -> Finally sorting is done (asc or desc)

18. What is a storage engine in MongoDB?

    > Storage engine is component in MongoDB which is responsible for managing data on how is it stored but in memory and disk.
    > Types of storage engines : WiredTiger (the default and recommended) and In-Memory (available in MongoDB Enterprise)

    => WiredTiger:
    -> Is the default storage engine and is recommended for new deployments.
    -> Provides document-level concurrency, check-pointing, and compression.
    -> In MongoDB Enterprise, WiredTiger also supports Encryption at Rest.
    -> WiredTiger is MongoDB's default engine, seamlessly merging document-level concurrency for high throughput, advanced compression techniques for optimized storage, and an in-memory architecture for rapid data access.

    => In-Memory:
    -> An In-Memory storage engine is available in MongoDB Enterprise.
    -> Secondary members can use either the WiredTiger storage engine or the in-memory storage engines.

    => The choice of storage engine can impact application performance, so it's important to choose the right one for your specific workload.

19. How to condense large volumes of data in MongoDB?

    > Using aggregation

20. How to use text search in MongoDB?

    > Using indexing

21. What are some alternatives NoSQL databases to MongoDB?

    > CassandraDB, DynamoDB, Apache HBase, Redis, Neo4j

22. What are different types of NoSQL Databases?

    > Key Value - Redis, Riak => Usage : Briskly changing data and high availability
    > Column Based - Cassandra, Apache HBase => Usage : Read/Write extensions
    > Document Based - MongoDB, CouchBase => Usage : Working with occasionally changing consistent data
    > Graph Based - Neo4j, BigData => Usage : Spatial data storage

23. How does MongoDB store data?

    > MongoDB stores data as documents (specifically BSON documents) which are gathered together in collections.

24. What are the different data models in MongoDB?

    > 2 Types :
    > => Embedded Data Model : Embedded documents capture relationships between data by storing related data in a single document structure.
    > => Reference Data Model : Reference model stores the relationships between data by including links or references from one documents to another.

25. What is Sharding in MongoDB?

    > Sharding is a method of distributing data across multiple databases. MongoDB supports deployments with large data sets and high throughput operations via Sharding.
    > Add more capacity to a single server, such as adding more memory and processing units or adding more RAM on a single server.

26. When should we embed one document with another?

    > When the relationship is one-to-few (not many, not unlimited). For unlimited use case, you should start considering separating sub-documents into another collection.
    > When retrieval is likely to happen together, that will improve performance.
    > When updates are likely to happen at the same time, you can use multi-documents transactions, a single document transaction would be more performant.
    > When the field is rarely updated.

27. What is the use of Capped Collection?

    > Capped Collections are fixed-sized collections that supports high-throughput operations that insert, retrieve, and delete documents based in insertion order.

28. How can you store images, videos and other large files (>16 MB)?

    > MongoDB supports storing files <16 MB only. For files more than 16 MB it uses a special functionality called as GridFS.
    > GridFS is driver specification for uploading and retrieval of MongoDB files larger than 16 MB.
    > GridFS divides large files into equal chunks and stores them as a separate documents (e.g. audio, video, images etc.).
    > All the images, video, audio files are streamed as chunks and each chunk is of size 255KB or less.

29. What are some utilities for Backup and Restoring in MongoDB?

    > The MongoDB shell does not include export, import, duplicate, or retrieval operation. However, MongoDB provides the utilities to take backup and perform the restore operations.

    => Mongoimport
    => Mongoexport
    => Mongodump (Most common, it creates a binary backup of the database, and it is the preferred method of dumping data from source mongodb deployment )
    => Mongorestore (To restore the data that was dumped by mongodump)

30. Explain about Map Reduce process in MongoDB?

    > Map-reduce is a data processing paradigm for condensing large volumes of data into useful aggregated results.

31. How does MongoDB ensure High availability of data?

    > Using Sharding and Replica Sets

32. What is the role profiler in MongoDB?

    > Database profiler is used to collect information regarding the queries which are executed on an individual database instance.
    > It allows us to collect performance data about operations occurring on a MongoDB instance.

33. Can we use Regular expressions in MongoDB?

    > Regular expressions are used to match patterns in a document just like finding patters in a SQL table.
    > Provides patters or a sequence of characters for matching text and define search pattern.
    > Retrieving an unidentified field in a document easily.
    > Query databases to find a smaller subset of data within a Collection.

    > $regex operator provides regular expression capabilities for pattern matching strings in the queries.

    => db.collectionName.find({field : {$regex : /pattern/}})
    => db.collectionName.find({field : {$regex : "^pattern$"}})
    => db.collectionName.find({field : {$regex : /pattern/, $options : "s/x/i/m"}})

34. How do you search for documents in which a specific field has one or more values?

    > $in : [value1, value2]

35. Both writes and reads becomes faster when you ad more slaves to replica sets. Is it true ?

    > False
    > A replica sets can only have one primary at any particular time (one master) with the other nodes being secondaries (slaves).
    > All write operations are performed only on master. Read operations, on the th other hand, can be performed on any instance, slave or master. As a result, adding more slaves to a replica set accelerates only reads.

36. What is a Shard key and mention the components of MongoDB Sharded Cluster?

    > Shard key is used by MongoDB to distribute the documents of collection across shards.
    > Components of MongoDB Sharded Cluster :

    => Shard - Shard contains a subset of sharded data. Each shard can be deployed as replica set.
    => Mongos - Mongos provide an interface between the client applications and the mongo cluster. Mongos acts as a query router to the sharded cluster.
    => Config Servers - Config servers store metadata and configuration settings for the MongoDB sharded cluster.

37. The Join clause is a key feature of Relational DB. What is the MongoDB equivalent if any and are there any limitations?

    > $lookup operator is the equivalent of Join in MongoDB
    > The $lookup operator has a significant disadvantage in that it does not work with sharded collections. It's worth noting that, rather than looking for a direct equivalent to Join, MongoDB developers often simply denormalize the data, eliminating the need for a Join equivalent.
    > In a nutshell, it performs an outer join to a collection in the same database to filter the documents from the joint collection for processing.
    > $lookup operator adds a new array field to each input document and this new array field contains the matching documents from the joint collection.

38. Mention some Pros and cons of normalizing data in MongoDB database.

    > Updating documents is fast for normalized data and relatively slower for denormalized data. On the other hand, reading documents is fast in denormalized data and slower ion normalized.
    > Denormalized data is harder to keep in sync and takes up more space.

    > RDBMS have inherent support for normalization and allow data to be manages as a separate concern, whereas NoSQL DBMSes like MongoDB do not inherently support normalization.
