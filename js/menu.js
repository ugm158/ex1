let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;

let m = '';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>';
m += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>';


// 取得 DOM 的節點
let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 文字內容
// menu.innerHTML = m;//將 HTML 寫入節點

// let menuData = ['Home', 'About', 'Products', 'Store'];
// let menuDataUrl = ['index.html', 'about.html"', 'products.htmls', 'store.html']

let menuData = [
    {
        title: '首頁',
        url: 'index.html'
    },
    {
        title: 'About',
        url: 'about.html'
    },
    {
        title: 'Products',
        url: 'products.html'
    },
    {
        title: 'Store',
        url: 'store.html'
    }
];

/**
 menuHtml = menuHtml + `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>`;
 */
menuHtml = '';
for(let row of menuData){
    menuHtml += `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>`;
}
menu.innerHTML = menuHtml;//將 HTML 寫入節點