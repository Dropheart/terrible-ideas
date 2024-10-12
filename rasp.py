from selenium import webdriver
from gpiozero import Button

# Set up the WebDriver (make sure you have the appropriate driver installed, e.g., chromedriver)
driver = webdriver.Chrome()

# Open the specified URL
driver.get("http://localhost:3000")

# Change this number, or set button on 17
button = Button(17);

# Wait for user input to refresh the page
while True:
  button.wait_for_press()
  input("Press Enter to refresh the page...")
  driver.refresh()