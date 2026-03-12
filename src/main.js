const apiKey = 'KMYhqs8uFYOpYjg3e67uTJ483NrczRYTQl4Qnvng'
const container = document.getElementById('newsContainer');

async function fetchNews (query = "latest") {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.articles;
    }

    function displayNews(articles) {
        container.innerHTML = '';
        articles.slice(0,6).forEach(article => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded shadow-md cursor-pointer';
            card.innerHTML = `
            <img src="${article.urlToImage}" alt=${article.title} class="rounded mb-2" />
            <h3 class="font-bold">${article.title}</h3>
            <p class="text-sm text-gray-600">By ${article.author || 'Unknown'}</p>
            <p class="text-sm mt-2">${article.description || ''}</p>
            <a href="${article.url}" target="_blank" class="text-blue-500 mt-2 inline-block">Read more</a>
            `;
            container.appendChild(card);
        });
    }

    fetchNews();
    
    function displayNews(articles) {
  container.innerHTML = "";
  articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow cursor-pointer";
    card.addEventListener("click", () => showArticleDetails(article));
    card.innerHTML = `
      <img src="${article.urlToImage}" class="rounded mb-2" />
      <h3 class="font-bold">${article.title}</h3>
      <p class="text-sm">${article.description || ""}</p>
    `;
    container.appendChild(card);
  });
}

function showArticleDetails(article) {
  const details = document.createElement("div");
  details.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.content || article.description}</p>
    <a href="${article.url}" target="_blank" class="text-blue-500 underline">Read Full Article</a>
  `;
  container.innerHTML = "";
  container.appendChild(details);
}

try {
  const res = fetch(url);
  if (!res.ok) throw new Error("Network error");
  const data = res.json();
  if (!data.articles.length) container.innerHTML = "<p>No results found.</p>";
} catch (err) {
  container.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
}


  document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  fetchNews(query || "latest");
});

   { fetchNews, displayNews };