
/***
 * sum of four number
 */

function fourSum(nums, target) {
    const result = []; // नतीजे को संग्रहीत करने के लिए एक रिक्त सरणी बनाएं
    nums.sort((a, b) => a - b); // दिए गए संख्या के एरे को क्रमबद्ध करें

    for (let i = 0; i < nums.length - 3; i++) { // पहले जोड़ के लिए एक लूप चलाएं
        if (i > 0 && nums[i] === nums[i - 1]) continue; // डुप्लिकेट जोड़ों को छोड़ें

        for (let j = i + 1; j < nums.length - 2; j++) { // छोड़े गए तीन पैरों की खोज के लिए एक और लूप चलाएं
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // डुप्लिकेट जोड़ों को छोड़ें

            let left = j + 1; // बायां इंडेक्स को सेट करें
            let right = nums.length - 1; // दायां इंडेक्स को सेट करें

            while (left < right) { // जब बायां इंडेक्स दायां इंडेक्स से कम हो
                const sum = nums[i] + nums[j] + nums[left] + nums[right]; // चारों संख्याओं का योग निकालें
                
                if (sum === target) { // यदि योग लक्ष्य के समान है
                    result.push([nums[i], nums[j], nums[left], nums[right]]); // परिणाम सरणी में जोड़ें
                    while (left < right && nums[left] === nums[left + 1]) left++; // डुप्लिकेट वामांश को छोड़ें
                    while (left < right && nums[right] === nums[right - 1]) right--; // डुप्लिकेट दामांश को छोड़ें
                    left++; // वामांश बढ़ाएं
                    right--; // दामांश कम करें
                } else if (sum < target) { // यदि योग लक्ष्य से कम है
                    left++; // बायां इंडेक्स बढ़ाएं
                } else { // अन्यथा
                    right--; // दायां इंडेक्स को कम करें
                }
            }
        }
    }

    return result; // नतीजे को वापस दें
}

// उदाहरण का उपयोग:
const nums = [1, 0, -1, 0, -2, 2]; // दिए गए एरे
const target = 0; // लक्ष्य
const quadruplets = fourSum(nums, target); // चारों संख्याओं के योग की खोज करें
console.log(quadruplets); // परिणाम प्रिंट करें
