/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.SIMPLE, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.SMALL, //SMALL, BIG are available
   tileSize: 125,
   tileMargin: 5,
   serverUrl: "https://YOUR-URL-HERE.COM:8123",
   wsUrl: "wss://YOUR-URL-HERE.COM:8123/api/websocket",
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      right: [],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Main Page',
         bg: 'images/grey-gradient.png',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               width: 4,
               height: 3,
               title: 'Overview',
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     type: TYPES.DEVICE_TRACKER,
                     id: 'person.stephanie',
                     map: 'yandex',
                     states: {
                        home: "Home",
                     },
                     zoomLevels: [13], // or [9] for only one map slide
                     hideEntityPicture: false, //hide entity pic, if you need only map
                     slidesDelay: 2 // delay before first slide animation
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     type: TYPES.DEVICE_TRACKER,
                     id: 'person.jimmy',
                     map: 'yandex',
                     states: {
                        home: "Home",
                     },
                     zoomLevels: [13], // or [9] for only one map slide
                     hideEntityPicture: false, //hide entity pic, if you need only map
                     slidesDelay: 2 // delay before first slide animation
                  },
                  {
                     position: [0, 1],
                     width: 2,
                     height: 1.3,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Agenda',
                           icon: 'mdi-calendar',
                           value: '&calendar.stephanie.attributes.message'
                        },
                        {
                           title: 'Time',
                           icon: 'mdi-clock',
                           value: '&calendar.stephanie.attributes.start_time'
                        },
                        {
                           title: 'Location',
                           icon: 'mdi-navigation',
                           value: '&calendar.stephanie.attributes.location'
                        },
                        {
                           title: 'Work',
                           icon: 'mdi-car',
                           value: '&sensor.reistijd_stephanie_work.state minutes'
                        },
                        {
                           title: 'PostNL',
                           icon: 'mdi-package-variant-closed',
                           value: '&sensor.postnl_stephanie.state package(s)'
                        },
                        {
                           title: 'Date',
                           icon: 'mdi-information',
                           value: '&sensor.postnl_stephanie_tileboard_title.state'
                        },
                        {
                           title: 'Time',
                           icon: 'mdi-alarm-check',
                           value: '&sensor.postnl_stephanie_tileboard_information.state'
                        },
                     ]
                  },
                  {
                     position: [2, 1],
                     width: 2,
                     height: 1.3,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Agenda',
                           icon: 'mdi-calendar',
                           value: '&calendar.jimmy.attributes.message'
                        },
                        {
                           title: 'Time',
                           icon: 'mdi-clock',
                           value: '&calendar.jimmy.attributes.start_time'
                        },
                        {
                           title: 'Location',
                           icon: 'mdi-navigation',
                           value: '&calendar.jimmy.attributes.location'
                        },
                        {
                           title: 'Work',
                           icon: 'mdi-car',
                           value: '&sensor.reistijd_jimmy_work.state minutes'
                        },
                        {
                           title: 'PostNL',
                           icon: 'mdi-package-variant-closed',
                           value: '&sensor.postnl_jimmy.state package(s)'
                        },
                        {
                           title: 'Date',
                           icon: 'mdi-information',
                           value: '&sensor.postnl_jimmy_tileboard_title.state'
                        },
                        {
                           title: 'Time',
                           icon: 'mdi-alarm-check',
                           value: '&sensor.postnl_jimmy_tileboard_information.state'
                        },

                     ]
                  },
                  {
                     // please read README.md for more information
                     // this is just an example
                     position: [0, 2.3],
                     height: 1.7, // 1 for compact
                     width: 2,
                     //classes: ['-compact'],
                     type: TYPES.WEATHER,
                     id: {},
                     state: '&sensor.dark_sky_summary.state', // https://github.com/resoai/TileBoard/wiki/Anonymous-functions
                     icon: '&sensor.dark_sky_icon.state',
                     icons: {
                        'clear-day': 'clear',
                        'clear-night': 'nt-clear',
                        'cloudy': 'cloudy',
                        'rain': 'rain',
                        'sleet': 'sleet',
                        'snow': 'snow',
                        'wind': 'hazy',
                        'fog': 'fog',
                        'partly-cloudy-day': 'partlycloudy',
                        'partly-cloudy-night': 'nt-partlycloudy'
                     },
                     fields: {
                        summary: '&sensor.dark_sky_summary.state',
                        temperature: '&sensor.dark_sky_temperature.state',
                        temperatureUnit: 'C',
                        humidity: '&sensor.dark_sky_humidity.state',
                        humidityUnit: '%',
                        list: [
                           'Feels like '
                              + '&sensor.dark_sky_apparent_temperature.state'
                              + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                           'Pressure '
                              + '&sensor.dark_sky_pressure.state'
                              + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                           '&sensor.dark_sky_precip_probability.state'
                              + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                              + ' chance of rain'
                        ]
                     }
                  },
                  {
                     position: [2, 2.3],
                     type: TYPES.WEATHER_LIST,
                     width: 2,
                     height: 1.7,
                     title: 'Forecast',
                     id: {},
                     icons: {
                        'clear-day': 'clear',
                        'clear-night': 'nt-clear',
                        'cloudy': 'cloudy',
                        'rain': 'rain',
                        'sleet': 'sleet',
                        'snow': 'snow',
                        'wind': 'hazy',
                        'fog': 'fog',
                        'partly-cloudy-day': 'partlycloudy',
                        'partly-cloudy-night': 'nt-partlycloudy'
                     },
                     hideHeader: false,
                     secondaryTitle: 'Wind',
                     list: [1,2,3,4,5].map(function (id) {
                        var forecast = "&sensor.dark_sky_overnight_low_temperature_" + id + ".state - ";
                        forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".state";
                        forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".attributes.unit_of_measurement";
                  
                        var wind = "&sensor.dark_sky_wind_speed_" + id + ".state";
                        wind += " &sensor.dark_sky_wind_speed_" + id + ".attributes.unit_of_measurement";
                  
                        return {
                           date: function () {
                              var d = new Date(Date.now() + id * 24 * 60 * 60 * 1000);
                              return d.toString().split(' ').slice(1, 3).join(' ');
                           },
                           icon: "&sensor.dark_sky_icon_" + id + ".state",
                           //iconImage: null, replace icon with image
                           primary: forecast,
                           secondary: wind
                        }
                     })
                  },
               ]
            },
            {
               title: 'Security',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 2],
                     width: 2.3,
                     height: 0.7,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Washing Machine',
                           icon: 'mdi-washing-machine',
                           value: '&sensor.washing_machine_status.state'
                        },
                        {
                           title: 'Dryer',
                           icon: 'mdi-tumble-dryer',
                           value: '&sensor.dryer_status.state'
                        },
                        {
                           title: 'Dishwasher',
                           icon: 'mdi-dishwasher',
                           value: '&sensor.dishwasher_status.state'
                        }
                     ]
                  },
                  {
                     position: [0, 3],
                     type: TYPES.ALARM,
                     width: 2.3,
                     id: "alarm_control_panel.home_alarm",
                     title: 'Alarm',
                     icons: {
                        disarmed: 'mdi-bell-off',
                        pending: 'mdi-bell',
                        armed_home: 'mdi-bell-plus',
                        armed_away: 'mdi-bell',
                        triggered: 'mdi-bell-ring'
                     },
                     states: {
                        disarmed: 'Disarmed',
                        pending: 'Pending',
                        armed_home: 'Armed Home',
                        armed_away: 'Armed Away',
                        triggered: 'Triggered'
                     }
                  },
                  {
                     position: [0, 0],
                     id: 'camera.gallerij_camera',
                     type: TYPES.CAMERA_THUMBNAIL,
                     bgSize: 'cover',
                     width: 2.3,
                     height: 1.75,
                     state: false,
                     fullscreen: {
                        type: TYPES.CAMERA,
                        refresh: 1500, // can be number in milliseconds
                        bgSize: 'contain'
                     },
                     refresh: function () { // can also be a function
                        return 3000 + Math.random() * 1000
                     }
                  }
               ]
            },

            {
               title: '',
               width: 1,
               height: 3,
               items: [
               ]
            }
         ]
      },
      {
         title: 'Scenes',
         bg: 'images/grey-gradient.png',
         icon: 'mdi-square-outline',
         groups: [
            {  title: '',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [2, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Favoriete Scenes'
                        }
                     ]
                  },
                  {
                     position: [2, 0.25],
                     height: 0.75,
                     width: 1,
                     title: 'Koken',
                     id: 'scene.koken',
                     type: TYPES.SCENE,
                     icon: 'mdi-stove',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [3, 0.25],
                     height: 0.75,
                     width: 1,
                     title: 'Wassen',
                     id: 'scene.wassen',
                     type: TYPES.SCENE,
                     icon: 'mdi-washing-machine',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [4, 0.25],
                     height: 0.75,
                     width: 1,
                     title: 'Schoonmaken',
                     id: 'scene.schoonmaken',
                     type: TYPES.SCENE,
                     icon: 'mdi-spray-bottle',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [2, 1],
                     height: 0.75,
                     width: 1,
                     title: 'Klaar met Koken',
                     id: 'scene.klaar_met_koken',
                     type: TYPES.SCENE,
                     icon: 'mdi-power',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [3, 1],
                     height: 0.75,
                     width: 1,
                     title: 'Klaar met Wassen',
                     id: 'scene.klaar_met_wassen',
                     type: TYPES.SCENE,
                     icon: 'mdi-power',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [4, 1],
                     height: 0.75,
                     width: 1,
                     title: 'Welterusten',
                     id: 'scene.welterusten',
                     type: TYPES.SCENE,
                     icon: 'mdi-sleep',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [2, 2.25],
                     height: 0.75,
                     width: 1,
                     title: 'Dagverlichting',
                     id: 'scene.dagverlichting',
                     type: TYPES.SCENE,
                     icon: 'mdi-weather-sunset-up',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [3, 2.25],
                     height: 0.75,
                     width: 1,
                     title: 'Avondverlichting',
                     id: 'scene.avondverlichting',
                     type: TYPES.SCENE,
                     icon: 'mdi-weather-sunset-down',
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [4, 2.25],
                     height: 0.75,
                     width: 1,
                     title: 'Nachtverlichting',
                     id: 'scene.nachtverlichting',
                     icon: 'mdi-power-sleep',
                     type: TYPES.SCENE,
                     states: {
                        scening: " ",
                     },
                  },
                  {
                     position: [2, 3],
                     height: 0.75,
                     width: 1,
                     title: 'Naar Bed Gaan',
                     id: 'scene.naarbed',
                     type: TYPES.SCENE,
                     icon: 'mdi-hotel',
                     states: {
                        scening: " ",
                     },
                  },
               ]
            },
         ]
      },
      {
         title: 'Lights',
         bg: 'images/grey-gradient.png',
         icon: 'mdi-lightbulb',
         groups: [
            {
               title: 'Lights',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Woonkamer'
                        }
                     ]
                  },
                  {
                     position: [0, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Plafond',
                     id: 'light.woonkamer_plafond',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0.75, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Eettafel',
                     id: 'light.eettafel_lamp',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [1.5, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Tafel',
                     id: 'light.tafel_lamp',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lamp",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [2.25, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Vloer',
                     id: 'light.vloerlamp_2',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-floor-lamp",
                        off: "mdi-floor-lamp",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0, 1],
                     height: 0.75,
                     width: 0.75,
                     title: 'LEDs',
                     id: 'light.woonkamer_led_lampen',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-led-strip",
                        off: "mdi-led-strip",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0.75, 1],
                     height: 0.75,
                     width: 0.75,
                     title: 'Xiaomi LED',
                     id: 'light.gateway_light_7811dcdef324',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lightbulb",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0, 2],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Slaapkamer'
                        }
                     ]
                  },
                  {
                     position: [0, 2.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Stephanie',
                     id: 'light.nachtkastje_stephanie_2',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lamp",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0.75, 2.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Jimmy',
                     id: 'light.nachtkastje_jimmy',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lamp",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [1.5, 2.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'LEDs',
                     id: 'light.slaapkamer_led_lampen',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-led-strip",
                        off: "mdi-led-strip",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0, 3.25],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Overige'
                        }
                     ]
                  },
                  {
                     position: [0, 3.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Badkamer',
                     id: 'switch.kh01cn',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     }
                  },
                  {
                     position: [0.75, 3.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Toilet',
                     id: 'light.toiletlamp',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [1.5, 3.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Balkon',
                     id: 'light.balkonlamp',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lamp",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [2.25, 3.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Berging',
                     id: 'light.tradfri_bulb_e27_ws_opal_980lm_4',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lightbulb",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
               ]
            },
            {
               title: '',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Keuken'
                        }
                     ]
                  },
                  {
                     position: [0, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Plafond',
                     id: 'light.keuken_plafondlampen',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0.75, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Spotjes',
                     id: 'light.keukenspots_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-track-light",
                        off: "mdi-track-light",
                     }
                  },
                  {
                     position: [1.5, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Bijkeuken',
                     id: 'light.bijkeukenlamp',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0, 1.25],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Kleine Kamer'
                        }
                     ]
                  },
                  {
                     position: [0, 1.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Plafond',
                     id: 'light.kleine_kamer_plafondlampen',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-ceiling-light",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [0.75, 1.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'LEDs',
                     id: 'light.officeled',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-led-strip",
                        off: "mdi-led-strip",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  }
               ]
            },
         ]
      },
      {
         title: 'Devices',
         bg: 'images/grey-gradient.png',
         icon: 'mdi-power-plug',
         groups: [
            {  title: 'Devices',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Woonkamer'
                        }
                     ]
                  },
                  {
                     position: [0, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Receiver',
                     id: 'switch.receiver_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-set-top-box",
                        off: "mdi-set-top-box",
                     },
                  },
                  {
                     position: [0.75, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Apple TV',
                     id: 'media_player.woonkamer_apple_tv_7',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off",
                        playing: "Playing",
                        paused: "Paused",
                        idle: "Idle"
                     },
                     icon: "mdi-apple"
                  },
                  {
                     position: [1.5, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Samsung TV',
                     id: 'switch.samsung_tv',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-television",
                        off: "mdi-television",
                     }
                  },
                  {
                     position: [0, 1.25],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Slaapkamer'
                        }
                     ]
                  },
                  {
                     position: [0, 1.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Ventilator',
                     id: 'switch.ventilator_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-fan",
                        off: "mdi-fan",
                        unavailable: "mdi-fan"
                     },
                  },
                  {
                     position: [0.75, 1.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Apple TV',
                     id: 'media_player.slaapkamer_apple_tv_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off",
                        playing: "Playing",
                        paused: "Paused",
                        idle: "Idle"
                     },
                     icon: "mdi-apple"
                  },
                  {
                     position: [1.5, 1.5],
                     height: 0.75,
                     width: 0.75,
                     title: 'Philips TV',
                     id: 'switch.tradfri_outlet_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-television",
                        off: "mdi-television",
                     }
                  },
                  {
                     position: [0, 2.5],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Kleine Kamer'
                        }
                     ]
                  },
                  {
                     position: [0, 2.75],
                     height: 0.75,
                     width: 0.75,
                     title: 'PC Steph',
                     id: 'switch.pc_van_stephanie',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-desktop-tower-monitor"
                  },
                  {
                     position: [0.75, 2.75],
                     height: 0.75,
                     width: 0.75,
                     title: 'PC Jimmy',
                     id: 'switch.pc_van_jimmy',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off",
                     },
                     icon: "mdi-desktop-tower-monitor"
                  },
                  {
                     position: [1.5, 2.75],
                     height: 0.75,
                     width: 0.75,
                     title: 'Printer',
                     id: 'switch.printer_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-printer",
                        off: "mdi-printer",
                     }
                  },
                  {
                     position: [2.25, 2.75],
                     height: 0.75,
                     width: 0.75,
                     title: 'Xbox',
                     id: 'switch.xbox_one',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-xbox",
                  },
               ]
            },
            {  title: '',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Keuken'
                        }
                     ]
                  },
                  {
                     position: [0, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Waterkoker',
                     id: 'switch.waterkoker_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-cup-water"
                  },
                  {
                     position: [0.75, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Afzuigkap',
                     id: 'switch.afzuigkap_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-fan"
                  },
                  {
                     position: [1.5, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Air Fryer',
                     id: 'switch.air_fryer_2',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-panorama-fisheye"
                  },
                  {
                     position: [2.25, 0.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Vaatwasser',
                     id: 'switch.vaatwasser',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-dishwasher"
                  },
                  {
                     position: [0, 1],
                     height: 0.75,
                     width: 0.75,
                     title: 'Cappumaker',
                     id: 'switch.tradfri_outlet',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-coffee-outline",
                  },
                  {
                     position: [0, 2],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Bijkeuken'
                        }
                     ]
                  },
                  {
                     position: [0, 2.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Wasmachine',
                     id: 'switch.wasmachine',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-washing-machine"
                  },
                  {
                     position: [0.75, 2.25],
                     height: 0.75,
                     width: 0.75,
                     title: 'Droger',
                     id: 'switch.droger',
                     type: TYPES.SWITCH,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icon: "mdi-tumble-dryer"
                  },
               ]
            },
         ]
      },
      {
         title: 'Climate',
         bg: 'images/grey-gradient.png',
         icon: 'mdi-temperature-celsius',
         groups: [
            {  title: 'Information',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Temperatuur'
                        }
                     ]
                  },
                  {
                     position: [0, 0.25],
                     type: TYPES.SENSOR,
                     title: 'Buiten',
                     id: 'sensor.dark_sky_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 0.25],
                     type: TYPES.SENSOR,
                     title: 'Slaapkamer',
                     id: 'sensor.temperature_158d0002b546e7',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [2, 0.25],
                     type: TYPES.SENSOR,
                     title: 'Kleine Kamer',
                     id: 'sensor.printer_am2301_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 1.25],
                     type: TYPES.SENSOR,
                     title: 'Woonkamer',
                     id: 'sensor.temperature_158d00020ed06c',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 1.25],
                     type: TYPES.SENSOR,
                     title: 'Keuken',
                     id: 'sensor.waterkoker_am2301_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [2, 1.25],
                     type: TYPES.SENSOR,
                     title: 'Badkamer',
                     id: 'sensor.temperature_158d0002b54868',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 2.5],
                     width: 3,
                     height: 0.25,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Luchtvochtigheid'
                        }
                     ]
                  },
                  {
                     position: [0, 2.75],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Buiten',
                     id: 'sensor.dark_sky_humidity',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 2.75],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Slaapkamer',
                     id: 'sensor.humidity_158d0002b546e7',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [2, 2.75],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Kleine Kamer',
                     id: 'sensor.printer_am2301_humidity',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [0, 3.5],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Woonkamer',
                     id: 'sensor.humidity_158d00020ed06c',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [1, 3.5],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Keuken',
                     id: 'sensor.waterkoker_am2301_humidity',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
                  {
                     position: [2, 3.5],
                     width: 1,
                     height: 0.75,
                     type: TYPES.SENSOR,
                     title: 'Badkamer',
                     id: 'sensor.humidity_158d0002b54868',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     }
                  },
               ]
            },
            {  title: 'Climate',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     height: 1,
                     type: TYPES.CLIMATE,
                     unit: 'C',
                     id: 'climate.woonkamer',
                     state: function (item, entity) {
                        return 'Current '
                           + entity.attributes.current_temperature
                     }
                  },
                  {
                     position: [0, 1],
                     width: 2,
                     height: 1,
                     type: TYPES.CLIMATE,
                     unit: 'C',
                     id: 'climate.kleine_kamer',
                     state: function (item, entity) {
                        return 'Current '
                           + entity.attributes.current_temperature
                     }
                  }
               ]
            }
         ]
      },
   ],
}
