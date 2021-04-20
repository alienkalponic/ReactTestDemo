import React from 'react';
import './index.css';



function Card(props){

    return(
        <>
            <div class="col-lg-3 col-12">
                <div class="card text-center">
                    <div class="card-header">{props.cardHead}</div>
                    <div class="card-body">
                        <li>{props.sing}<span class="money">{props.money}</span>{props.site}</li>
                        <li>{props.mobile}</li>
                    </div>
                    <div class="card-footer">
                    <a href="#">{props.foote_r}</a>
                    </div>
                </div>
            </div>    
        </>
    );
}
export default Card;