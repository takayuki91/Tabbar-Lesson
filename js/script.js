/* global $ */
$('#tab-contents .tab[id != "tab1"]').hide();

// id="tab-menu"のaタグクリックで、タブ内の全コンテンツ非表示
$('#tab-menu a').on('click', function(event){
  $("#tab-contents .tab").hide();
  // activeclassを指定し、クラスを削除する
  $("#tab-menu .active").removeClass("active");
  // 任意のHTML要素にクラス属性を追加できるメソッド
  $(this).addClass("active");
  // HTML要素の属性を取得したり設定できるメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});


 