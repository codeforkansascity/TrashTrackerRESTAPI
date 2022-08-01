# Trash Tracker SMS

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Local Development](#local-development)
- [Other Usages](#other-usages)
- [License](#license)

## Description

Trash Tracker is a simple, lightweight system that allows residents and staff of the Lykins neighborhood to report illegal dumping with a simple text message. This app is one of its three repositories. It performs the function of recording the reporting messages.

## Installation
1. Install dependencies

    ```bash
    npm install
    ```

2. Copy the sample configuration file and edit it to match your configuration

   ```bash
   cp .env.EXAMPLE .env
   ```
   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your [Twilio Account Settings](https://www.twilio.com/console).

## Usage
To run the application, enter:

```bash
npm start
```

Any users can send a text message to our Twilio phone number (816) 608-6096 and start the conversation! The following photo shows an example:

![Example of text communication](./public/images/example_text_communication.jpg)

After the conversation is complete, you can go to http://localhost:1337/ to see the reporting information.

## Deployment
This app is deployed on AWS Lambda. You can see report records JSON [here](https://fgn4r0is75.execute-api.us-east-2.amazonaws.com/production).

## Local Development

You will need a webhook url on the public Internet. To do that, you need to install [ngrok](https://ngrok.com/download) to expose your local network to the public Internet. After you install it and configure the authentification, open a second terminal and enter the following command:

```bash
$ ngrok http 1337
```

Once you acquire a forwarding url from ngrok, copy and paste it in http_request_english and http_request_spanish widgets in your Twilio Studio flow. You will need to update the url everytime you run that script. The below photo shows an example.

![Example of http_request widget](./public/images/example_http_request_widget.png)

## License

[MIT](https://opensource.org/licenses/MIT)
