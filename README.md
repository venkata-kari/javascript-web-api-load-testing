## The repo contents are as below

- web/\* have website test scenarios
- api/\* have webapp api test cases

## How-to

**Web:**

1. Install yarn from Homebrew (`brew install yarn`)
2. Install node v10.15.0 or above and npm v5.6.0 or above.
3. After cloning the repo, cd to root of the project.
4. Install dependencies by using command `yarn install` .
5. To run the tests run command `yarn test`,
6. After the test execution is finished, Cucumber HTML report will be available in `/reports/` folder.
7. Screenshots will be saved in `/web/debug/screenshots` folder for any failed tests.

## **API:**

1. cd to `/api`
2. Install node dependencies by using command `npm install`
3. By using command `npm test` run the tests.

## Documentation:
The below files are availabe in `/web/assets/` folder
- Flow diagram
- A screenshot of HTML report 
- A zip file with html report (git not recognising .html files in source control)