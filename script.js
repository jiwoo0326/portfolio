document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.links');
  const tabContents = document.querySelectorAll('.tab-content');

  // 最初に最初のタブを表示する
  tabs[0].classList.add('active');
  tabContents[0].classList.add('active');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // すべてのタブリンクとコンテンツから 'active' クラスを削除
      tabs.forEach(link => link.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // クリックされたタブリンクに 'active' クラスを追加
      tab.classList.add('active');

      // クリックされたタブに対応するコンテンツを表示
      const target = tab.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });
});
