import React from 'react';
import ReactDOM from 'react-dom';
import BestPart from './CardNumber';


ReactDOM.render(
<>
  <section class="best-part" id="priceingdiv">
    <div class="container headings text-center">
      <h1 class="text-center font-weight-bold text-white">OUR BEST PRICING</h1>
    </div>
    <div class="container">
    <div class="row">
        <BestPart/>
    </div>
    <div class="row">
        <BestPart/>
    </div>
    </div>
  </section>
</>,
document.getElementById('root')

);