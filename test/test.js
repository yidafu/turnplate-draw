
/*
    @TODO 只剩 ajax 没写
*/


var data = [{"name":"一等奖",
            "num":"5",
            "probability":"5"},
            {"name":"二等奖",
            "num":"45",
            "probability":"25"},
            {"name":"三等奖",
            "num":"150",
            "probability":"30"}]

var tp = turnplate('container', data );
tp.draw()
