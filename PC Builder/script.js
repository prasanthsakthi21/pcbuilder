const categories = {
  entry: {
    budget: 30000,
    components: [
      { name: 'CPU', options: [
        '8000-40-Intel Pentium G6400',
        '10000-60-AMD Ryzen 3 3200G',
        '15000-85-Intel i3 10100',
        '20000-110-AMD Ryzen 5 3600',
        '25000-130-Intel i5 10400'
      ]},
      { name: 'GPU', options: [
        '7000-40-GT 1030',
        '12000-70-GTX 1650',
        '18000-95-GTX 1660 Super',
        '25000-130-RTX 2060'
      ]},
      { name: 'RAM', options: [
        '4000-30-8GB DDR4 2400MHz',
        '6000-45-8GB DDR4 3200MHz',
        '8000-60-16GB DDR4 3000MHz',
        '12000-85-16GB DDR4 3600MHz'
      ]},
      { name: 'Storage', options: [
        '3000-20-1TB HDD 5400RPM',
        '4000-35-1TB HDD 7200RPM',
        '6000-55-240GB SSD SATA',
        '8000-75-500GB SSD NVMe',
        '12000-95-1TB SSD NVMe'
      ]},
      { name: 'PSU', options: [
        '2000-15-350W Generic',
        '3000-25-450W Bronze',
        '5000-40-550W Bronze',
        '7000-60-650W Gold'
      ]}
    ]
  },

  entryPlus: {
    budget: 35000,
    components: [
      { name: 'CPU', options: [
        '12000-70-Intel i3 10100',
        '15000-90-AMD Ryzen 3 3300X',
        '18000-100-Intel i5 10400',
        '20000-120-AMD Ryzen 5 3600'
      ]},
      { name: 'GPU', options: [
        '10000-60-GTX 1050 Ti',
        '15000-90-GTX 1650 Super',
        '20000-120-RTX 3050'
      ]},
      { name: 'RAM', options: [
        '4000-30-8GB 2400MHz',
        '6000-50-8GB 3200MHz',
        '8000-65-16GB 3000MHz',
        '10000-80-16GB 3600MHz'
      ]},
      { name: 'Storage', options: [
        '4000-30-500GB HDD',
        '7000-50-500GB SSD SATA',
        '10000-80-1TB SSD NVMe'
      ]},
      { name: 'PSU', options: [
        '3000-20-400W',
        '5000-40-550W',
        '7000-60-650W'
      ]}
    ]
  },

  normal: {
    budget: 50000,
    components: [
      { name: 'CPU', options: [
        '20000-100-Intel i5 10400',
        '22000-110-AMD Ryzen 5 3600',
        '25000-130-Intel i5 11400',
        '30000-150-AMD Ryzen 5 5600X'
      ]},
      { name: 'GPU', options: [
        '18000-120-RTX 3050',
        '25000-150-RTX 3060',
        '30000-170-RTX 3060 Ti'
      ]},
      { name: 'RAM', options: [
        '8000-60-16GB DDR4',
        '12000-90-32GB DDR4',
        '15000-110-32GB DDR4 3600MHz'
      ]},
      { name: 'Storage', options: [
        '6000-50-500GB SSD',
        '10000-90-1TB SSD',
        '15000-120-1TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '4000-25-550W Bronze',
        '6000-45-650W Gold',
        '8000-60-750W Gold'
      ]}
    ]
  },

  normalPlus: {
    budget: 60000,
    components: [
      { name: 'CPU', options: [
        '20000-100-Intel i5 11400',
        '25000-130-AMD Ryzen 5 5600',
        '30000-150-Intel i7 11700',
        '35000-170-AMD Ryzen 7 5700X'
      ]},
      { name: 'GPU', options: [
        '20000-130-RTX 3060',
        '28000-160-RTX 3060 Ti',
        '35000-180-RTX 3070'
      ]},
      { name: 'RAM', options: [
        '8000-60-16GB DDR4',
        '12000-90-32GB DDR4',
        '18000-120-32GB DDR4 3600MHz'
      ]},
      { name: 'Storage', options: [
        '8000-70-1TB SSD',
        '12000-110-2TB HDD + SSD',
        '15000-140-1TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '5000-40-650W Bronze',
        '7000-60-750W Gold',
        '10000-90-850W Gold'
      ]}
    ]
  },

  advanced: {
    budget: 75000,
    components: [
      { name: 'CPU', options: [
        '25000-120-Intel i5 11600K',
        '30000-140-Intel i7 11700',
        '35000-160-AMD Ryzen 7 5800X',
        '40000-180-Intel i7 12700F'
      ]},
      { name: 'GPU', options: [
        '25000-150-RTX 3060 Ti',
        '35000-200-RTX 3070',
        '40000-230-RTX 3070 Ti'
      ]},
      { name: 'RAM', options: [
        '12000-90-32GB DDR4',
        '20000-150-64GB DDR4',
        '25000-180-32GB DDR5'
      ]},
      { name: 'Storage', options: [
        '10000-90-1TB SSD',
        '15000-120-2TB SSD',
        '20000-150-2TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '6000-50-650W',
        '8000-70-750W Gold',
        '12000-100-850W Platinum'
      ]}
    ]
  },

  gaming: {
    budget: 100000,
    components: [
      { name: 'CPU', options: [
        '30000-150-Intel i7 12700F',
        '35000-160-AMD Ryzen 7 5800X',
        '40000-190-Intel i7 12700K'
      ]},
      { name: 'GPU', options: [
        '40000-200-RTX 3070',
        '50000-250-RTX 3080',
        '60000-300-RTX 4070'
      ]},
      { name: 'RAM', options: [
        '16000-100-32GB DDR4',
        '20000-140-32GB DDR5',
        '25000-160-64GB DDR4'
      ]},
      { name: 'Storage', options: [
        '15000-120-2TB SSD',
        '20000-150-2TB NVMe SSD',
        '30000-200-4TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '7000-60-750W Gold',
        '10000-90-850W Gold',
        '12000-110-1000W Platinum'
      ]}
    ]
  },

  highGaming: {
    budget: 120000,
    components: [
      { name: 'CPU', options: [
        '35000-160-Intel i7 12700K',
        '40000-180-Intel i9 12900F',
        '45000-200-AMD Ryzen 9 5900X'
      ]},
      { name: 'GPU', options: [
        '50000-240-RTX 3080',
        '65000-300-RTX 4080',
        '80000-350-RTX 4090'
      ]},
      { name: 'RAM', options: [
        '20000-120-32GB DDR5',
        '35000-200-64GB DDR4',
        '40000-250-64GB DDR5'
      ]},
      { name: 'Storage', options: [
        '20000-150-2TB SSD',
        '30000-200-4TB SSD',
        '40000-280-4TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '9000-70-850W Gold',
        '12000-100-1000W Platinum',
        '15000-140-1200W Platinum'
      ]}
    ]
  },

  gamingPlus: {
    budget: 130000,
    components: [
      { name: 'CPU', options: [
        '35000-160-Intel i7 12700K',
        '45000-200-Intel i9 12900K',
        '50000-220-AMD Ryzen 9 7900X'
      ]},
      { name: 'GPU', options: [
        '60000-270-RTX 3080 Ti',
        '70000-320-RTX 4080',
        '90000-400-RTX 4090'
      ]},
      { name: 'RAM', options: [
        '20000-120-32GB DDR5',
        '35000-200-64GB DDR5',
        '50000-280-128GB DDR5'
      ]},
      { name: 'Storage', options: [
        '25000-180-2TB SSD',
        '35000-240-4TB SSD',
        '45000-300-4TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '12000-90-1000W',
        '15000-120-1200W',
        '20000-160-1500W'
      ]}
    ]
  },

  workstation: {
    budget: 150000,
    components: [
      { name: 'CPU', options: [
        '50000-250-Intel i9 12900K',
        '45000-220-AMD Ryzen 9 5950X',
        '60000-280-Intel i9 13900K'
      ]},
      { name: 'GPU', options: [
        '70000-300-RTX 3090',
        '80000-350-RTX 4090',
        '100000-400-NVIDIA A4000'
      ]},
      { name: 'RAM', options: [
        '30000-200-64GB',
        '60000-350-128GB',
        '80000-450-128GB DDR5'
      ]},
      { name: 'Storage', options: [
        '30000-200-4TB SSD',
        '40000-280-8TB SSD',
        '60000-400-8TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '15000-120-1200W',
        '18000-150-1500W',
        '22000-200-1600W'
      ]}
    ]
  },

  workstationPlus: {
    budget: 180000,
    components: [
      { name: 'CPU', options: [
        '60000-280-Intel i9 13900K',
        '55000-260-AMD Ryzen 9 Pro 5955WX',
        '70000-320-Intel Xeon W-2295'
      ]},
      { name: 'GPU', options: [
        '80000-350-RTX 4090',
        '90000-400-NVIDIA A6000',
        '110000-500-NVIDIA A5000'
      ]},
      { name: 'RAM', options: [
        '40000-250-128GB DDR4',
        '70000-400-256GB DDR4',
        '90000-500-256GB DDR5'
      ]},
      { name: 'Storage', options: [
        '40000-280-8TB SSD',
        '60000-400-10TB SSD',
        '90000-600-12TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '18000-150-1500W',
        '22000-200-1600W',
        '25000-240-2000W'
      ]}
    ]
  },

  highEndWorkstation: {
    budget: 200000,
    components: [
      { name: 'CPU', options: [
        '70000-320-Intel Xeon W-2295',
        '65000-300-AMD Threadripper 3960X',
        '90000-400-AMD Threadripper Pro 5975WX'
      ]},
      { name: 'GPU', options: [
        '100000-450-RTX 4090',
        '120000-500-NVIDIA A100',
        '150000-600-NVIDIA H100'
      ]},
      { name: 'RAM', options: [
        '60000-400-256GB',
        '100000-700-512GB',
        '150000-1000-1TB DDR5 ECC'
      ]},
      { name: 'Storage', options: [
        '60000-400-10TB SSD',
        '100000-700-16TB SSD',
        '150000-1000-20TB NVMe SSD'
      ]},
      { name: 'PSU', options: [
        '20000-180-1600W',
        '25000-220-2000W',
        '30000-300-2200W Platinum'
      ]}
    ]
  }
};

let selectedCategory = '';
let categoryAttempted = {};

const categorySelect = document.getElementById('category');
const componentsSection = document.getElementById('components-section');
const componentsContainer = document.getElementById('components-container');
const submitBtn = document.getElementById('submitBtn');
const resultSection = document.getElementById('result-section');
const resultContainer = document.getElementById('result-container');
const budgetDisplay = document.getElementById('budget-display');
const budgetAmount = document.getElementById('budget-amount');

categorySelect.addEventListener('change', () => {
  selectedCategory = categorySelect.value;
  if (!selectedCategory) return;

  if (categoryAttempted[selectedCategory]) {
    alert('You have already attempted this category.');
    componentsSection.classList.add('d-none');
    budgetDisplay.classList.add('d-none');
    return;
  }

  renderComponents(selectedCategory);
  componentsSection.classList.remove('d-none');
  resultSection.classList.add('d-none');
  budgetDisplay.classList.remove('d-none');
  budgetAmount.textContent = categories[selectedCategory].budget;
});

function renderComponents(category) {
  componentsContainer.innerHTML = '';
  const compList = categories[category].components;

  compList.forEach((comp, index) => {
    const compDiv = document.createElement('div');
    compDiv.classList.add('col-md-6', 'component-card');
    let optionsHTML = `<select id="comp-${index}" class="form-select"><option value="0-0-None">-- Select ${comp.name} --</option>`;
    comp.options.forEach(option => {
      const [price, score, name] = option.split('-');
      optionsHTML += `<option value="${price}-${score}-${name}">${name} (₹${price}, Score ${score})</option>`;
    });
    optionsHTML += `</select>`;
    compDiv.innerHTML = `<strong>${comp.name}</strong>${optionsHTML}`;
    componentsContainer.appendChild(compDiv);
  });
}

submitBtn.addEventListener('click', () => {
  const compList = categories[selectedCategory].components;
  let totalCost = 0;
  let totalScore = 0;
  let resultHTML = '';

  compList.forEach((comp, index) => {
    const selectEl = document.getElementById(`comp-${index}`);
    const [cost, score, name] = selectEl.value.split('-');
    totalCost += parseInt(cost);
    totalScore += parseInt(score);
    resultHTML += `<p>${comp.name}: ${name} – ₹${cost}, Score: ${score}</p>`;
  });

  resultHTML += `<hr><p><strong>Total Cost:</strong> ₹${totalCost}</p>`;
  resultHTML += `<p><strong>Total Score:</strong> ${totalScore}</p>`;

  if (totalCost > categories[selectedCategory].budget) {
    resultHTML += `<p class="result-wrong"><strong>Over budget! Reduce some components.</strong></p>`;
  } else {
    resultHTML += `<p class="result-correct"><strong>Within budget! Well done.</strong></p>`;
  }

  resultContainer.innerHTML = resultHTML;
  resultSection.classList.remove('d-none');
  categoryAttempted[selectedCategory] = true;
});
