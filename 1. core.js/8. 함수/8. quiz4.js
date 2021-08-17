function r1( ){
    console.log('r1 호출');
    return 4;
}
function r10( ){
    console.log('r10 호출');
    return (30+r1( ));
}
function r100( ){
    console.log(`r100 호출`);
    return (200+r10( ));
}



console.log(r100());


