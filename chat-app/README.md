                                        ## MULTI USER CHAT APPLICATION ##


* Before Login Page the app will show Loading Indicator

* The app will check for session, if there is an active session it will display Chat Page otherwise Login Page.

## LOGIN PAGE :

* Login Page consist of username field with validations and authentication.

* For users with 'dog' it will give an error of username/password does not match.

* For special characters, it will give an error message of invalid username.

* The username should have less than 20 characters.

* The image is sourced from https://www.pexels.com/ under Licence "https://www.pexels.com/license/".

* The symbol is sourced from https://css.gg under MIT Licence "https://css.gg/doc/licence".


* Before the Chat Page loads the app will show Loading Indicator

## CHAT PAGE :

* Chat Page consist of Active Users, Messages sent by each user and input field to send a message.

* Active Users will give the list of users currently active.

* Messages will display all the messages sent be each user with it's username.
       
       - Users can use smilyes/emoticons listed below while typing message
         
         ':)': '😃'
         ':D': '😀'
         ';)': '😉'
         ':(': '😞'
         ':O': '😲'

* If the same user sends a message, the username will not appear repeatedly in Message section.

* The user symbol is sourced from https://css.gg under MIT Licence "https://css.gg/doc/licence".

* Send button will send the message for users.

* Refresh button will refresh the chat page ( active users & messages ).

* Reloading the page will refresh the chat page.

* Logout button will logout the current logged in user from app and will redirect back to Login Page.


## INPUT VALIDATIONS & ERROR HANDLING :

* The input message with special characters is validated and approprite error is displayed.

* The input message with blank messages is validated and approprite error is displayed.

* If a user logs out from one browser and try to hit refresh button from other browser will give the appropriate error message of session   lost.





