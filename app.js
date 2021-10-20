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
                var html = '';
                    for (var i = 0; i < res.results.length; i++) {
                        var result = res.results[i];
                        console.log(res.results);
                        html += '<h2>住所' + (i + 1) + '</h2>';
                        html += '<div>都道府県コード：' + result.prefcode + '</div>';
                        html += '<div>都道府県：' + result.address1 + '</div>';
                        html += '<div>市区町村：' + result.address2 + '</div>';
                        html += '<div>町域：' + result.address3 + '</div>';
                        html += '<div>都道府県(カナ)：' + result.kana1 + '</div>';
                        html += '<div>市区町村(カナ)：' + result.kana1 + '</div>';
                        html += '<div>町域(カナ)：' + result.kana1 + '</div>';
                    }
                    $('#zip_result').html(html);
            }
        });
        .fail((error) => {
                console.log(error);
                $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
         });
    });
});