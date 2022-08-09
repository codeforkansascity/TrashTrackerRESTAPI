const fs = require('fs');
const html = require('../public/assets/index.js');
// const html = fs.readFileSync('./index.html', { encoding:'utf8' });

/**
 * Returns an HTML page containing an interactive Web-based
 * tutorial. Visit the function URL to see it and learn how
 * to build with lambda.
 */
exports.handler = async (event) => {
    let modifiedHTML = dynamicForm(html,event.queryStringParameters)
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: modifiedHTML
    };
    return response;
};

function dynamicForm(html,queryStringParameters){
    let formres = ''
    if(queryStringParameters){
            Object.values(queryStringParameters).forEach(val => {
                  formres =formres+val+' ';
            });
    }
    return html.replace('{formResults}','<h4>Form Submission: '+formres+'</h4>')
}