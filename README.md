## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer: *getElementById - can select only one html element with unique id selector. 
###			*getElementsByClassName - select multiple html elements with classname selector. It's returns an array like html collections.
###			*querySelector - can select only one html element with css selector. It's selection like css selector.
###			*querySelectorAll - can select multiple html elements with css selector. It's returns an array like nodelist.




### 2. How do you create and insert a new element into the DOM?

### Answer:	*const parentDiv = document.getElementById('parentDiv');
###			 const newElement = document.createElement('p');
###			 newElement.innerText = 'Hello DOM';
###			 parentDiv.appendChild(newElement);




### 3. What is Event Bubbling? And how does it work?

### Answer: *When an event starts on an element and then it bubbles up through it's parent to parent div.
###			*It's works like a tree. It's starts from the selected element and can access ancestors even root html element.




### 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer: *Event delegation is a delegate handler which can help to control the event with specific condition. It's can prevent bubbling and propagation. It's also reduces code and prevent to make multiple event handler. That's why it's so useful.




### 5. What is the difference between preventDefault() and stopPropagation() methods?

### Answer: *preventDefault() method stop's browser's default behavior. and stopPropagation() stops event from bubbling up the DOM tree. 