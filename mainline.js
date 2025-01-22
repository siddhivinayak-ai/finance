// Sample Data
const companies = [
  {
    id: 1,
    name: "TechNova",
    logo: "https://img.freepik.com/premium-photo/real-estate-logo-apartment-building-logo-business-chart-logo-design-urban-city_1315971-3265.jpg",
    offerDates: "Jan 10 - Jan 15",
    tag: "MainBoard",
    price: 250,
    gmp: 45,
    gain: 18,
    details: {
      openDate: "Jan 10, 2023",
      closeDate: "Jan 15, 2023",
      ipoSize: "500 Cr",
      retailQuota: "30%",
      lotSize: "50 Shares",
      amount: "12,500",
      leadManager: "XYZ Bank",
      registrar: "ABC Registrar",
      financials: [
        { year: 2023, revenue: 500, expense: 300, pat: 200 },
        { year: 2024, revenue: 550, expense: 320, pat: 230 },
      ],
      about: "TechNova specializes in IT solutions and software development, helping businesses innovate globally.",
    },
  },
  {
    id: 2,
    name: "Greenify Solutions",
    logo: "https://img.freepik.com/premium-vector/creative-accounting-financial-gradient-logo_1302235-3963.jpg",
    offerDates: "Jan 20 - Jan 25",
    tag: "BSE SME",
    price: 180,
    gmp: 30,
    gain: 12,
    details: {
      openDate: "Jan 20, 2023",
      closeDate: "Jan 25, 2023",
      ipoSize: "300 Cr",
      retailQuota: "40%",
      lotSize: "30 Shares",
      amount: "5,400",
      leadManager: "LMN Bank",
      registrar: "PQR Registrar",
      financials: [
        { year: 2023, revenue: 400, expense: 250, pat: 150 },
        { year: 2024, revenue: 420, expense: 260, pat: 160 },
      ],
      about: "Greenify Solutions offers eco-friendly and sustainable energy solutions for a greener future.",
    },
  },
  {
    id: 3,
    name: "Quantum Corp",
    logo: "https://img.freepik.com/premium-vector/unique-investment-company-logo_658271-3720.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Feb 1 - Feb 5",
    tag: "MainBoard",
    price: 300,
    gmp: 50,
    gain: 20,
    details: {
      openDate: "Feb 1, 2023",
      closeDate: "Feb 5, 2023",
      ipoSize: "350 Cr",
      retailQuota: "45%",
      lotSize: "25 Shares",
      amount: "7,500",
      leadManager: "XYZ Bank",
      registrar: "ABC Registrar",
      financials: [
        { year: 2023, revenue: 480, expense: 300, pat: 180 },
        { year: 2024, revenue: 500, expense: 320, pat: 200 },
      ],
      about: "Quantum Corp specializes in investment strategies for technology-driven growth.",
    },
  },
  {
    id: 4,
    name: "InnoCrafts",
    logo: "https://img.freepik.com/premium-photo/real-estate-logo-apartment-building-logo-business-chart-logo-design-urban-city_1315971-3263.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Feb 10 - Feb 15",
    tag: "BSE SME",
    price: 150,
    gmp: -10,
    gain: 6,
    details: {
      openDate: "Feb 10, 2023",
      closeDate: "Feb 15, 2023",
      ipoSize: "180 Cr",
      retailQuota: "35%",
      lotSize: "20 Shares",
      amount: "3,000",
      leadManager: "DEF Bank",
      registrar: "XYZ Registrar",
      financials: [
        { year: 2023, revenue: 280, expense: 260, pat: 20 },
        { year: 2024, revenue: 300, expense: 270, pat: 30 },
      ],
      about: "InnoCrafts is a pioneer in real estate innovations and sustainable urban solutions.",
    },
  },
  {
    id: 5,
    name: "NextGen Tech",
    logo: "https://img.freepik.com/premium-vector/beautiful-floating-green-building-logo-white-background_1302235-6388.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Feb 20 - Feb 25",
    tag: "MainBoard",
    price: 320,
    gmp: 60,
    gain: 25,
    details: {
      openDate: "Feb 20, 2023",
      closeDate: "Feb 25, 2023",
      ipoSize: "400 Cr",
      retailQuota: "50%",
      lotSize: "30 Shares",
      amount: "9,600",
      leadManager: "PQR Bank",
      registrar: "LMN Registrar",
      financials: [
        { year: 2023, revenue: 520, expense: 300, pat: 220 },
        { year: 2024, revenue: 540, expense: 320, pat: 220 },
      ],
      about: "NextGen Tech develops cutting-edge technologies for the future of automation and AI.",
    },
  },
  {
    id: 6,
    name: "Ace Robotics",
    logo: "https://img.freepik.com/premium-vector/accounting-financial-gradient-vector-logo-design_1302235-5416.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Mar 1 - Mar 5",
    tag: "BSE SME",
    price: 275,
    gmp: 40,
    gain: 15,
    details: {
      openDate: "Mar 1, 2023",
      closeDate: "Mar 5, 2023",
      ipoSize: "250 Cr",
      retailQuota: "40%",
      lotSize: "35 Shares",
      amount: "9,625",
      leadManager: "GHI Bank",
      registrar: "NOP Registrar",
      financials: [
        { year: 2023, revenue: 450, expense: 300, pat: 150 },
        { year: 2024, revenue: 470, expense: 310, pat: 160 },
      ],
      about: "Ace Robotics leads the way in innovative robotics and industrial automation solutions.",
    },
  },
  {
    id: 7,
    name: "BlueOrbit",
    logo: "https://img.freepik.com/premium-photo/colorful-design-is-black-background_1277069-9593.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Mar 10 - Mar 15",
    tag: "MainBoard",
    price: 200,
    gmp: -5,
    gain: -2,
    details: {
      openDate: "Mar 10, 2023",
      closeDate: "Mar 15, 2023",
      ipoSize: "300 Cr",
      retailQuota: "30%",
      lotSize: "20 Shares",
      amount: "4,000",
      leadManager: "JKL Bank",
      registrar: "XYZ Registrar",
      financials: [
        { year: 2023, revenue: 350, expense: 360, pat: -10 },
        { year: 2024, revenue: 370, expense: 380, pat: -10 },
      ],
      about: "BlueOrbit offers advanced aerospace solutions for space exploration and satellite systems.",
    },
  },
  {
    id: 8,
    name: "UrbanEco",
    logo: "https://img.freepik.com/premium-photo/your-company-logo-dynamic-red-black-branding-design_606187-27805.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    offerDates: "Mar 20 - Mar 25",
    tag: "BSE SME",
    price: 160,
    gmp: 20,
    gain: 8,
    details: {
      openDate: "Mar 20, 2023",
      closeDate: "Mar 25, 2023",
      ipoSize: "180 Cr",
      retailQuota: "35%",
      lotSize: "25 Shares",
      amount: "4,000",
      leadManager: "DEF Bank",
      registrar: "NOP Registrar",
      financials: [
        { year: 2023, revenue: 260, expense: 240, pat: 20 },
        { year: 2024, revenue: 280, expense: 250, pat: 30 },
      ],
      about: "UrbanEco is dedicated to sustainable urban development and eco-friendly technologies.",
    },
  },
];

// Create Cards
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");
  const detailScreen = document.getElementById("detail-screen");
  const detailContent = document.getElementById("detail-content");

  companies.forEach((company) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = company.id;
    card.innerHTML = `
      <div class="tag">${company.tag}</div>
      <div class="company-details">
        <img src="${company.logo}" alt="${company.name}" class="logo">
        <div class="info">
          <h3 class="name">${company.name}</h3>
          <div class="offer-dates"><strong>Offer Dates:</strong> ${company.offerDates}</div>
        </div>
      </div>
      <div class="ipo-data">
        <div class="data-item">IPO Price <strong>Rs ${company.price}</strong></div>
        <div class="data-item">IPO GMP <strong class="${
          company.gmp > 0 ? "green" : "red"
        }">Rs ${company.gmp}</strong></div>
        <div class="data-item">Listing Gain <strong class="${
          company.gain > 0 ? "green" : "red"
        }">${company.gain}%</strong></div>
      </div>
    `;
    card.addEventListener("click", () => showDetails(company));
    container.appendChild(card);
  });

  function showDetails(company) {
    detailContent.innerHTML = `
      <div class="container">
        <h3>${company.name}</h3>
        <img id="detail-logo" src="${company.logo}" alt="${company.name}" class="logo">
        <p><strong>Offer Dates:</strong> ${company.offerDates}</p>
        <p><strong>Tag:</strong> ${company.tag}</p>
        <p><strong>IPO Price:</strong> Rs ${company.price}</p>
        <p><strong>GMP:</strong> Rs ${company.gmp}</p>
        <p><strong>Gain:</strong> ${company.gain}%</p>
      </div>
      <div class="container">
        <h3>IPO Details</h3>
        <table>
          <tr><td>Open Date</td><td>${company.details.openDate}</td></tr>
          <tr><td>Close Date</td><td>${company.details.closeDate}</td></tr>
          <tr><td>IPO Size</td><td>Rs ${company.details.ipoSize}</td></tr>
          <tr><td>Retail Quota</td><td>${company.details.retailQuota}</td></tr>
          <tr><td>Lot Size</td><td>${company.details.lotSize}</td></tr>
          <tr><td>Amount</td><td>Rs ${company.details.amount}</td></tr>
          <tr><td>Lead Manager</td><td>${company.details.leadManager}</td></tr>
          <tr><td>Registrar</td><td>${company.details.registrar}</td></tr>
        </table>
      </div>
      <div class="container">
        <h3>Company Financials (in Crs)</h3>
        <table>
          <tr><th>Year</th><th>Revenue</th><th>Expense</th><th>PAT</th></tr>
          ${company.details.financials
            .map(
              (f) =>
                `<tr><td>${f.year}</td><td>${f.revenue}</td><td>${f.expense}</td><td>${f.pat}</td></tr>`
            )
            .join("")}
        </table>
      </div>
      <div class="container">
        <h3>About Company</h3>
        <p>${company.details.about}</p>
      </div>
      <button><i class="ri-hand-coin-line"></i> Apply Now</button>
      <button><i class="ri-file-list-3-line"></i> Allotment Check</button>
    `;
    detailScreen.classList.remove("hidden");
  }

  document.querySelector(".back-button").addEventListener("click", () => {
    detailScreen.classList.add("hidden");
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