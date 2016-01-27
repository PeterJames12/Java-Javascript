var first = 'Say hello right now!!! ';

var now = function() {
    console.log(first + 'Hello');
};

function test2isInt(say) {

    switch (parseInt(say)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log('Count');
            break;
        default :
            console.log('Not Number');
    }
};

test2isInt('9');

now();

