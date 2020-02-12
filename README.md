# ReactFrontEnd_FlaskBackend
# App created by Software Developer Yettsy Knapp located in Denver, CO
1. Let's connect [www.linkedin.com/in/yettsy-jo-knapp] [www.github.com/yettsyjk]
1. Capstone Project February 2020
1. Flask back-end repo found on my github: [https://github.com/yettsyjk/Flaskbackend_react.git]
1. React front-end repo found on my github: [https://github.com/yettsyjk/ReactFrontEnd_Flask.git]
1. Capstone project Trello link: [https://trello.com/b/wDbzPVBC]

## Reason for Freight Tracking App
1. My goal is to create a better form of tracking Less-Than-Truck-Load (LTL) Freight for businesses with 1 Logistic Manager to accurately track incoming freight, resulting in improved reporting to business owner(s).
## LTL Freight Tracking App created with Flask Python3 back-end and React Javascript for front-end
## User Story:
1. User will be able to create card with pertinent information regarding less than truckload pallet location and estimated travel time.
1. User will be able to read card attributes to that client identifies as important to track.
1. User will be able to update 
1. User will be able to delete cards pertaining freight that has been delivered and no longer tracking
## Flask back-end Models for product tracking:
``` class Product(Model):
    name = CharField()
    cost_of_load = CharField()
    trucking_company = CharField()
    bol_number = CharField()
    travel_days_required = CharField()
    estimated_date_arrival = CharField()
    point_of_contact = CharField()
    num_of_pallets = CharField()
    originating_port = CharField()
    recent_terminal = CharField()
    date_last_terminal = CharField()
```

## Stretch Goals:
1. Attach Map API within the dashboard user card, allowing the user to view a map for better user experience

# Setup Dependencies
1. React-Router-Dom by entering in cli: 'npm i react-router-dom'
1. Semantic UI for React CSS in cli: npm i semantic-ui-css semantic-ui-react
