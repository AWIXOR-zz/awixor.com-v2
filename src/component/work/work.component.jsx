import React from "react";

import "./work.styles.scss";

const Work = () => (
  <section id="work" className="work">
    <h1 className="title">Work</h1>
    <div className="work-content">
      <div className="card">
        <a
          href="https://github.com/AWIXOR/DBMigration"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">DB Migration</h2>
        </a>
        <p>Application made to migrate Data from MySQL to MongoDB</p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="csh"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/csharp.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="visualstudio"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudio.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mysql"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mongodb"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg"
          />
        </div>
      </div>
      <div className="card">
        <a
          href="https://github.com/AWIXOR/Invoice_System"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">Invoice System</h2>
        </a>
        <p>
          Application made for a company to calculate invoices and print it to
          pdf
        </p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="php"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="bootstrap"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mysql"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg"
          />
        </div>
      </div>
      <div className="card">
        <a
          href="https://github.com/AWIXOR/Search_Engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">Search engine</h2>
        </a>
        <p>SEO to fetch Data from databases. Works with MySQL & MongoDB.</p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="php"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="jquery"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jquery.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mysql"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mongodb"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg"
          />
        </div>
      </div>
      <div className="card">
        <a
          href="https://github.com/AWIXOR/BTS_Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">Laravel CMS</h2>
        </a>
        <p>
          CMS for My School, that contains a full authentication system for
          students and teachers too.
        </p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="laravel"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="js"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="bootstrap"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bootstrap.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="mysql"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg"
          />
        </div>
      </div>
      <div className="card">
        <a
          href="https://github.com/AWIXOR/awixor.com-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">My Porfolio</h2>
        </a>
        <p>My personal Website open sourced on GitHub.</p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="react"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="sass"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sass.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="ps"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg"
          />
          <img
            height="18"
            width="18"
            alt="img"
            className="figma"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg"
          />
        </div>
      </div>
      <div className="card">
        <a
          href="https://github.com/AWIXOR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="card-title">& MORE</h2>
        </a>
        <p>Feel free to expolre more of my work on my GitHub....</p>
        <div className="card-footer">
          <img
            height="18"
            width="18"
            alt="img"
            className="github"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Work;
