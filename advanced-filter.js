// 高级筛选器功能

// 筛选状态
let filterState = {
    category: [],
    price: [],
    platform: [],
    language: [],
    searchQuery: '',
    sortBy: 'popular'
};

// 初始化筛选器
function initAdvancedFilter() {
    updateFilterResults();
}

// 应用筛选
function applyFilters() {
    const cards = document.querySelectorAll('.tool-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const matchesCategory = filterState.category.length === 0 ||
            filterState.category.some(cat => card.getAttribute('data-category')?.includes(cat));

        const matchesPrice = filterState.price.length === 0 ||
            filterState.price.some(price => card.getAttribute('data-price') === price);

        const matchesPlatform = filterState.platform.length === 0 ||
            filterState.platform.some(platform => card.getAttribute('data-platform')?.includes(platform));

        const matchesLanguage = filterState.language.length === 0 ||
            filterState.language.some(lang => card.getAttribute('data-language')?.includes(lang));

        const matchesSearch = filterState.searchQuery === '' ||
            card.textContent.toLowerCase().includes(filterState.searchQuery.toLowerCase());

        if (matchesCategory && matchesPrice && matchesPlatform && matchesLanguage && matchesSearch) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    updateFilterResults(visibleCount);
    sortTools();
}

// 切换筛选选项
function toggleFilter(type, value) {
    const index = filterState[type].indexOf(value);

    if (index > -1) {
        filterState[type].splice(index, 1);
    } else {
        filterState[type].push(value);
    }

    applyFilters();
}

// 搜索功能
function advancedSearch(query) {
    filterState.searchQuery = query;
    applyFilters();
}

// 重置筛选
function resetFilters() {
    filterState = {
        category: [],
        price: [],
        platform: [],
        language: [],
        searchQuery: '',
        sortBy: 'popular'
    };

    // 清除所有选中状态
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    // 清空搜索框
    const searchInput = document.getElementById('advancedSearchInput');
    if (searchInput) searchInput.value = '';

    applyFilters();
}

// 排序工具
function sortTools() {
    const container = document.querySelector('.tools-grid');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.tool-card'));
    const visibleCards = cards.filter(card => card.style.display !== 'none');

    visibleCards.sort((a, b) => {
        switch (filterState.sortBy) {
            case 'name':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);

            case 'price-low':
                return getPriceValue(a) - getPriceValue(b);

            case 'price-high':
                return getPriceValue(b) - getPriceValue(a);

            case 'newest':
                return parseInt(b.getAttribute('data-date') || 0) - parseInt(a.getAttribute('data-date') || 0);

            default: // popular
                return 0;
        }
    });

    // 重新排列
    visibleCards.forEach(card => container.appendChild(card));
}

// 获取价格数值（用于排序）
function getPriceValue(card) {
    const priceType = card.getAttribute('data-price');
    switch (priceType) {
        case 'free': return 0;
        case 'freemium': return 5;
        case 'paid': return 10;
        default: return 0;
    }
}

// 更改排序方式
function changeSortBy(sortType) {
    filterState.sortBy = sortType;
    sortTools();
}

// 更新筛选结果统计
function updateFilterResults(count) {
    const resultElement = document.getElementById('filterCount');
    if (!resultElement) return;

    if (count === undefined) {
        // 计算可见卡片数量
        count = document.querySelectorAll('.tool-card[style*="display: block"], .tool-card:not([style*="display: none"])').length;
    }

    resultElement.innerHTML = `找到 <strong>${count}</strong> 个工具`;
}

// 为工具卡片添加必要的data属性（如果还没有）
function addDataAttributes() {
    const cards = document.querySelectorAll('.tool-card');

    cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent || '';

        // 根据标题自动设置分类
        if (title.includes('ChatGPT') || title.includes('DeepSeek') || title.includes('文心')) {
            card.setAttribute('data-category', 'writing');
            card.setAttribute('data-platform', 'web,app');
        } else if (title.includes('Midjourney') || title.includes('Stable') || title.includes('DALL')) {
            card.setAttribute('data-category', 'image');
            card.setAttribute('data-platform', 'web');
        } else if (title.includes('Runway') || title.includes('剪映') || title.includes('Pictory')) {
            card.setAttribute('data-category', 'video');
            card.setAttribute('data-platform', 'web,desktop');
        }

        // 设置语言
        if (title.includes('文心') || title.includes('DeepSeek') || title.includes('剪映')) {
            card.setAttribute('data-language', 'chinese');
        } else {
            card.setAttribute('data-language', 'english,chinese');
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    addDataAttributes();
    initAdvancedFilter();
});