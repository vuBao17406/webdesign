const data = {
    destinations: [
        {
            region: 'Northern Vietnam',
            provinces: ['Hanoi', 'Quang Ninh', 'Lao Cai', 'Ha Giang', 'Ninh Binh', 'Vinh Phuc', 'Bac Ninh', 'Thai Nguyen', 'Phu Tho'],
            beaches: [
                { province: 'Quang Ninh', name: 'Ha Long Bay', description: 'A UNESCO World Heritage site with thousands of limestone islands.' },
                { province: 'Quang Ninh', name: 'Tuan Chau Beach', description: 'A popular beach near Ha Long Bay, great for swimming.' }
            ],
            festivals: [
                { name: 'Tet Festival', province: 'Hanoi', description: 'Held in January or February, with fireworks and customs.' },
                { name: 'Perfume Pagoda Festival', province: 'Hanoi', description: 'A pilgrimage event, usually in February or March.' },
                { name: 'Bac Ninh Love Duet Singing Festival', province: 'Bac Ninh', description: 'Features Quan Ho singing, held in February.' },
                { name: 'Hung Kings Festival', province: 'Phu Tho', description: 'A national festival in April.' }
            ],
            specialties: [
                { province: 'Hanoi', name: 'Pho', description: 'Beef or chicken noodle soup, great for hot weather.' },
                { province: 'Hanoi', name: 'Bun Cha', description: 'Grilled pork with noodles, ideal in hot weather.' },
                { province: 'Quang Ninh', name: 'Ha Long Crab Cake', description: 'Crispy crab cakes, perfect in rainy weather.' },
                { province: 'Lao Cai', name: 'Thang Co', description: 'A H’Mong stew, suitable for cold weather.' },
                { province: 'Vinh Phuc', name: 'Tam Dao Chicken', description: 'Grilled chicken, good in rainy weather.' },
                { province: 'Bac Ninh', name: 'Dinh Bang Sticky Rice', description: 'Sticky rice with mung bean, great for rainy days.' },
                { province: 'Thai Nguyen', name: 'Thai Nguyen Tea', description: 'Green tea, refreshing in hot weather.' }
            ],
            weather: [
                { province: 'Hanoi', month: 'June', description: 'Hot and humid, 30-35°C, suitable for lakeside visits.' },
                { province: 'Hanoi', month: 'January', description: 'Cool and dry, 15-20°C, great for city tours.' },
                { province: 'Lao Cai', month: 'December', description: 'Cold, 5-15°C, ideal for Sapa tourism.' },
                { province: 'Vinh Phuc', month: 'July', description: 'Warm and rainy, 28-33°C, good for indoor activities.' },
                { province: 'Bac Ninh', month: 'February', description: 'Cool and misty, 16-22°C, perfect for festivals.' }
            ],
            tips: [
                { province: 'Hanoi', tip: 'Bring an umbrella if visiting in summer.' },
                { province: 'Quang Ninh', tip: 'Book Ha Long Bay tours in advance.' },
                { province: 'Lao Cai', tip: 'Wear hiking shoes in Sapa during winter.' },
                { province: 'Ha Giang', tip: 'Ride a motorbike along Ma Pi Leng Pass safely.' },
                { province: 'Ninh Binh', tip: 'Rent a rowboat in Trang An.' },
                { province: 'Vinh Phuc', tip: 'Visit Tam Dao on weekdays.' },
                { province: 'Bac Ninh', tip: 'Join Quan Ho singing sessions.' }
            ],
            weatherPlaces: {
                hot: ['Hoan Kiem Lake (Hanoi) for a shaded walk', 'Tam Dao (Vinh Phuc) for cooler hills'],
                rain: ['Vietnam Museum of Ethnology (Hanoi) for indoor exploration', 'Tam Dao (Vinh Phuc) for misty views'],
                cold: ['Sapa (Lao Cai) for hiking', 'Ha Long Bay (Quang Ninh) for a cozy cruise']
            },
            weatherFoods: {
                hot: ['Pho (Hanoi)', 'Thai Nguyen Tea (Thai Nguyen)'],
                rain: ['Ha Long Crab Cake (Quang Ninh)', 'Dinh Bang Sticky Rice (Bac Ninh)'],
                cold: ['Thang Co (Lao Cai)', 'Tam Dao Chicken (Vinh Phuc)']
            },
            link: 'northern.html'
        },
        {
            region: 'Central Vietnam',
            provinces: ['Da Nang', 'Thua Thien Hue', 'Quang Nam', 'Quang Binh', 'Binh Dinh', 'Nghe An', 'Ha Tinh', 'Quang Tri'],
            beaches: [
                { province: 'Da Nang', name: 'My Khe Beach', description: 'White sand, perfect for swimming.' },
                { province: 'Quang Nam', name: 'Cu Dai Beach', description: 'A peaceful beach near Hoi An.' },
                { province: 'Quang Binh', name: 'Nhat Le Beach', description: 'A long beach near Phong Nha Cave.' },
                { province: 'Binh Dinh', name: 'Quy Nhon Beach', description: 'A serene beach with clear waters.' }
            ],
            festivals: [
                { name: 'Hoi An Lantern Festival', province: 'Quang Nam', description: 'Held every full moon with lanterns.' },
                { name: 'Da Nang International Fireworks Festival', province: 'Da Nang', description: 'Held in June or July.' },
                { name: 'Hue Festival', province: 'Thua Thien Hue', description: 'A cultural event in even years.' },
                { name: 'Cau Ngu Fish Festival', province: 'Binh Dinh', description: 'A fishermen’s festival in March.' },
                { name: 'Nghe An Temple Festival', province: 'Nghe An', description: 'Held in March to honor deities.' }
            ],
            specialties: [
                { province: 'Thua Thien Hue', name: 'Bun Bo Hue', description: 'Spicy beef noodle soup, good in cool weather.' },
                { province: 'Da Nang', name: 'Mi Quang', description: 'Noodles with diverse toppings, great in hot weather.' },
                { province: 'Quang Nam', name: 'Cao Lau', description: 'A noodle dish exclusive to Hoi An, ideal in rainy weather.' },
                { province: 'Quang Binh', name: 'Shrimp Cake', description: 'Grilled shrimp cakes, good in rainy weather.' },
                { province: 'Nghe An', name: 'Eel Soup', description: 'Savory eel soup, perfect for cold days.' },
                { province: 'Ha Tinh', name: 'Cu Do Candy', description: 'Peanut candy, great for rainy days.' },
                { province: 'Quang Tri', name: 'Banh Uot Thit Nuong', description: 'Grilled pork with rice paper, ideal in hot weather.' }
            ],
            weather: [
                { province: 'Da Nang', month: 'June', description: 'Hot and sunny, 32-36°C, perfect for beaches.' },
                { province: 'Da Nang', month: 'January', description: 'Cool and dry, 20-25°C, good for sightseeing.' },
                { province: 'Quang Binh', month: 'August', description: 'Rainy, 28-32°C, suitable for caves.' },
                { province: 'Nghe An', month: 'May', description: 'Warm and sunny, 28-34°C, great for outdoors.' },
                { province: 'Ha Tinh', month: 'September', description: 'Rainy and humid, 26-30°C, good for cultural tours.' }
            ],
            tips: [
                { province: 'Da Nang', tip: 'Wear light clothing for beach visits in summer.' },
                { province: 'Thua Thien Hue', tip: 'Wear comfortable shoes in the Imperial City.' },
                { province: 'Quang Nam', tip: 'Visit Hoi An at night to see lanterns.' },
                { province: 'Quang Binh', tip: 'Bring a flashlight for Phong Nha Cave.' },
                { province: 'Binh Dinh', tip: 'Try surfing in Quy Nhon.' },
                { province: 'Nghe An', tip: 'Visit Cua Lo Beach in the morning.' },
                { province: 'Ha Tinh', tip: 'Taste candies at traditional markets.' }
            ],
            weatherPlaces: {
                hot: ['My Khe Beach (Da Nang) for swimming', 'Imperial City (Thua Thien Hue) for shaded tours'],
                rain: ['Phong Nha Cave (Quang Binh) for exploration', 'Hoi An Ancient Town (Quang Nam) for cultural visits'],
                cold: ['Hai Van Pass (Da Nang) for scenic drives', 'Quy Nhon Beach (Binh Dinh) for a cozy walk']
            },
            weatherFoods: {
                hot: ['Mi Quang (Da Nang)', 'Banh Uot Thit Nuong (Quang Tri)'],
                rain: ['Cao Lau (Quang Nam)', 'Shrimp Cake (Quang Binh)'],
                cold: ['Bun Bo Hue (Thua Thien Hue)', 'Eel Soup (Nghe An)']
            },
            link: 'central.html'
        },
        {
            region: 'Southern Vietnam',
            provinces: ['Ho Chi Minh City', 'Kien Giang', 'Ba Ria - Vung Tau', 'Can Tho', 'Dong Thap', 'An Giang', 'Tien Giang', 'Long An'],
            beaches: [
                { province: 'Kien Giang', name: 'Bai Sao Phu Quoc', description: 'Phu Quoc’s beautiful beach with white sand.' },
                { province: 'Ba Ria - Vung Tau', name: 'Back Beach Vung Tau', description: 'A lively beach near Ho Chi Minh City.' },
                { province: 'Kien Giang', name: 'Bai Dai', description: 'A long, quiet beach.' },
                { province: 'Tien Giang', name: 'Tan Thanh Beach', description: 'A rustic beach with black sand.' }
            ],
            festivals: [
                { name: 'Ben Thanh Market Festival', province: 'Ho Chi Minh City', description: 'A vibrant cultural event.' },
                { name: 'Boat Racing Festival', province: 'Can Tho', description: 'Held on the Hau River in October.' },
                { name: 'Chau Doc Lady Temple Festival', province: 'An Giang', description: 'A spiritual event in April.' },
                { name: 'My Tho Fruit Festival', province: 'Tien Giang', description: 'Celebrates Mekong Delta fruits in June.' }
            ],
            specialties: [
                { province: 'Ho Chi Minh City', name: 'Banh Mi', description: 'A sandwich with pate and vegetables, great in hot weather.' },
                { province: 'Kien Giang', name: 'Fish Salad', description: 'Fresh fish salad, ideal in hot weather.' },
                { province: 'Ba Ria - Vung Tau', name: 'Seafood', description: 'Fresh shrimp and crab, great in rainy weather.' },
                { province: 'Can Tho', name: 'Banh Xeo', description: 'Crispy pancakes with shrimp, good in rainy weather.' },
                { province: 'An Giang', name: 'Banh Bo Thot Not', description: 'Palm sugar cake, suitable for cold weather.' },
                { province: 'Tien Giang', name: 'Hu Tieu My Tho', description: 'A Southern noodle soup, good in rainy weather.' },
                { province: 'Long An', name: 'Dragon Fruit', description: 'Sweet dragon fruit, refreshing in hot weather.' }
            ],
            weather: [
                { province: 'Kien Giang', month: 'June', description: 'Rainy with sunny spells, 28-32°C.' },
                { province: 'Kien Giang', month: 'January', description: 'Dry and warm, 25-30°C, great for beaches.' },
                { province: 'Can Tho', month: 'November', description: 'Flood season, 25-30°C, good for fruit tours.' },
                { province: 'An Giang', month: 'August', description: 'Rainy and humid, 26-31°C, good for markets.' },
                { province: 'Long An', month: 'March', description: 'Dry and hot, 28-34°C, ideal for wetlands.' }
            ],
            tips: [
                { province: 'Kien Giang', tip: 'Bring a raincoat to Phu Quoc in the rainy season.' },
                { province: 'Ba Ria - Vung Tau', tip: 'Visit Back Beach early to avoid crowds.' },
                { province: 'Ho Chi Minh City', tip: 'Visit Ben Thanh Market in the morning.' },
                { province: 'Can Tho', tip: 'Rent a boat in Cai Rang Floating Market.' },
                { province: 'Dong Thap', tip: 'Visit Tram Chim National Park during flood season.' },
                { province: 'An Giang', tip: 'Explore Tra Su Cajuput Forest by boat.' },
                { province: 'Tien Giang', tip: 'Visit fruit orchards in My Tho.' }
            ],
            weatherPlaces: {
                hot: ['Ben Thanh Market (Ho Chi Minh City) for indoor shopping', 'Phu Quoc (Kien Giang) for beach shade'],
                rain: ['Cai Rang Floating Market (Can Tho) for a unique experience', 'Tra Su Cajuput Forest (An Giang) for boat rides'],
                cold: ['Tan Thanh Beach (Tien Giang) for a quiet walk', 'Back Beach Vung Tau (Ba Ria - Vung Tau) for a cozy visit']
            },
            weatherFoods: {
                hot: ['Banh Mi (Ho Chi Minh City)', 'Dragon Fruit (Long An)'],
                rain: ['Banh Xeo (Can Tho)', 'Seafood (Ba Ria - Vung Tau)'],
                cold: ['Hu Tieu My Tho (Tien Giang)', 'Banh Bo Thot Not (An Giang)']
            },
            link: 'southern.html'
        }
    ],
    generalTips: [
        { topic: 'clothing', tip: 'Wear light clothes for beaches, bring flip-flops and sunscreen. Pack warm clothing for Northern Vietnam in winter.' }
    ],
    responseTemplates: {
        beach: ['Love the beach? Here are some suggestions: <results>', 'Crystal waters await! Check these out: <results>'],
        beachProvince: ['In <province>? Visit: <results>', '<province> has beautiful beaches! Try: <results>'],
        festival: ['Vietnam’s festivals are amazing! Here are some: <results>', 'Enjoy festival vibes? Check these: <results>'],
        festivalProvince: ['Festivals in <province>? Here’s a suggestion: <results>', '<province> hosts these events: <results>'],
        specialty: ['Vietnamese cuisine is delicious! Try these: <results>', 'Must-try dishes: <results>'],
        specialtyProvince: ['Specialties in <province>? Don’t miss: <results>', '<province> is famous for: <results>'],
        weather: ['Weather in <province> in <month>: <results>', 'Forecast for <province> in <month>: <results>'],
        weatherToday: ['Today in <province>: <results>', 'Current weather in <province>: <results>'],
        tip: ['Travel tips for <province>: <results>', 'For a perfect trip to <province>: <results>'],
        generalTip: ['About <topic>, here’s a suggestion: <results>', 'For <topic>, I suggest: <results>'],
        activity: ['In <province>, you can try: <results>', 'Fun activities in <province>: <results>'],
        weatherPlace: ['When it’s <weather> in <province>, go to: <results>', 'For <weather> weather in <province>, try: <results>'],
        weatherPlaceGeneral: ['When it’s <weather>, go to: <results>', 'Best places for <weather> weather: <results>'],
        weatherFood: ['When it’s <weather> in <province>, eat: <results>', 'Best food in <province> for <weather> weather: <results>'],
        weatherFoodGeneral: ['When it’s <weather>, eat: <results>', 'Best dishes for <weather> weather: <results>'],
        unknown: ['I suggest exploring beaches, festivals, or tips! What else would you like to know?', 'Try asking about weather, activities, or tips!'],
        suggestion: ['Not sure what to ask? Try one of these: <results>'],
        clearHistory: ['Chat history cleared! How can I assist you now?']
    }
};

// Bộ nhớ đệm cho dữ liệu API
const apiCache = new Map();

const simulatedAPIs = {
    getWeather: async (city) => {
        const cacheKey = `weather_${city}`;
        if (apiCache.has(cacheKey)) {
            return apiCache.get(cacheKey);
        }
        const apiKey = '1f6bb1ea051046e86f35d91da4bcb05d'; // Thay bằng API key hợp lệ hoặc dùng biến môi trường
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},VN&appid=${apiKey}&units=metric&lang=en`);
            if (!response.ok) throw new Error('Cannot fetch weather data');
            const data = await response.json();
            const result = {
                temp: Math.round(data.main.temp),
                description: data.weather[0].description,
                humidity: data.main.humidity,
                condition: data.weather[0].main.toLowerCase().includes('rain') ? 'rain' :
                          data.main.temp >= 30 ? 'hot' : 'cold'
            };
            apiCache.set(cacheKey, result);
            return result;
        } catch (error) {
            throw new Error('Cannot fetch weather data: Check your internet or API key.');
        }
    },
    getPlaces: async (city, type) => {
        const cacheKey = `places_${city}_${type}`;
        if (apiCache.has(cacheKey)) {
            return apiCache.get(cacheKey);
        }
        const googleApiKey = 'YOUR_GOOGLE_API_KEY'; // Thay bằng API key hợp lệ hoặc dùng biến môi trường
        try {
            let query = type === 'activity' ? `tourist attractions in ${city}, Vietnam` : '';
            const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${googleApiKey}`);
            if (!response.ok) throw new Error('Cannot fetch place data');
            const data = await response.json();
            if (data.status !== 'OK') throw new Error('Google Places API error: ' + data.status);
            const result = data.results.slice(0, 3).map(place => ({
                name: place.name,
                description: place.formatted_address || `A notable spot in ${city}`
            }));
            apiCache.set(cacheKey, result);
            return result;
        } catch (error) {
            throw new Error('Cannot fetch place data: ' + error.message);
        }
    },
    getTips: async (city) => {
        let tips = [];
        data.destinations.forEach(region => {
            region.tips.forEach(tip => {
                if (tip.province === city) tips.push(tip.tip);
            });
        });
        return tips.length > 0 ? tips : [`No specific tips for ${city} yet.`];
    }
};

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    if (chatbotContainer) {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active')) {
            const chatbotInput = document.getElementById('chatbotInput');
            if (chatbotInput) chatbotInput.focus();
            if (typeof AOS !== 'undefined') AOS.refresh();
        }
    }
}

function getRandomTemplate(templates) {
    return templates[Math.floor(Math.random() * templates.length)];
}

function normalizeProvinceName(province) {
    province = province.toLowerCase().replace(/\s+/g, ' ').trim();
    const provinceMap = {
        'danang': 'Da Nang', 'hanoi': 'Hanoi', 'quangninh': 'Quang Ninh', 'laocai': 'Lao Cai',
        'hagiang': 'Ha Giang', 'ninhbinh': 'Ninh Binh', 'thuathienhue': 'Thua Thien Hue',
        'quangnam': 'Quang Nam', 'quangbinh': 'Quang Binh', 'binhdinh': 'Binh Dinh',
        'hochiminhcity': 'Ho Chi Minh City', 'hochiminh': 'Ho Chi Minh City', 'kiengiang': 'Kien Giang',
        'bariavungtau': 'Ba Ria - Vung Tau', 'cantho': 'Can Tho', 'dongthap': 'Dong Thap',
        'vinhphuc': 'Vinh Phuc', 'bacninh': 'Bac Ninh', 'thainguyen': 'Thai Nguyen',
        'phutho': 'Phu Tho', 'nghean': 'Nghe An', 'hatinh': 'Ha Tinh', 'quangtri': 'Quang Tri',
        'angiang': 'An Giang', 'tiengiang': 'Tien Giang', 'longan': 'Long An'
    };
    return provinceMap[province.replace(/\s+/g, '')] || province.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function detectIntent(query) {
    query = query.toLowerCase().trim();
    let intent = { type: 'unknown', province: null, month: null, topic: null, weatherCondition: null };

    // Kiểm tra lệnh "clear history"
    if (query === 'clear history') {
        intent.type = 'clearHistory';
        return intent;
    }

    // Nhận diện tỉnh/thành
    let foundProvince = null;
    data.destinations.forEach(region => {
        region.provinces.forEach(province => {
            const normalizedProvince = normalizeProvinceName(province);
            const provinceLower = normalizedProvince.toLowerCase();
            if (query.includes(provinceLower) || query.includes(province.toLowerCase().replace(/\s+/g, ''))) {
                foundProvince = province;
            }
        });
    });

    if (foundProvince) intent.province = foundProvince;

    // Nhận diện tháng
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    months.forEach((month, index) => {
        if (query.includes(month)) intent.month = months[index].charAt(0).toUpperCase() + months[index].slice(1);
    });

    // Nhận diện điều kiện thời tiết
    const weatherConditions = {
        hot: ['hot', 'nóng', 'warm', 'ấm'],
        rain: ['rain', 'mưa', 'rainy', 'wet'],
        cold: ['cold', 'lạnh', 'cool', 'mát']
    };
    for (let condition in weatherConditions) {
        if (weatherConditions[condition].some(keyword => query.includes(keyword))) {
            intent.weatherCondition = condition;
            break;
        }
    }

    // Từ khóa ý định
    const weatherKeywords = ['weather', 'temperature', 'how is', 'what is', 'forecast', 'temp', 'climate'];
    const todayKeywords = ['today', 'now', 'current', 'currently'];
    const beachKeywords = ['beach', 'swim', 'sea'];
    const festivalKeywords = ['festival', 'event', 'lễ hội', 'sự kiện'];
    const specialtyKeywords = ['specialty', 'food', 'eat', 'món ăn', 'dish'];
    const tipKeywords = ['tip', 'should do', 'wear', 'prepare', 'mẹo', 'advice'];
    const activityKeywords = ['activity', 'do', 'play', 'hoạt động', 'things to do'];
    const placeKeywords = ['go', 'visit', 'đi', 'đến', 'place', 'địa điểm'];
    const foodKeywords = ['eat', 'food', 'ăn', 'món', 'dish', 'ngon'];

    const hasWeatherKeyword = weatherKeywords.some(keyword => query.includes(keyword));
    const hasTodayKeyword = todayKeywords.some(keyword => query.includes(keyword));
    const hasBeachKeyword = beachKeywords.some(keyword => query.includes(keyword));
    const hasFestivalKeyword = festivalKeywords.some(keyword => query.includes(keyword));
    const hasSpecialtyKeyword = specialtyKeywords.some(keyword => query.includes(keyword));
    const hasTipKeyword = tipKeywords.some(keyword => query.includes(keyword));
    const hasActivityKeyword = activityKeywords.some(keyword => query.includes(keyword));
    const hasPlaceKeyword = placeKeywords.some(keyword => query.includes(keyword));
    const hasFoodKeyword = foodKeywords.some(keyword => query.includes(keyword));

    // Xác định ý định
    if (hasWeatherKeyword || (intent.province && !hasBeachKeyword && !hasFestivalKeyword && !hasSpecialtyKeyword && !hasTipKeyword && !hasActivityKeyword && !hasPlaceKeyword && !hasFoodKeyword)) {
        if (intent.month) intent.type = 'weather';
        else if (hasTodayKeyword) intent.type = 'weatherToday';
        else intent.type = 'weatherToday';
    } else if (hasBeachKeyword) {
        intent.type = 'beach';
    } else if (hasFestivalKeyword) {
        intent.type = 'festival';
    } else if (hasSpecialtyKeyword) {
        intent.type = 'specialty';
    } else if (hasTipKeyword) {
        intent.type = 'tip';
        if (query.includes('wear')) intent.topic = 'clothing';
    } else if (hasActivityKeyword) {
        intent.type = 'activity';
    } else if (intent.weatherCondition && hasPlaceKeyword) {
        intent.type = intent.province ? 'weatherPlace' : 'weatherPlaceGeneral';
    } else if (intent.weatherCondition && hasFoodKeyword) {
        intent.type = intent.province ? 'weatherFood' : 'weatherFoodGeneral';
    } else if (query === 'suggest' || query === 'help') {
        intent.type = 'suggestion';
    }

    return intent;
}

async function generateResponse(intent) {
    let results = '';
    let template;

    if (intent.type === 'clearHistory') {
        clearChatHistory();
        return getRandomTemplate(data.responseTemplates.clearHistory);
    } else if (intent.type === 'weather') {
        if (intent.province && intent.month) {
            let found = false;
            data.destinations.forEach(region => {
                region.weather.forEach(weather => {
                    if (weather.province === intent.province && weather.month === intent.month) {
                        found = true;
                        results = weather.description;
                    }
                });
            });
            template = getRandomTemplate(data.responseTemplates.weather)
                .replace('<province>', intent.province)
                .replace('<month>', intent.month.toLowerCase());
            if (!found) {
                return `I don’t have weather info for ${intent.province} in ${intent.month.toLowerCase()}. Try today’s weather or travel tips?`;
            }
        } else {
            return 'Please specify the city and month, e.g., "Weather in Da Nang in June."';
        }
    } else if (intent.type === 'weatherToday') {
        if (intent.province) {
            try {
                const weatherData = await simulatedAPIs.getWeather(intent.province);
                results = `${weatherData.temp}°C, ${weatherData.description}, humidity ${weatherData.humidity}%.`;
                template = getRandomTemplate(data.responseTemplates.weatherToday).replace('<province>', intent.province);
            } catch (error) {
                let fallback = '';
                data.destinations.forEach(region => {
                    region.weather.forEach(weather => {
                        if (weather.province === intent.province && weather.month === 'May') {
                            fallback = `I can’t fetch current weather for ${intent.province}, but here’s May’s forecast: ${weather.description}`;
                        }
                    });
                });
                return fallback || `I can’t fetch weather for ${intent.province}. Check your connection or try again later. Want travel tips instead?`;
            }
        } else {
            return 'Please specify the city, e.g., "Weather in Hanoi?"';
        }
    } else if (intent.type === 'beach') {
        if (intent.province) {
            let found = false;
            data.destinations.forEach(region => {
                region.beaches.forEach(beach => {
                    if (beach.province === intent.province) {
                        found = true;
                        results += `<strong>${beach.name}</strong>: ${beach.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                    }
                });
            });
            template = getRandomTemplate(data.responseTemplates.beachProvince).replace('<province>', intent.province);
            if (!found) return `No notable beaches in ${intent.province}. Try festivals or specialties?`;
        } else {
            data.destinations.forEach(region => {
                region.beaches.forEach(beach => {
                    results += `<strong>${beach.name} (${beach.province})</strong>: ${beach.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                });
            });
            template = getRandomTemplate(data.responseTemplates.beach);
        }
    } else if (intent.type === 'festival') {
        if (intent.province) {
            let found = false;
            data.destinations.forEach(region => {
                region.festivals.forEach(festival => {
                    if (festival.province === intent.province) {
                        found = true;
                        results += `<strong>${festival.name}</strong>: ${festival.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                    }
                });
            });
            template = getRandomTemplate(data.responseTemplates.festivalProvince).replace('<province>', intent.province);
            if (!found) return `No festivals in ${intent.province}. Try beaches or specialties?`;
        } else {
            data.destinations.forEach(region => {
                region.festivals.forEach(festival => {
                    results += `<strong>${festival.name} (${festival.province})</strong>: ${festival.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                });
            });
            template = getRandomTemplate(data.responseTemplates.festival);
        }
    } else if (intent.type === 'specialty') {
        if (intent.province) {
            let found = false;
            data.destinations.forEach(region => {
                region.specialties.forEach(specialty => {
                    if (specialty.province === intent.province) {
                        found = true;
                        results += `<strong>${specialty.name}</strong>: ${specialty.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                    }
                });
            });
            template = getRandomTemplate(data.responseTemplates.specialtyProvince).replace('<province>', intent.province);
            if (!found) return `No specialties in ${intent.province}. Try beaches or festivals?`;
        } else {
            data.destinations.forEach(region => {
                region.specialties.forEach(specialty => {
                    results += `<strong>${specialty.name} (${specialty.province})</strong>: ${specialty.description} <a href="${region.link}" style="color: #ffeb3b; text-decoration: underline;">Explore Now</a><br>`;
                });
            });
            template = getRandomTemplate(data.responseTemplates.specialty);
        }
    } else if (intent.type === 'tip') {
        if (intent.province) {
            try {
                const tips = await simulatedAPIs.getTips(intent.province);
                tips.forEach(tip => results += `${tip}<br>`);
                template = getRandomTemplate(data.responseTemplates.tip).replace('<province>', intent.province);
            } catch (error) {
                return `Can’t fetch tips for ${intent.province}. Try asking about activities or weather?`;
            }
        } else {
            let generalTipResults = '';
            if (intent.topic === 'clothing') {
                data.generalTips.forEach(generalTip => {
                    if (generalTip.topic === 'clothing') generalTipResults += `${generalTip.tip}<br>`;
                });
                template = getRandomTemplate(data.responseTemplates.generalTip).replace('<topic>', 'clothing');
                results = generalTipResults;
            } else {
                return 'Please specify the city for tips, e.g., "What to do in Da Nang?"';
            }
        }
    } else if (intent.type === 'activity') {
        if (intent.province) {
            try {
                const activities = await simulatedAPIs.getPlaces(intent.province, 'activity');
                if (activities.length > 0) {
                    activities.forEach(activity => results += `<strong>${activity.name}</strong>: ${activity.description}<br>`);
                    template = getRandomTemplate(data.responseTemplates.activity).replace('<province>', intent.province);
                } else {
                    return `No activity suggestions for ${intent.province}. Try beaches or specialties?`;
                }
            } catch (error) {
                return `Can’t fetch activities for ${intent.province}. Try festivals or specialties?`;
            }
        } else {
            return 'Please specify the city for activities, e.g., "What to do in Da Nang?"';
        }
    } else if (intent.type === 'weatherPlace' || intent.type === 'weatherPlaceGeneral') {
        if (!intent.weatherCondition) return 'Please specify the weather condition, e.g., "Where to go in Hanoi when it’s hot?"';
        const isGeneral = intent.type === 'weatherPlaceGeneral';
        const places = isGeneral ? [] : data.destinations.find(region => region.provinces.includes(intent.province)).weatherPlaces[intent.weatherCondition] || [];
        if (!isGeneral && places.length === 0) return `No place suggestions for ${intent.province} when it’s ${intent.weatherCondition}. Try a general query!`;
        if (isGeneral) {
            data.destinations.forEach(region => {
                const regionPlaces = region.weatherPlaces[intent.weatherCondition] || [];
                places.push(...regionPlaces.map(place => `${place} (${region.region})`));
            });
        }
        places.forEach(place => results += `${place}<br>`);
        template = getRandomTemplate(isGeneral ? data.responseTemplates.weatherPlaceGeneral : data.responseTemplates.weatherPlace)
            .replace('<weather>', intent.weatherCondition)
            .replace('<province>', intent.province || '');
    } else if (intent.type === 'weatherFood' || intent.type === 'weatherFoodGeneral') {
        if (!intent.weatherCondition) return 'Please specify the weather condition, e.g., "What to eat in Hanoi when it’s hot?"';
        const isGeneral = intent.type === 'weatherFoodGeneral';
        const foods = isGeneral ? [] : data.destinations.find(region => region.provinces.includes(intent.province)).weatherFoods[intent.weatherCondition] || [];
        if (!isGeneral && foods.length === 0) return `No food suggestions for ${intent.province} when it’s ${intent.weatherCondition}. Try a general query!`;
        if (isGeneral) {
            data.destinations.forEach(region => {
                const regionFoods = region.weatherFoods[intent.weatherCondition] || [];
                foods.push(...regionFoods.map(food => `${food} (${region.region})`));
            });
        }
        foods.forEach(food => results += `${food}<br>`);
        template = getRandomTemplate(isGeneral ? data.responseTemplates.weatherFoodGeneral : data.responseTemplates.weatherFood)
            .replace('<weather>', intent.weatherCondition)
            .replace('<province>', intent.province || '');
    } else if (intent.type === 'suggestion') {
        const suggestions = [

            'What’s the weather in "city" today?',
            'Where to go in "city" when it’s hot?',
            'What to eat in "city" when it’s rainy?',
            'Tell me about festivals in "city/province".',
            'What are some travel tips for "city/province"?'
        ];
        suggestions.forEach(suggestion => results += `${suggestion}<br>`);
        template = getRandomTemplate(data.responseTemplates.suggestion);
    } else {
        return getRandomTemplate(data.responseTemplates.unknown);
    }

    return template.replace('<results>', results);
}

function saveChatHistory(userMessage, botMessage) {
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    history.push({ user: userMessage, bot: botMessage });
    if (history.length > 10) history.shift(); // Giữ tối đa 10 tin nhắn
    localStorage.setItem('chatHistory', JSON.stringify(history));
}

function loadChatHistory() {
    const messages = document.getElementById('chatbotMessages');
    if (!messages) return;
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    history.forEach(entry => {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = entry.user;
        messages.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.innerHTML = entry.bot;
        messages.appendChild(botMessage);
    });
    messages.scrollTop = messages.scrollHeight;
}

function clearChatHistory() {
    localStorage.removeItem('chatHistory');
    const messages = document.getElementById('chatbotMessages');
    if (messages) messages.innerHTML = '<div class="message bot">Hello! I\'m here to help you explore Vietnam. Ask about weather, activities, or type "suggest" for ideas!</div>';
}

function initializeChatbot() {
    const chatbotInput = document.getElementById('chatbotInput');
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
    loadChatHistory();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeChatbot();
});

async function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const messages = document.getElementById('chatbotMessages');
    if (!input || !messages) return;

    const query = input.value.trim();
    if (!query) return;

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = query;
    messages.appendChild(userMessage);

    const intent = detectIntent(query);
    const response = await generateResponse(intent);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerHTML = response;
    messages.appendChild(botMessage);

    if (intent.type !== 'clearHistory') {
        saveChatHistory(query, response);
    }
    messages.scrollTop = messages.scrollHeight;
    input.value = '';
}