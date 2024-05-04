from selenium.webdriver.common.by import By


class Chat:

    def __init__(self, driver):
        self.driver = driver

    message = (By.XPATH, "//input[@type = 'text']")
    message_user = (By.XPATH, "//div/ul[1]/div[2]/div[2]")
    send_message = (By.CSS_SELECTOR, ".send-button")
    refresh = (By.CSS_SELECTOR, ".controls-refresh")
    logout_button = (By.CLASS_NAME, "controls-logout")

    def typeMessage(self):
        return self.driver.find_element(*Chat.message)

    def getUser(self):
        return self.driver.find_element(*Chat.message_user)

    def sendMessage(self):
        return self.driver.find_element(*Chat.send_message)

    def refreshPage(self):
        return self.driver.find_element(*Chat.refresh)

    def logOutAction(self):
        return self.driver.find_element(*Chat.logout_button)

