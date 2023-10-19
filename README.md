# stopwatch

Hosting Link: https://trishadas13.github.io/stopwatch/
<hr>
<h2> HTML code explanation: </h2>
Container: The HTML structure begins with a container div containing a clock-like display. This clock is made up of four span elements, each representing a digit in a time format.

Button Container: Following the clock display, there's a div with the class "button-container." Inside this container, there are three buttons.

Button 1: The first button contains an SVG image of two circles. This button's function is not explicitly defined in the code.

Button 2: The second button holds an SVG image depicting a yellow "play" icon, usually representing playing or initiating an action.

Button 3: The third button also contains an SVG image. This one illustrates a circular shape with an arrow. Its exact function is not specified in the code.
<hr>
<h2> CSS code explanation: </h2>
Universal Reset: The code starts with a universal reset, setting the margin and padding of all HTML elements to zero and using box-sizing: border-box for consistent box model behavior.

Body Styles: The body element has a background image set using the background-image property. The image is centered and covers the entire viewport. The content is vertically centered in the viewport using flexbox (display: flex; align-items: center).

Container Styles: The .container class styles a container that holds the content. It uses flexbox to center its children both vertically and horizontally.

Heading Styles: The h1 element is given a left margin of 1rem.

Span Styles: The span elements are styled with a large font size, padding, margin, border-radius, and a background color with some opacity to create a translucent box. The text is white.

Button Container Styles: The .button-container class arranges its children with justify-content: space-around, creating space between the buttons. It has a top margin for spacing and a width of 60%.

Button Styles: The button elements are styled with a transparent background, no border, no outline, and a pointer cursor.

Media Query (Max-width: 650px): Within this media query, the span elements are adjusted. They have smaller padding, a smaller font size, reduced border radius, and increased margin for better spacing on smaller screens.
<hr>
<h2> JS code explanation: </h2>
It selects various elements on the web page and stores them in variables:

time: Represents an array of span elements that will display the time (hours, minutes, seconds, and hundredths of a second).
btn: Represents an array of button elements used to control the stopwatch (start, stop, and reset).
timer: Initially set to null, it represents the interval timer for updating the stopwatch.
hour, minute, second, and counter: Variables to keep track of the time values.
It defines a function named stopwatch that is responsible for updating the stopwatch's time. Inside this function:

The counter variable is incremented, and if it reaches 100, it resets to 0, and the second variable is incremented.
If the second variable reaches 60, it resets to 0, and the minute variable is incremented.
If the minute variable reaches 60, it resets to 0, and the hour variable is incremented.
The time values are formatted to always display two digits with leading zeros.
The time elements in the web page are updated with the new time values.
It adds an event listener to the "Start" button (btn[1]). When clicked, it starts the stopwatch by calling the stopwatch function at an interval of 10 milliseconds (to update the time every 0.01 seconds). The timer variable is set to the interval ID.

It adds an event listener to the "Stop" button (btn[0]). When clicked, it stops the stopwatch by clearing the interval using clearInterval(timer).

It adds an event listener to the "Reset" button (btn[2]). When clicked, it stops the stopwatch, clears the interval, and resets the time variables (hour, minute, second, and counter) to zero. It also updates the time elements to display "00" for each time value.
<hr>
<h2> Summary: </h2>
In summary, the HTML code represents a container displaying a clock-like format with four digits, and it includes three buttons with various icons. The specific functionality of these buttons is not defined within this HTML code.

In summary, this CSS code is used to create a responsive webpage with a background image, centered content, a heading, and buttons. The span elements are used for decorative styling, and the design adapts for smaller screens using a media query.

In summary, this code allows users to start, stop, and reset a simple stopwatch on the web page. The stopwatch displays time values in hours, minutes, seconds, and hundredths of a second.
<hr>
<h2> UI: </h2>

![image](https://github.com/trishaDas13/stopwatch/assets/126088849/ed50aeaa-26c8-43e0-83e7-44f3d3fead87)
