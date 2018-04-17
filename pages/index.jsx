import React from 'react';

import CompanysRow from '../components/companys-row';
import Header from '../components/header';
import Footer from '../components/footer';
import Filter from '../components/filter';

import pageStyle from '../style/page';

export default () => (
  <div>
    <Header />
    <div className="container page" style={pageStyle}>
      <div className="columns">
        <Filter />
        <div className="column">
          <nav className="pagination" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Voltar</a>
            <a className="pagination-next">Próxima Página</a>
            <ul className="pagination-list">
              <li>
                <a className="pagination-link" aria-label="Goto page 1">1</a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 45">45</a>
              </li>
              <li>
                <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 47">47</a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 86">86</a>
              </li>
            </ul>
          </nav>

          <CompanysRow />
          <CompanysRow />
          <CompanysRow />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
