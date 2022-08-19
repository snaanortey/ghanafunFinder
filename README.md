# 🇬🇭 Ghana City Fun Finder

This API generates random activities to do in Accra and other cities in Ghana when bored.

The app has two end points:

GET /random: returns an activity
```http
GET /random HTTP/1.1
Host: localhost:3000
```

POST /suggest: allows users to suggest an activity
```http
POST /suggest HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 133

{
    "description": "I suggest that take a hike on the Aburi mountains.",
    "url": [
        "https://rideataburi.run.com"
    ]
}
```

# How To Run 

1. Clone this repository to your local
   ```
    git clone https://github.com/snaanortey/ghanafunFinder.git
   ```
2. Install dependencies by running 
   ```sh
    npm install
   ```
3. Create an `.env` file from the `.env.example` file and replace the variables with the relevant values
   ```
   mv .env.example .env
   ```

4. Run app 
   ```
    npm start
   ```