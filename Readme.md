# Toy Robot

Foobar is a Python library for dealing with word pluralization.

## Installation

```bash
npm install
```

## Design
I tried to apply SOLID/DRY principles , so I added 3 layers:
* Input (responsible to commands)
* Processor (steps/locations)
* Repository (keep/track current location)

### Input
Based on 2 interfaces: IReader and ISanitizer
  * IReader reads the input from CLI (potentially it might be replaced with file reader)
  * ISanitizer does the input command checks (using Regular expressions)


### Processor
Calculates the next move for the robot based on the current location and the board configuration.

### Repository

The layer to keep the location of the robot 

### Board configuration
The board lenght/width is defined in the .env file and parsed with dotenv libary 

### Error handling 
All function return the resulted string and the error (if any)


#### Unit tests
Unit tests are written/executed with Jest:
```bash
npm test
```

#### Start the robot
To start the robot you need the run the command:
```bash
npm start
```

### CI/CD pipeline

I'm using github action which run unit tests.

## Known bugs

## TODO
1. Add unit test coverage tool (istanbul?)
2. Add unit tests for  strdin (the library readline-sync)
3. Add guthub pre-commit hook with tslint
