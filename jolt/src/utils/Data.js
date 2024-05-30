const DATA = [
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Sanjana Rao",
        "title": "Cyclone Amphan Causes Extensive Damage in Coastal Areas - News18",
        "description": "Cyclone Amphan has wreaked havoc in coastal regions, leaving thousands homeless and causing extensive property damage.",
        "url": "https://www.news18.com/environment/cyclone-amphan-coastal-damage-8904948.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/29/600x338/ANI-20240528040-0_1716905898813_1716944711167.jpg",
        "publishedAt": "2024-05-27T05:00:00Z",
        "content": "Cyclone Amphan has caused widespread devastation in the coastal areas, with strong winds and heavy rains leading to extensive damage. Rescue operations are underway as thousands of people are displaced from their homes."
    },
    {
        "source": {
            "id": null,
            "name": "ANI"
        },
        "author": "Ajay Patel",
        "title": "Government Announces New Economic Reforms to Boost Growth - ANI",
        "description": "The government has introduced a series of economic reforms aimed at revitalizing the economy and promoting sustainable growth.",
        "url": "https://www.ani.in/economy/new-economic-reforms-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/economic-reforms-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T06:00:00Z",
        "content": "In an effort to stimulate economic growth, the government has unveiled a comprehensive package of reforms targeting various sectors. These measures are expected to create jobs and attract foreign investment."
    },
    {
        "source": {
            "id": null,
            "name": "Unknown"
        },
        "author": "Anonymous",
        "title": "New Tech Innovations at CES 2024 - Unknown",
        "description": "CES 2024 showcases groundbreaking technological innovations, with a focus on AI, robotics, and sustainable tech.",
        "url": "https://www.unknown.com/technology/ces-2024-innovations-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/ces-2024-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T07:00:00Z",
        "content": "The Consumer Electronics Show (CES) 2024 has unveiled a host of new technologies, including advancements in AI, robotics, and sustainable tech solutions. Industry leaders and startups alike are showcasing their latest innovations."
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Meera Nair",
        "title": "Healthcare Sector Sees Major Advances with New Treatments - India Today",
        "description": "Recent developments in the healthcare sector have led to the introduction of new treatments for chronic diseases, improving patient outcomes.",
        "url": "https://www.indiatoday.in/healthcare/new-treatments-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/healthcare-advances-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T08:00:00Z",
        "content": "The healthcare sector is witnessing significant progress with the introduction of innovative treatments for chronic diseases. These advancements are expected to enhance patient care and improve overall health outcomes."
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Arjun Das",
        "title": "Stock Markets Rally After Positive Economic Data - News18",
        "description": "Stock markets have surged following the release of positive economic data, signaling a potential recovery in the financial sector.",
        "url": "https://www.news18.com/business/stock-market-rally-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/stock-market-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T09:00:00Z",
        "content": "The stock markets have experienced a significant rally after the release of encouraging economic data. Investors are optimistic about the potential for recovery in various sectors, driving up market indices."
    },
    {
        "source": {
            "id": null,
            "name": "ANI"
        },
        "author": "Nisha Kapoor",
        "title": "International Conference on Climate Change Kicks Off - ANI",
        "description": "The international conference on climate change has begun, with global leaders discussing strategies to combat environmental challenges.",
        "url": "https://www.ani.in/environment/climate-change-conference-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/climate-change-conference-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T10:00:00Z",
        "content": "The international conference on climate change has officially started, with world leaders and experts gathering to discuss urgent measures to address environmental issues. The focus is on sustainable practices and reducing carbon emissions."
    },
    {
        "source": {
            "id": null,
            "name": "Unknown"
        },
        "author": "Anonymous",
        "title": "New Breakthrough in Renewable Energy Technologies - Unknown",
        "description": "Researchers have achieved a breakthrough in renewable energy technologies, promising more efficient and sustainable power solutions.",
        "url": "https://www.unknown.com/technology/renewable-energy-breakthrough-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/renewable-energy-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T11:00:00Z",
        "content": "Scientists have made a significant breakthrough in renewable energy technologies, developing new methods to harness and store energy more efficiently. This advancement could lead to more sustainable and reliable power sources globally."
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Rajiv Menon",
        "title": "New Education Policy Aims to Transform Learning - India Today",
        "description": "The newly announced education policy aims to transform the learning landscape, focusing on holistic development and skill-based education.",
        "url": "https://www.indiatoday.in/education/new-policy-transform-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/education-policy-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T12:00:00Z",
        "content": "The government has introduced a new education policy designed to revolutionize the learning experience. Emphasizing holistic development and practical skills, the policy aims to better prepare students for future challenges."
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Priyanka Sharma",
        "title": "Wildlife Conservation Efforts See Positive Results - News18",
        "description": "Efforts in wildlife conservation are showing positive results, with several endangered species making a comeback in their natural habitats.",
        "url": "https://www.news18.com/environment/wildlife-conservation-success-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/wildlife-conservation-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T13:00:00Z",
        "content": "Recent wildlife conservation efforts are yielding positive outcomes, with various endangered species witnessing a revival in their populations. Conservationists are optimistic about the future of biodiversity."
    },
    {
        "source": {
            "id": null,
            "name": "ANI"
        },
        "author": "Vikram Sinha",
        "title": "New Space Mission Launched to Explore Outer Planets - ANI",
        "description": "A new space mission has been launched to explore the outer planets, aiming to gather unprecedented data about our solar system.",
        "url": "https://www.ani.in/science/space-mission-outer-planets-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/space-mission-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T14:00:00Z",
        "content": "The latest space mission, designed to explore the outer planets of our solar system, has successfully launched. Scientists hope to gain new insights into these distant worlds, enhancing our understanding of the universe."
    },
    {
        "source": {
            "id": null,
            "name": "Unknown"
        },
        "author": "Anonymous",
        "title": "Advancements in Artificial Intelligence Transform Industries - Unknown",
        "description": "Recent advancements in artificial intelligence are transforming various industries, improving efficiency and creating new opportunities.",
        "url": "https://www.unknown.com/technology/ai-transform-industries-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/ai-advancements-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T15:00:00Z",
        "content": "Artificial intelligence is making significant strides, revolutionizing various sectors by enhancing efficiency and opening up new opportunities. From healthcare to finance, AI applications are becoming increasingly integral to operations."
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Shreya Mukherjee",
        "title": "Cultural Festival Celebrates Heritage and Diversity - India Today",
        "description": "The annual cultural festival celebrates heritage and diversity, bringing together artists and performers from around the world.",
        "url": "https://www.indiatoday.in/culture/festival-celebrates-diversity-8904948.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/cultural-festival-2024-05-1d2c44c06c0bc593940d6b151896ea7f-16x9.jpg?impolicy=website&width=1200&height=675",
        "publishedAt": "2024-05-27T16:00:00Z",
        "content": "The annual cultural festival is in full swing, celebrating the rich heritage and diversity of various cultures. The event features performances from artists around the globe, fostering a spirit of unity and appreciation."
    }
];


export default DATA;
