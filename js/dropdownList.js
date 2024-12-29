const menuIcon = document.getElementById('menuIcon');
const dropdownList = document.getElementById('dropdownList');

// 狀態變數控制顯示或隱藏
let isDropdownVisible = false;

// 點擊漢堡選單，切換顯示/隱藏下拉選單
menuIcon.addEventListener('click', () => {
  isDropdownVisible = !isDropdownVisible;
  dropdownList.style.display = isDropdownVisible ? 'block' : 'none';
});

// 當滑鼠移出下拉選單範圍時，隱藏選單
dropdownList.addEventListener('mouseleave', () => {
  isDropdownVisible = false;
  dropdownList.style.display = 'none';
});
