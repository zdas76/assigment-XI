import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='display-6 my-5 fw-bold'>Bolgs pages</h1>
            <div className='text-start border-bottom p-3 my-3 '>
                <p><strong>Question:</strong> 13.1 Difference between javascript and nodejs </p>
                <p><strong>Answer :</strong>
                    JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel. <br /><br />NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.
                </p>
            </div>
            <div className='text-start my-3 border-bottom p-3'>
                <p><strong>Question:</strong> When should you use nodejs and when should you use mongodb </p>
                <p><strong>Answer :</strong>
                    MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons: <br />

                    <ul>
                        <li>NoSQL Database Management Systems are more flexible than RDBMS</li>
                        <li>The expense of maintaining and even setting up a RDBMS is relatively high</li>
                        <li>MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data</li>
                        <li>It holds a set of collections and stores data as document</li>
                        <li>Can handle variety of data and huge amount of data</li>
                        <li>It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database</li>
                    </ul>
                </p>
            </div>
            <div className='text-start my-3 border-bottom p-3'>
                <p><strong>Question:</strong> Differences between sql and nosql databases. </p>
                <p><strong>Answer :</strong> <br />
                    1. SQL databases are relational, NoSQL databases are non-relational. <br />

                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />

                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />

                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />

                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
        </div>
    );
};

export default Blogs;