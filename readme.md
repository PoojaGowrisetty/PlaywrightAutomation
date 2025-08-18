# PlaywrightAutomation

This project is a comprehensive UI automation suite built using [Playwright](https://playwright.dev/) and Node.js. It covers a variety of web application scenarios, including login flows, form interactions, data-driven testing, file uploads, dropdowns, checkboxes, radio buttons, iframes, alert handling and allure reporting.

## Project Structure

- `playwright.config.js` - Playwright configuration file.
- `tests/Assignments/` - Custom JavaScript programs and logic exercises.
- `tests/RecordPlayback/` - Playwright test specs for basic login, logout, admin user management, job title, and pay grade.
- `tests/UIAutomation/` - Advanced UI automation scripts covering:
  - OrangeHRMS login and assertions
  - Negative login and forgot password tests
  - Checkbox and radio button validation
  - Data-driven login tests using Excel
  - iFrame handling
  - File upload in OrangeHRMS
  - Dropdown selection and validation
  - JavaScript alert handling
- `Files/` - Supporting documents and test data (e.g., `demo.pdf`, `TestDataPRright.xlsx`).
- `playwright-report/` - Playwright HTML test reports.
- `test-results/` - Raw test result files.

## Key Features

- **Login Automation:** Validates login flows for OrangeHRMS and other demo sites.
- **Assertions:** Checks for UI elements, page titles, URLs, and error messages.
- **Negative Testing:** Handles invalid credentials and error scenarios.
- **Forgot Password:** Automates password reset flows.
- **Checkboxes & Radio Buttons:** Validates selection and toggling.
- **Data-Driven Testing:** Reads and writes test data from Excel files.
- **iFrame Handling:** Interacts with multiple frames and nested frames.
- **File Uploads:** Automates file upload scenarios in web forms.
- **Dropdowns:** Selects and validates dropdown options.
- **JavaScript Alerts:** Handles and validates browser alerts.

## Getting Started

1. **Install Dependencies**
   ```powershell
   npm install
   ```
2. **Run Tests**
   ```powershell
   npx playwright test
   ```
   Or run individual scripts:
   ```powershell
   node tests\Assignments\22ndJuly_ProgramJavaScript.js
   ```
3. **View Reports**
   Open `playwright-report/index.html` in your browser for detailed test results.
4. **Allure Reports**
    - Allure reporting is integrated for advanced test reporting.
    - To generate and view Allure reports:
       ```powershell
       npx playwright test --reporter=allure-playwright
       allure generate ./allure-results -o ./allure-report --clean
       allure open ./allure-report
       ```
    - You can also use the npm script:
       ```powershell
       npm run runtestswitAllureReports
       ```
    - Allure configuration is in `allure.config.js`.

## Requirements
- Node.js
- Playwright

## License
This project is for educational and demonstration purposes.
