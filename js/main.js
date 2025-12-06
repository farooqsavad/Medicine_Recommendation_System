// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Main initialization function
function initApp() {
    // Hide preloader after content is loaded
    setTimeout(hidePreloader, 2000);
    
    // Initialize navigation
    initNavigation();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Load symptoms data
    loadSymptoms();
    
    // Diagnosis functionality is now handled by diagnosis.js
    // initDiagnosis();
    
    // Initialize medications section
    initMedications();
    
    // Initialize diet section
    initDietSection();
    
    // Initialize precautions section
    initPrecautions();
    
    // Initialize workouts section
    initWorkouts();
    
    // Initialize analysis section
    initAnalysis();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize form validations
    initFormValidations();
}

// Hide preloader function
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
}

// Initialize navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section id
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the target section
            document.getElementById(targetId).classList.add('active');
            
            // Scroll to top of the section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check if user has a preferred theme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check if user has previously selected a theme
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (currentTheme === 'light') {
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else if (prefersDarkScheme.matches) {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Add click event listener to theme toggle
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Load symptoms data
function loadSymptoms() {
    // Sample symptoms data (in a real app, this would come from an API or database)
    const symptoms = [
        { id: 1, name: 'itching', severity: 1 },
        { id: 2, name: 'skin_rash', severity: 3 },
        { id: 3, name: 'nodal_skin_eruptions', severity: 4 },
        { id: 4, name: 'continuous_sneezing', severity: 4 },
        { id: 5, name: 'shivering', severity: 5 },
        { id: 6, name: 'chills', severity: 3 },
        { id: 7, name: 'joint_pain', severity: 3 },
        { id: 8, name: 'stomach_pain', severity: 5 },
        { id: 9, name: 'acidity', severity: 3 },
        { id: 10, name: 'ulcers_on_tongue', severity: 4 },
        { id: 11, name: 'muscle_wasting', severity: 3 },
        { id: 12, name: 'vomiting', severity: 5 },
        { id: 13, name: 'burning_micturition', severity: 6 },
        { id: 14, name: 'spotting_urination', severity: 6 },
        { id: 15, name: 'fatigue', severity: 4 },
        { id: 16, name: 'weight_gain', severity: 3 },
        { id: 17, name: 'anxiety', severity: 4 },
        { id: 18, name: 'cold_hands_and_feets', severity: 5 },
        { id: 19, name: 'mood_swings', severity: 3 },
        { id: 20, name: 'weight_loss', severity: 3 },
        { id: 21, name: 'restlessness', severity: 5 },
        { id: 22, name: 'lethargy', severity: 2 },
        { id: 23, name: 'patches_in_throat', severity: 6 },
        { id: 24, name: 'irregular_sugar_level', severity: 5 },
        { id: 25, name: 'cough', severity: 4 },
        { id: 26, name: 'high_fever', severity: 7 },
        { id: 27, name: 'sunken_eyes', severity: 3 },
        { id: 28, name: 'breathlessness', severity: 4 },
        { id: 29, name: 'sweating', severity: 3 },
        { id: 30, name: 'dehydration', severity: 4 },
        { id: 31, name: 'indigestion', severity: 5 },
        { id: 32, name: 'headache', severity: 3 },
        { id: 33, name: 'yellowish_skin', severity: 3 },
        { id: 34, name: 'dark_urine', severity: 4 },
        { id: 35, name: 'nausea', severity: 5 },
        { id: 36, name: 'loss_of_appetite', severity: 4 },
        { id: 37, name: 'pain_behind_the_eyes', severity: 4 },
        { id: 38, name: 'back_pain', severity: 3 },
        { id: 39, name: 'constipation', severity: 4 },
        { id: 40, name: 'abdominal_pain', severity: 4 }
    ];
    
    // Get the symptoms list container
    const symptomsListContainer = document.querySelector('.symptoms-list');
    
    // Create and append symptom items
    symptoms.forEach(symptom => {
        const symptomItem = document.createElement('div');
        symptomItem.className = 'symptom-item';
        symptomItem.innerHTML = `
            <input type="checkbox" id="symptom-${symptom.id}" data-id="${symptom.id}" data-name="${symptom.name}" data-severity="${symptom.severity}">
            <label for="symptom-${symptom.id}">${formatSymptomName(symptom.name)} (Severity: ${symptom.severity})</label>
        `;
        symptomsListContainer.appendChild(symptomItem);
    });
    
    // Add event listener to symptom search input
    const symptomSearch = document.getElementById('symptom-search');
    symptomSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const symptomItems = document.querySelectorAll('.symptom-item');
        
        symptomItems.forEach(item => {
            const symptomName = item.querySelector('label').textContent.toLowerCase();
            if (symptomName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Add event listeners to symptom checkboxes
    const symptomCheckboxes = document.querySelectorAll('.symptom-item input[type="checkbox"]');
    symptomCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedSymptoms);
    });
}

// Format symptom name for display
function formatSymptomName(name) {
    return name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Update selected symptoms list
function updateSelectedSymptoms() {
    const selectedSymptomsList = document.getElementById('selected-symptoms-list');
    const checkedSymptoms = document.querySelectorAll('.symptom-item input[type="checkbox"]:checked');
    
    // Clear the current list
    selectedSymptomsList.innerHTML = '';
    
    // Add selected symptoms to the list
    checkedSymptoms.forEach(checkbox => {
        const symptomName = checkbox.getAttribute('data-name');
        const symptomId = checkbox.getAttribute('data-id');
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${formatSymptomName(symptomName)}</span>
            <i class="fas fa-times" data-id="${symptomId}"></i>
        `;
        selectedSymptomsList.appendChild(listItem);
        
        // Add event listener to remove button
        listItem.querySelector('i').addEventListener('click', function() {
            const symptomId = this.getAttribute('data-id');
            document.getElementById(`symptom-${symptomId}`).checked = false;
            updateSelectedSymptoms();
        });
    });
}

// Initialize diagnosis functionality
function initDiagnosis() {
    const diagnoseBtn = document.getElementById('diagnose-btn');
    const viewRecommendationsBtn = document.getElementById('view-recommendations-btn');
    
    diagnoseBtn.addEventListener('click', function() {
        // Get selected symptoms
        const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-item input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.getAttribute('data-name'));
        
        if (selectedSymptoms.length === 0) {
            alert('Please select at least one symptom for diagnosis.');
            return;
        }
        
        // Perform diagnosis (in a real app, this would call an API or backend service)
        const diagnosisResult = performDiagnosis(selectedSymptoms);
        
        // Update the UI with the diagnosis result
        updateDiagnosisResult(diagnosisResult);
    });
    
    viewRecommendationsBtn.addEventListener('click', function() {
        // Get the predicted disease
        const predictedDisease = document.getElementById('predicted-disease').textContent;
        
        if (predictedDisease === 'Please select symptoms to get a diagnosis') {
            alert('Please perform a diagnosis first.');
            return;
        }
        
        // Navigate to medications section
        document.querySelector('a[href="#medications"]').click();
        
        // Update medications, diet, precautions, and workouts based on the diagnosis
        updateRecommendations(predictedDisease);
    });
}

// Perform diagnosis based on selected symptoms
function performDiagnosis(symptoms) {
    // Sample disease mapping (in a real app, this would use a trained model or API)
    const diseaseMapping = {
        'Fungal infection': ['itching', 'skin_rash', 'nodal_skin_eruptions'],
        'Allergy': ['continuous_sneezing', 'shivering', 'chills'],
        'GERD': ['stomach_pain', 'acidity', 'ulcers_on_tongue'],
        'Chronic cholestasis': ['itching', 'vomiting', 'yellowish_skin'],
        'Drug Reaction': ['itching', 'skin_rash', 'stomach_pain'],
        'Peptic ulcer disease': ['vomiting', 'loss_of_appetite', 'abdominal_pain'],
        'Diabetes': ['polyuria', 'fatigue', 'weight_loss', 'excessive_hunger'],
        'Bronchial Asthma': ['breathlessness', 'cough', 'high_fever'],
        'Hypertension': ['headache', 'chest_pain', 'dizziness'],
        'Migraine': ['acidity', 'indigestion', 'headache'],
        'Jaundice': ['yellowish_skin', 'dark_urine', 'nausea'],
        'Malaria': ['chills', 'vomiting', 'high_fever'],
        'Chicken pox': ['itching', 'skin_rash', 'fatigue'],
        'Dengue': ['skin_rash', 'chills', 'joint_pain'],
        'Typhoid': ['chills', 'vomiting', 'high_fever', 'headache', 'constipation'],
        'Urinary tract infection': ['burning_micturition', 'bladder_discomfort', 'foul_smell_ofurine']
    };
    
    // Count matching symptoms for each disease
    const matchCounts = {};
    let maxMatches = 0;
    let predictedDisease = 'Unknown disease. Please consult a healthcare professional.';
    
    for (const [disease, diseaseSymptoms] of Object.entries(diseaseMapping)) {
        const matchingSymptoms = symptoms.filter(symptom => diseaseSymptoms.includes(symptom));
        const matchCount = matchingSymptoms.length;
        
        if (matchCount > 0) {
            matchCounts[disease] = matchCount;
            
            if (matchCount > maxMatches) {
                maxMatches = matchCount;
                predictedDisease = disease;
            }
        }
    }
    
    // Calculate confidence score (simplified)
    let confidenceScore = 0;
    if (maxMatches > 0) {
        // Calculate total severity of selected symptoms
        const totalSeverity = symptoms.reduce((total, symptom) => {
            const severityElement = document.querySelector(`.symptom-item input[data-name="${symptom}"]`);
            return total + (severityElement ? parseInt(severityElement.getAttribute('data-severity')) : 0);
        }, 0);
        
        // Calculate confidence based on matches and severity
        confidenceScore = Math.min(100, Math.round((maxMatches / 3) * 100));
    }
    
    // Determine severity level
    let severityLevel = 'Low';
    if (confidenceScore >= 75) {
        severityLevel = 'High';
    } else if (confidenceScore >= 50) {
        severityLevel = 'Moderate';
    } else if (confidenceScore >= 25) {
        severityLevel = 'Low';
    }
    
    return {
        disease: predictedDisease,
        confidenceScore: confidenceScore,
        severityLevel: severityLevel
    };
}

// Update diagnosis result in the UI
function updateDiagnosisResult(result) {
    document.getElementById('predicted-disease').textContent = result.disease;
    
    // Update confidence score
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${result.confidenceScore}%`;
    progressBar.textContent = `${result.confidenceScore}%`;
    
    // Update severity indicator
    const severityIndicator = document.querySelector('.severity-indicator');
    severityIndicator.textContent = result.severityLevel;
    
    // Update severity bars
    const severityBars = document.querySelectorAll('.severity-bar');
    severityBars.forEach(bar => bar.classList.remove('active'));
    
    if (result.severityLevel === 'Low') {
        document.querySelector('.severity-bar.low').classList.add('active');
    } else if (result.severityLevel === 'Moderate') {
        document.querySelector('.severity-bar.low').classList.add('active');
        document.querySelector('.severity-bar.medium').classList.add('active');
    } else if (result.severityLevel === 'High') {
        document.querySelector('.severity-bar.low').classList.add('active');
        document.querySelector('.severity-bar.medium').classList.add('active');
        document.querySelector('.severity-bar.high').classList.add('active');
    } else if (result.severityLevel === 'Critical') {
        severityBars.forEach(bar => bar.classList.add('active'));
    }
    
    // Update severity text
    document.querySelector('.severity-text').textContent = `Severity Level: ${result.severityLevel}`;
}

// Initialize medications section
function initMedications() {
    // Sample medications data (in a real app, this would come from an API or database)
    const medications = [
        {
            id: 1,
            name: 'Paracetamol',
            description: 'Pain reliever and fever reducer used for mild to moderate pain and fever.',
            conditions: ['Common Cold', 'Influenza', 'Pneumonia', 'Fever'],
            dosage: '500-1000 mg every 4-6 hours as needed, not exceeding 4000 mg per day.',
            sideEffects: ['Nausea', 'Rash', 'Liver damage (with overdose)']
        },
        {
            id: 2,
            name: 'Antihistamines',
            description: 'Medications that reduce or block histamines, used to treat allergic reactions and cold symptoms.',
            conditions: ['Common Cold', 'Allergy', 'Drug Reaction'],
            dosage: '1 tablet daily or as directed by physician.',
            sideEffects: ['Drowsiness', 'Dry mouth', 'Dizziness']
        },
        {
            id: 3,
            name: 'Cough Syrup',
            description: 'Medication used to suppress cough and soothe throat irritation.',
            conditions: ['Common Cold', 'Influenza', 'Cough'],
            dosage: '10-20 ml every 4-6 hours as needed.',
            sideEffects: ['Drowsiness', 'Nausea', 'Constipation']
        },
        {
            id: 4,
            name: 'Ibuprofen',
            description: 'Non-steroidal anti-inflammatory drug (NSAID) used to reduce pain, inflammation, and fever.',
            conditions: ['Influenza', 'Migraine', 'Arthritis', 'Pain'],
            dosage: '200-400 mg every 4-6 hours as needed, not exceeding 1200 mg per day.',
            sideEffects: ['Stomach upset', 'Heartburn', 'Dizziness', 'Increased risk of heart attack and stroke']
        },
        {
            id: 5,
            name: 'Oseltamivir',
            description: 'Antiviral medication used to treat and prevent influenza A and B.',
            conditions: ['Influenza'],
            dosage: '75 mg twice daily for 5 days for treatment, once daily for 10 days for prevention.',
            sideEffects: ['Nausea', 'Vomiting', 'Headache', 'Dizziness']
        },
        {
            id: 6,
            name: 'Sumatriptan',
            description: 'Medication used to treat migraine headaches once they have started.',
            conditions: ['Migraine'],
            dosage: '50-100 mg at onset of migraine, may repeat after 2 hours if needed.',
            sideEffects: ['Tingling sensation', 'Flushing', 'Dizziness', 'Drowsiness']
        },
        {
            id: 7,
            name: 'Propranolol',
            description: 'Beta-blocker used to prevent migraine headaches and treat high blood pressure.',
            conditions: ['Migraine', 'Hypertension'],
            dosage: '40-160 mg daily divided into 2-3 doses for migraine prevention.',
            sideEffects: ['Fatigue', 'Dizziness', 'Cold hands and feet', 'Sleep disturbances']
        },
        {
            id: 8,
            name: 'Loperamide',
            description: 'Anti-diarrheal medication that slows down intestinal movement.',
            conditions: ['Food Poisoning', 'Diarrhea'],
            dosage: '4 mg initially, then 2 mg after each loose stool, not exceeding 8 mg per day.',
            sideEffects: ['Constipation', 'Dizziness', 'Dry mouth', 'Abdominal pain']
        },
        {
            id: 9,
            name: 'Bismuth Subsalicylate',
            description: 'Medication used to treat diarrhea, heartburn, and nausea.',
            conditions: ['Food Poisoning', 'Diarrhea', 'Nausea'],
            dosage: '2 tablets or 30 ml every 30-60 minutes as needed, not exceeding 8 doses in 24 hours.',
            sideEffects: ['Black stool', 'Black tongue', 'Constipation', 'Ringing in the ears']
        },
        {
            id: 10,
            name: 'Oral Rehydration Solution',
            description: 'Solution used to prevent or treat dehydration due to diarrhea or vomiting.',
            conditions: ['Food Poisoning', 'Dehydration'],
            dosage: 'Drink as needed to maintain hydration, typically 200-400 ml after each loose stool.',
            sideEffects: ['Generally well-tolerated with minimal side effects']
        },
        {
            id: 11,
            name: 'Amoxicillin',
            description: 'Antibiotic used to treat bacterial infections including pneumonia.',
            conditions: ['Pneumonia', 'Bacterial Infections'],
            dosage: '500 mg three times daily for 7-10 days or as prescribed.',
            sideEffects: ['Diarrhea', 'Rash', 'Nausea', 'Allergic reactions']
        },
        {
            id: 12,
            name: 'Azithromycin',
            description: 'Antibiotic used to treat various bacterial infections.',
            conditions: ['Pneumonia', 'Respiratory Infections'],
            dosage: '500 mg on first day, then 250 mg daily for 4 days or as prescribed.',
            sideEffects: ['Diarrhea', 'Nausea', 'Abdominal pain', 'Allergic reactions']
        },
        {
            id: 13,
            name: 'Aspirin',
            description: 'Blood thinner used to reduce the risk of heart attack and stroke.',
            conditions: ['Heart Attack', 'Stroke Prevention'],
            dosage: '81-325 mg daily as recommended by physician.',
            sideEffects: ['Stomach upset', 'Bleeding', 'Allergic reactions', 'Ringing in the ears']
        },
        {
            id: 14,
            name: 'Nitroglycerin',
            description: 'Medication that relaxes blood vessels to treat chest pain (angina).',
            conditions: ['Heart Attack', 'Angina'],
            dosage: 'One tablet under the tongue as needed for chest pain.',
            sideEffects: ['Headache', 'Dizziness', 'Flushing', 'Low blood pressure']
        },
        {
            id: 15,
            name: 'Beta Blockers',
            description: 'Medications that reduce heart rate and blood pressure.',
            conditions: ['Heart Attack', 'Hypertension'],
            dosage: 'As prescribed by physician, varies by specific medication.',
            sideEffects: ['Fatigue', 'Cold hands and feet', 'Dizziness', 'Sleep disturbances']
        },
        {
            id: 16,
            name: 'Naproxen',
            description: 'Non-steroidal anti-inflammatory drug (NSAID) used to treat pain and inflammation.',
            conditions: ['Arthritis', 'Pain', 'Inflammation'],
            dosage: '250-500 mg twice daily with food.',
            sideEffects: ['Stomach upset', 'Heartburn', 'Dizziness', 'Increased risk of heart attack and stroke']
        },
        {
            id: 17,
            name: 'Methotrexate',
            description: 'Disease-modifying antirheumatic drug (DMARD) used to treat severe arthritis.',
            conditions: ['Arthritis', 'Rheumatoid Arthritis'],
            dosage: '7.5-20 mg once weekly or as prescribed by specialist.',
            sideEffects: ['Nausea', 'Mouth sores', 'Fatigue', 'Liver damage', 'Reduced blood cell counts']
        },
        {
            id: 6,
            name: 'Insulin',
            description: 'Hormone medication used to treat diabetes.',
            conditions: ['Diabetes'],
            dosage: 'Individualized dosing based on blood glucose levels and physician guidance.',
            sideEffects: ['Hypoglycemia', 'Weight gain', 'Injection site reactions']
        }
    ];
    
    // Get the medications grid container
    const medicationsGrid = document.querySelector('.medications-grid');
    
    // Check if there are recommended medications from diagnosis
    let recommendedMedications = [];
    let showOnlyRecommended = false;
    
    try {
        const storedMeds = sessionStorage.getItem('recommendedMedications');
        if (storedMeds) {
            recommendedMedications = JSON.parse(storedMeds);
        }
        
        // Check if we should show only recommended medications
        showOnlyRecommended = sessionStorage.getItem('showOnlyRecommended') === 'true';
    } catch (e) {
        console.error('Error parsing recommended medications:', e);
    }
    
    // Clear existing medication cards
    medicationsGrid.innerHTML = '';
    
    // Create a heading for recommended medications if coming from diagnosis
    if (showOnlyRecommended && recommendedMedications.length > 0) {
        const diagnosedCondition = sessionStorage.getItem('diagnosedCondition');
        const recommendationsHeading = document.createElement('div');
        recommendationsHeading.className = 'recommendations-heading';
        recommendationsHeading.innerHTML = `
            <h3>Recommended Medications for ${diagnosedCondition}</h3>
            <p>Based on your symptoms, the following medications are recommended:</p>
            <button id="show-all-medications" class="btn secondary-btn">Show All Medications</button>
        `;
        medicationsGrid.appendChild(recommendationsHeading);
        
        // Add event listener to show all medications button
        setTimeout(() => {
            const showAllBtn = document.getElementById('show-all-medications');
            if (showAllBtn) {
                showAllBtn.addEventListener('click', function() {
                    sessionStorage.removeItem('showOnlyRecommended');
                    initMedications();
                });
            }
        }, 0);
    }
    
    // Filter medications if needed
    const medicationsToShow = showOnlyRecommended ? 
        medications.filter(med => recommendedMedications.includes(med.name)) : 
        medications;
    
    // Create and append medication cards
    medicationsToShow.forEach(medication => {
        const medicationCard = document.createElement('div');
        medicationCard.className = 'medication-card';
        
        // Add recommended class if this medication is recommended for the diagnosed condition
        if (recommendedMedications.includes(medication.name)) {
            medicationCard.classList.add('recommended');
        }
        
        medicationCard.setAttribute('data-id', medication.id);
        medicationCard.innerHTML = `
            <div class="medication-image">
                <i class="fas fa-pills fa-3x"></i>
                ${recommendedMedications.includes(medication.name) ? '<div class="recommended-badge">Recommended</div>' : ''}
            </div>
            <div class="medication-info">
                <h3>${medication.name}</h3>
                <p>${medication.description}</p>
                <div class="medication-tags">
                    ${medication.conditions.map(condition => `<span class="medication-tag">${condition}</span>`).join('')}
                </div>
            </div>
        `;
        medicationsGrid.appendChild(medicationCard);
        
        // Add click event listener to show medication details
        medicationCard.addEventListener('click', function() {
            showMedicationDetails(medication);
        });
    });
    
    // Add event listener to medication search input
    const medicationSearch = document.getElementById('medication-search');
    medicationSearch.addEventListener('input', function() {
        // If we're in "show only recommended" mode, searching should exit that mode
        if (sessionStorage.getItem('showOnlyRecommended') === 'true' && this.value.trim() !== '') {
            sessionStorage.removeItem('showOnlyRecommended');
            initMedications();
            
            // Re-apply the search after reinitialization
            setTimeout(() => {
                this.dispatchEvent(new Event('input'));
            }, 100);
            return;
        }
        
        const searchTerm = this.value.toLowerCase();
        const medicationCards = document.querySelectorAll('.medication-card:not(.recommendations-heading)');
        
        medicationCards.forEach(card => {
            const medicationName = card.querySelector('h3').textContent.toLowerCase();
            const medicationDescription = card.querySelector('p').textContent.toLowerCase();
            const medicationTags = Array.from(card.querySelectorAll('.medication-tag'))
                .map(tag => tag.textContent.toLowerCase())
                .join(' ');
            
            if (medicationName.includes(searchTerm) || 
                medicationDescription.includes(searchTerm) || 
                medicationTags.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Populate condition filter dropdown
    const conditionFilter = document.getElementById('condition-filter');
    const conditions = [...new Set(medications.flatMap(med => med.conditions))].sort();
    
    conditions.forEach(condition => {
        const option = document.createElement('option');
        option.value = condition;
        option.textContent = condition;
        conditionFilter.appendChild(option);
    });
    
    // Add event listener to condition filter
    conditionFilter.addEventListener('change', function() {
        // If we're in "show only recommended" mode, changing the filter should exit that mode
        if (sessionStorage.getItem('showOnlyRecommended') === 'true') {
            sessionStorage.removeItem('showOnlyRecommended');
            initMedications();
            return;
        }
        
        const selectedCondition = this.value;
        const medicationCards = document.querySelectorAll('.medication-card:not(.recommendations-heading)');
        
        medicationCards.forEach(card => {
            const medicationTags = Array.from(card.querySelectorAll('.medication-tag'))
                .map(tag => tag.textContent);
            
            if (selectedCondition === 'all' || medicationTags.includes(selectedCondition)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // If a diagnosed condition is available, highlight it in the dropdown
        const diagnosedCondition = sessionStorage.getItem('diagnosedCondition');
        if (diagnosedCondition && selectedCondition === 'all') {
            // Find the option for the diagnosed condition
            const diagnosedOption = Array.from(conditionFilter.options)
                .find(option => option.textContent === diagnosedCondition);
            
            if (diagnosedOption) {
                diagnosedOption.selected = true;
                // Trigger the change event to filter medications
                conditionFilter.dispatchEvent(new Event('change'));
            }
        }
    });
    
    // Add event listener to close medication details
    document.querySelector('.close-details').addEventListener('click', function() {
        document.querySelector('.medication-details').classList.remove('active');
    });
}

// Show medication details
function showMedicationDetails(medication) {
    const medicationDetails = document.querySelector('.medication-details');
    const medicationName = document.getElementById('medication-name');
    const medicationDescription = document.getElementById('medication-description');
    const medicationDosage = document.getElementById('medication-dosage');
    const sideEffectsList = document.getElementById('side-effects-list');
    const medicationImage = document.querySelector('.medication-details-image img');
    
    // Check if this medication is recommended
    let isRecommended = false;
    try {
        const storedMeds = sessionStorage.getItem('recommendedMedications');
        if (storedMeds) {
            const recommendedMedications = JSON.parse(storedMeds);
            isRecommended = recommendedMedications.includes(medication.name);
        }
    } catch (e) {
        console.error('Error checking if medication is recommended:', e);
    }
    
    // Update medication details
    medicationName.textContent = medication.name;
    medicationDescription.textContent = medication.description;
    medicationDosage.textContent = medication.dosage;
    
    // Update medication image container if it exists
    const medicationImageContainer = document.querySelector('.medication-details .medication-image');
    if (medicationImageContainer) {
        medicationImageContainer.innerHTML = `<i class="fas fa-pills fa-4x"></i>`;
    }
    
    // Add recommended badge if applicable
    const recommendedBadge = document.querySelector('.medication-details-recommended');
    if (recommendedBadge) {
        if (isRecommended) {
            recommendedBadge.style.display = 'block';
        } else {
            recommendedBadge.style.display = 'none';
        }
    }
    
    // Clear and populate side effects list
    sideEffectsList.innerHTML = '';
    medication.sideEffects.forEach(effect => {
        const listItem = document.createElement('li');
        listItem.textContent = effect;
        sideEffectsList.appendChild(listItem);
    });
    
    // Clear and populate conditions list
    const conditionsList = document.getElementById('conditions-list');
    if (conditionsList) {
        conditionsList.innerHTML = '';
        medication.conditions.forEach(condition => {
            const listItem = document.createElement('li');
            listItem.textContent = condition;
            conditionsList.appendChild(listItem);
        });
    }
    
    // Show the details modal
    medicationDetails.classList.add('active');
}

// Initialize diet section
function initDietSection() {
    // Sample diet data (in a real app, this would come from an API or database)
    const diets = [
        {
            disease: 'Fungal infection',
            recommendations: ['Antifungal Diet', 'Probiotics', 'Garlic', 'Coconut oil', 'Turmeric'],
            avoid: ['Sugar', 'Refined carbohydrates', 'Alcohol', 'Processed foods', 'Dairy products']
        },
        {
            disease: 'Allergy',
            recommendations: ['Elimination Diet', 'Omega-3-rich foods', 'Vitamin C-rich foods', 'Quercetin-rich foods', 'Probiotics'],
            avoid: ['Common allergens (nuts, dairy, eggs, etc.)', 'Processed foods', 'Artificial additives', 'Alcohol', 'Sulfites']
        },
        {
            disease: 'GERD',
            recommendations: ['Low-Acid Diet', 'Fiber-rich foods', 'Ginger', 'Licorice', 'Aloe vera juice'],
            avoid: ['Spicy foods', 'Citrus fruits', 'Tomatoes', 'Chocolate', 'Caffeine', 'Alcohol']
        },
        {
            disease: 'Chronic cholestasis',
            recommendations: ['Low-Fat Diet', 'High-Fiber Diet', 'Lean proteins', 'Whole grains', 'Fresh fruits and vegetables'],
            avoid: ['Fatty foods', 'Fried foods', 'Alcohol', 'Processed meats', 'High-fat dairy']
        },
        {
            disease: 'Diabetes',
            recommendations: ['Low-Glycemic Diet', 'Fiber-rich foods', 'Lean proteins', 'Healthy fats', 'Low-fat dairy'],
            avoid: ['Sugary foods and drinks', 'Refined carbohydrates', 'Processed foods', 'Fried foods', 'Alcohol']
        }
    ];
    
    // Add event listeners to diet tabs
    const dietTabs = document.querySelectorAll('.diet-tab');
    dietTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            dietTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the target content id
            const targetId = `${this.getAttribute('data-tab')}-content`;
            
            // Hide all tab content
            document.querySelectorAll('.diet-tab-content').forEach(content => content.classList.remove('active'));
            
            // Show the target content
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Initialize nutrient chart
    initNutrientChart();
    
    // Populate meal suggestions
    populateMealSuggestions();
    
    // Populate foods to avoid
    populateFoodsToAvoid();
}

// Initialize nutrient chart
function initNutrientChart() {
    const ctx = document.getElementById('nutrient-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Proteins', 'Carbohydrates', 'Fats', 'Fiber', 'Vitamins & Minerals'],
            datasets: [{
                data: [25, 40, 15, 10, 10],
                backgroundColor: [
                    '#4e54c8',
                    '#8f94fb',
                    '#00b4d8',
                    '#f72585',
                    '#4cc9f0'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

// Populate meal suggestions
function populateMealSuggestions() {
    // Sample meal suggestions (in a real app, this would come from an API or database)
    const mealSuggestions = {
        breakfast: [
            { name: 'Oatmeal with Berries', description: 'Fiber-rich oatmeal topped with antioxidant-rich berries.' },
            { name: 'Greek Yogurt Parfait', description: 'Protein-packed yogurt with nuts and honey.' },
            { name: 'Vegetable Omelette', description: 'Egg omelette with spinach, tomatoes, and mushrooms.' },
            { name: 'Whole Grain Toast', description: 'Topped with avocado and poached eggs.' }
        ],
        lunch: [
            { name: 'Quinoa Salad', description: 'Protein-rich quinoa with mixed vegetables and olive oil dressing.' },
            { name: 'Grilled Chicken Wrap', description: 'Lean protein with vegetables in a whole grain wrap.' },
            { name: 'Lentil Soup', description: 'Fiber and protein-rich soup with vegetables.' },
            { name: 'Mediterranean Bowl', description: 'Hummus, falafel, vegetables, and tahini sauce.' }
        ],
        dinner: [
            { name: 'Baked Salmon', description: 'Omega-3 rich fish with roasted vegetables.' },
            { name: 'Stir-Fried Tofu', description: 'Plant-based protein with mixed vegetables.' },
            { name: 'Turkey Meatballs', description: 'Lean protein with whole grain pasta and tomato sauce.' },
            { name: 'Vegetable Curry', description: 'Turmeric-rich curry with vegetables and brown rice.' }
        ],
        snacks: [
            { name: 'Mixed Nuts', description: 'Healthy fats and protein-rich snack.' },
            { name: 'Apple with Almond Butter', description: 'Fiber-rich fruit with protein and healthy fats.' },
            { name: 'Vegetable Sticks with Hummus', description: 'Fiber-rich vegetables with protein-rich dip.' },
            { name: 'Greek Yogurt with Honey', description: 'Protein-rich snack with natural sweetener.' }
        ]
    };
    
    // Populate meal cards for each category
    for (const [category, meals] of Object.entries(mealSuggestions)) {
        const mealCardsContainer = document.querySelector(`#${category}-content .meal-cards`);
        
        meals.forEach(meal => {
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';
            mealCard.innerHTML = `
                <div class="meal-card-image">
                    <i class="fas fa-utensils"></i>
                </div>
                <div class="meal-card-content">
                    <h5>${meal.name}</h5>
                    <p>${meal.description}</p>
                </div>
            `;
            mealCardsContainer.appendChild(mealCard);
        });
    }
}

// Populate foods to avoid
function populateFoodsToAvoid() {
    // Sample foods to avoid (in a real app, this would be based on the diagnosis)
    const foodsToAvoid = [
        'Processed foods',
        'Refined sugars',
        'Artificial additives',
        'Excessive salt',
        'Trans fats',
        'Alcohol',
        'Caffeine'
    ];
    
    const avoidFoodsContainer = document.querySelector('.avoid-foods-list');
    
    foodsToAvoid.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'avoid-food-item';
        foodItem.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <span>${food}</span>
        `;
        avoidFoodsContainer.appendChild(foodItem);
    });
}

// Initialize precautions section
function initPrecautions() {
    // Sample precautions data (in a real app, this would come from an API or database)
    const precautions = [
        {
            title: 'Maintain Good Hygiene',
            description: 'Regular handwashing and personal hygiene practices can prevent the spread of infections.',
            icon: 'fas fa-hands-wash'
        },
        {
            title: 'Stay Hydrated',
            description: 'Drink plenty of water throughout the day to support bodily functions and recovery.',
            icon: 'fas fa-tint'
        },
        {
            title: 'Get Adequate Rest',
            description: 'Ensure 7-9 hours of quality sleep to support immune function and healing.',
            icon: 'fas fa-bed'
        },
        {
            title: 'Follow Medication Schedule',
            description: 'Take prescribed medications as directed by your healthcare provider.',
            icon: 'fas fa-pills'
        },
        {
            title: 'Monitor Symptoms',
            description: 'Keep track of any changes in symptoms and report worsening conditions to your doctor.',
            icon: 'fas fa-chart-line'
        },
        {
            title: 'Avoid Triggers',
            description: 'Identify and avoid factors that may worsen your condition.',
            icon: 'fas fa-ban'
        }
    ];
    
    const precautionsContainer = document.querySelector('.precautions-list');
    
    precautions.forEach(precaution => {
        const precautionCard = document.createElement('div');
        precautionCard.className = 'precaution-card';
        precautionCard.innerHTML = `
            <div class="precaution-icon">
                <i class="${precaution.icon}"></i>
            </div>
            <h4>${precaution.title}</h4>
            <p>${precaution.description}</p>
        `;
        precautionsContainer.appendChild(precautionCard);
    });
}

// Initialize workouts section
function initWorkouts() {
    // Sample workout data (in a real app, this would come from an API or database)
    const workouts = [
        {
            name: 'Gentle Walking',
            description: 'Low-impact cardiovascular exercise suitable for most conditions.',
            intensity: 'low',
            duration: '15-30 minutes',
            steps: [
                'Start with a slow pace to warm up',
                'Gradually increase to a comfortable walking speed',
                'Maintain good posture with shoulders relaxed',
                'Breathe naturally and stay hydrated',
                'Cool down with a slower pace at the end'
            ],
            benefits: [
                'Improves circulation',
                'Reduces stress and anxiety',
                'Supports joint health',
                'Helps maintain healthy weight',
                'Boosts mood and energy levels'
            ]
        },
        {
            name: 'Yoga for Flexibility',
            description: 'Gentle stretching and breathing exercises to improve flexibility and reduce stress.',
            intensity: 'low',
            duration: '20-30 minutes',
            steps: [
                'Start with deep breathing exercises',
                'Perform gentle stretches for major muscle groups',
                'Hold each pose for 15-30 seconds',
                'Focus on proper alignment and breathing',
                'End with relaxation pose (Savasana)'
            ],
            benefits: [
                'Increases flexibility',
                'Reduces muscle tension',
                'Improves balance and coordination',
                'Promotes relaxation and stress reduction',
                'Enhances body awareness'
            ]
        },
        {
            name: 'Strength Training',
            description: 'Moderate resistance exercises to build muscle strength and endurance.',
            intensity: 'moderate',
            duration: '30-45 minutes',
            steps: [
                'Warm up with 5 minutes of light cardio',
                'Perform exercises targeting major muscle groups',
                'Use appropriate weight or resistance',
                'Maintain proper form throughout',
                'Rest between sets as needed',
                'Cool down with stretching'
            ],
            benefits: [
                'Builds muscle strength and endurance',
                'Improves bone density',
                'Boosts metabolism',
                'Enhances functional fitness',
                'Supports joint health'
            ]
        },
        {
            name: 'Aquatic Exercise',
            description: 'Water-based exercises that reduce joint stress while providing resistance.',
            intensity: 'moderate',
            duration: '30-45 minutes',
            steps: [
                'Start with water walking to warm up',
                'Perform arm and leg movements against water resistance',
                'Use flotation devices if needed',
                'Maintain good posture throughout',
                'End with gentle stretching in the water'
            ],
            benefits: [
                'Reduces joint stress and pain',
                'Provides natural resistance for strength building',
                'Improves cardiovascular fitness',
                'Enhances flexibility and range of motion',
                'Supports balance and coordination'
            ]
        },
        {
            name: 'High-Intensity Interval Training',
            description: 'Alternating periods of intense exercise with recovery periods.',
            intensity: 'high',
            duration: '20-30 minutes',
            steps: [
                'Warm up thoroughly for 5-10 minutes',
                'Perform high-intensity exercise for 30-60 seconds',
                'Recover with low-intensity movement for 1-2 minutes',
                'Repeat for 4-8 cycles',
                'Cool down with 5-10 minutes of stretching'
            ],
            benefits: [
                'Maximizes calorie burn in shorter time',
                'Improves cardiovascular fitness',
                'Increases metabolic rate',
                'Builds endurance and strength',
                'Adaptable to various fitness levels'
            ]
        },
        {
            name: 'Breathing Exercises',
            description: 'Focused breathing techniques to improve lung function and reduce stress.',
            intensity: 'low',
            duration: '10-15 minutes',
            steps: [
                'Find a comfortable seated position',
                'Practice diaphragmatic (belly) breathing',
                'Try different patterns like 4-7-8 breathing',
                'Focus on full inhalation and exhalation',
                'Gradually increase duration as comfortable'
            ],
            benefits: [
                'Reduces stress and anxiety',
                'Improves lung function',
                'Lowers blood pressure',
                'Enhances focus and concentration',
                'Promotes relaxation and better sleep'
            ]
        }
    ];
    
    const workoutPlansContainer = document.querySelector('.workout-plans');
    
    workouts.forEach(workout => {
        const workoutCard = document.createElement('div');
        workoutCard.className = 'workout-card';
        workoutCard.setAttribute('data-intensity', workout.intensity);
        workoutCard.setAttribute('data-duration', getDurationCategory(workout.duration));
        
        workoutCard.innerHTML = `
            <div class="workout-card-image">
                <img src="images/workout-placeholder.jpg" alt="${workout.name}">
                <div class="workout-intensity">${capitalizeFirstLetter(workout.intensity)} Impact</div>
            </div>
            <div class="workout-card-content">
                <h4>${workout.name}</h4>
                <p>${workout.description}</p>
                <div class="workout-meta">
                    <span><i class="fas fa-clock"></i> ${workout.duration}</span>
                    <span><i class="fas fa-fire"></i> ${capitalizeFirstLetter(workout.intensity)} Intensity</span>
                </div>
            </div>
        `;
        
        workoutPlansContainer.appendChild(workoutCard);
        
        // Add click event listener to show workout details
        workoutCard.addEventListener('click', function() {
            showWorkoutDetails(workout);
        });
    });
    
    // Add event listeners to workout filters
    const intensityFilter = document.getElementById('intensity-filter');
    const durationFilter = document.getElementById('duration-filter');
    
    intensityFilter.addEventListener('change', filterWorkouts);
    durationFilter.addEventListener('change', filterWorkouts);
    
    // Add event listener to close workout details
    document.querySelector('.workout-details .close-details').addEventListener('click', function() {
        document.querySelector('.workout-details').classList.remove('active');
    });
}

// Get duration category from duration string
function getDurationCategory(durationStr) {
    if (durationStr.includes('10-15') || durationStr.includes('5-10') || durationStr.includes('15')) {
        return 'short';
    } else if (durationStr.includes('20-30') || durationStr.includes('15-30')) {
        return 'medium';
    } else {
        return 'long';
    }
}

// Capitalize first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Filter workouts based on selected filters
function filterWorkouts() {
    const intensityFilter = document.getElementById('intensity-filter').value;
    const durationFilter = document.getElementById('duration-filter').value;
    const workoutCards = document.querySelectorAll('.workout-card');
    
    workoutCards.forEach(card => {
        const cardIntensity = card.getAttribute('data-intensity');
        const cardDuration = card.getAttribute('data-duration');
        
        const intensityMatch = intensityFilter === 'all' || cardIntensity === intensityFilter;
        const durationMatch = durationFilter === 'all' || cardDuration === durationFilter;
        
        if (intensityMatch && durationMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show workout details
function showWorkoutDetails(workout) {
    const workoutDetails = document.querySelector('.workout-details');
    const workoutName = document.getElementById('workout-name');
    const workoutDescription = document.getElementById('workout-description');
    const workoutStepsList = document.getElementById('workout-steps-list');
    const workoutBenefitsList = document.getElementById('workout-benefits-list');
    
    workoutName.textContent = workout.name;
    workoutDescription.textContent = workout.description;
    
    // Clear and populate steps list
    workoutStepsList.innerHTML = '';
    workout.steps.forEach(step => {
        const listItem = document.createElement('li');
        listItem.textContent = step;
        workoutStepsList.appendChild(listItem);
    });
    
    // Clear and populate benefits list
    workoutBenefitsList.innerHTML = '';
    workout.benefits.forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit;
        workoutBenefitsList.appendChild(listItem);
    });
    
    // Show the details modal
    workoutDetails.classList.add('active');
}

// Initialize analysis section
function initAnalysis() {
    // Initialize charts
    initDiseaseChart();
    initSeverityChart();
    initRecoveryChart();
    initAgeChart();
    
    // Add event listeners to analysis filters
    const analysisType = document.getElementById('analysis-type');
    const timePeriod = document.getElementById('time-period');
    
    analysisType.addEventListener('change', updateAnalysisCharts);
    timePeriod.addEventListener('change', updateAnalysisCharts);
}

// Initialize disease prevalence chart
function initDiseaseChart() {
    const ctx = document.getElementById('disease-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction', 'Peptic ulcer disease', 'Diabetes'],
            datasets: [{
                label: 'Prevalence (%)',
                data: [12, 19, 8, 5, 7, 10, 15],
                backgroundColor: [
                    '#4e54c8',
                    '#8f94fb',
                    '#00b4d8',
                    '#f72585',
                    '#4cc9f0',
                    '#3a0ca3',
                    '#7209b7'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Prevalence (%)',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Disease',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Initialize symptom severity distribution chart
function initSeverityChart() {
    const ctx = document.getElementById('severity-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Low (1-2)', 'Moderate (3-4)', 'High (5-6)', 'Critical (7+)'],
            datasets: [{
                data: [25, 40, 30, 5],
                backgroundColor: [
                    '#28a745',
                    '#ffc107',
                    '#dc3545',
                    '#8b0000'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Initialize recovery rate chart
function initRecoveryChart() {
    const ctx = document.getElementById('recovery-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [
                {
                    label: 'Medication Only',
                    data: [10, 25, 45, 60, 75, 85],
                    borderColor: '#4e54c8',
                    backgroundColor: 'rgba(78, 84, 200, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Medication + Diet',
                    data: [15, 35, 55, 70, 85, 95],
                    borderColor: '#00b4d8',
                    backgroundColor: 'rgba(0, 180, 216, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Comprehensive Approach',
                    data: [20, 40, 65, 80, 90, 98],
                    borderColor: '#f72585',
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Recovery Rate (%)',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    },
                    max: 100
                },
                x: {
                    title: {
                        display: true,
                        text: 'Time Period',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Initialize age group distribution chart
function initAgeChart() {
    const ctx = document.getElementById('age-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['0-18', '19-35', '36-50', '51-65', '65+'],
            datasets: [{
                data: [15, 30, 25, 20, 10],
                backgroundColor: [
                    '#4e54c8',
                    '#8f94fb',
                    '#00b4d8',
                    '#f72585',
                    '#4cc9f0'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            cutout: '50%'
        }
    });
}

// Update analysis charts based on selected filters
function updateAnalysisCharts() {
    // In a real application, this would fetch new data based on the selected filters
    // For this demo, we'll just show a loading animation
    
    const chartContainers = document.querySelectorAll('.chart-container');
    
    // Add loading class to charts
    chartContainers.forEach(container => {
        container.classList.add('loading');
    });
    
    // Simulate loading delay
    setTimeout(() => {
        // Remove loading class from charts
        chartContainers.forEach(container => {
            container.classList.remove('loading');
        });
    }, 1000);
}

// Initialize scroll animations
function initScrollAnimations() {
    // Add scroll-animation class to elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .medication-card, .precaution-card, .workout-card, .insight-card, .chart-container');
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-animation');
    });
    
    // Check if elements are in viewport on scroll
    window.addEventListener('scroll', checkScrollAnimations);
    
    // Initial check for elements in viewport
    checkScrollAnimations();
}

// Check which elements should be animated based on scroll position
function checkScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animation');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize form validations
function initFormValidations() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real app, this would submit the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Update recommendations based on diagnosis
function updateRecommendations(disease) {
    // In a real app, this would fetch data from an API or database
    // For this demo, we'll use the sample data we've already loaded
    
    // Update medications section
    const conditionFilter = document.getElementById('condition-filter');
    if (conditionFilter) {
        // Set the condition filter to the diagnosed disease if it exists in the options
        for (let i = 0; i < conditionFilter.options.length; i++) {
            if (conditionFilter.options[i].text === disease) {
                conditionFilter.selectedIndex = i;
                // Trigger the change event
                const event = new Event('change');
                conditionFilter.dispatchEvent(event);
                break;
            }
        }
    }
    
    // Update diet recommendations
    updateDietRecommendations(disease);
    
    // Update precautions (in a real app, this would be disease-specific)
    
    // Update workout recommendations (in a real app, this would be disease-specific)
}

// Update diet recommendations based on diagnosis
function updateDietRecommendations(disease) {
    // Sample diet data (in a real app, this would come from an API or database)
    const diets = [
        {
            disease: 'Fungal infection',
            recommendations: ['Antifungal Diet', 'Probiotics', 'Garlic', 'Coconut oil', 'Turmeric'],
            avoid: ['Sugar', 'Refined carbohydrates', 'Alcohol', 'Processed foods', 'Dairy products']
        },
        {
            disease: 'Allergy',
            recommendations: ['Elimination Diet', 'Omega-3-rich foods', 'Vitamin C-rich foods', 'Quercetin-rich foods', 'Probiotics'],
            avoid: ['Common allergens (nuts, dairy, eggs, etc.)', 'Processed foods', 'Artificial additives', 'Alcohol', 'Sulfites']
        },
        {
            disease: 'GERD',
            recommendations: ['Low-Acid Diet', 'Fiber-rich foods', 'Ginger', 'Licorice', 'Aloe vera juice'],
            avoid: ['Spicy foods', 'Citrus fruits', 'Tomatoes', 'Chocolate', 'Caffeine', 'Alcohol']
        },
        {
            disease: 'Chronic cholestasis',
            recommendations: ['Low-Fat Diet', 'High-Fiber Diet', 'Lean proteins', 'Whole grains', 'Fresh fruits and vegetables'],
            avoid: ['Fatty foods', 'Fried foods', 'Alcohol', 'Processed meats', 'High-fat dairy']
        },
        {
            disease: 'Diabetes',
            recommendations: ['Low-Glycemic Diet', 'Fiber-rich foods', 'Lean proteins', 'Healthy fats', 'Low-fat dairy'],
            avoid: ['Sugary foods and drinks', 'Refined carbohydrates', 'Processed foods', 'Fried foods', 'Alcohol']
        }
    ];
    
    // Find the diet for the diagnosed disease
    const dietData = diets.find(diet => diet.disease === disease);
    
    if (dietData) {
        // Update diet recommendations list
        const dietRecommendationsList = document.getElementById('diet-recommendations-list');
        if (dietRecommendationsList) {
            dietRecommendationsList.innerHTML = '';
            
            dietData.recommendations.forEach(recommendation => {
                const listItem = document.createElement('li');
                listItem.textContent = recommendation;
                dietRecommendationsList.appendChild(listItem);
            });
        }
        
        // Update foods to avoid
        const avoidFoodsContainer = document.querySelector('.avoid-foods-list');
        if (avoidFoodsContainer) {
            avoidFoodsContainer.innerHTML = '';
            
            dietData.avoid.forEach(food => {
                const foodItem = document.createElement('div');
                foodItem.className = 'avoid-food-item';
                foodItem.innerHTML = `
                    <i class="fas fa-times-circle"></i>
                    <span>${food}</span>
                `;
                avoidFoodsContainer.appendChild(foodItem);
            });
        }
    }
}

// Function to load symptoms data
function loadSymptoms() {
    // Sample symptoms data - already added to HTML
    const symptoms = [
        { id: 1, name: "Fever", severity: 3 },
        { id: 2, name: "Headache", severity: 2 },
        { id: 3, name: "Cough", severity: 2 },
        { id: 4, name: "Fatigue", severity: 2 },
        { id: 5, name: "Nausea", severity: 3 },
        { id: 6, name: "Dizziness", severity: 3 },
        { id: 7, name: "Chest Pain", severity: 4 },
        { id: 8, name: "Shortness of Breath", severity: 4 },
        { id: 9, name: "Abdominal Pain", severity: 3 },
        { id: 10, name: "Joint Pain", severity: 2 }
    ];
    
    // The symptoms are already added to the HTML, so we don't need to dynamically add them here
}

// Function to initialize diet section
function initDietSection() {
    // Initialize diet tabs
    const dietTabs = document.querySelectorAll('.diet-tab');
    const dietContents = document.querySelectorAll('.diet-tab-content');
    
    dietTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            dietTabs.forEach(t => t.classList.remove('active'));
            dietContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Initialize expandable boxes
    const statBoxes = document.querySelectorAll('.diet-stat-box');
    
    statBoxes.forEach(box => {
        const header = box.querySelector('.stat-box-header');
        
        if (header) {
            header.addEventListener('click', function() {
                box.classList.toggle('expanded');
            });
        }
    });
    
    // Expand the first box by default
    const firstBox = document.querySelector('#recommendations-box');
    if (firstBox) {
        firstBox.classList.add('expanded');
    }
    
    // Initialize nutrient chart
    initNutrientChart();
    
    // Initialize calorie chart
    initCalorieChart();
    
    // Initialize vitamin chart
    initVitaminChart();
}

// Function to initialize nutrient chart
function initNutrientChart() {
    const ctx = document.getElementById('nutrient-chart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Protein', 'Carbs', 'Fats', 'Fiber'],
                datasets: [{
                    data: [30, 40, 20, 10],
                    backgroundColor: [
                        '#4e54c8',
                        '#00b4d8',
                        '#f72585',
                        '#28a745'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Function to initialize calorie chart
function initCalorieChart() {
    const ctx = document.getElementById('calorie-chart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
                datasets: [{
                    label: 'Calories',
                    data: [500, 700, 600, 300],
                    backgroundColor: '#4e54c8',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Calories'
                        }
                    }
                }
            }
        });
    }
}

// Function to initialize vitamin chart
function initVitaminChart() {
    const ctx = document.getElementById('vitamin-chart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Calcium', 'Iron'],
                datasets: [{
                    label: 'Current',
                    data: [65, 80, 50, 70, 60, 75],
                    backgroundColor: 'rgba(78, 84, 200, 0.2)',
                    borderColor: '#4e54c8',
                    borderWidth: 2,
                    pointBackgroundColor: '#4e54c8'
                }, {
                    label: 'Recommended',
                    data: [80, 80, 80, 80, 80, 80],
                    backgroundColor: 'rgba(247, 37, 133, 0.1)',
                    borderColor: '#f72585',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointBackgroundColor: '#f72585'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
}

// Function to initialize diagnosis functionality
function initDiagnosis() {
    console.log("Initializing diagnosis functionality");
    
    // Wait for DOM to be fully loaded
    setTimeout(() => {
        const diagnoseBtn = document.getElementById('diagnose-btn');
        const viewRecommendationsBtn = document.getElementById('view-recommendations-btn');
        const symptomCheckboxes = document.querySelectorAll('.symptom-checkbox');
        const selectedSymptomsList = document.getElementById('selected-symptoms-list');
        const predictedDisease = document.getElementById('predicted-disease');
        const confidenceScore = document.querySelector('.progress');
        const severityText = document.querySelector('.severity-text');
        const severityIndicator = document.querySelector('.severity-indicator');
        
        console.log("Diagnosis elements:", {
            diagnoseBtn,
            viewRecommendationsBtn,
            symptomCheckboxes: symptomCheckboxes.length,
            selectedSymptomsList,
            predictedDisease,
            confidenceScore,
            severityText,
            severityIndicator
        });
    
    // Enhanced disease database with associated symptoms, weights, and recommended medications
    const diseases = [
        {
            name: "Common Cold",
            symptoms: {
                1: 0.5,  // Fever (moderate weight)
                2: 0.4,  // Headache (low weight)
                3: 0.9,  // Cough (high weight)
                4: 0.6,  // Fatigue (moderate weight)
                11: 0.95, // Runny Nose (very high weight)
                12: 0.8, // Sore Throat (high weight)
                13: 0.85  // Sneezing (high weight)
            },
            requiredSymptoms: [11], // Must have runny nose
            minSymptoms: 3,
            severity: "Mild",
            baseConfidence: 90,
            medications: ["Paracetamol", "Antihistamines", "Cough Syrup", "Nasal Decongestant"]
        },
        {
            name: "Influenza",
            symptoms: {
                1: 0.95,  // Fever (very high weight)
                2: 0.7,  // Headache (high weight)
                3: 0.8,  // Cough (high weight)
                4: 0.9,  // Fatigue (very high weight)
                11: 0.6, // Runny Nose (moderate weight)
                12: 0.6, // Sore Throat (moderate weight)
                14: 0.9, // Body Aches (very high weight)
                15: 0.85  // Chills (high weight)
            },
            requiredSymptoms: [1, 4], // Must have fever and fatigue
            minSymptoms: 4,
            severity: "Moderate",
            baseConfidence: 95,
            medications: ["Oseltamivir", "Paracetamol", "Ibuprofen", "Zanamivir"]
        },
        {
            name: "Migraine",
            symptoms: {
                2: 0.98, // Headache (very high weight)
                4: 0.5,  // Fatigue (moderate weight)
                6: 0.8,  // Dizziness (high weight)
                16: 0.9, // Sensitivity to Light (very high weight)
                17: 0.85, // Sensitivity to Sound (high weight)
                18: 0.7, // Nausea/Vomiting (high weight)
                19: 0.8  // Visual Disturbances (high weight)
            },
            requiredSymptoms: [2, 16], // Must have headache and light sensitivity
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Sumatriptan", "Ibuprofen", "Propranolol", "Topiramate"]
        },
        {
            name: "Food Poisoning",
            symptoms: {
                1: 0.4,  // Fever (low weight)
                5: 0.95,  // Nausea (very high weight)
                9: 0.85,  // Abdominal Pain (high weight)
                18: 0.95, // Vomiting (very high weight)
                20: 0.95, // Diarrhea (very high weight)
                21: 0.7, // Dehydration (high weight)
                4: 0.5   // Fatigue (moderate weight)
            },
            requiredSymptoms: [5, 20], // Must have nausea and diarrhea
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Loperamide", "Bismuth Subsalicylate", "Oral Rehydration Solution", "Probiotics"]
        },
        {
            name: "Pneumonia",
            symptoms: {
                1: 0.85,  // Fever (high weight)
                3: 0.95,  // Cough (very high weight)
                4: 0.7,  // Fatigue (high weight)
                8: 0.9,  // Shortness of Breath (very high weight)
                22: 0.85, // Chest Pain when Breathing (high weight)
                23: 0.8, // Rapid Breathing (high weight)
                24: 0.6  // Confusion (moderate weight, especially in elderly)
            },
            requiredSymptoms: [3, 8], // Must have cough and shortness of breath
            minSymptoms: 3,
            severity: "Severe",
            baseConfidence: 90,
            medications: ["Amoxicillin", "Azithromycin", "Paracetamol", "Ceftriaxone"]
        },
        {
            name: "Heart Attack",
            symptoms: {
                7: 0.98, // Chest Pain (very high weight)
                8: 0.85,  // Shortness of Breath (high weight)
                6: 0.6,  // Dizziness (moderate weight)
                25: 0.9, // Pain in Left Arm (very high weight)
                26: 0.8, // Jaw Pain (high weight)
                27: 0.7, // Cold Sweat (high weight)
                28: 0.6  // Anxiety (moderate weight)
            },
            requiredSymptoms: [7], // Must have chest pain
            minSymptoms: 2,
            severity: "Critical",
            baseConfidence: 95,
            medications: ["Aspirin", "Nitroglycerin", "Beta Blockers", "ACE Inhibitors"]
        },
        {
            name: "Arthritis",
            symptoms: {
                10: 0.98, // Joint Pain (very high weight)
                29: 0.9,  // Joint Stiffness (very high weight)
                30: 0.85,  // Joint Swelling (high weight)
                31: 0.7,  // Reduced Range of Motion (high weight)
                32: 0.6,  // Joint Redness (moderate weight)
                4: 0.4    // Fatigue (low weight)
            },
            requiredSymptoms: [10, 29], // Must have joint pain and stiffness
            minSymptoms: 2,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Ibuprofen", "Naproxen", "Methotrexate", "Corticosteroids"]
        },
        {
            name: "Gastroesophageal Reflux Disease (GERD)",
            symptoms: {
                33: 0.98, // Heartburn (very high weight)
                34: 0.9, // Regurgitation (very high weight)
                9: 0.7,  // Abdominal Pain (high weight)
                35: 0.8, // Difficulty Swallowing (high weight)
                36: 0.6, // Chronic Cough (moderate weight)
                37: 0.5  // Sore Throat (moderate weight)
            },
            requiredSymptoms: [33], // Must have heartburn
            minSymptoms: 2,
            severity: "Mild",
            baseConfidence: 85,
            medications: ["Omeprazole", "Famotidine", "Antacids", "Esomeprazole"]
        },
        {
            name: "Asthma",
            symptoms: {
                3: 0.8,  // Cough (high weight)
                8: 0.95,  // Shortness of Breath (very high weight)
                38: 0.98, // Wheezing (very high weight)
                39: 0.9, // Chest Tightness (very high weight)
                40: 0.7  // Trouble Sleeping due to breathing issues (high weight)
            },
            requiredSymptoms: [38], // Must have wheezing
            minSymptoms: 2,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Albuterol", "Fluticasone", "Montelukast", "Ipratropium"]
        },
        {
            name: "Urinary Tract Infection (UTI)",
            symptoms: {
                41: 0.98, // Burning during Urination (very high weight)
                42: 0.9, // Frequent Urination (very high weight)
                43: 0.8, // Cloudy Urine (high weight)
                44: 0.7, // Lower Abdominal Pain (high weight)
                1: 0.5,  // Fever (moderate weight)
                4: 0.4   // Fatigue (low weight)
            },
            requiredSymptoms: [41, 42], // Must have burning and frequent urination
            minSymptoms: 2,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Nitrofurantoin", "Trimethoprim/Sulfamethoxazole", "Ciprofloxacin", "Phenazopyridine"]
        },
        {
            name: "Sinusitis",
            symptoms: {
                2: 0.7,  // Headache (high weight)
                11: 0.8, // Nasal Congestion (high weight)
                45: 0.95, // Facial Pain/Pressure (very high weight)
                46: 0.9, // Thick Nasal Discharge (very high weight)
                47: 0.6, // Reduced Sense of Smell (moderate weight)
                12: 0.5  // Sore Throat (moderate weight)
            },
            requiredSymptoms: [45], // Must have facial pain/pressure
            minSymptoms: 3,
            severity: "Mild",
            baseConfidence: 85,
            medications: ["Amoxicillin", "Pseudoephedrine", "Nasal Corticosteroids", "Saline Nasal Spray"]
        },
        {
            name: "Hypertension",
            symptoms: {
                2: 0.7,  // Headache (high weight)
                6: 0.6,  // Dizziness (moderate weight)
                48: 0.5, // Shortness of Breath (moderate weight)
                49: 0.5, // Nosebleeds (moderate weight)
                50: 0.5  // Visual Changes (moderate weight)
            },
            requiredSymptoms: [], // Often asymptomatic, no required symptoms
            minSymptoms: 2,
            severity: "Moderate",
            baseConfidence: 75, // Lower confidence due to often being asymptomatic
            medications: ["Lisinopril", "Amlodipine", "Hydrochlorothiazide", "Losartan"]
        },
        {
            name: "Diabetes",
            symptoms: {
                51: 0.95, // Increased Thirst (very high weight)
                52: 0.95, // Frequent Urination (very high weight)
                53: 0.85, // Increased Hunger (high weight)
                54: 0.8, // Unexplained Weight Loss (high weight)
                55: 0.7, // Fatigue (high weight)
                56: 0.7, // Blurred Vision (high weight)
                57: 0.6  // Slow-healing Sores (moderate weight)
            },
            requiredSymptoms: [51, 52], // Must have increased thirst and frequent urination
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Metformin", "Insulin", "Glipizide", "Sitagliptin"]
        },
        {
            name: "Allergic Rhinitis",
            symptoms: {
                11: 0.95, // Runny Nose (very high weight)
                13: 0.9, // Sneezing (very high weight)
                58: 0.9, // Itchy/Watery Eyes (very high weight)
                59: 0.8, // Itchy Nose/Throat (high weight)
                3: 0.4   // Cough (low weight)
            },
            requiredSymptoms: [11, 13], // Must have runny nose and sneezing
            minSymptoms: 3,
            severity: "Mild",
            baseConfidence: 90,
            medications: ["Cetirizine", "Loratadine", "Fluticasone Nasal Spray", "Montelukast"]
        },
        {
            name: "Depression",
            symptoms: {
                60: 0.98, // Persistent Sadness (very high weight)
                61: 0.9, // Loss of Interest (very high weight)
                62: 0.8, // Sleep Changes (high weight)
                63: 0.8, // Fatigue (high weight)
                64: 0.7, // Difficulty Concentrating (high weight)
                65: 0.7, // Changes in Appetite (high weight)
                66: 0.6  // Feelings of Worthlessness (moderate weight)
            },
            requiredSymptoms: [60, 61], // Must have persistent sadness and loss of interest
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 85,
            medications: ["Sertraline", "Fluoxetine", "Escitalopram", "Bupropion"]
        },
        {
            name: "Anxiety Disorder",
            symptoms: {
                67: 0.98, // Excessive Worry (very high weight)
                68: 0.9, // Restlessness (very high weight)
                69: 0.8, // Fatigue (high weight)
                70: 0.8, // Difficulty Concentrating (high weight)
                71: 0.7, // Irritability (high weight)
                72: 0.9, // Muscle Tension (very high weight)
                73: 0.8  // Sleep Problems (high weight)
            },
            requiredSymptoms: [67, 68], // Must have excessive worry and restlessness
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 85,
            medications: ["Escitalopram", "Alprazolam", "Buspirone", "Venlafaxine"]
        },
        {
            name: "Bronchitis",
            symptoms: {
                3: 0.95, // Cough (very high weight)
                74: 0.9, // Mucus Production (very high weight)
                8: 0.7, // Shortness of Breath (high weight)
                12: 0.6, // Sore Throat (moderate weight)
                4: 0.6, // Fatigue (moderate weight)
                1: 0.5, // Fever (moderate weight)
                75: 0.8 // Chest Discomfort (high weight)
            },
            requiredSymptoms: [3, 74], // Must have cough and mucus production
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Dextromethorphan", "Guaifenesin", "Antibiotics", "Bronchodilators"]
        },
        {
            name: "Strep Throat",
            symptoms: {
                12: 0.98, // Sore Throat (very high weight)
                1: 0.8, // Fever (high weight)
                76: 0.9, // Painful Swallowing (very high weight)
                77: 0.85, // Swollen Tonsils (high weight)
                78: 0.7, // White Patches on Throat (high weight)
                79: 0.6, // Swollen Lymph Nodes (moderate weight)
                2: 0.5 // Headache (moderate weight)
            },
            requiredSymptoms: [12, 76], // Must have sore throat and painful swallowing
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 90,
            medications: ["Penicillin", "Amoxicillin", "Cephalexin", "Azithromycin"]
        },
        {
            name: "Gastritis",
            symptoms: {
                9: 0.9, // Abdominal Pain (very high weight)
                5: 0.8, // Nausea (high weight)
                80: 0.85, // Bloating (high weight)
                18: 0.7, // Vomiting (high weight)
                81: 0.75, // Indigestion (high weight)
                82: 0.6, // Loss of Appetite (moderate weight)
                1: 0.4 // Fever (low weight)
            },
            requiredSymptoms: [9], // Must have abdominal pain
            minSymptoms: 3,
            severity: "Moderate",
            baseConfidence: 85,
            medications: ["Omeprazole", "Famotidine", "Antacids", "Sucralfate"]
        }
    ];
    
    // Add event listeners to symptom checkboxes
    symptomCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSelectedSymptoms();
        });
    });
    
    // Add symptom search functionality
    const symptomSearch = document.getElementById('symptom-search');
    if (symptomSearch) {
        symptomSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const symptomItems = document.querySelectorAll('.symptom-item');
            
            symptomItems.forEach(item => {
                const symptomText = item.querySelector('label').textContent.toLowerCase();
                if (symptomText.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Function to update selected symptoms list
    function updateSelectedSymptoms() {
        selectedSymptomsList.innerHTML = '';
        
        const selectedCheckboxes = document.querySelectorAll('.symptom-checkbox:checked');
        
        if (selectedCheckboxes.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No symptoms selected';
            listItem.className = 'no-symptoms';
            selectedSymptomsList.appendChild(listItem);
        } else {
            selectedCheckboxes.forEach(checkbox => {
                const symptomName = checkbox.nextElementSibling.textContent;
                const listItem = document.createElement('li');
                listItem.textContent = symptomName;
                
                // Add remove button
                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = '&times;';
                removeBtn.className = 'remove-symptom';
                removeBtn.addEventListener('click', function() {
                    checkbox.checked = false;
                    updateSelectedSymptoms();
                });
                
                listItem.appendChild(removeBtn);
                selectedSymptomsList.appendChild(listItem);
            });
        }
    }
    
    // Initialize selected symptoms list
    updateSelectedSymptoms();
    
    // Add event listener to diagnose button
    if (diagnoseBtn) {
        console.log("Adding click event listener to diagnose button");
        diagnoseBtn.addEventListener('click', function() {
            console.log("Diagnose button clicked");
            const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-checkbox:checked'))
                .map(checkbox => parseInt(checkbox.id.split('-')[1]));
            
            console.log("Selected symptoms:", selectedSymptoms);
            
            if (selectedSymptoms.length === 0) {
                console.log("No symptoms selected");
                predictedDisease.textContent = 'Please select at least one symptom';
                confidenceScore.style.width = '0%';
                confidenceScore.textContent = '0%';
                severityText.textContent = 'Select symptoms to assess severity';
                severityIndicator.textContent = 'N/A';
                severityIndicator.className = 'severity-indicator';
                return;
            }
            
            console.log("Processing diagnosis for selected symptoms");
            
            // Calculate disease scores using the enhanced algorithm
            const diseaseScores = calculateDiseaseScores(selectedSymptoms, diseases);
            
            console.log("Disease scores:", diseaseScores);
            
            // Sort diseases by score in descending order
            const sortedDiseases = diseaseScores.sort((a, b) => b.score - a.score);
            
            // Get the best match (highest score)
            const bestMatch = sortedDiseases.length > 0 ? sortedDiseases[0] : null;
            
            console.log("Best match:", bestMatch);
            
            if (bestMatch && bestMatch.score > 0) {
                // Calculate confidence percentage (capped at 100%)
                const confidencePercentage = Math.min(100, Math.round(bestMatch.confidence));
                
                console.log("Confidence percentage:", confidencePercentage);
                
                // Update UI with diagnosis results
                predictedDisease.textContent = bestMatch.name;
                confidenceScore.style.width = `${confidencePercentage}%`;
                confidenceScore.textContent = `${confidencePercentage}%`;
                severityText.textContent = `${bestMatch.severity} severity`;
                severityIndicator.textContent = bestMatch.severity;
                
                // Update severity indicator class
                severityIndicator.className = 'severity-indicator';
                severityIndicator.classList.add(bestMatch.severity.toLowerCase());
                
                // Highlight severity bars
                const severityBars = document.querySelectorAll('.severity-bar');
                severityBars.forEach(bar => bar.classList.remove('active'));
                
                let activeBars = 0;
                switch (bestMatch.severity) {
                    case 'Critical':
                        activeBars = 4;
                        break;
                    case 'Severe':
                        activeBars = 3;
                        break;
                    case 'Moderate':
                        activeBars = 2;
                        break;
                    case 'Mild':
                        activeBars = 1;
                        break;
                }
                
                for (let i = 0; i < activeBars; i++) {
                    severityBars[i].classList.add('active');
                }
                
                // Log diagnostic information to console for debugging
                console.log('Diagnosis Results:', sortedDiseases.slice(0, 3));
                console.log('Selected Symptoms:', selectedSymptoms);
            } else {
                console.log("No matching condition found");
                predictedDisease.textContent = 'No matching condition found';
                confidenceScore.style.width = '0%';
                confidenceScore.textContent = '0%';
                severityText.textContent = 'Unable to assess severity';
                severityIndicator.textContent = 'Unknown';
                severityIndicator.className = 'severity-indicator';
            }
        });
    } else {
        console.error("Diagnose button not found in the DOM");
    }
    
    // Enhanced algorithm to calculate disease scores based on symptoms with improved confidence
    function calculateDiseaseScores(selectedSymptoms, diseases) {
        console.log("Calculating disease scores for symptoms:", selectedSymptoms);
        console.log("Number of diseases to check:", diseases.length);
        
        const results = [];
        
        diseases.forEach(disease => {
            console.log("Checking disease:", disease.name);
            
            // Check if all required symptoms are present
            const hasRequiredSymptoms = disease.requiredSymptoms.length === 0 || 
                disease.requiredSymptoms.every(symptom => selectedSymptoms.includes(symptom));
            
            console.log("Required symptoms:", disease.requiredSymptoms);
            console.log("Has required symptoms:", hasRequiredSymptoms);
            
            // If required symptoms are missing, skip this disease
            if (!hasRequiredSymptoms) {
                console.log("Skipping disease due to missing required symptoms");
                return;
            }
            
            // Count matching symptoms and calculate weighted score
            let weightedScore = 0;
            let matchCount = 0;
            let totalPossibleWeight = 0;
            let keySymptomCount = 0;
            let totalKeySymptoms = 0;
            
            // Calculate the weighted score based on matching symptoms
            for (const symptomId in disease.symptoms) {
                const symptomWeight = disease.symptoms[symptomId];
                totalPossibleWeight += symptomWeight;
                
                // Count key symptoms (those with high weight)
                if (symptomWeight >= 0.7) {
                    totalKeySymptoms++;
                    if (selectedSymptoms.includes(parseInt(symptomId))) {
                        keySymptomCount++;
                    }
                }
                
                if (selectedSymptoms.includes(parseInt(symptomId))) {
                    weightedScore += symptomWeight;
                    matchCount++;
                }
            }
            
            // Check if minimum number of symptoms is met
            if (matchCount < disease.minSymptoms) {
                return;
            }
            
            // Calculate relevance score (how well the selected symptoms match this disease)
            const relevanceScore = weightedScore / totalPossibleWeight;
            
            // Calculate coverage score (what percentage of selected symptoms are explained by this disease)
            const coverageScore = matchCount / selectedSymptoms.length;
            
            // Calculate key symptom score (percentage of key symptoms present)
            const keySymptomScore = totalKeySymptoms > 0 ? keySymptomCount / totalKeySymptoms : 0;
            
            // Calculate required symptom bonus (all required symptoms present)
            const requiredSymptomBonus = disease.requiredSymptoms.length > 0 && hasRequiredSymptoms ? 0.15 : 0;
            
            // Calculate symptom count bonus (more symptoms = more confidence)
            const symptomCountFactor = Math.min(1, matchCount / (disease.minSymptoms + 2));
            
            // Calculate final score with weighted components
            const finalScore = (relevanceScore * 0.4) + (coverageScore * 0.2) + (keySymptomScore * 0.4);
            
            // Apply bonuses to the final score
            const adjustedScore = Math.min(1, finalScore + requiredSymptomBonus);
            
            // Calculate confidence percentage with a higher baseline
            let confidence = 0;
            
            // Boost confidence for clear symptom patterns
            if (keySymptomScore > 0.7 && hasRequiredSymptoms) {
                // Strong match with key symptoms and required symptoms
                confidence = Math.max(85, adjustedScore * 100);
            } else if (adjustedScore > 0.6) {
                // Good overall match
                confidence = Math.max(80, adjustedScore * 95);
            } else if (adjustedScore > 0.4) {
                // Moderate match
                confidence = Math.max(70, adjustedScore * 90);
            } else {
                // Weaker match
                confidence = adjustedScore * 85;
            }
            
            // Ensure minimum confidence threshold for any result we show
            if (adjustedScore > 0.3) {
                console.log(`Adding ${disease.name} to results with score ${adjustedScore} and confidence ${Math.round(confidence)}%`);
                results.push({
                    name: disease.name,
                    score: adjustedScore,
                    confidence: Math.round(confidence),
                    matchCount: matchCount,
                    keySymptomCount: keySymptomCount,
                    totalKeySymptoms: totalKeySymptoms,
                    relevanceScore: relevanceScore,
                    coverageScore: coverageScore,
                    keySymptomScore: keySymptomScore,
                    severity: disease.severity,
                    medications: disease.medications
                });
            } else {
                console.log(`${disease.name} score ${adjustedScore} is below threshold, not adding to results`);
            }
        });
        
        console.log(`Returning ${results.length} disease matches`);
        return results;
    }
    
    // Add event listener to view recommendations button
    if (viewRecommendationsBtn) {
        console.log("Adding click event listener to view recommendations button");
        viewRecommendationsBtn.addEventListener('click', function() {
            console.log("View recommendations button clicked");
            
            // Get the diagnosed condition
            const diagnosedCondition = document.getElementById('predicted-disease').textContent;
            console.log("Diagnosed condition:", diagnosedCondition);
            
            // Store the diagnosed condition in session storage for use in the medications section
            if (diagnosedCondition && diagnosedCondition !== 'Please select at least one symptom' && diagnosedCondition !== 'No matching condition found') {
                sessionStorage.setItem('diagnosedCondition', diagnosedCondition);
                
                // Find the disease object
                const disease = diseases.find(d => d.name === diagnosedCondition);
                console.log("Found disease object:", disease);
                
                // Store recommended medications
                if (disease && disease.medications) {
                    sessionStorage.setItem('recommendedMedications', JSON.stringify(disease.medications));
                    console.log("Stored recommended medications:", disease.medications);
                    
                    // Set a flag to show only recommended medications
                    sessionStorage.setItem('showOnlyRecommended', 'true');
                }
            }
            
            // Scroll to medications section
            const medicationsLink = document.querySelector('a[href="#medications"]');
            if (medicationsLink) {
                console.log("Scrolling to medications section");
                medicationsLink.click();
            } else {
                console.error("Medications link not found");
            }
        });
    } else {
        console.error("View recommendations button not found in the DOM");
    }
    }, 500); // Small delay to ensure DOM is fully loaded
}

// Initialize expandable boxes
document.addEventListener('DOMContentLoaded', function() {
    // Expandable boxes functionality
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const statBox = this.closest('.diet-stat-box');
            statBox.classList.toggle('expanded');
            
            // Change icon based on expanded state
            const icon = this.querySelector('i');
            if (statBox.classList.contains('expanded')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                
                // Initialize charts if needed
                if (statBox.id === 'calorie-box') {
                    initCalorieChart();
                } else if (statBox.id === 'vitamin-box') {
                    initVitaminChart();
                } else if (statBox.id === 'nutrient-box') {
                    initNutrientChart();
                }
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
});

// Chart initialization functions
function initCalorieChart() {
    const ctx = document.getElementById('calorie-chart').getContext('2d');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Carbohydrates', 'Proteins', 'Fats'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Daily Calorie Distribution (2000 calories)'
                }
            }
        }
    });
}

function initVitaminChart() {
    const ctx = document.getElementById('vitamin-chart').getContext('2d');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Calcium', 'Iron', 'Potassium'],
            datasets: [{
                label: 'Daily Needs (%)',
                data: [85, 120, 60, 75, 90, 65],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 150,
                    title: {
                        display: true,
                        text: 'Percentage of Daily Value'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Essential Nutrients Status'
                }
            }
        }
    });
}

function initNutrientChart() {
    const ctx = document.getElementById('nutrient-chart').getContext('2d');
    
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Carbs', 'Protein', 'Fat', 'Fiber', 'Sugar'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Recommended Nutrient Distribution'
                }
            }
        }
    });
}

// Initialize analysis charts
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the analysis section
    const analysisCharts = document.querySelectorAll('.chart-container');
    if (analysisCharts.length > 0) {
        initAnalysisCharts();
    }
    
    // Add event listener to analysis type selector
    const analysisType = document.getElementById('analysis-type');
    const timePeriod = document.getElementById('time-period');
    
    if (analysisType) {
        analysisType.addEventListener('change', function() {
            updateAnalysisCharts();
        });
    }
    
    if (timePeriod) {
        timePeriod.addEventListener('change', function() {
            updateAnalysisCharts();
        });
    }
});

// Chart instances to allow updating
let diseaseChart, severityChart, recoveryChart, ageChart;

function updateAnalysisCharts() {
    const analysisType = document.getElementById('analysis-type').value;
    const timePeriod = document.getElementById('time-period').value;
    
    // Update chart titles based on analysis type
    updateChartTitles(analysisType);
    
    // Update chart data based on analysis type and time period
    updateChartData(analysisType, timePeriod);
}

function updateChartTitles(analysisType) {
    const titles = {
        disease: {
            chart1: 'Disease Prevalence',
            chart2: 'Symptom Severity Distribution',
            chart3: 'Recovery Rate by Treatment',
            chart4: 'Age Group Distribution'
        },
        symptom: {
            chart1: 'Most Common Symptoms',
            chart2: 'Symptom Severity Trends',
            chart3: 'Symptom Duration Analysis',
            chart4: 'Symptom Correlation Map'
        },
        medication: {
            chart1: 'Medication Effectiveness',
            chart2: 'Side Effects Frequency',
            chart3: 'Treatment Adherence Rate',
            chart4: 'Cost-Effectiveness Analysis'
        },
        diet: {
            chart1: 'Dietary Impact on Recovery',
            chart2: 'Nutrient Deficiency Analysis',
            chart3: 'Weight Management Progress',
            chart4: 'Meal Plan Adherence'
        }
    };
    
    // Update chart titles
    document.querySelectorAll('.chart-container h3').forEach((title, index) => {
        const chartNum = index + 1;
        if (titles[analysisType][`chart${chartNum}`]) {
            title.textContent = titles[analysisType][`chart${chartNum}`];
        }
    });
}

function updateChartData(analysisType, timePeriod) {
    // Clear existing charts
    if (diseaseChart) diseaseChart.destroy();
    if (severityChart) severityChart.destroy();
    if (recoveryChart) recoveryChart.destroy();
    if (ageChart) ageChart.destroy();
    
    // Generate data based on analysis type and time period
    const data = generateAnalysisData(analysisType, timePeriod);
    
    // Initialize charts with new data
    initCharts(data);
    
    // Update insights based on analysis type and time period
    updateInsights(analysisType, timePeriod);
}

function generateAnalysisData(analysisType, timePeriod) {
    // Base data structure
    const data = {
        chart1: {
            type: 'bar',
            labels: [],
            datasets: []
        },
        chart2: {
            type: 'radar',
            labels: [],
            datasets: []
        },
        chart3: {
            type: 'line',
            labels: [],
            datasets: []
        },
        chart4: {
            type: 'doughnut',
            labels: [],
            datasets: []
        }
    };
    
    // Time period labels
    const timeLabels = {
        week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        month: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        all: ['2019', '2020', '2021', '2022', '2023']
    };
    
    // Generate data based on analysis type
    switch (analysisType) {
        case 'disease':
            // Chart 1: Disease Prevalence
            data.chart1.labels = ['Common Cold', 'Influenza', 'Allergies', 'Hypertension', 'Diabetes'];
            data.chart1.datasets = [{
                label: 'Prevalence (%)',
                data: timePeriod === 'week' ? [15, 10, 25, 12, 8] :
                      timePeriod === 'month' ? [20, 15, 22, 14, 10] :
                      timePeriod === 'year' ? [30, 20, 18, 15, 12] :
                      [35, 25, 20, 15, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }];
            
            // Chart 2: Symptom Severity
            data.chart2.labels = ['Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea', 'Joint Pain'];
            data.chart2.datasets = [{
                label: 'Before Treatment',
                data: timePeriod === 'week' ? [7, 6, 8, 5, 4, 6] :
                      timePeriod === 'month' ? [8, 7, 8, 6, 5, 7] :
                      [8, 7, 9, 6, 5, 7],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'After Treatment',
                data: timePeriod === 'week' ? [4, 3, 5, 3, 2, 4] :
                      timePeriod === 'month' ? [3, 3, 4, 2, 2, 3] :
                      [3, 2, 4, 2, 1, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }];
            
            // Chart 3: Recovery Rate
            data.chart3.labels = timeLabels[timePeriod];
            data.chart3.datasets = [{
                label: 'Medication A',
                data: generateTrendData(timeLabels[timePeriod].length, 20, 90, timePeriod),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.3
            }, {
                label: 'Medication B',
                data: generateTrendData(timeLabels[timePeriod].length, 15, 75, timePeriod),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                tension: 0.3
            }];
            
            // Chart 4: Age Distribution
            data.chart4.labels = ['0-18', '19-35', '36-50', '51-65', '65+'];
            data.chart4.datasets = [{
                data: timePeriod === 'week' ? [15, 25, 30, 20, 10] :
                      timePeriod === 'month' ? [12, 28, 32, 18, 10] :
                      timePeriod === 'year' ? [10, 30, 35, 15, 10] :
                      [8, 32, 35, 15, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }];
            break;
            
        case 'symptom':
            // Chart 1: Most Common Symptoms
            data.chart1.labels = ['Fatigue', 'Headache', 'Fever', 'Cough', 'Nausea', 'Joint Pain', 'Dizziness'];
            data.chart1.datasets = [{
                label: 'Frequency (%)',
                data: timePeriod === 'week' ? [65, 58, 50, 45, 30, 25, 20] :
                      timePeriod === 'month' ? [70, 60, 55, 48, 35, 30, 25] :
                      timePeriod === 'year' ? [75, 65, 60, 50, 40, 35, 30] :
                      [80, 70, 65, 55, 45, 40, 35],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }];
            
            // Chart 2: Symptom Severity Trends
            data.chart2.type = 'line';
            data.chart2.labels = timeLabels[timePeriod];
            data.chart2.datasets = [{
                label: 'Fever',
                data: generateTrendData(timeLabels[timePeriod].length, 3, 8, timePeriod),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                tension: 0.3
            }, {
                label: 'Headache',
                data: generateTrendData(timeLabels[timePeriod].length, 2, 7, timePeriod),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.3
            }, {
                label: 'Fatigue',
                data: generateTrendData(timeLabels[timePeriod].length, 4, 9, timePeriod),
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.3
            }];
            
            // Chart 3: Symptom Duration
            data.chart3.type = 'bar';
            data.chart3.labels = ['Fever', 'Headache', 'Cough', 'Fatigue', 'Nausea'];
            data.chart3.datasets = [{
                label: 'Average Duration (days)',
                data: timePeriod === 'week' ? [3, 2, 5, 4, 1] :
                      timePeriod === 'month' ? [4, 3, 7, 5, 2] :
                      timePeriod === 'year' ? [5, 3, 10, 7, 2] :
                      [5, 4, 14, 10, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }];
            
            // Chart 4: Symptom Correlation
            data.chart4.type = 'polarArea';
            data.chart4.labels = ['Fever-Headache', 'Cough-Fatigue', 'Nausea-Dizziness', 'Joint Pain-Fatigue', 'Fever-Chills'];
            data.chart4.datasets = [{
                data: timePeriod === 'week' ? [70, 65, 50, 60, 80] :
                      timePeriod === 'month' ? [75, 70, 55, 65, 85] :
                      timePeriod === 'year' ? [80, 75, 60, 70, 90] :
                      [85, 80, 65, 75, 95],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }];
            break;
            
        case 'medication':
            // Chart 1: Medication Effectiveness
            data.chart1.labels = ['Antibiotic A', 'Antibiotic B', 'Antiviral X', 'Pain Reliever Y', 'Anti-inflammatory Z'];
            data.chart1.datasets = [{
                label: 'Effectiveness (%)',
                data: timePeriod === 'week' ? [75, 70, 85, 65, 80] :
                      timePeriod === 'month' ? [80, 75, 88, 70, 85] :
                      timePeriod === 'year' ? [85, 80, 90, 75, 88] :
                      [90, 85, 92, 80, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }];
            
            // Chart 2: Side Effects
            data.chart2.type = 'bar';
            data.chart2.labels = ['Nausea', 'Headache', 'Dizziness', 'Fatigue', 'Rash', 'GI Issues'];
            data.chart2.datasets = [{
                label: 'Frequency (%)',
                data: timePeriod === 'week' ? [15, 10, 8, 20, 5, 12] :
                      timePeriod === 'month' ? [18, 12, 10, 22, 7, 15] :
                      timePeriod === 'year' ? [20, 15, 12, 25, 8, 18] :
                      [25, 18, 15, 30, 10, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }];
            
            // Chart 3: Treatment Adherence
            data.chart3.labels = timeLabels[timePeriod];
            data.chart3.datasets = [{
                label: 'Adherence Rate (%)',
                data: generateTrendData(timeLabels[timePeriod].length, 60, 95, timePeriod, true),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.3
            }];
            
            // Chart 4: Cost-Effectiveness
            data.chart4.type = 'scatter';
            data.chart4.datasets = [{
                label: 'Medications',
                data: [
                    { x: 85, y: 120 }, // Effectiveness vs Cost
                    { x: 92, y: 200 },
                    { x: 78, y: 80 },
                    { x: 90, y: 150 },
                    { x: 75, y: 60 },
                    { x: 88, y: 180 },
                    { x: 95, y: 250 }
                ],
                backgroundColor: 'rgba(153, 102, 255, 0.7)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                pointRadius: 8
            }];
            break;
            
        case 'diet':
            // Chart 1: Dietary Impact
            data.chart1.type = 'bar';
            data.chart1.labels = ['High Protein', 'Mediterranean', 'Low Carb', 'Vegetarian', 'Standard'];
            data.chart1.datasets = [{
                label: 'Recovery Improvement (%)',
                data: timePeriod === 'week' ? [15, 20, 12, 18, 5] :
                      timePeriod === 'month' ? [18, 25, 15, 20, 8] :
                      timePeriod === 'year' ? [20, 30, 18, 25, 10] :
                      [25, 35, 20, 30, 12],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }];
            
            // Chart 2: Nutrient Deficiency
            data.chart2.type = 'radar';
            data.chart2.labels = ['Vitamin D', 'Vitamin C', 'Iron', 'Calcium', 'Magnesium', 'Zinc'];
            data.chart2.datasets = [{
                label: 'Before Diet Change',
                data: timePeriod === 'week' ? [60, 70, 65, 75, 60, 55] :
                      timePeriod === 'month' ? [55, 65, 60, 70, 55, 50] :
                      [50, 60, 55, 65, 50, 45],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'After Diet Change',
                data: timePeriod === 'week' ? [75, 85, 80, 85, 75, 70] :
                      timePeriod === 'month' ? [80, 90, 85, 90, 80, 75] :
                      [85, 95, 90, 95, 85, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }];
            
            // Chart 3: Weight Management
            data.chart3.labels = timeLabels[timePeriod];
            data.chart3.datasets = [{
                label: 'Average Weight (kg)',
                data: generateTrendData(timeLabels[timePeriod].length, 80, 70, timePeriod, false, true),
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                tension: 0.3
            }];
            
            // Chart 4: Meal Plan Adherence
            data.chart4.type = 'doughnut';
            data.chart4.labels = ['Fully Adhered', 'Mostly Adhered', 'Partially Adhered', 'Rarely Adhered', 'Not Adhered'];
            data.chart4.datasets = [{
                data: timePeriod === 'week' ? [30, 35, 20, 10, 5] :
                      timePeriod === 'month' ? [25, 30, 25, 15, 5] :
                      timePeriod === 'year' ? [20, 25, 30, 15, 10] :
                      [15, 25, 30, 20, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }];
            break;
    }
    
    return data;
}

function generateTrendData(length, min, max, timePeriod, isIncreasing = true, isDecreasing = false) {
    const data = [];
    let current;
    
    if (isIncreasing) {
        current = min;
        const step = (max - min) / (length - 1);
        for (let i = 0; i < length; i++) {
            // Add some randomness
            const randomFactor = Math.random() * 0.2 - 0.1; // -10% to +10%
            const value = current + (current * randomFactor);
            data.push(Math.round(value));
            current += step;
        }
    } else if (isDecreasing) {
        current = max;
        const step = (max - min) / (length - 1);
        for (let i = 0; i < length; i++) {
            // Add some randomness
            const randomFactor = Math.random() * 0.2 - 0.1; // -10% to +10%
            const value = current + (current * randomFactor);
            data.push(Math.round(value));
            current -= step;
        }
    } else {
        // Random fluctuating data
        const midPoint = (max + min) / 2;
        const amplitude = (max - min) / 2;
        
        for (let i = 0; i < length; i++) {
            // Create a wave pattern with some randomness
            const wave = Math.sin(i / (length / Math.PI * 2)) * amplitude;
            const random = (Math.random() * amplitude / 2) - (amplitude / 4);
            const value = midPoint + wave + random;
            data.push(Math.round(Math.max(min, Math.min(max, value))));
        }
    }
    
    return data;
}

function initCharts(data) {
    // Chart 1
    const chart1Ctx = document.getElementById('disease-chart');
    if (chart1Ctx) {
        diseaseChart = new Chart(chart1Ctx, {
            type: data.chart1.type || 'bar',
            data: {
                labels: data.chart1.labels,
                datasets: data.chart1.datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Chart 2
    const chart2Ctx = document.getElementById('severity-chart');
    if (chart2Ctx) {
        severityChart = new Chart(chart2Ctx, {
            type: data.chart2.type || 'radar',
            data: {
                labels: data.chart2.labels,
                datasets: data.chart2.datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: data.chart2.type === 'radar' ? {
                    r: {
                        min: 0,
                        max: 10
                    }
                } : {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Chart 3
    const chart3Ctx = document.getElementById('recovery-chart');
    if (chart3Ctx) {
        recoveryChart = new Chart(chart3Ctx, {
            type: data.chart3.type || 'line',
            data: {
                labels: data.chart3.labels,
                datasets: data.chart3.datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Chart 4
    const chart4Ctx = document.getElementById('age-chart');
    if (chart4Ctx) {
        const options = {
            responsive: true,
            maintainAspectRatio: false
        };
        
        // Add specific options for scatter plot
        if (data.chart4.type === 'scatter') {
            options.scales = {
                x: {
                    title: {
                        display: true,
                        text: 'Effectiveness (%)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cost ($)'
                    }
                }
            };
        }
        
        ageChart = new Chart(chart4Ctx, {
            type: data.chart4.type || 'doughnut',
            data: {
                labels: data.chart4.labels,
                datasets: data.chart4.datasets
            },
            options: options
        });
    }
}

// Initialize workout section
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the workouts section
    const workoutCards = document.querySelectorAll('.workout-card');
    if (workoutCards.length > 0) {
        initWorkoutSection();
    }
});

function initWorkoutSection() {
    // Add event listeners to workout cards
    const workoutCards = document.querySelectorAll('.workout-card');
    const workoutDetails = document.querySelector('.workout-details');
    const closeDetailsBtn = document.querySelector('.close-details');
    
    // Workout data
    const workouts = [
        {
            id: 1,
            name: "Gentle Stretching",
            description: "A series of gentle stretches designed to improve flexibility, reduce stiffness, and promote relaxation. Ideal for beginners or those recovering from illness.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXRjaGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Start with neck rotations: gently roll your head in a circular motion, 5 times in each direction.",
                "Shoulder rolls: roll shoulders forward 10 times, then backward 10 times.",
                "Arm stretches: extend arms overhead, then to sides, holding each position for 15 seconds.",
                "Gentle torso twists: sitting or standing, rotate upper body left and right, 10 times each side.",
                "Hamstring stretch: seated with legs extended, reach toward toes and hold for 30 seconds.",
                "Finish with deep breathing: 5 slow breaths in through nose, out through mouth."
            ],
            benefits: "Improves circulation, reduces muscle tension, increases range of motion, and promotes relaxation."
        },
        {
            id: 2,
            name: "Yoga Flow",
            description: "A gentle yoga sequence focusing on breathing, flexibility, and stress reduction. Suitable for all levels with modifications provided.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Begin in mountain pose: stand tall with feet together, arms at sides, focus on breathing for 1 minute.",
                "Move to sun salutation: raise arms overhead, forward fold, half lift, plank, lower, upward dog, downward dog.",
                "Hold downward dog for 5 breaths, then step forward to forward fold.",
                "Rise to mountain pose and repeat sequence 3-5 times.",
                "Finish with seated meditation: sit comfortably, focus on breath for 2-3 minutes.",
                "End in corpse pose: lie flat on back, arms at sides, completely relaxed for 3-5 minutes."
            ],
            benefits: "Reduces stress and anxiety, improves flexibility and balance, enhances mind-body connection, and promotes better sleep."
        },
        {
            id: 3,
            name: "Brisk Walking",
            description: "An outdoor walking routine designed to improve cardiovascular health without excessive strain. Includes warm-up and cool-down periods.",
            image: "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Fsa2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Start with a 3-minute slow walk to warm up muscles.",
                "Increase to a moderate pace where you can still hold a conversation.",
                "Maintain good posture: head up, shoulders relaxed, arms swinging naturally.",
                "Walk at this pace for 15-20 minutes.",
                "Gradually slow down for a 2-minute cool-down period.",
                "Finish with gentle stretches focusing on calves, hamstrings, and quadriceps."
            ],
            benefits: "Improves cardiovascular health, boosts immune function, enhances mood through endorphin release, and maintains healthy weight."
        },
        {
            id: 4,
            name: "HIIT Workout",
            description: "High-intensity interval training designed to maximize calorie burn in a short time. Can be modified for different fitness levels.",
            image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Warm up with 3 minutes of light cardio (marching in place, arm circles).",
                "Perform 30 seconds of jumping jacks, followed by 30 seconds rest.",
                "30 seconds of bodyweight squats, 30 seconds rest.",
                "30 seconds of push-ups (modified if needed), 30 seconds rest.",
                "30 seconds of high knees, 30 seconds rest.",
                "Repeat circuit 3-4 times, then cool down with 3 minutes of walking and stretching."
            ],
            benefits: "Efficient calorie burning, improved metabolic rate, increased strength and endurance, no equipment needed."
        },
        {
            id: 5,
            name: "Breathing Exercises",
            description: "Deep breathing techniques to reduce anxiety, improve lung function, and promote relaxation. Perfect for stress management.",
            image: "https://images.unsplash.com/photo-1616279969856-759f14f2f316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYXRoaW5nJTIwZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Find a comfortable seated position in a quiet space.",
                "Diaphragmatic breathing: place one hand on chest, one on stomach. Inhale deeply through nose for 4 counts, feeling stomach expand. Exhale slowly through mouth for 6 counts. Repeat 10 times.",
                "4-7-8 Breathing: Inhale quietly through nose for 4 counts, hold breath for 7 counts, exhale completely through mouth for 8 counts. Repeat 4 times.",
                "Box breathing: Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat 5 times.",
                "End with 1 minute of natural breathing, observing how your body feels."
            ],
            benefits: "Reduces stress and anxiety, lowers blood pressure, improves focus, activates relaxation response, and improves respiratory function."
        },
        {
            id: 6,
            name: "Swimming",
            description: "Full-body workout with minimal joint impact, ideal for recovery and cardiovascular health. Adaptable to all fitness levels.",
            image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
            steps: [
                "Begin with 5 minutes of easy swimming to warm up.",
                "Perform 10 minutes of freestyle swimming at a moderate pace.",
                "Rest for 1 minute, then swim 5 minutes using backstroke.",
                "Rest for 1 minute, then swim 5 minutes using breaststroke if comfortable.",
                "Finish with 5 minutes of easy swimming as cool down.",
                "Stretch major muscle groups after exiting the pool."
            ],
            benefits: "Low-impact cardiovascular exercise, works all major muscle groups, improves lung capacity, and provides natural resistance training."
        }
    ];
    
    // Add click event to workout cards
    workoutCards.forEach(card => {
        card.addEventListener('click', function() {
            const workoutId = parseInt(this.getAttribute('data-id'));
            showWorkoutDetails(workoutId);
        });
    });
    
    // Close details button
    if (closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', function() {
            workoutDetails.classList.remove('active');
        });
    }
    
    // Filter functionality
    const intensityFilter = document.getElementById('intensity-filter');
    const durationFilter = document.getElementById('duration-filter');
    
    if (intensityFilter) {
        intensityFilter.addEventListener('change', filterWorkouts);
    }
    
    if (durationFilter) {
        durationFilter.addEventListener('change', filterWorkouts);
    }
    
    function filterWorkouts() {
        const selectedIntensity = intensityFilter.value;
        const selectedDuration = durationFilter.value;
        
        workoutCards.forEach(card => {
            const cardIntensity = card.getAttribute('data-intensity');
            const cardDuration = card.getAttribute('data-duration');
            
            const intensityMatch = selectedIntensity === 'all' || cardIntensity === selectedIntensity;
            const durationMatch = selectedDuration === 'all' || cardDuration === selectedDuration;
            
            if (intensityMatch && durationMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function showWorkoutDetails(workoutId) {
        const workout = workouts.find(w => w.id === workoutId);
        if (!workout) return;
        
        // Update workout details
        document.getElementById('workout-name').textContent = workout.name;
        document.getElementById('workout-description').textContent = workout.description;
        document.getElementById('workout-detail-image').src = workout.image;
        
        // Update steps
        const stepsContainer = document.querySelector('.workout-steps');
        if (stepsContainer) {
            let stepsHTML = '<h5>Steps:</h5><ol>';
            workout.steps.forEach(step => {
                stepsHTML += `<li>${step}</li>`;
            });
            stepsHTML += '</ol>';
            stepsContainer.innerHTML = stepsHTML;
        }
        
        // Update benefits
        const benefitsContainer = document.querySelector('.workout-benefits');
        if (benefitsContainer) {
            benefitsContainer.innerHTML = `<h5>Benefits:</h5><p>${workout.benefits}</p>`;
        }
        
        // Show the details
        workoutDetails.classList.add('active');
    }
}

function updateInsights(analysisType, timePeriod) {
    const insightCards = document.querySelectorAll('.insight-card');
    if (insightCards.length === 0) return;
    
    const insights = {
        disease: {
            week: [
                { title: 'Rising Trend', content: 'Allergies show a 15% increase in the past week, likely due to seasonal changes.' },
                { title: 'Treatment Efficacy', content: 'Medication A shows 25% faster symptom relief compared to Medication B for respiratory conditions.' },
                { title: 'Age Distribution', content: 'Adults aged 36-50 are most affected by current prevalent conditions.' }
            ],
            month: [
                { title: 'Disease Patterns', content: 'Common cold cases have decreased by 10% compared to last month.' },
                { title: 'Recovery Insights', content: 'Patients following recommended precautions show 40% faster recovery rates.' },
                { title: 'Risk Factors', content: 'Individuals with pre-existing conditions show 2.5x higher susceptibility to current infections.' }
            ],
            year: [
                { title: 'Annual Comparison', content: 'Overall disease prevalence has decreased by 8% compared to last year.' },
                { title: 'Long-term Trends', content: 'Chronic conditions show stable management with current treatment protocols.' },
                { title: 'Demographic Shifts', content: 'Younger population (19-35) showing increased incidence of stress-related conditions.' }
            ],
            all: [
                { title: 'Most Common Symptoms', content: 'Fatigue, headache, and fever are the most frequently reported symptoms across all conditions.' },
                { title: 'Effective Treatments', content: 'Combination therapies show 35% higher effectiveness compared to single medication approaches.' },
                { title: 'Prevention Impact', content: 'Preventive measures reduce recurrence rates by up to 65% for most common conditions.' }
            ]
        },
        symptom: {
            week: [
                { title: 'Symptom Clusters', content: 'Headache and fatigue frequently occur together, suggesting potential stress-related causes.' },
                { title: 'Severity Patterns', content: 'Morning symptoms tend to be 30% more severe than evening manifestations.' },
                { title: 'Quick Resolvers', content: 'Nausea symptoms show fastest resolution, typically within 24-48 hours.' }
            ],
            month: [
                { title: 'Symptom Progression', content: 'Respiratory symptoms typically peak at day 3-4 before gradually improving.' },
                { title: 'Treatment Response', content: 'Early intervention reduces symptom duration by approximately 40%.' },
                { title: 'Recurring Symptoms', content: 'Headaches show highest recurrence rate at 45% within the same month.' }
            ],
            year: [
                { title: 'Seasonal Patterns', content: 'Respiratory symptoms peak during winter months, while allergic symptoms dominate spring.' },
                { title: 'Chronic vs. Acute', content: 'Chronic symptoms respond better to lifestyle modifications than medication alone.' },
                { title: 'Age Correlation', content: 'Joint pain symptoms increase by 5% per decade of age after 40.' }
            ],
            all: [
                { title: 'Symptom Burden', content: 'Fatigue has the highest impact on quality of life across all conditions.' },
                { title: 'Gender Differences', content: 'Women report headache symptoms 25% more frequently than men.' },
                { title: 'Treatment Gaps', content: 'Sleep-related symptoms are undertreated in 60% of cases.' }
            ]
        },
        medication: {
            week: [
                { title: 'Rapid Responders', content: 'Anti-inflammatory medications show fastest symptom relief within 24-48 hours.' },
                { title: 'Side Effect Profile', content: 'GI issues are the most common side effect this week, affecting 12% of patients.' },
                { title: 'Dosage Insights', content: 'Split dosing improves tolerance by 35% for medications with GI side effects.' }
            ],
            month: [
                { title: 'Adherence Patterns', content: 'Once-daily medications show 30% better adherence than multiple daily doses.' },
                { title: 'Combination Effects', content: 'Antibiotic-probiotic combinations reduce side effects by 45%.' },
                { title: 'Cost Effectiveness', content: 'Generic alternatives provide 90% efficacy at 40% of the cost.' }
            ],
            year: [
                { title: 'Long-term Safety', content: 'Extended use medications show stable safety profiles with minimal adaptation effects.' },
                { title: 'Resistance Patterns', content: 'Rotating antibiotic protocols reduce resistance development by 60%.' },
                { title: 'Demographic Response', content: 'Medication effectiveness varies by up to 25% across different age groups.' }
            ],
            all: [
                { title: 'Most Effective Classes', content: 'Broad-spectrum antibiotics show highest overall effectiveness for bacterial infections.' },
                { title: 'Side Effect Burden', content: 'Gastrointestinal issues remain the most common adverse effect across all medication classes.' },
                { title: 'Adherence Impact', content: 'Treatment success rates increase by 65% with full medication adherence.' }
            ]
        },
        diet: {
            week: [
                { title: 'Immediate Benefits', content: 'Increased hydration shows 25% improvement in headache symptoms within 48 hours.' },
                { title: 'Trigger Foods', content: 'Processed foods correlate with 40% increase in inflammatory symptoms.' },
                { title: 'Quick Wins', content: 'Reducing sugar intake improves energy levels by 30% within one week.' }
            ],
            month: [
                { title: 'Nutrient Improvements', content: 'Vitamin D levels increase by 35% with dietary changes and moderate sun exposure.' },
                { title: 'Weight Management', content: 'Mediterranean diet shows consistent 0.5-1kg weekly weight loss when indicated.' },
                { title: 'Symptom Reduction', content: 'Anti-inflammatory diets reduce joint pain by 40% within 3-4 weeks.' }
            ],
            year: [
                { title: 'Sustainable Changes', content: 'Small, consistent dietary modifications show better long-term adherence than radical changes.' },
                { title: 'Condition Management', content: 'Dietary management reduces medication requirements by 30% for certain chronic conditions.' },
                { title: 'Preventive Effects', content: 'Balanced nutrition reduces annual illness frequency by 45%.' }
            ],
            all: [
                { title: 'Most Beneficial Pattern', content: 'Mediterranean diet shows best overall health outcomes across all conditions.' },
                { title: 'Critical Nutrients', content: 'Vitamin D, magnesium, and omega-3 deficiencies are most strongly correlated with symptom severity.' },
                { title: 'Hydration Impact', content: 'Proper hydration improves medication effectiveness by up to 25%.' }
            ]
        }
    };
    
    // Update insight cards
    const currentInsights = insights[analysisType][timePeriod];
    insightCards.forEach((card, index) => {
        if (currentInsights[index]) {
            card.querySelector('h4').textContent = currentInsights[index].title;
            card.querySelector('p').textContent = currentInsights[index].content;
        }
    });
}

function initAnalysisCharts() {
    const analysisType = document.getElementById('analysis-type').value;
    const timePeriod = document.getElementById('time-period').value;
    
    // Update chart titles based on analysis type
    updateChartTitles(analysisType);
    
    // Generate data based on analysis type and time period
    const data = generateAnalysisData(analysisType, timePeriod);
    
    // Initialize charts with new data
    initCharts(data);
    
    // Update insights based on analysis type and time period
    updateInsights(analysisType, timePeriod);
}