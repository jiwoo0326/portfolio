// 全てのタブリンクを取得
const tabs = document.querySelectorAll(".links");
const tabContents = document.querySelectorAll(".tab-content");

// 最初に最初のタブを表示する
document.getElementById("skills").classList.add("active");

// タブをクリックしたときの処理
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // すべてのコンテンツを非表示
    tabContents.forEach((content) => content.classList.remove("active"));

    // クリックされたタブに対応するコンテンツを表示
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.links');
  const tabContents = document.querySelectorAll('.tab-content');

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' class from all links and tab contents
      links.forEach(l => l.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add 'active' class to the clicked link
      link.classList.add('active');

      // Show the corresponding tab content
      const tabId = link.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});


function changeLanguage() {
  const elementsToChange = [
    ...document.querySelectorAll(
      "nav a, .header-text p, .header-text h1, .box nav, .tabs p, .tab-content, #about .contant, #about .box, #profile .content, #profile .tab-content"
    ),
  ];

  elementsToChange.forEach((element) => {
    // Get the original text
    const originalText = element.textContent;
    // Split the text into words
    const words = originalText.split(/\s+/);
    // Create a new array with "Meow" repeated for each word
    const meowText = words.map(() => "Meow").join(" ");
    // Set the new text
    element.textContent = meowText;

    // Restore the original styles
    element.style.fontFamily = getComputedStyle(element).fontFamily;
    element.style.fontSize = getComputedStyle(element).fontSize;
    element.style.color = getComputedStyle(element).color;
    element.style.fontWeight = getComputedStyle(element).fontWeight;
  });
}

// Ensure the default language is set on page load (optional)
document.addEventListener("DOMContentLoaded", () => {
  // You can call changeLanguage() here if you want to set "Meow" on load
});
