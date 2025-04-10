function showFilter(type, btn) {
  // List of all filter types
  const filters = ["buy", "rent", "commercial"];

  // Hide all filters
  filters.forEach((filter) => {
    document.getElementById(`${filter}-filters`).classList.add("hidden");
  });

  // Show selected filter
  document.getElementById(`${type}-filters`).classList.remove("hidden");

  // Handle active tab styling
  const buttons = btn.parentElement.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove(
      "text-[#F23252]",
      "border-b-[4px]",
      "border-b-[#F23252]"
    );
    button.classList.add("text-gray-400/70", "border-b-white");
  });

  btn.classList.add("text-[#F23252]", "border-b-[4px]", "border-b-[#F23252]");
  btn.classList.remove("text-gray-400/70", "border-b-white");
}

// On page load, trigger Buy by default
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button[onclick*='buy']").click();
});

// property description map togglers
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".arrow");

    // Open first item by default
    if (index === 0) {
      answer.classList.remove("hidden");
    }

    question.addEventListener("click", function () {
      // Close all FAQs
      faqItems.forEach((faq) => {
        faq.querySelector(".faq-answer").classList.add("hidden");
        faq.querySelector(".arrow").textContent = "▼";
      });

      // Open clicked FAQ
      answer.classList.toggle("hidden");
      arrow.textContent = answer.classList.contains("hidden") ? "▼" : "▲";
    });
  });
});

// login popup
const openBtn = document.getElementById("openLoginBtn");
const overlay = document.getElementById("loginOverlay");
const popup = document.getElementById("loginPopup");

// Open popup
openBtn?.addEventListener("click", () => {
  overlay.classList.remove("hidden");
});

// Close popup if clicked outside the popup content
overlay?.addEventListener("click", (e) => {
  if (!popup.contains(e.target)) {
    overlay.classList.add("hidden");
  }
});

// Optional: Close on ESC key
document?.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
  }
});

// signup popup
const openSignupBtn = document.getElementById("openSignupBtn");
const signupOverlay = document.getElementById("signupOverlay");
const signupPopup = document.getElementById("signupPopup");

// Open popup
openSignupBtn?.addEventListener("click", () => {
  signupOverlay.classList.remove("hidden");
});

// Close popup if clicked outside the popup content
signupOverlay?.addEventListener("click", (e) => {
  if (!signupPopup.contains(e.target)) {
    signupOverlay.classList.add("hidden");
  }
});

// Optional: Close on ESC key
document?.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    signupOverlay.classList.add("hidden");
  }
});

// home nobroker services to buy
const NOBROKER_SERVICES_TO_BUY = [
  "Property Legal Services",
  "Interiors",
  "Sale Agreement",
  "NoBroker For NRI's",
  "New Builder Project",
  "Home Loan EMI Calculator",
  "Home Loan Balance Transfer",
  "Home Loan Eligibility Calculator",
  "Apply Home Loan",
  "Compare Home Loan Interest",
  "Property Buyers Forum",
  "Property Buyers Guide",
  "Property Seller Guide",
  "Home Loan Guide",
  "Home Loan Queries",
  "Home Renovation Guide",
  "Home Renovation Queries",
  "Interior Design Tips",
  "Interior Design Queries",
  "NRI RealEstae Guide",
  "NRI RealEstae Queries",
  "Realestate Vastu Guide",
  "Personal Loan Guide",
  "Personal Loan Queries",
  "Bill Payment Guide",
  "Realestate Legal Guide",
  "Realestate Legal Queries",
  "e-AASTHI BBMP",
];
const NOBROKER_SERVICES_TO_RENT = [
  "Rental Agreement",
  "Pay Rent",
  "Refer and Earn",
  "Packers and Movers",
  "Property Management in India",
  "Home Services Questions",
  "Rent Services Questions",
  "Rent Calculator",
  "Property Rental Guide",
  "Landlord Guide",
  "Tenant Guide",
  "Packers and Movers Guide",
  "Packers and Movers queries",
  "Home Services",
  "Home Services Queries",
  "Painting Services",
  "Home Painting Guide",
  "Home Painting Queries",
  "Cleaning Services",
  "Kitchen Cleaning Services",
  "Sofa Cleaning Services",
  "Bathroom Cleaning Services",
  "Full House Cleaning Services",
  "Home Cleaning Guide",
  "Home Cleaning Queries",
  "AC Services",
  "Carpentry Services",
  "Carpentry Services Queries",
  "Electrician Services",
  "Electrician Services Queries",
  "Plumbing Services",
  "Plumbing Services Queries",
  "Lease Agreement",
  "Notary",
  "Notary Advocate",
  "Notary Affidavit",
];

const container = document.getElementById("services-list-to-buy");

NOBROKER_SERVICES_TO_BUY.forEach((service) => {
  const link = document.createElement("a");
  link.textContent = service;
  link.href = "#"; // Change to actual link if available
  link.className = "service-item text-blue-600 hover:underline block"; // Tailwind example
  container.appendChild(link);
});

const rentContainer = document.getElementById("rent-services-list");

NOBROKER_SERVICES_TO_RENT.forEach((service) => {
  const link = document.createElement("a");
  link.textContent = service;
  link.href = "#"; // Or use a dynamic link if needed
  link.className = "service-item text-blue-600 hover:underline block";
  rentContainer.appendChild(link);
});

const FLATS_FOR_SALE = [
  "Flats for Sale in Koramangala",
  "Flats for Sale in Marathahalli",
  "Flats for Sale in HSR Layout",
  "Flats for Sale in Whitefield",
  "Flats for Sale in Indira Nagar",
  "Flats for Sale in Bellandur",
  "Flats for Sale in Chandra Layout",
  "Flats for Sale in J. P. Nagar",
  "Flats for Sale in BTM Layout",
  "Flats for Sale in Jayanagar",
  "Flats for Sale in Bangalore Below 45 Lakhs",
  "Flats for Sale in Bangalore Below 50 Lakhs",
  "Flats For Sale Below 60 Lakhs in Bangalore",
  "Flats For Sale Below 70 Lakhs in Bangalore",
  "Flats For Sale Below 80 Lakhs in Bangalore",
  "Flats For Sale Below 90 Lakhs in Bangalore",
];
console.log("hidbeibqe");
const flatsContainer = document.getElementById("flats-sale-list");

FLATS_FOR_SALE.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace with actual links if needed
  link.className = "footer-link";
  flatsContainer.appendChild(link);
});

const FLATS_FOR_SALE_MUMBAI = [
  "Flats for Sale in Andheri West",
  "Flats for Sale in Andheri East",
  "Flats for Sale in Malad West",
  "Flats for Sale in Navi Mumbai",
  "Flats for Sale in Powai",
  "Flats for Sale in Thane West",
  "Flats for Sale in Mira Road East",
  "Flats for Sale in Kharghar",
  "Flats for Sale in Kandivali East",
  "Flats for Sale in Bandra West",
  "Flats For Sale Below 60 Lakhs In Mumbai",
  "Flats For Sale Below 70 Lakhs In Mumbai",
  "Flats For Sale Below 80 Lakhs In Mumbai",
  "Flats For Sale Below 90 Lakhs In Mumbai",
  "Flats For Sale Below 1 Cr In Mumbai",
  "Flats For Sale Below 2 Cr In Mumbai",
];

const mumbaiContainer = document.getElementById("flats-sale-mumbai");

FLATS_FOR_SALE_MUMBAI.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace with actual URLs if available
  link.className = "footer-link";
  mumbaiContainer.appendChild(link);
});

const FLATS_FOR_SALE_CHENNAI = [
  "House for Rent in Chennai",
  "House For Rent in Kolathur",
  "House For Rent in Velachery",
  "Flats for Sale in Velachery",
  "Flats for Sale in Thiruvanmiyur",
  "Flats for Sale in Madipakkam",
  "Flats for Sale in Thoraipakkam",
  "Flats for Sale in Sholinganallur",
  "Flats for Sale in Medavakkam",
  "Flats for Sale in Mylapore",
  "Flats for Sale in Adyar",
  "Flats for Sale in T Nagar",
  "Flats for Sale in Perungudi",
  "Flats for Sale in Chennai Below 45 Lakhs",
  "Flats for Sale in Chennai Below 50 Lakhs",
  "Flats For Sale Below 60 Lakhs In Chennai",
  "Flats For Sale Below 70 Lakhs In Chennai",
  "Flats For Sale Below 80 Lakhs In Chennai",
  "Flats For Sale Below 90 Lakhs In Chennai",
];

const chennaiContainer = document.getElementById("flats-sale-chennai");

FLATS_FOR_SALE_CHENNAI.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Optionally replace with dynamic URLs
  link.className = "footer-link";
  chennaiContainer.appendChild(link);
});

const FLATS_FOR_SALE_PUNE = [
  "Flats for Sale in Pune",
  "Flats for Sale in Wakad",
  "Flats for Sale in Kharadi",
  "Flats for Sale in Baner",
  "Flats for Sale in Hadapsar",
  "Flats for Sale in Aundh",
  "Flats for Sale in Kothrud",
  "Flats for Sale in Pimple Saudagar",
  "Flats for Sale in Viman Nagar",
  "Flats for Sale in Pimpri",
  "Flats for Sale in Hinjewadi",
  "Flats for Sale in Pune Below 45 Lakhs",
  "Flats for Sale in Pune Below 50 Lakhs",
  "Flats For Sale Below 60 Lakhs In Pune",
  "Flats For Sale Below 70 Lakhs In Pune",
  "Flats For Sale Below 80 Lakhs In Pune",
  "Flats For Sale Below 90 Lakhs In Pune",
];

const puneContainer = document.getElementById("flats-sale-pune");

FLATS_FOR_SALE_PUNE.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Change this to an actual link if needed
  link.className = "footer-link";
  puneContainer.appendChild(link);
});

const FLATS_FOR_SALE_GURGAON = [
  "1 BHK Flats in Gurgaon",
  "2 BHK Flats in Gurgaon",
  "3 BHK Flats in Gurgaon",
  "4 BHK Flats in Gurgaon",
  "4+ BHK in Gurgaon",
  "Fully Furnished Flats in Gurgaon",
  "Semi Furnished Flats in Gurgaon",
  "Unfurnished Flats in Gurgaon",
  "Independent Floor for Sale in Gurgaon",
  "Independent Houses For Sale in Gurgaon",
  "Flats For Sale Below 60 Lakhs In Gurgaon",
  "Flats For Sale Below 70 Lakhs In Gurgaon",
  "Flats For Sale Below 80 Lakhs In Gurgaon",
  "Flats For Sale Below 90 Lakhs In Gurgaon",
];

const gurgaonContainer = document.getElementById("flats-sale-gurgaon");

FLATS_FOR_SALE_GURGAON.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace with actual URL if available
  link.className = "footer-link";
  gurgaonContainer.appendChild(link);
});

const FLATS_FOR_SALE_HYDERABAD = [
  "Flats for Sale in Hyderabad",
  "Flats for Sale in Banjara Hills",
  "Flats for Sale in Jubilee Hills",
  "Flats for Sale in Madhapur",
  "Flats for Sale in Kukatpally Housing Board Colony",
  "Flats for Sale in Hitech City",
  "Flats for Sale in Gachibowli",
  "Flats for Sale in Kukatpally",
  "Flats for Sale in Whitefields",
  "Flats for Sale in Himayath Nagar",
  "Flats for Sale in Sanath Nagar",
  "Flats for Sale in Hyderabad Below 45 Lakhs",
  "Flats for Sale in Hyderabad Below 50 Lakhs",
  "Flats For Sale Below 60 Lakhs In Hyderabad",
  "Flats For Sale Below 70 Lakhs In Hyderabad",
  "Flats For Sale Below 80 Lakhs In Hyderabad",
  "Flats For Sale Below 90 Lakhs In Hyderabad",
];

const hyderabadContainer = document.getElementById("flats-sale-hyderabad");

FLATS_FOR_SALE_HYDERABAD.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace with actual route/slug if needed
  link.className = "footer-link";
  hyderabadContainer.appendChild(link);
});

const FLATS_FOR_SALE_DELHI = [
  "Flats for Sale in Vasant Vihar",
  "Flats for Sale in Safdarjung Enclave",
  "Flats for Sale in Hauz Khas",
  "Flats for Sale in Greater Kailash",
  "Flats for Sale in Connaught Place",
  "Flats for Sale in Gulmohar Park",
  "Flats for Sale in Green Park Extension",
  "Flats for Sale in East of Kailash",
  "Flats for Sale in Panchsheel Park",
  "Flats for Sale in Lajpat Nagar I",
  "Flats for Sale in Delhi Below 45 Lakhs",
  "Flats for Sale in Delhi Below 50 Lakhs",
  "Flats For Sale Below 60 Lakhs In Delhi",
  "Flats For Sale Below 70 Lakhs In Delhi",
  "Flats For Sale Below 80 Lakhs In Delhi",
  "Flats For Sale Below 90 Lakhs In Delhi",
];

const delhiContainer = document.getElementById("flats-sale-delhi");

FLATS_FOR_SALE_DELHI.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace with actual URL if available
  link.className = "footer-link";
  delhiContainer.appendChild(link);
});

const FLATS_FOR_SALE_NOIDA = [
  "Flats for rent in Faridabad",
  "Flats For Sale In Noida Sector 62",
  "Flats For Sale In Noida Sector 50",
  "Flats For Sale In Sector 137 Noida",
  "Flats For Sale In Sector 75 Noida",
  "Flats For Sale In Sector 76 Noida",
  "Flats For Sale In Kendriya Vihar Sector 51 Noida",
  "Flats For Sale In Noida Sector 18",
  "Flats For Sale In Sector 107 Noida",
  "Flats For Sale In Sector 128 Noida",
  "Flats For Sale In Sector 150 Noida",
  "Flats for Sale in Greater Noida",
  "Flats For Sale Below 70 Lakhs In Noida",
  "Flats For Sale Below 80 Lakhs In Noida",
  "Flats For Sale Below 90 Lakhs In Noida",
];

const noidaContainer = document.getElementById("flats-sale-noida");

FLATS_FOR_SALE_NOIDA.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  link.href = "#"; // Replace this with actual URL if available
  link.className = "footer-link";
  noidaContainer.appendChild(link);
});
