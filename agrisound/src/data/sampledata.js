export const weatherIcons = {
    rain: 'rain',
    lightRain: 'lightRain',
    heavyRain: 'heavyRain',
    cloudy: 'cloudy',
    clear: 'clear',
  };
  
  export const siteOptions = [
    { label: 'South Point', value: 'South Point' },
    { label: 'East Park', value: 'East Park' },
    { label: 'West End', value: 'West End' },
    { label: 'North Pole', value: 'North Pole' },
    { label: 'Aubeyterre-sur-dronne', value: 'Aubeyterre-sur-dronne' },
  ];
  export const farmOptions = [
    { label: 'Bardsley South', value: 'Bardsley South' },
    { label: 'Bardsley North', value: 'Bardsley North' },
    { label: 'Bardsley France', value: 'Bardsley France' },
  ];
  
  export const datePickerDropDownConfig = {
    days: [
        { label:'1 week', value:7},
        { label:'2 weeks', value:14},
        { label:'3 weeks', value:21}, //this will be 21 bars on the chart so might be too much for the weather icons. Maybe they are hidden after 12 bars?
        { label:'4 weeks', value:28}//this will be 28 bars on the chart so might be too much for the weather icons. Maybe they are hidden after 12 bars?
    ],
    weeks: [
        {label:'1 month', value:4},
        {label:'2 months', value:8},
        {label:'3 months', value:12},
        {label:'6 months', value:24} //this will be 24 bars on the chart so might be too much for the weather icons. Maybe they are hidden after 12 bars?
    ],
    months: [
        {label:'3 months',value:3},
        {label:'6 months',value:6},
        {label:'9 months',value:9},
        {label:'12 months',value:12}
    ]
}

  export const pollinatorReportSampleData = {
    days: [
      {
        label: new Date('30 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 2,
        tempHigh: 14,
        tempLow: 3,
        tempAverage: 10, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 80,
        daylightHours: 8,
        weatherIcon: 'heavyRain',
      },
      {
        label: new Date('29 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 4,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 9, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 50,
        daylightHours: 7.95,
        weatherIcon: 'rain',
      },
      {
        label: new Date('28 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 15,
        tempLow: 6,
        tempAverage: 13, //this value will be for the temperature line overlay as discussed on the call
        wind: 6,
        rain: 5,
        daylightHours: 7.9,
        weatherIcon: 'cloudy',
      },
      {
        label: new Date('27 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 14,
        tempHigh: 9,
        tempLow: -1,
        tempAverage: 5, //this value will be for the temperature line overlay as discussed on the call
        wind: 12,
        rain: 0,
        daylightHours: 7.85,
        weatherIcon: 'clear',
      },
      {
        label: new Date('26 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 10,
        tempLow: 2,
        tempAverage: 7, //this value will be for the temperature line overlay as discussed on the call
        wind: 4,
        rain: 15,
        daylightHours: 7.8,
        weatherIcon: 'lightRain',
      },
      {
        label: new Date('25 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 7.5, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 0,
        daylightHours: 7.75,
        weatherIcon: 'clear',
      },
      {
        label: new Date('24 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 7,
        tempLow: 1,
        tempAverage: 4, //this value will be for the temperature line overlay as discussed on the call
        wind: 2,
        rain: 0,
        daylightHours: 7.7,
        weatherIcon: 'clear',
      },
      {
        label: new Date('23 Nov 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 13,
        tempLow: 8,
        tempAverage: 11, //this value will be for the temperature line overlay as discussed on the call
        wind: 1,
        rain: 0,
        daylightHours: 7.65,
        weatherIcon: 'clear',
      },
      {
        label: new Date('1 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 4,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 9, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 50,
        daylightHours: 7.95,
        weatherIcon: 'rain',
      },
      {
        label: new Date('2 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 15,
        tempLow: 6,
        tempAverage: 13, //this value will be for the temperature line overlay as discussed on the call
        wind: 6,
        rain: 5,
        daylightHours: 7.9,
        weatherIcon: 'cloudy',
      },
      {
        label: new Date('3 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 14,
        tempHigh: 9,
        tempLow: -1,
        tempAverage: 5, //this value will be for the temperature line overlay as discussed on the call
        wind: 12,
        rain: 0,
        daylightHours: 7.85,
        weatherIcon: 'clear',
      },
      {
        label: new Date('4 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 10,
        tempLow: 2,
        tempAverage: 7, //this value will be for the temperature line overlay as discussed on the call
        wind: 4,
        rain: 15,
        daylightHours: 7.8,
        weatherIcon: 'lightRain',
      },
      {
        label: new Date('5 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 7.5, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 0,
        daylightHours: 7.75,
        weatherIcon: 'clear',
      },
      {
        label: new Date('6 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 7,
        tempLow: 1,
        tempAverage: 4, //this value will be for the temperature line overlay as discussed on the call
        wind: 2,
        rain: 0,
        daylightHours: 7.7,
        weatherIcon: 'clear',
      },
      {
        label: new Date('7 Dec 2021').toLocaleDateString(),
        pollinatorActivity: 32,
        tempHigh: 13,
        tempLow: 8,
        tempAverage: 11, //this value will be for the temperature line overlay as discussed on the call
        wind: 1,
        rain: 0,
        daylightHours: 7.65,
        weatherIcon: 'clear',
      },
    ],
    weeks: [
      {
        label: 'Week 1',
        pollinatorActivity: 5,
        tempHigh: 14,
        tempLow: 3,
        tempAverage: 12, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 60,
        daylightHours: 8,
        weatherIcon: 'heavyRain',
      },
      {
        label: 'Week 2',
        pollinatorActivity: 6,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 8.2, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 40,
        daylightHours: 8.5,
        weatherIcon: 'rain',
      },
      {
        label: 'Week 3',
        pollinatorActivity: 21,
        tempHigh: 10,
        tempLow: 4,
        tempAverage: 8, //this value will be for the temperature line overlay as discussed on the call
        wind: 6,
        rain: 0,
        daylightHours: 9,
        weatherIcon: 'clear',
      },
      {
        label: 'Week 4',
        pollinatorActivity: 14,
        tempHigh: 9,
        tempLow: -1,
        tempAverage: 7, //this value will be for the temperature line overlay as discussed on the call
        wind: 12,
        rain: 0,
        daylightHours: 9.25,
        weatherIcon: 'clear',
      },
      {
        label: 'Week 5',
        pollinatorActivity: 14,
        tempHigh: 9,
        tempLow: -1,
        tempAverage: 7, //this value will be for the temperature line overlay as discussed on the call
        wind: 12,
        rain: 0,
        daylightHours: 9.25,
        weatherIcon: 'clear',
      },
    ],
    months: [
      {
        label: 'January',
        pollinatorActivity: 10,
        tempHigh: 14,
        tempLow: 3,
        tempAverage: 10, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 50,
        daylightHours: 8.56,
        weatherIcon: 'rain',
      },
      {
        label: 'February',
        pollinatorActivity: 25,
        tempHigh: 11,
        tempLow: 2,
        tempAverage: 8.2, //this value will be for the temperature line overlay as discussed on the call
        wind: 5,
        rain: 20,
        daylightHours: 10.46,
        weatherIcon: 'cloudy',
      },
      {
        label: 'March',
        pollinatorActivity: 45,
        tempHigh: 24,
        tempLow: 12,
        tempAverage: 8, //this value will be for the temperature line overlay as discussed on the call
        wind: 6,
        rain: 20,
        daylightHours: 12.43,
        weatherIcon: 'lightRain',
      },
      {
        label: 'April',
        pollinatorActivity: 65,
        tempHigh: 29,
        tempLow: 15,
        tempAverage: 24, //this value will be for the temperature line overlay as discussed on the call
        wind: 4,
        rain: 0,
        daylightHours: 14.5,
        weatherIcon: 'clear',
      },
      {
        label: 'May',
        pollinatorActivity: 65,
        tempHigh: 29,
        tempLow: 15,
        tempAverage: 24, //this value will be for the temperature line overlay as discussed on the call
        wind: 4,
        rain: 0,
        daylightHours: 14.5,
        weatherIcon: 'clear',
      },
    ],
  };
  
  export const mapSites = [
    {
      siteId: 1,
      siteName: 'South Point',
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
    },
    {
      siteId: 2,
      siteName: 'East Park',
      siteLocation: { lat: 51.266373, lng: 1.138508 },
    },
    {
      siteId: 3,
      siteName: 'West End',
      siteLocation: { lat: 51.2627074, lng: 0.9631669 },
    },
    {
      siteId: 4,
      siteName: 'North Pole',
      siteLocation: { lat: 57.775563, lng: -5.599186 },
    },
    {
      siteId: 5,
      siteName: 'Aubeyterre-sur-dronne',
      siteLocation: { lat: 45.2635887, lng: 0.1488879 },
    },
  ];
  
  export const mapFarms = [
    {
      farmId: 1,
      farmName: 'Bardsley South',
    },
    {
      farmId: 2,
      farmName: 'Bardsley North',
    },
    {
      farmId: 3,
      farmName: 'Bardsley France',
    },
  ];
  
  export const mapGroups = [
    {
      groupId: 1,
      groupName: 'Strawberries',
    },
    {
      groupId: 2,
      groupName: 'Cherries',
    },
  ];
  
  export const mapSampleData = [
    {
      deviceId: 1,
      deviceName: 'device1',
      siteId: 1,
      siteName: 'South Point',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 51.3160912, lng: 1.1566061 },
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 2,
      deviceName: 'device2',
      siteId: 1,
      siteName: 'South Point',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 51.3168556, lng: 1.1739922 },
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 3,
      deviceName: 'device3',
      siteId: 1,
      siteName: 'South Point',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 51.3159537, lng: 1.1712939 },
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 4,
      deviceName: 'device4',
      siteId: 1,
      siteName: 'South Point',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 51.3156285, lng: 1.1651141 },
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 5,
      deviceName: 'device5',
      siteId: 1,
      siteName: 'South Point',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 51.3164667, lng: 1.1599749 },
      siteLocation: { lat: 51.3160912, lng: 1.1566061 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 6,
      deviceName: 'device6',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266373, lng: 1.138508 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 7,
      deviceName: 'device7',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266427, lng: 1.138594 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 8,
      deviceName: 'device8',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266454, lng: 1.138681 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 9,
      deviceName: 'device9',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266481, lng: 1.13881 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
    },
    {
      deviceId: 10,
      deviceName: 'device10',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266427, lng: 1.13881 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 11,
      deviceName: 'device11',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.2664, lng: 1.138724 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 12,
      deviceName: 'device12',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266319, lng: 1.138508 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 37,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 13,
      deviceName: 'device13',
      siteId: 2,
      siteName: 'East Park',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.266346, lng: 1.138638 },
      siteLocation: { lat: 51.266373, lng: 1.138508 },
      rssi: 20,
      battery: 22,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 14,
      deviceName: 'device14',
      siteId: 3,
      siteName: 'West End',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.2627074, lng: 0.9631669 },
      siteLocation: { lat: 51.2627074, lng: 0.9631669 },
      rssi: 20,
      battery: 30,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 15,
      deviceName: 'device15',
      siteId: 3,
      siteName: 'West End',
      farmId: 1,
      farmName: 'Bardsley South',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 51.2629071, lng: 0.9607015 },
      siteLocation: { lat: 51.2627074, lng: 0.9631669 },
      rssi: 20,
      battery: 35,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 16,
      deviceName: 'device16',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.775644, lng: -5.605355 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
      rssi: 17,
      battery: 23,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 17,
      deviceName: 'device17',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.775563, lng: -5.599692 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
      rssi: 18,
      battery: 80,
      lastPublished: new Date('10 Jan 2022 12:00:00')
    },
    {
      deviceId: 18,
      deviceName: 'device18',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.775995, lng: -5.601259 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
    },
    {
      deviceId: 19,
      deviceName: 'device19',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.775563, lng: -5.599186 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
      rssi: 15,
      battery: 80,
      lastPublished: new Date('9 Jan 2022 12:00:00')
    },
    {
      deviceId: 20,
      deviceName: 'device20',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.775833, lng: -5.605658 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
    },
    {
      deviceId: 21,
      deviceName: 'device21',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.77559, lng: -5.598579 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
      rssi: 14,
      battery: 80,
      lastPublished: new Date('9 Jan 2022 12:00:00')
    },
    {
      deviceId: 22,
      deviceName: 'device22',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.776587, lng: -5.601512 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
    },
    {
      deviceId: 23,
      deviceName: 'device23',
      siteId: 4,
      siteName: 'North Pole',
      farmId: 2,
      farmName: 'Bardsley North',
      groupId: 1,
      groupName: 'Strawberries',
      location: { lat: 57.776318, lng: -5.601815 },
      siteLocation: { lat: 57.775563, lng: -5.599186 },
      rssi: 20,
      battery: 39,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 24,
      deviceName: 'device24',
      siteId: 5,
      siteName: 'Aubeyterre-sur-dronne',
      farmId: 3,
      farmName: 'Bardsley France',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 45.2635887, lng: 0.1488879 },
      siteLocation: { lat: 45.265307, lng: 0.146673 },
      rssi: 12,
      battery: 33,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 25,
      deviceName: 'device25',
      siteId: 5,
      siteName: 'Aubeyterre-sur-dronne',
      farmId: 3,
      farmName: 'Bardsley France',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 45.2649521, lng: 0.1469942 },
      siteLocation: { lat: 45.265307, lng: 0.146673 },
      rssi: 14,
      battery: 33,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
    {
      deviceId: 26,
      deviceName: 'device26',
      siteId: 5,
      siteName: 'Aubeyterre-sur-dronne',
      farmId: 3,
      farmName: 'Bardsley France',
      groupId: 2,
      groupName: 'Cherries',
      location: { lat: 45.2633182, lng: 0.150587 },
      siteLocation: { lat: 45.265307, lng: 0.146673 },
      rssi: 20,
      battery: 80,
      lastPublished: new Date('12 Jan 2022 12:00:00')
    },
  ];
  