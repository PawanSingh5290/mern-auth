import React from 'react'

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4
       text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
        This is a full-stack web application build with
         the MERN (MongoDB, Express, React, Nodes.js) stack.
         It includes authentication features that users to
          sign up , log in , and log out, and provides
          access to protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is build with
        React Router for client-side routing. The back-end
        is built with Node.js and Express, and uses MongoDB
         as the database. Authentication is implemented
         using JSON Wed Tokens(JWT);
      </p>
      <p className='mb-4 text-slate-700'>
        This application is intended as a starting poin for
        building full-stack web application using the MERN stack.
        Feel free to use it as a template for your own
        projects!

      </p>
    </div>
  )
}
