import React from 'react';
import Card from './CardDiv';
import CardArrayComp from './CardArrComp';
import dynamicComponent from './CardArrComp';

function ncard(val){
    console.log(val);
    return(
        <Card
                cardHead={val.cardHead}
                money={val.money}
                sing={val.sing}
                site={val.site}
                mobile={val.mobile}
                foote_r={val.foote_r}
            />
    );
}


function BestPart(){

    return(
        <>
            {dynamicComponent.map(ncard)}
        </>
    );
}

export default BestPart;