const { v4: uuid } = require('uuid');

const cars = [
    {
       "name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"plymouth satellite",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":318,
       "Horsepower":150,
       "Weight_in_lbs":3436,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"amc rebel sst",
       "Miles_per_Gallon":16,
       "Cylinders":8,
       "Displacement":304,
       "Horsepower":150,
       "Weight_in_lbs":3433,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"ford torino",
       "Miles_per_Gallon":17,
       "Cylinders":8,
       "Displacement":302,
       "Horsepower":140,
       "Weight_in_lbs":3449,
       "Acceleration":10.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"ford galaxie 500",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":429,
       "Horsepower":198,
       "Weight_in_lbs":4341,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"chevrolet impala",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":454,
       "Horsepower":220,
       "Weight_in_lbs":4354,
       "Acceleration":9,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"plymouth fury iii",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":440,
       "Horsepower":215,
       "Weight_in_lbs":4312,
       "Acceleration":8.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"pontiac catalina",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":455,
       "Horsepower":225,
       "Weight_in_lbs":4425,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"amc ambassador dpl",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":390,
       "Horsepower":190,
       "Weight_in_lbs":3850,
       "Acceleration":8.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"citroen ds-21 pallas",
       "Miles_per_Gallon":null,
       "Cylinders":4,
       "Displacement":133,
       "Horsepower":115,
       "Weight_in_lbs":3090,
       "Acceleration":17.5,
       "Year":"1970-01-01",
       "Origin":"Europe"
      ,"id": uuid()
      },
    {
       "name":"chevrolet chevelle concours (sw)",
       "Miles_per_Gallon":null,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":4142,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"ford torino (sw)",
       "Miles_per_Gallon":null,
       "Cylinders":8,
       "Displacement":351,
       "Horsepower":153,
       "Weight_in_lbs":4034,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"plymouth satellite (sw)",
       "Miles_per_Gallon":null,
       "Cylinders":8,
       "Displacement":383,
       "Horsepower":175,
       "Weight_in_lbs":4166,
       "Acceleration":10.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"amc rebel sst (sw)",
       "Miles_per_Gallon":null,
       "Cylinders":8,
       "Displacement":360,
       "Horsepower":175,
       "Weight_in_lbs":3850,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"dodge challenger se",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":383,
       "Horsepower":170,
       "Weight_in_lbs":3563,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"plymouth 'cuda 340",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":340,
       "Horsepower":160,
       "Weight_in_lbs":3609,
       "Acceleration":8,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"ford mustang boss 302",
       "Miles_per_Gallon":null,
       "Cylinders":8,
       "Displacement":302,
       "Horsepower":140,
       "Weight_in_lbs":3353,
       "Acceleration":8,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"chevrolet monte carlo",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":400,
       "Horsepower":150,
       "Weight_in_lbs":3761,
       "Acceleration":9.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"buick estate wagon (sw)",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":455,
       "Horsepower":225,
       "Weight_in_lbs":3086,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"toyota corona mark ii",
       "Miles_per_Gallon":24,
       "Cylinders":4,
       "Displacement":113,
       "Horsepower":95,
       "Weight_in_lbs":2372,
       "Acceleration":15,
       "Year":"1970-01-01",
       "Origin":"Japan"
      ,"id": uuid()
      },
    {
       "name":"plymouth duster",
       "Miles_per_Gallon":22,
       "Cylinders":6,
       "Displacement":198,
       "Horsepower":95,
       "Weight_in_lbs":2833,
       "Acceleration":15.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"amc hornet",
       "Miles_per_Gallon":18,
       "Cylinders":6,
       "Displacement":199,
       "Horsepower":97,
       "Weight_in_lbs":2774,
       "Acceleration":15.5,
       "Year":"1970-01-01",
       "Origin":"USA"
      ,"id": uuid()
      },
    {
       "name":"ford maverick",
       "Miles_per_Gallon":21,
       "Cylinders":6,
       "Displacement":200,
       "Horsepower":85,
       "Weight_in_lbs":2587,
       "Acceleration":16,
       "Year":"1970-01-01",
       "Origin":"USA",
       "id": uuid()
    }
 ]

 module.exports = {
    cars,
 }