# Rest Api
#### Structur data flight 
```
id: type Number unique 
Number: type String any
cityStart: type String any
cityEnd: type String any
typeAirCraft: type String any
departureTime: type Number any 
arrivalTime: type Number any 
status: type String [Fly, Planned, Arraived, Crash, Delay, Cancel]
```
#### getLastListFlight
**Method:** `GET`

**Required:** empty

**Success Respons:**
**Code:** 200 OK

```
{
  {
  id : 12,
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 1530634698680,
  arrivalTime: 1530634998680,
  status: 'Fly'
  },
  ...
}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flights are not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`
    
#### getFlightId
**Method:** `GET`

**Required:**
`id=[Number]`

**Success Respons** : 
**Code:** 200 OK
```
{
  id : 12,
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 04.12.1998,
  arrivalTime: 05.12.1998,
  status: 'Planned'
}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flight is not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### getFlightsStatus
**Method:** `GET`

**Required:**
`status=[String]`

**Success Respons:**
**Code:** 200 OK
```
{
  {
  id : 12,
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 1530634698680,
  arrivalTime: 1530634998680,
  status: 'Fly'
  },
  ...
}
```

**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flights are not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### getFlightsCityStart
**Method:** `GET`

**Required:**
`city=[String]`

**Success Respons:** 
**Code:** 200 OK
```
{
  {
  id : 12,
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 1530634698680,
  arrivalTime: 1530634998680,
  status: 'Fly'
  },
  ...
}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flights are not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### getFlightsCityEnd
**Method:** `GET`

**Required:**
`city=[String]`

**Success Respons:** 
**Code:** 200 OK
```
{
  {
  id : 12,
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 1530634698680,
  arrivalTime: 1530634998680,
  status: 'Fly'
  },
  ...
}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flights are not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### addFlight
**Method:** `POST`

**Data Params:**
```
{
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 04.12.1998,
  arrivalTime: 05.12.1998,
  status: 'Planned'
}
```
**Success Respons:**
**Code:** 201 Creator
```
{
  id:12
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 04.12.1998,
  arrivalTime: 05.12.1998,
  status: 'Planned'
}
```
**Error Response:**

**Code:** 400 UNAUTHORIZED `{ error : "Your id is not unique." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### EditFlight
**Method:** `POST`

**Data Params:**
```
{
  id:12
  status: 'Fly'
}
```
**Success Respons:**
**Code:** 200 OK
```
{
  id:12
  Number: 'BR-12'
  cityStart : 'Yeakaterinbyrg',
  cityEnd: 'Moscow',
  typeAirCraft: 'Boing 55',
  departureTime: 04.12.1998,
  arrivalTime: 05.12.1998,
  status: 'Fly'
}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flight is not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`

#### DeleteId
**Method:** `GET`

**Required:**
`id=[Number]`

**Success Respons** : 
**Code:** 200 OK
```
{DeleteId:12}
```
**Error Response:**

**Code:** 404 UNAUTHORIZED `{ error : "Flight is not find." }`

**Code:** 401 UNAUTHORIZED `{ error : "You are unauthorized to make this request." }`