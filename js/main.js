$(function() {
  $('#page-top').click(function() {
    // イベント
    var position = $('body').offset();
    // 座標情報代入 top,left
    $('html, body').animate({scrollTop:position});
    // 指定の要素に対してアニメーションを指定
    return false;
  });
})

// id="page-top"をクリックした際に発火するイベント
// 対象要素.offset() = 対象要素の座標位置を取得
// 対象要素.animate( CSSプロパティ, duration, easing, 関数 )
// {scrollTop:position} オブジェクト形式でCSSプロパティを記述
// return false; ブラウザ側で行う処理を中断