import pytest
from selenium import webdriver


def pytest_addoption(parser):
    parser.addoption(
        "--browser_name", action="store", default="chrome"
    )


@pytest.fixture(scope="class")
def setup(request):
    browser_name = request.config.getoption("browser_name")
    if browser_name == "chrome":
        driver = webdriver.Chrome()
    elif browser_name == "safari":
        driver = webdriver.Safari()
    driver.get("http://localhost:3000/")
    driver.implicitly_wait(15)
    driver.maximize_window()
    request.cls.driver = driver
    yield
    driver.close()

