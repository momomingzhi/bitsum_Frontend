/** @format */

enum StarbuksGrade {
    WELCOME,
    GREEN,
    GOLD,
}
function getDisCount(v: StarbuksGrade): number {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
//console.log(getDiscount(StarbuksGrade.GREEN))
/*
console.log(StarbuksGrade) 하면
{
    '0':'WELCOME',
    '1':"GOLD",
    '2':"GREEN",
    WELCOME:0,
    GOLD:1,
    GREEN:2
}
이렇게 나와
*/
//이렇게 초기 지정해줘야 안전함
enum StarbuksGrade2 {
    WELCOME = 0,
    DDD = 3,
    GREEN = 1,
    GOLD = 2,
}
