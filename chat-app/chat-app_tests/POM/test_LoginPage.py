from selenium.webdriver.common.by import By


class Login:

    def __init__(self, driver):
        self.driver = driver

    username = (By.CLASS_NAME, "login-username")
    login = (By.XPATH, "//button[@type='submit']")
    active_user = (By.CSS_SELECTOR, "div[class='sender']")

    def getUserName(self):
        return self.driver.find_element(*Login.username)

    def clickLogin(self):
        return self.driver.find_element(*Login.login)

    def getActiveUsers(self):
        return self.driver.find_element(*Login.active_user)