// ---------------- سرچ ----------------
const input = document.querySelector(".tex-input");
const button = document.querySelector(".click-button");
const posts = document.querySelectorAll(".blog-gridleft-item");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const text = input.value.trim();

  posts.forEach(function (post) {
    const postTitle = post.querySelector(
      ".blog-detail-header"
    ).textContent;

    const postAuthor = post.querySelector(
      ".blog-figcaption"
    ).textContent;

    if (
      text === "" ||
      postTitle.includes(text) ||
      postAuthor.includes(text)
    ) {
      post.classList.remove("hidden");
    } else {
      post.classList.add("hidden");
    }
  });
});

// ---------------- pagination -----------------

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nextpage-number");
  const container = document.querySelector(".blog-gridleft");

  const items = Array.from(
    document.querySelectorAll(".blog-gridleft-item")
  );

  const firstPage = [...items];

  const secondPage = [
    items[2],
    items[0],
    items[3],
    items[1],
    items[5],
    items[4],
  ];

  const thirdPage = [
    items[4],
    items[1],
    items[5],
    items[0],
    items[3],
    items[2],
  ];

  function changePage(pageNumber) {
    let pageItems;

    if (pageNumber === 1) {
      pageItems = firstPage;
    } else if (pageNumber === 2) {
      pageItems = secondPage;
    } else if (pageNumber === 3) {
      pageItems = thirdPage;
    }

    pageItems.forEach(function (item) {
      container.appendChild(item);
    });
  }

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("page-active");
      });

      button.classList.add("page-active");

      changePage(index + 1);
    });
  });

  buttons[0].classList.add("page-active");
  changePage(1);
});
