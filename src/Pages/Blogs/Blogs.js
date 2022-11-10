import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="my-8 mx-5 md:mx-14">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs : ZahidograhY </title>
      </Helmet>
      <h3 className="text-2xl md:text-4xl font-bold text-stone-800">
        Let's explore some important concepts!!
      </h3>
      {/* blog-1 */}
      <div className="my-12 ">
        <h3 className="text-xl md:text-2xl font-bold   my-8 text-gray-800">
          {" "}
          SQL vs NoSQL - -
        </h3>

        <div className="px-10">
          <div className=" md:w-2/5 mx-auto  my-8">
            <img
              className="text-center  "
              src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
              alt=""
            />
          </div>

          <p className="text-xl text-gray-700">
            <span className="font-bold">
              The five critical differences between SQL vs NoSQL are:
            </span>
            <br /> <br /> SQL databases are relational, NoSQL databases are
            non-relational. <br />
            <br />
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.{" "}
            <br />
            <br /> SQL databases are vertically scalable, while NoSQL databases
            are horizontally scalable.
            <br /> <br />
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores. <br /> <br /> SQL databases
            are better for multi-row transactions, while NoSQL is better for
            unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      {/* blog-2  */}
      <div className="my-16 ">
        <h3 className="text-xl md:text-2xl font-bold   my-8 text-gray-800">
          {" "}
          JWT:- JSON Web Tokens
        </h3>

        <div className="px-10">
          <div className=" md:w-2/5 mx-auto  my-8">
            <PhotoProvider>
              <PhotoView src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png">
                <img
                  className="text-center  "
                  src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          <p className="text-xl text-gray-700">
            <span className="font-bold">What is JWT? </span>
            <br />
            What is JSON Web Token? JSON Web Token (JWT) is an open standard
            (RFC 7519) that defines a compact and self-contained way for
            securely transmitting information between parties as a JSON object.
            This information can be verified and trusted because it is digitally
            signed.
            <br />
            <br />
            <br />
            <span className="font-bold">How does JWT works? </span>
            <br />
            <br />
            JWT differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>
      {/* blog-3  */}
      <div className="my-16 ">
        <h3 className="text-xl md:text-2xl font-bold   my-8 text-gray-800">
          {" "}
          Difference between Javascript and NodeJS -
        </h3>

        <div className="px-10">
          <p className="text-xl text-gray-700">
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language.
            <br /> <br />
            2. JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node.js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language. It requires libraries that can be
            conveniently accessed from JavaScript programming to be more
            helpful.
            <br />
            <br />
            3. Any engine may run JavaScript. As a result, writing JavaScript is
            incredibly easy, and any working environment is similar to a
            complete browser. Node.js, on the other hand, only enables the V8
            engine. Written JavaScript code, on the other hand, can run in any
            context, regardless of whether the V8 engine is supported.
            <br />
            <br />
          </p>
        </div>
      </div>

      {/* blog-4  */}
      <div className="my-16 ">
        <h3 className="text-xl md:text-2xl font-bold   my-8 text-gray-800">
          {" "}
          How does NodeJS handle multiple requests at the same time?
        </h3>

        <div className="px-10">
          <div className=" md:w-2/5 mx-auto  my-8">
            <PhotoProvider>
              <PhotoView src="https://miro.medium.com/max/1024/1*evOcy9n3vslkDt0Mj8mBYw.jpeg">
                <img
                  className="text-center  "
                  src="https://miro.medium.com/max/1024/1*evOcy9n3vslkDt0Mj8mBYw.jpeg"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
            {/* <img
              className="text-center  "
              src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png"
              alt=""
            /> */}
          </div>

          <p className="text-xl text-gray-700">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.
            <br />
            <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
