<p align="center">
  <img style="max-width: 100%;" alt="Welcome to Create UI" src="https://raw.githubusercontent.com/vectara/react-search/main/images/projectLogo.png"/>
</p>

# React-Chat

React-Chat is a UI widget for adding [Vectara](https://vectara.com/)-powered chatbot to your React apps with a few lines of code.

> [!TIP]
>
> Looking for something else? Try another open-source project:
>
> - **[React-Search](https://github.com/vectara/react-search)**: Add Vectara semantic search to your React apps with a few lines of code.
> - **[Create-UI](https://github.com/vectara/create-ui)**: The fastest way to generate a working React codebase for a range of generative and semantic search UIs.
> - **[Vectara Answer](https://github.com/vectara/vectara-answer)**: Demo app for Summarized Semantic Search with advanced configuration options.
> - **[Vectara Ingest](https://github.com/vectara/vectara-ingest)**: Sample templates and crawlers for pulling data from many popular data sources.

## Demo

**[Try out the demo!](https://vectara.github.io/react-chat/)**

## UI

...

## Use it in your application

Install React-Chat:

```shell
npm install --save @vectara/react-chat
```

Then use it in your application like this:

```js
import { ReactChat } from "@vectara/react-chat";

/* snip */

<ReactChat customerId="CUSTOMER_ID" corpusId="CORPUS_ID" apiKey="API_KEY" placeholder="Ask a question" />;
```

### Configuration options

#### `customerId` (required)

Every Vectara account is associated with a customer ID. You can find your customer ID by logging into the [Vectara Console](https://console.vectara.com/) and opening your account dropdown in the top-right corner.

#### `corpusId` (required)

After you [create a corpus](https://docs.vectara.com/docs/console-ui/creating-a-corpus), you can find its ID by navigating to the corpus and looking in the top-left corner, next to the corpus name.

#### `apiKey` (required)

API keys enable applications to access data inside of corpora. Learn how to [create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

#### `apiUrl` (optional)

By default, React-Chat sends query requests to the Vectara servers. If you want to use a proxy server, you can configure this option with the URL of your proxy.

#### `placeholder` (optional)

Configure the placeholder text in the chatbot's input.

### Set up your data

React-Chat uses the data in your Vectara corpus to provide factual responses. To set this up:

1. [Create a free Vectara account](https://console.vectara.com/signup).
2. [Create a corpus and add data to it](https://docs.vectara.com/docs/console-ui/creating-a-corpus).
3. [Create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

**Pro-tip:** After you create an API key, navigate to your corpus and click on the "Access control" tab. Find your API key on the bottom and select the "Copy all" option to copy your customer ID, corpus ID, and API key. This gives you all the data you need to configure your `<ReactChat />` instance.

![Copy all option](https://raw.githubusercontent.com/vectara/react-chat/main/images/copyAll.jpg)

## Maintenance

This codebase comes with a development environment to facilitate enhancements and bug fixes. It allows maintainers to quickly iterate on the code and verify changes instantly.

### Running the development environment

From the root directory, run:

```
npm install
```

This will install all dependencies necessary for building the component and running the dev environment. Once this completes, run:

```
npm run docs
```

This spins up an application running at `http://localhost:8080/`. Your latest changes will be reflected here.

### Making changes to the component

Once the development environment is running, any changes made to .ts and .tsx files in the `/src` directory will trigger a rebuild of the component and a reload of the webpage.

Additionally, any changes to the development app source code at `/docs/index.tsx` will also trigger a rebuild + reload.

## License

Vectara React-Chat is an open-sourced software licensed under the [Apache 2.0 license](/LICENSE).
