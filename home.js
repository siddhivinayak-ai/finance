// CSV data as a string
const csvData = `
id,name,logo,offerDates,tag,price,gmp,gain
1,ABC Corp,https://img.freepik.com/free-photo/colorful-circle-with-cart-it-word-shopping-it_1340-37276.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jan 10 - Jan 15,BSE SME,273,50,18
2,XYZ Ltd,https://img.freepik.com/free-photo/yellow-silver-hexagon-with-letter-b-it_1340-36066.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jan 20 - Jan 25,MainBoard,120,-10,-8
3,LMN Industries,https://img.freepik.com/premium-vector/product-development-concept-brainstorming-new-product-teamwork-brainstorming-startup-business_939213-1054.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Feb 5 - Feb 10,BSE SME,340,70,25
4,PQR Ltd,https://img.freepik.com/free-vector/entrepreneur-with-money-start-up-project-laptop-isometric-round-composition_1284-28370.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Feb 12 - Feb 17,BSE SME,180,20,10
5,Alpha Industries,https://img.freepik.com/premium-vector/man-with-tie-that-says-ok-it_410516-79736.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Mar 1 - Mar 5,MainBoard,410,100,30
6,Beta Tech,https://img.freepik.com/free-photo/square-with-colorful-paper-that-says-m-it_1340-35619.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Mar 15 - Mar 20,MainBoard,230,-5,-2
7,Gamma Solutions,https://img.freepik.com/free-photo/large-red-letter-k-with-tree-background_1340-36057.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Apr 10 - Apr 15,BSE SME,150,30,15
8,Delta Innovations,https://img.freepik.com/free-vector/creative-cobra-logo-template_23-2149207677.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Apr 20 - Apr 25,MainBoard,300,80,25
`;

// Function to parse CSV data into an array of objects
function parseCSV(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header] = isNaN(values[index]) ? values[index] : parseFloat(values[index]);
            return obj;
        }, {});
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Parse and shuffle the CSV data
const companies = shuffleArray(parseCSV(csvData));

// Generate Cards
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container'); // Assuming there's a container with this ID

    companies.forEach(company => {
        const card = document.createElement('div');
        card.className = 'card';

        // Card content
        card.innerHTML = `
<!-- Tag with dynamic color based on data-tag -->
<div class="tag" data-tag="${company.tag}">${company.tag}</div>

<!-- Company Details Section -->
<div class="company-details">
    <img src="${company.logo}" alt="${company.name}" class="logo">
    <div class="info">
        <h3 class="name">${company.name}</h3>
        <div class="offer-dates">
            <strong>Offer Dates:</strong> ${company.offerDates}
        </div>
    </div>
</div>

<!-- IPO Data Section -->
<div class="ipo-data">
    <!-- IPO Price -->
    <div class="data-item">
        IPO Price
        <strong>Rs ${company.price}</strong>
    </div>
    
    <!-- IPO GMP with Conditional Styling -->
    <div class="data-item">
        IPO GMP
        <strong class="${company.gmp > 0 ? 'green' : 'red'}">Rs ${company.gmp}</strong>
    </div>
    
    <!-- Listing Gain with Conditional Styling -->
    <div class="data-item">
        Listing Gain
        <strong class="${company.gain > 0 ? 'green' : 'red'}">${company.gain}%</strong>
    </div>
</div>
        `;

        container.appendChild(card);
    });
});

const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const closeSidebar = document.getElementById('close-sidebar');
const cardsContainer = document.getElementById('cards-container');

// Toggle Sidebar
menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closeSidebar.addEventListener('click', () => {
    sidebar.style.left = '-300px';
});



