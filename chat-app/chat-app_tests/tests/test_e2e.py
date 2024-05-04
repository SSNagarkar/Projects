
import pytest
from POM.test_ChatPage import Chat
from POM.test_LoginPage import Login
from tests.PageData import PageData
from utilities.baseClass import BaseClass


class Test(BaseClass):

    # Login Page
    def test_e2e(self, getData):
        log = self.getLogger()

        self.verifyLinkPresence()
        LoginPage = Login(self.driver)
        username = LoginPage.getUserName()
        username.send_keys(getData["name"])
        user = username.get_attribute("value")
        log.info("Username entered: " + getData["name"])
        LoginPage.clickLogin().click()
        active_user = LoginPage.getActiveUsers().text
        # Check if the active user contains list of same users which are logged in
        assert (user in active_user)
        log.info("Active user is same as signedIn user")

        ChatPage = Chat(self.driver)
        # Chat Page
        message = ChatPage.typeMessage()
        message.send_keys("Hi, I am Sayali")
        log.info("Message sent on chat app")

        message_user = ChatPage.getUser().text
        # Check if the active user is sending the msg
        assert message_user in active_user
        log.info("Message is sent by active user")

        send = ChatPage.sendMessage()
        send.click()

        ChatPage.refreshPage().click()
        log.info("The chat page is refreshed")

        # Logout Page
        ChatPage.logOutAction().click()

    @pytest.fixture(params=PageData.test_Page_Data)
    def getData(self, request):
        return request.param


