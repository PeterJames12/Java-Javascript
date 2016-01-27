var first = 'Say hello right now!!! ';

function test1now (count) {
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

function transformerPartyTwo(first, second, third) {

    if (first + second > third && first + third > second && third + second > first) {
        return true;
    } else {
        return false;
    }
}

function test3TryGipotenysa(katet1, katet2, katet3) {

    if (!transformerPartyTwo(katet1, katet2, katet3)) {
        return false;
    }else {
        var kat1 = Math.pow(katet1, 2),
            kat2 = Math.pow(katet2, 2),
            gip = Math.pow(katet3, 2);

        if (kat1 + kat2 === gip) {
            console.log('Трикутник прямокутний');
        }else{
            console.log('Трикутник якійсь інший');
        }
    }
    return "Have a nice day";
}

function test4CheckRivnobedreny(storona1,storona2,storona3) {

    if (!transformerPartyTwo(storona1,storona2,storona3)) {
        return false;
    }else {
        if (storona1 == storona2 && storona3 < storona1 || storona3 < storona2 && storona3 > 0) {
            console.log('Трикутник рівнобедрений');
        } else {
            console.log('Трикутник не рівнобедрений');
        }
    }


}

function test5checkTwoRivnostoronuh(one,two,three,foo,five,six) {

    if (!transformerPartyTwo(one,two,three) && !transformerPartyTwo(foo,five,six)) {
        return false;
    }else {

        var result = null,
            result2 = null;

        if (one == two && three == (two + one + three) / 3) {
            result = "We love Ukraine";
        } else {
            result = "Океан Ельзи";
        }

        if (foo == five && six == (five + foo + six) / 3) {
            result2 = "We love Ukraine";
        } else {
            result2 = "Hello";
        }

        if (result===result2) {
            console.log("Вітаю ми маємо два рівносторонніх трикутника");
        } else {
            console.log("Що ж теж вітаю, але в нас не два рівносторонніх трикутника");
        }
    }
}

function test6twoCount(first, second) {

    if (first % second === 0) {
        console.log("Ділиться без остачі");
    } else {
        console.log("Йо-ма-йо, є остача");
    }
}

function test7evenNumber(first, second) {

    if (first % 2 == 0 && second % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function transformer(arr, boy) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = boy%10;
        boy/=10;
    }
}

function test8fooCount(girl) {

    var arr = [];
    arr.length = 4;

    transformer(arr ,girl);

    var result = 0,
        resultS;

    for (var i = 0; i < arr.length; i++) {
        resultS = Math.ceil(result += arr[i]);
    }

    if (resultS % 2 == 0) {
        console.log("Сума парна");
    } else {
        console.log("Сума не парна");
    }
}

function test9ComeBack(friend) {

    var mas = [];
    transformer(mas,friend);
    var check;

    for (var i = 0; i <mas.length; i++) {
        if (mas[i] == mas[mas.length - i - 1]) {
            check = "Це палиндром";
        } else {
            check = "Це не палиндром";
        }
    }
    console.log(check);

}

test1now('Hello');

test2isInt('9');

console.log(test3TryGipotenysa(3,4,5));

test4CheckRivnobedreny(10,10,8);

test5checkTwoRivnostoronuh(17, 17, 17, 23, 23, 23);

test6twoCount(12, 23);

console.log(test7evenNumber(17, 23));

test8fooCount(1723);

//test9ComeBack(1723);

















