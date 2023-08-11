const toggleBtn = document.querySelector(".btn");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesContainer = document.querySelector(".articles");

// first way
const articlesData = articles
  .map((object) => {
    const { title, date, length, snippet } = object;
    // format date
    const formatDate = dayjs(date).format("MMMM DD, YYYY");
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>${snippet}</p>
      </article>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;

// //second way
// const articlesData = articles
//   .map(({ title, date, length, snippet } = object) => {
//     // format date

//     return `<article class="post">
//         <h2>${title}</h2>
//         <div class="post-info">
//           <span>${date}</span>
//           <span>${length} min read</span>
//         </div>
//         <p>${snippet}</p>
//       </article>`;
//   })
//   .join("");

// articlesContainer.innerHTML = articlesData;

// const datas = articles
//   .map((item) => {
//     return `<h2>${item.title}</h2>
//         <div class="post-info">
//           <span>${item.date}</span>
//           <span>${item.length} min read</span>
//         </div>
//         <p>${item.snippet}</p>`;
//   })
//   .join("");

// const post = document.querySelector(".post");
// post.innerHTML = datas;
