$(function () {
    $("#serch_btn").click(function () {
        // 入力された値を取得
        var param = {zipcode: $("#zipcode").val()}
        // urlを設定
        var send_url = "https://zipcloud.ibsnet.co.jp/api/search";
        // 送るデータを成形する
        var param = { zipcode: zipcode };
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: "GET", 
            cache: false,
            data: param,
            url: send_url,
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                var result = value.results[0];
                $("#zip_result").val(result.address1 + result.address2 + result.address3);
            }
                $('#zip_result').html(res.result);
        })
        .fail((error) => {
                console.log(error);
                $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
            });
    });
});