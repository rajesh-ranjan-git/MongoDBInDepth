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

1. Cursors in MOngoDB are used to efficiently retrieve large sets from queries, providing control over the data retrieval process.

-> MOngoDB retrieves query results in batches using cursors.
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

=> User with Caution

-> Be cautious when using limit() adn skip() on large collections.
-> Consider using indexing to optimize query performance.

> Logical Operators

===> Syntax -> db.collection-name.find({$operator : [{condition 1}, {condition2}, ...]});

==> $and -> And
--> db.collection-name.find({$and : [{condition 1}, {condition2}, ...]});
-> $and performs a logical AND operation an array of expressions, where all expressions must br true for the document to match.
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

=> The $all operator selects tge documents where the value of a field is in array that contains all the specified elements.
-> db.collection-name.find({"fieldname" : {$all : ["value1", "value2", ...]}})

> $elemMatch
=> The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
-> db.collection-name.find({"fieldname" : {$elemMatch : ["value1", "value2", ...]}})

# Update operations in MongoDB

1. updateOne() and updateMany()
2. Removing and renaming fields
3. Adding, removing items from array
4. Updating embedded documents
