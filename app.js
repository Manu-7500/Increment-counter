const counters = document.querySelectorAll( '.counter' );

counters.forEach( ( counter ) => {
    counter.innerHTML = 0;

    const upadatecounter = () => {

        const targetcount = +counter.getAttribute( "data-target" );

        const startingcount = Number( counter.innerHTML );

        const increment = targetcount / 100;

        if ( startingcount < targetcount ) {
            counter.innerHTML = `${Math.round( startingcount + increment )}`;
        } else {
            counter.innerHTML = targetcount;
        }


        setTimeout( upadatecounter, 10 )
    }
    upadatecounter();
} )