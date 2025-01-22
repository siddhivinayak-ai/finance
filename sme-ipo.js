const csvData = `
id,name,logo,offerDates,tag,price,gmp,gain,type
1,ABC Corp,https://img.freepik.com/free-photo/colorful-circle-with-cart-it-word-shopping-it_1340-37276.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jan 10 - Jan 15,BSE SME,273,50,18,Upcoming
2,XYZ Ltd,https://img.freepik.com/free-photo/yellow-silver-hexagon-with-letter-b-it_1340-36066.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jan 20 - Jan 25,NSE SME,120,-10,-8,Upcoming
3,LMN Industries,https://img.freepik.com/premium-vector/product-development-concept-brainstorming-new-product-teamwork-brainstorming-startup-business_939213-1054.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Feb 5 - Feb 10,BSE SME,340,70,25,Upcoming
4,PQR Ltd,https://img.freepik.com/free-vector/entrepreneur-with-money-start-up-project-laptop-isometric-round-composition_1284-28370.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Feb 12 - Feb 17,BSE SME,180,20,10,Upcoming
5,Alpha Industries,https://img.freepik.com/premium-vector/man-with-tie-that-says-ok-it_410516-79736.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Mar 1 - Mar 5,NSE SME,410,100,30,Upcoming
6,Beta Tech,https://img.freepik.com/free-photo/square-with-colorful-paper-that-says-m-it_1340-35619.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Mar 15 - Mar 20,NSE SME,230,-5,-2,Upcoming
7,Gamma Solutions,https://img.freepik.com/free-photo/large-red-letter-k-with-tree-background_1340-36057.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Apr 10 - Apr 15,BSE SME,150,30,15,Upcoming
8,Delta Innovations,https://img.freepik.com/free-vector/creative-cobra-logo-template_23-2149207677.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Apr 20 - Apr 25,NSE SME,300,80,25,Upcoming
9,Omega Corp,https://img.freepik.com/free-vector/digital-marketing-strategy-isometric-landing-page_52683-75401.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,May 5 - May 10,BSE SME,250,60,20,Upcoming
10,Sigma Ltd,https://img.freepik.com/free-photo/blue-yellow-s-shape-paper-it_1340-36517.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,May 15 - May 20,NSE SME,280,40,18,Upcoming





11,Theta Inc,https://img.freepik.com/free-vector/abstract-technology-illustration-background-dots_53876-122045.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jun 1 - Jun 5,NSE SME,320,30,10,Listed
12,Zeta Solutions,https://img.freepik.com/free-photo/yellow-cube-white-background-with-letter-n-it_1340-35786.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jun 10 - Jun 15,BSE SME,400,90,35,Listed
13,Iota Industries,https://img.freepik.com/free-photo/white-square-says-a-it_1340-36098.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jul 1 - Jul 5,NSE SME,180,10,5,Listed
14,Epsilon Tech,https://img.freepik.com/free-vector/abstract-blue-circuit-board_106244-240.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jul 10 - Jul 15,NSE SME,340,20,15,Listed
15,Psi Corp,https://img.freepik.com/free-vector/abstract-silver-metal-background_53876-123345.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Jul 20 - Jul 25,BSE SME,360,50,18,Listed
16,Chi Solutions,https://img.freepik.com/free-photo/colorful-shapes-design-concept_1340-36115.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Aug 1 - Aug 5,NSE SME,310,25,12,Listed
17,Phi Ltd,https://img.freepik.com/free-photo/creative-colorful-paper-it-concept_1340-36507.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Aug 10 - Aug 15,NSE SME,300,-15,-10,Listed
18,Rho Technologies,https://img.freepik.com/free-photo/business-concept-round-blue-background_1340-35571.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Aug 20 - Aug 25,BSE SME,390,60,20,Listed
19,Tau Innovations,https://img.freepik.com/free-vector/creative-blue-tech-logo-design_23-2149209778.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Sep 1 - Sep 5,BSE SME,280,40,15,Listed
20,Upsilon Corp,https://img.freepik.com/free-photo/modern-tech-design-concept-background_1340-36185.jpg?ga=GA1.1.799782166.1729185690&semt=ais_tags_boosted,Sep 10 - Sep 15,NSE SME,350,35,18,Listed

`;

// Parse CSV into two arrays
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

// Separate data into Upcoming and Listed categories
const companies = parseCSV(csvData);
const csvUpcoming = companies.filter(company => company.type === 'Upcoming');
const csvListed = companies.filter(company => company.type === 'Listed');

// Render cards dynamically based on selected category
function renderCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear previous cards

    data.forEach(company => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="tag" data-tag="${company.tag}">${company.tag}</div>
            <div class="company-details">
                <img src="${company.logo}" alt="${company.name}" class="logo">
                <div class="info">
                    <h3 class="name">${company.name}</h3>
                    <div class="offer-dates"><strong>Offer Dates:</strong> ${company.offerDates}</div>
                </div>
            </div>
            <div class="ipo-data">
                <div class="data-item">IPO Price <strong>Rs ${company.price}</strong></div>
                <div class="data-item">IPO GMP <strong class="${company.gmp > 0 ? 'green' : 'red'}">Rs ${company.gmp}</strong></div>
                <div class="data-item">Listing Gain <strong class="${company.gain > 0 ? 'green' : 'red'}">${company.gain}%</strong></div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Add event listeners to tabs
document.addEventListener('DOMContentLoaded', () => {
    const upcomingTab = document.getElementById('upcoming-tab');
    const listedTab = document.getElementById('listed-tab');

    // Default view
    renderCards(csvUpcoming);
    upcomingTab.classList.add('active');

    upcomingTab.addEventListener('click', () => {
        renderCards(csvUpcoming);
        upcomingTab.classList.add('active');
        listedTab.classList.remove('active');
    });

    listedTab.addEventListener('click', () => {
        renderCards(csvListed);
        listedTab.classList.add('active');
        upcomingTab.classList.remove('active');
    });
});