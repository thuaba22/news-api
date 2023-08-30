const handleCatagory = async() => {
 const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
 const data = await response.json();
 const tabContainer = document.getElementById('tab-container');
 data.data.news_category.slice(0,3).forEach((catagory) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <a class="tab">${catagory.category_name}</a>
    `;
    tabContainer.appendChild(div);
 });
 
}

handleCatagory();