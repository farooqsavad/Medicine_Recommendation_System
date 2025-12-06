// Simple disease database with symptoms and recommendations
const diseaseDatabase = [
    {
        name: "Common Cold",
        symptoms: [1, 3, 11, 12, 13],  // Fever, Cough, Runny Nose, Sore Throat, Sneezing
        severity: "Mild",
        confidence: 85,
        medications: ["Paracetamol", "Antihistamines", "Cough Syrup", "Nasal Decongestant"]
    },
    {
        name: "Influenza",
        symptoms: [1, 2, 3, 4, 14, 15],  // Fever, Headache, Cough, Fatigue, Body Aches, Chills
        severity: "Moderate",
        confidence: 90,
        medications: ["Oseltamivir", "Paracetamol", "Ibuprofen", "Zanamivir"]
    },
    {
        name: "Migraine",
        symptoms: [2, 6, 16, 17, 18],  // Headache, Dizziness, Light Sensitivity, Sound Sensitivity, Nausea
        severity: "Moderate",
        confidence: 85,
        medications: ["Sumatriptan", "Ibuprofen", "Propranolol", "Topiramate"]
    },
    {
        name: "Food Poisoning",
        symptoms: [5, 9, 18, 20],  // Nausea, Abdominal Pain, Vomiting, Diarrhea
        severity: "Moderate",
        confidence: 80,
        medications: ["Loperamide", "Bismuth Subsalicylate", "Oral Rehydration Solution"]
    },
    {
        name: "Pneumonia",
        symptoms: [1, 3, 8, 22],  // Fever, Cough, Shortness of Breath, Chest Pain when Breathing
        severity: "Severe",
        confidence: 85,
        medications: ["Amoxicillin", "Azithromycin", "Paracetamol"]
    },
    {
        name: "Heart Attack",
        symptoms: [7, 8, 25],  // Chest Pain, Shortness of Breath, Pain in Left Arm
        severity: "Critical",
        confidence: 95,
        medications: ["Aspirin", "Nitroglycerin", "Beta Blockers"]
    },
    {
        name: "Arthritis",
        symptoms: [10, 29, 30],  // Joint Pain, Joint Stiffness, Joint Swelling
        severity: "Moderate",
        confidence: 80,
        medications: ["Ibuprofen", "Naproxen", "Methotrexate"]
    },
    {
        name: "Asthma",
        symptoms: [3, 8, 38, 39],  // Cough, Shortness of Breath, Wheezing, Chest Tightness
        severity: "Moderate",
        confidence: 85,
        medications: ["Albuterol", "Fluticasone", "Montelukast"]
    },
    {
        name: "Allergic Rhinitis",
        symptoms: [11, 13, 58],  // Runny Nose, Sneezing, Itchy/Watery Eyes
        severity: "Mild",
        confidence: 80,
        medications: ["Cetirizine", "Loratadine", "Fluticasone Nasal Spray"]
    },
    {
        name: "Urinary Tract Infection",
        symptoms: [41, 42, 44],  // Burning during Urination, Frequent Urination, Lower Abdominal Pain
        severity: "Moderate",
        confidence: 85,
        medications: ["Nitrofurantoin", "Trimethoprim/Sulfamethoxazole", "Ciprofloxacin"]
    }
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initDiagnosis();
});

// Function to initialize diagnosis functionality
function initDiagnosis() {
    console.log("Initializing diagnosis functionality");
    
    // Get DOM elements
    const diagnoseBtn = document.getElementById('diagnose-btn');
    const viewRecommendationsBtn = document.getElementById('view-recommendations-btn');
    const symptomCheckboxes = document.querySelectorAll('.symptom-checkbox');
    const selectedSymptomsList = document.getElementById('selected-symptoms-list');
    const predictedDisease = document.getElementById('predicted-disease');
    const confidenceScore = document.querySelector('.progress');
    const severityText = document.querySelector('.severity-text');
    const severityIndicator = document.querySelector('.severity-indicator');
    
    console.log("Diagnosis elements found:", {
        diagnoseBtn: !!diagnoseBtn,
        viewRecommendationsBtn: !!viewRecommendationsBtn,
        symptomCheckboxes: symptomCheckboxes.length,
        selectedSymptomsList: !!selectedSymptomsList,
        predictedDisease: !!predictedDisease,
        confidenceScore: !!confidenceScore,
        severityText: !!severityText,
        severityIndicator: !!severityIndicator
    });
    
    // Function to update selected symptoms list
    function updateSelectedSymptoms() {
        if (!selectedSymptomsList) return;
        
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
    
    // Add event listeners to symptom checkboxes
    symptomCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedSymptoms);
    });
    
    // Initialize selected symptoms list
    updateSelectedSymptoms();
    
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
    
    // Add event listener to diagnose button
    if (diagnoseBtn) {
        diagnoseBtn.addEventListener('click', function() {
            console.log("Diagnose button clicked");
            
            // Get selected symptoms
            const selectedSymptoms = Array.from(document.querySelectorAll('.symptom-checkbox:checked'))
                .map(checkbox => parseInt(checkbox.id.split('-')[1]));
            
            console.log("Selected symptoms:", selectedSymptoms);
            
            if (selectedSymptoms.length === 0) {
                // No symptoms selected
                predictedDisease.textContent = 'Please select at least one symptom';
                confidenceScore.style.width = '0%';
                confidenceScore.textContent = '0%';
                severityText.textContent = 'Select symptoms to assess severity';
                severityIndicator.textContent = 'N/A';
                severityIndicator.className = 'severity-indicator';
                return;
            }
            
            // Find matching diseases
            const matchingDiseases = [];
            
            diseaseDatabase.forEach(disease => {
                // Count matching symptoms
                const matchingSymptoms = disease.symptoms.filter(symptom => 
                    selectedSymptoms.includes(symptom)
                );
                
                // Calculate match score
                const matchScore = matchingSymptoms.length / disease.symptoms.length;
                const coverageScore = matchingSymptoms.length / selectedSymptoms.length;
                const finalScore = (matchScore * 0.6) + (coverageScore * 0.4);
                
                // Only consider diseases with a reasonable match
                if (matchingSymptoms.length > 0 && finalScore > 0.3) {
                    matchingDiseases.push({
                        name: disease.name,
                        score: finalScore,
                        confidence: Math.round(disease.confidence * finalScore),
                        matchCount: matchingSymptoms.length,
                        severity: disease.severity,
                        medications: disease.medications
                    });
                }
            });
            
            console.log("Matching diseases:", matchingDiseases);
            
            // Sort by score (highest first)
            matchingDiseases.sort((a, b) => b.score - a.score);
            
            // Get best match
            const bestMatch = matchingDiseases.length > 0 ? matchingDiseases[0] : null;
            
            if (bestMatch) {
                // Update UI with diagnosis results
                predictedDisease.textContent = bestMatch.name;
                
                // Ensure minimum 80% confidence for clear matches
                const displayConfidence = Math.max(80, bestMatch.confidence);
                confidenceScore.style.width = `${displayConfidence}%`;
                confidenceScore.textContent = `${displayConfidence}%`;
                
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
                    if (severityBars[i]) {
                        severityBars[i].classList.add('active');
                    }
                }
                
                console.log("Diagnosis result:", bestMatch);
            } else {
                // No matching disease found
                predictedDisease.textContent = 'No matching condition found';
                confidenceScore.style.width = '0%';
                confidenceScore.textContent = '0%';
                severityText.textContent = 'Unable to assess severity';
                severityIndicator.textContent = 'Unknown';
                severityIndicator.className = 'severity-indicator';
            }
        });
    }
    
    // Add event listener to view recommendations button
    if (viewRecommendationsBtn) {
        viewRecommendationsBtn.addEventListener('click', function() {
            // Get the diagnosed condition
            const diagnosedCondition = document.getElementById('predicted-disease').textContent;
            
            // Store the diagnosed condition in session storage for use in the medications section
            if (diagnosedCondition && diagnosedCondition !== 'Please select at least one symptom' && diagnosedCondition !== 'No matching condition found') {
                sessionStorage.setItem('diagnosedCondition', diagnosedCondition);
                
                // Find the disease object
                const disease = diseaseDatabase.find(d => d.name === diagnosedCondition);
                
                // Store recommended medications
                if (disease && disease.medications) {
                    sessionStorage.setItem('recommendedMedications', JSON.stringify(disease.medications));
                    
                    // Set a flag to show only recommended medications
                    sessionStorage.setItem('showOnlyRecommended', 'true');
                }
            }
            
            // Scroll to medications section
            const medicationsLink = document.querySelector('a[href="#medications"]');
            if (medicationsLink) {
                medicationsLink.click();
            }
        });
    }
}