EsLint

Steps:
1. npm init -y
2. npm i -D elsint
3. install eslint extension in vscode
4. ./node_modules/.bin/eslint --init
    select options as per required
    .eslintrc.json file will be created
5. edit eslint configuration
    can configure in js files
    can configure in .esliintrc.json rules
6. can configure in terminal: add in json script
================================================
    "lint": "eslint ./",
    "lint:fix": "eslint --fix --ext .js,.jsx ."
================================================
7. npm run lint (to check the error)
8. npm run lint:fix (to fix only fixable code)
9. to fix and save add below code in setting.json in vscode
================================================
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
================================================