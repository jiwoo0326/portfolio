// 全てのタブリンクを取得
const tabs = document.querySelectorAll('.links');
const tabContents = document.querySelectorAll('.tab-content');

// 最初に最初のタブを表示する
document.getElementById('skills').classList.add('active');

// タブをクリックしたときの処理
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // すべてのコンテンツを非表示
    tabContents.forEach(content => content.classList.remove('active'));

    // クリックされたタブに対応するコンテンツを表示
    const target = tab.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});
