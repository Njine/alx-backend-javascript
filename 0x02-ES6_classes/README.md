This project focuses on utilizing classes in ECMAScript 2015 (ES6). Below are the tasks included:

0. **ClassRoom Creation**: 
   - Define a class `ClassRoom` in `0-classroom.js`. 
   - It should accept a `maxStudentsSize` (Number) attribute.
1. **Creating Classrooms**: 
   - Import `ClassRoom` from `0-classroom.js`.
   - Export a function `initializeRooms` returning an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.
2. **Holberton Course Management**: 
   - Define a class `HolbertonCourse` in `2-hbtn_course.js`.
   - It should have attributes: `name` (String), `length` (Number), and `students` (array of Strings).
   - Implement getters and setters for each attribute.
3. **Currency Handling**: 
   - Define a class `Currency` in `3-currency.js`.
   - It should have attributes `code` (String) and `name` (String).
   - Implement getters and setters for each attribute.
   - Include a method `displayFullCurrency` to return attributes in the format `name (code)`.
4. **Pricing**: 
   - Import `Currency` from `3-currency.js`.
   - Define a class `Pricing` in `4-pricing.js`.
   - It should have attributes `amount` (Number) and `currency` (Currency).
   - Implement getters and setters for each attribute.
   - Include a method `displayFullPrice` to return attributes in the format `amount currency_name (currency_code)`.
   - Add a static method `convertPrice` to convert amount based on conversionRate.
5. **Building Structure**: 
   - Define a class `Building` in `5-building.js`.
   - It should have attribute `sqft` (Number).
   - Implement a getter for `sqft`.
   - Consider it as an abstract class and enforce implementation of `evacuationWarningMessage` in subclasses.
6. **Sky High Buildings**: 
   - Import `Building` from `4-building.js`.
   - Define a class `SkyHighBuilding` in `6-sky_high.js` that extends `Building`.
   - It should have attributes `sqft` (Number) and `floors` (Number).
   - Implement a getter for each attribute.
   - Override `evacuationWarningMessage` method.
7. **Airport Management**: 
   - Define a class `Airport` in `7-airport.js`.
   - It should have attributes `name` (String) and `code` (String).
   - Implement getters and setters for each attribute.
   - Default string representation should return the airport code.
8. **Holberton Class**: 
   - Define a class `HolbertonClass` in `8-hbtn_class.js`.
   - It should have attributes `size` (Number) and `location` (String).
   - Implement getters for `size` and `location`.
   - Casting to Number should return `size`.
   - Casting to String should return `location`.
9. **Hoisting Correction**: 
   - Fix the hoisting issue in `9-hoisting.js`.
   - Ensure the code works as expected.
10. **Car Cloning**: 
    - Define a class `Car` in `10-car.js`.
    - It should have attributes `brand` (String), `motor` (String), and `color` (String).
    - Implement a method `cloneCar` to return a new object of the class.
11. **Electric Vehicle (EV) Car**: 
    - Import `Car` from `10-car.js`.
    - Define a class `EVCar` in `100-evcar.js` that extends `Car`.
    - Include an additional attribute `range` (String).
    - Ensure privacy by returning instance of `Car` instead of `EVCar` when `cloneCar` is called.

