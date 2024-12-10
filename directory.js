let directoryData = [
    // A
    { item: "AA Meeting Transportation", eligibility: "Eligible" },
    { item: "Abdominoplasty", eligibility: "Not Eligible" },
    { item: "Acetaminophen", eligibility: "Eligible" },
    { item: "Acid Controller", eligibility: "Eligible" },
    { item: "Acne Medicine", eligibility: "Eligible" },
    { item: "Activated Charcoal", eligibility: "Not Eligible" },
    { item: "Acupressure", eligibility: "Eligible w/LMN" },
    { item: "Acupressure Mat", eligibility: "Eligible" },
    { item: "Acupressure Wrist Band", eligibility: "Eligible" },
    { item: "Acupuncture", eligibility: "Eligible" },
    { item: "Adaptive Equipment", eligibility: "Eligible" },

    // B
    { item: "Baby Bottle Warmer", eligibility: "Not Eligible" },
    { item: "Back Pain Treatment", eligibility: "Eligible" },
    { item: "Band-Aids", eligibility: "Eligible" },
    { item: "Bariatric Surgery", eligibility: "Eligible" },
    { item: "Batteries for Medical Devices", eligibility: "Eligible" },

    // C
    { item: "Caffeine Pills", eligibility: "Not Eligible" },
    { item: "Calcium Scoring", eligibility: "Eligible" },
    { item: "Camps (Overnight)", eligibility: "Not Eligible" },
    { item: "Car Rental (related to medical care)", eligibility: "Eligible" },
    { item: "Cancer Screenings", eligibility: "Eligible" },

    // D
    { item: "Dandruff Shampoo", eligibility: "Eligible w/LMN" },
    { item: "Decongestant", eligibility: "Eligible" },
    { item: "Dental Implants (Medical)", eligibility: "Eligible" },
    { item: "Dietary Supplements (General)", eligibility: "Not Eligible" },
    { item: "Diabetes Medication", eligibility: "Eligible" },
    { item: "Dietician Services", eligibility: "Eligible w/LMN" },
    { item: "Durable Medical Equipment (DME)", eligibility: "Eligible" },
    { item: "Depression Medication", eligibility: "Eligible" },
    { item: "Dental Braces (Medical)", eligibility: "Eligible" },
    { item: "Detox Programs", eligibility: "Eligible w/LMN" },

    // E
    { item: "Ear Plugs", eligibility: "Eligible w/LMN" },
    { item: "Ear Syringe", eligibility: "Eligible" },
    { item: "Eczema Treatment", eligibility: "Eligible" },
    { item: "Electric Toothbrush", eligibility: "Not Eligible" },
    { item: "Elbow Brace", eligibility: "Eligible" },
    { item: "Exercise Therapy (Physical Therapy)", eligibility: "Eligible w/LMN" },
    { item: "Eye Drops (Prescription)", eligibility: "Eligible" },
    { item: "Emergency Medical Supplies", eligibility: "Eligible" },
    { item: "Elevated Toilet Seat", eligibility: "Eligible w/LMN" },
    { item: "Epipen (Epinephrine Auto-Injector)", eligibility: "Eligible" },

    // F
    { item: "Fertility Treatment", eligibility: "Eligible" },
    { item: "Face Lift", eligibility: "Not Eligible" },
    { item: "Face Cream with Medication", eligibility: "Eligible" },
    { item: "Fever Reducers", eligibility: "Eligible" },
    { item: "Foot Orthotics", eligibility: "Eligible" },
    { item: "Facial Laser Treatment", eligibility: "Eligible w/LMN" },
    { item: "Fertility Preservation (Egg Freezing)", eligibility: "Eligible" },
    { item: "Flu Shot (Vaccination)", eligibility: "Eligible" },
    { item: "Folic Acid Supplements", eligibility: "Eligible" },
    { item: "Fitness Tracker (Wearable)", eligibility: "Not Eligible" },

    // G
    { item: "Glucosamine", eligibility: "Eligible" },
    { item: "Gas Relievers", eligibility: "Eligible" },
    { item: "Gout Medication", eligibility: "Eligible" },
    { item: "Glucose Monitor", eligibility: "Eligible" },
    { item: "Gastric Bypass Surgery", eligibility: "Eligible" },
    { item: "Gym Membership (Medical Purpose)", eligibility: "Eligible w/LMN" },
    { item: "Ginger Supplements", eligibility: "Not Eligible" },
    { item: "Gum Disease Treatment", eligibility: "Eligible" },
    { item: "Gait Training (Physical Therapy)", eligibility: "Eligible w/LMN" },
    { item: "Growth Hormone Therapy", eligibility: "Eligible w/LMN" },

    // H
    { item: "Hand Sanitizer to Prevent COVID-19", eligibility: "Eligible" },
    { item: "Hair Colorants", eligibility: "Not Eligible" },
    { item: "Hearing Aids", eligibility: "Eligible" },
    { item: "Home Health Care", eligibility: "Eligible w/LMN" },
    { item: "Hip Replacement Surgery", eligibility: "Eligible" },
    { item: "Herbal Supplements (General)", eligibility: "Not Eligible" },
    { item: "Hematology Tests", eligibility: "Eligible" },
    { item: "Home Blood Pressure Monitor", eligibility: "Eligible" },
    { item: "Hypoallergenic Bedding", eligibility: "Eligible w/LMN" },
    { item: "Herniated Disc Surgery", eligibility: "Eligible" },
    { item: "HIV Medication", eligibility: "Eligible" },
    { item: "Hydrotherapy", eligibility: "Eligible w/LMN" },
    { item: "Heart Rate Monitors", eligibility: "Not Eligible" },
    { item: "Hair Transplants", eligibility: "Not Eligible" },
    { item: "Holistic Medicine (Acupuncture, Chiropractic)", eligibility: "Eligible w/LMN" },
    { item: "Hysterectomy Surgery", eligibility: "Eligible" },
    { item: "High Cholesterol Medication", eligibility: "Eligible" },
    { item: "Hand Splints", eligibility: "Eligible" },
    { item: "Health Screenings (Preventive)", eligibility: "Eligible" },
    { item: "Hepatitis Vaccination", eligibility: "Eligible" },
    { item: "Home Care Nurse", eligibility: "Eligible w/LMN" },

    // I
    { item: "Immunization", eligibility: "Eligible" },
    { item: "Ice Pack", eligibility: "Eligible" },
    { item: "Inhalers", eligibility: "Eligible" },
    { item: "Insulin", eligibility: "Eligible" },
    { item: "Incontinence Products", eligibility: "Eligible" },
    { item: "Infertility Medication", eligibility: "Eligible" },
    { item: "Ivory Soap (For Medical Use)", eligibility: "Eligible w/LMN" },
    { item: "IUD (Intrauterine Device)", eligibility: "Eligible" },
    { item: "Intravenous (IV) Fluids", eligibility: "Eligible" },
    { item: "Immunosuppressive Drugs", eligibility: "Eligible" },
    { item: "Infant Formula (Medical Condition)", eligibility: "Eligible" },

    // J
    { item: "Joint Supplements", eligibility: "Eligible" },
    { item: "Joint Replacement Surgery", eligibility: "Eligible" },
    { item: "Juvenile Arthritis Medication", eligibility: "Eligible" },
    { item: "Jaundice Treatment (Phototherapy)", eligibility: "Eligible" },
    { item: "Jet Lag Relief Medication", eligibility: "Not Eligible" },
    { item: "Juice (Medical Nutritional Use)", eligibility: "Eligible" },
    { item: "Jock Itch Medication", eligibility: "Eligible" },
    { item: "Jellyfish Sting Treatment", eligibility: "Eligible" },
    { item: "Jaw Surgery (Orthognathic)", eligibility: "Eligible" },
    { item: "Jelly Bean Supplement (Vitamins)", eligibility: "Not Eligible" },
    { item: "Jockstrap (Medical Use)", eligibility: "Eligible" },
    { item: "Juvenile Diabetes Supplies", eligibility: "Eligible" },
    { item: "Jumping Jack Therapy (Physical Therapy)", eligibility: "Eligible w/LMN" },
    { item: "Jet Therapy (Hydrotherapy)", eligibility: "Eligible w/LMN" },
    { item: "Jelly for Wound Care", eligibility: "Eligible w/LMN" },
    { item: "Jaundice Test for Newborns", eligibility: "Eligible" },
    { item: "Jelly Belly Supplements (Electrolyte Replacement)", eligibility: "Not Eligible" },
    { item: "Jugular Vein Procedure", eligibility: "Eligible" },
    { item: "Joint Immobilizers", eligibility: "Eligible" },
    { item: "Jaundice Light Therapy (for Newborns)", eligibility: "Eligible" },

    // K
    { item: "Knee Brace", eligibility: "Eligible" },
    { item: "Knee Surgery", eligibility: "Eligible" },
    { item: "Knee Replacement Surgery", eligibility: "Eligible" },
    { item: "Keratitis Treatment", eligibility: "Eligible" },
    { item: "Kidney Stones Treatment", eligibility: "Eligible" },
    { item: "Kidney Dialysis", eligibility: "Eligible" },
    { item: "Knee Ice Pack", eligibility: "Eligible" },
    { item: "Knee Compression Sleeve", eligibility: "Eligible" },
    { item: "Knee Support (Elastic Bandage)", eligibility: "Eligible" },
    { item: "Keloid Removal Surgery", eligibility: "Eligible" },
    { item: "Knee Surgery (Arthroscopy)", eligibility: "Eligible" },
    { item: "Knee Cortisone Injection", eligibility: "Eligible" },
    { item: "Knee Cartilage Repair", eligibility: "Eligible" },
    { item: "Knee Immobilizer", eligibility: "Eligible" },
    { item: "Knee Strengthening Exercises", eligibility: "Eligible w/LMN" },
    { item: "Keratoconus Treatment", eligibility: "Eligible" },
    { item: "Knee Replacement Implants", eligibility: "Eligible" },
    { item: "Knee Flexion/Extension Machine", eligibility: "Eligible w/LMN" },
    { item: "Kidney Transplant", eligibility: "Eligible" },
    { item: "Ketosis (Medical Supervision)", eligibility: "Eligible w/LMN" },

    // L
    { item: "Laser Hair Removal", eligibility: "Not Eligible" },

    // M
    { item: "Massage Therapy", eligibility: "Eligible" },

    // N
    { item: "Neck Pillow", eligibility: "Eligible" },

    // O
    { item: "Orthotics", eligibility: "Eligible" },

    // P
    { item: "Pain Relievers", eligibility: "Eligible" },

    // Q
    { item: "Quitting Smoking Aids", eligibility: "Eligible" },

    // R
    { item: "Rehabilitation Therapy", eligibility: "Eligible" },

    // S
    { item: "Sunscreen", eligibility: "Eligible" },

    // T
    { item: "Thermometer", eligibility: "Eligible" },

    // U
    { item: "Ultrasound", eligibility: "Eligible" },

    // V
    { item: "Vitamins", eligibility: "Eligible" },

    // W
    { item: "Wheelchair", eligibility: "Eligible" },

    // X
    { item: "X-ray", eligibility: "Eligible" },
    { item: "Xanax (Prescription Medication)", eligibility: "Eligible" },
    { item: "Xenical (Weight Loss Medication)", eligibility: "Eligible" },
    { item: "Xylitol (Sugar Substitute)", eligibility: "Not Eligible" },
    { item: "Xenogen (Hair Restoration Therapy)", eligibility: "Eligible w/LMN" },
    { item: "X-Rays for Dental Diagnosis", eligibility: "Eligible" },
    { item: "X-Box (for Physical Rehabilitation Games)", eligibility: "Eligible w/LMN" },
    { item: "X-Rays for Non-Dental Purposes", eligibility: "Eligible" },
    { item: "X-Static Compression Garments", eligibility: "Eligible" },
    { item: "Xenoderm (Topical Wound Treatment)", eligibility: "Eligible" },
    { item: "X-Ray Protective Shield", eligibility: "Eligible w/LMN" },

    // Y
    { item: "Yoga Classes", eligibility: "Eligible" },
    { item: "Yoga Mats", eligibility: "Eligible" },
    { item: "Yoga Blocks", eligibility: "Eligible" },
    { item: "Yoga Straps", eligibility: "Eligible" },
    { item: "Yoga Clothing", eligibility: "Eligible" },
    { item: "Yoga Therapy", eligibility: "Eligible" },
    { item: "Yoga Cushions", eligibility: "Eligible" },
    { item: "Yoga DVDs/Streaming Services", eligibility: "Eligible" },
    { item: "Yoga for Rehabilitation", eligibility: "Eligible w/LMN" },
    { item: "Yoga Retreats", eligibility: "Eligible w/LMN" },
    { item: "Yoga Instructors (Private Sessions)", eligibility: "Eligible w/LMN" },

    // Z
    { item: "Zinc Supplements", eligibility: "Eligible" },
    { item: "Zolpidem (Sleep Aid)", eligibility: "Eligible" },
    { item: "Zumba Classes", eligibility: "Eligible" },
    { item: "Zinc Oxide Cream", eligibility: "Eligible" },
    { item: "Zygomatic Implants (Dental)", eligibility: "Eligible" },
    { item: "Zyrtec (Antihistamine)", eligibility: "Eligible" },
    { item: "Zinc Lozenges", eligibility: "Eligible" },
    { item: "Zinc Bandages", eligibility: "Eligible" },
    { item: "Zero Gravity Chair", eligibility: "Eligible w/LMN" },
    { item: "Zinc Sunscreen", eligibility: "Eligible" },
];

let visibleItemsCount = 10;  // Initially show 10 items
let filteredData = [];  // Array to store filtered data

// Initially, filter by 'A' items
filterByLetter('A');

// Populate the directory with the given data
function populateDirectory(data) {
    const list = document.getElementById('directoryList');
    list.innerHTML = '';  // Clear the list before appending

    data.forEach(entry => {
        const li = document.createElement('li');
        
        // Item text
        const itemText = document.createElement('span');
        itemText.textContent = entry.item;
        li.appendChild(itemText);

        // Eligibility text
        const eligibilityText = document.createElement('span');
        eligibilityText.textContent = entry.eligibility;

        // Apply eligibility classes
        if (entry.eligibility === "Not Eligible") {
            eligibilityText.classList.add('not-eligible');
        } else if (entry.eligibility === "Eligible w/LMN" || entry.eligibility === "Eligible") {
            eligibilityText.classList.add('eligible');
        }

        // Add eligibility styling and move it below the item
        eligibilityText.classList.add('eligibility');
        
        li.appendChild(eligibilityText);
        list.appendChild(li);
    });
}

// Show more items
function showMore() {
    visibleItemsCount += 5;
    populateDirectory(filteredData.slice(0, visibleItemsCount));
}

// Search through the directory
function searchDirectory() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = filteredData.filter(entry =>
        entry.item.toLowerCase().includes(searchInput)
    );
    populateDirectory(searchResults.slice(0, visibleItemsCount));
}

// Filter directory by letter (A-Z)
function filterByLetter(letter) {
    // Highlight the active tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab')); // Remove active class
    document.querySelector(`.tab:nth-child(${letter.charCodeAt(0) - 64})`).classList.add('active-tab'); // Add active class to clicked tab

    // Filter the directory based on the selected letter
    filteredData = directoryData.filter(entry =>
        entry.item.toUpperCase().startsWith(letter)
    );
    populateDirectory(filteredData.slice(0, visibleItemsCount));
}
// Filter by eligibility based on the button clicked
function filterEligibility(eligibilityType) {
    let filteredByEligibility = directoryData; // Start with the full list of items

    // Filter based on the eligibility type
    if (eligibilityType === 'Eligible') {
        filteredByEligibility = directoryData.filter(entry =>
            entry.eligibility === "Eligible" || entry.eligibility === "Eligible w/LMN"
        );
    } else if (eligibilityType === 'Not Eligible') {
        filteredByEligibility = directoryData.filter(entry =>
            entry.eligibility === "Not Eligible"
        );
    }

    // Update the global filteredData to the filtered list
    filteredData = filteredByEligibility;

    // Repopulate the directory with the filtered data (show the first 5 items)
    populateDirectory(filteredByEligibility.slice(0, 5));
}

