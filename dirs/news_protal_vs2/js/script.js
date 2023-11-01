// Lấy danh sách tất cả các nút "Read More"
const readMoreButtons = document.querySelectorAll(".read-more-button");

// Bắt sự kiện click trên mỗi nút "Read More"
readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Tìm phần tử cha (article) của nút được click
    const article = button.closest(".news-article");

    // Tìm phần tử p chứa nội dung bài viết
    const paragraph = article.querySelector("p");

    // Thêm hoặc xóa lớp "expanded" để hiển thị hoặc ẩn nội dung
    if (paragraph.classList.contains("expanded")) {
      paragraph.classList.remove("expanded");
      button.textContent = "Read More";
    } else {
      paragraph.classList.add("expanded");
      button.textContent = "Read Less";
    }
  });
});
