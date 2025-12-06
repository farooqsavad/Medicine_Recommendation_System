// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all charts
    initializeCharts();
});

// Main function to initialize all charts
function initializeCharts() {
    // Initialize disease prevalence chart
    initDiseasePrevalenceChart();
    
    // Initialize symptom severity distribution chart
    initSymptomSeverityChart();
    
    // Initialize medication effectiveness chart
    initMedicationEffectivenessChart();
    
    // Initialize recovery rate chart
    initRecoveryRateChart();
    
    // Initialize age distribution chart
    initAgeDistributionChart();
    
    // Initialize disease by gender chart
    initDiseaseByGenderChart();
    
    // Initialize seasonal trends chart
    initSeasonalTrendsChart();
    
    // Initialize comorbidity chart
    initComorbidityChart();
}

// Initialize disease prevalence chart
function initDiseasePrevalenceChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('disease-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for disease prevalence
    const data = {
        labels: ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction', 'Peptic ulcer disease', 'Diabetes', 'Bronchial Asthma', 'Hypertension', 'Migraine'],
        datasets: [{
            label: 'Prevalence (%)',
            data: [12, 19, 8, 5, 7, 10, 15, 9, 14, 11],
            backgroundColor: [
                '#4e54c8',
                '#8f94fb',
                '#00b4d8',
                '#f72585',
                '#4cc9f0',
                '#3a0ca3',
                '#7209b7',
                '#480ca8',
                '#560bad',
                '#6930c3'
            ],
            borderWidth: 0
        }]
    };
    
    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Prevalence: ${context.raw}%`;
                        }
                    }
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
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize symptom severity distribution chart
function initSymptomSeverityChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('severity-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for symptom severity distribution
    const data = {
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
    };
    
    // Chart configuration
    const config = {
        type: 'pie',
        data: data,
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
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize medication effectiveness chart
function initMedicationEffectivenessChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('medication-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for medication effectiveness
    const data = {
        labels: ['Antibiotics', 'Antihistamines', 'Antifungals', 'Proton Pump Inhibitors', 'NSAIDs', 'Corticosteroids', 'Bronchodilators'],
        datasets: [{
            label: 'Effectiveness (%)',
            data: [85, 78, 92, 75, 68, 82, 79],
            backgroundColor: 'rgba(78, 84, 200, 0.7)',
            borderColor: '#4e54c8',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false
        }]
    };
    
    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Effectiveness: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Effectiveness (%)',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Medication Type',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            animation: {
                delay: function(context) {
                    return context.dataIndex * 100;
                },
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize recovery rate chart
function initRecoveryRateChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('recovery-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for recovery rate by treatment approach
    const data = {
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
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
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
                            return `${context.dataset.label}: ${context.raw}%`;
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
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize age distribution chart
function initAgeDistributionChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('age-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for age group distribution
    const data = {
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
    };
    
    // Chart configuration
    const config = {
        type: 'doughnut',
        data: data,
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
            cutout: '50%',
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize disease by gender chart
function initDiseaseByGenderChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('gender-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for disease distribution by gender
    const data = {
        labels: ['Fungal infection', 'Allergy', 'GERD', 'Diabetes', 'Hypertension', 'Migraine'],
        datasets: [
            {
                label: 'Male',
                data: [10, 15, 9, 18, 16, 8],
                backgroundColor: 'rgba(78, 84, 200, 0.7)',
                borderColor: '#4e54c8',
                borderWidth: 1
            },
            {
                label: 'Female',
                data: [14, 23, 7, 12, 12, 14],
                backgroundColor: 'rgba(247, 37, 133, 0.7)',
                borderColor: '#f72585',
                borderWidth: 1
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
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
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
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
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            animation: {
                delay: function(context) {
                    return context.dataIndex * 100;
                },
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize seasonal trends chart
function initSeasonalTrendsChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('seasonal-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for seasonal disease trends
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Respiratory Conditions',
                data: [25, 20, 15, 10, 8, 5, 3, 7, 12, 18, 22, 28],
                borderColor: '#4e54c8',
                backgroundColor: 'rgba(78, 84, 200, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Allergies',
                data: [5, 8, 15, 22, 25, 20, 15, 10, 8, 5, 3, 4],
                borderColor: '#00b4d8',
                backgroundColor: 'rgba(0, 180, 216, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Skin Conditions',
                data: [10, 12, 15, 18, 22, 25, 28, 25, 20, 15, 12, 10],
                borderColor: '#f72585',
                backgroundColor: 'rgba(247, 37, 133, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
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
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
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
                        text: 'Month',
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Initialize comorbidity chart
function initComorbidityChart() {
    // Check if the chart element exists
    const chartElement = document.getElementById('comorbidity-chart');
    if (!chartElement) return;
    
    const ctx = chartElement.getContext('2d');
    
    // Sample data for comorbidity relationships
    const data = {
        labels: ['Diabetes', 'Hypertension', 'Obesity', 'Heart Disease', 'Asthma', 'Depression'],
        datasets: [
            {
                label: 'Comorbidity Rate (%)',
                data: [35, 42, 28, 30, 22, 18],
                backgroundColor: [
                    '#4e54c8',
                    '#8f94fb',
                    '#00b4d8',
                    '#f72585',
                    '#4cc9f0',
                    '#3a0ca3'
                ],
                borderWidth: 0
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'polarArea',
        data: data,
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
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        display: false
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };
    
    // Create the chart
    new Chart(ctx, config);
}

// Function to update charts based on filter selections
function updateCharts(analysisType, timePeriod) {
    // In a real application, this would fetch new data based on the selected filters
    // For this demo, we'll just show a loading animation and then refresh the charts
    
    // Show loading state
    showChartLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
        // Reinitialize charts with "new" data
        initializeCharts();
        
        // Hide loading state
        showChartLoading(false);
    }, 1500);
}

// Function to show/hide chart loading state
function showChartLoading(isLoading) {
    const chartContainers = document.querySelectorAll('.chart-container');
    
    chartContainers.forEach(container => {
        if (isLoading) {
            // Add loading class
            container.classList.add('loading');
            
            // Create and append loading spinner if it doesn't exist
            if (!container.querySelector('.loading-spinner')) {
                const spinner = document.createElement('div');
                spinner.className = 'loading-spinner';
                container.appendChild(spinner);
            }
        } else {
            // Remove loading class
            container.classList.remove('loading');
            
            // Remove loading spinner if it exists
            const spinner = container.querySelector('.loading-spinner');
            if (spinner) {
                spinner.remove();
            }
        }
    });
}

// Add event listeners to analysis filters
document.addEventListener('DOMContentLoaded', function() {
    const analysisType = document.getElementById('analysis-type');
    const timePeriod = document.getElementById('time-period');
    
    if (analysisType && timePeriod) {
        analysisType.addEventListener('change', function() {
            updateCharts(this.value, timePeriod.value);
        });
        
        timePeriod.addEventListener('change', function() {
            updateCharts(analysisType.value, this.value);
        });
    }
});