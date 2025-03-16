# AI Experiment: Api docs

## Purpose

Add API documentation (like description, expected parameter types, HTTP return codes, etc.) to all endpoints in an app. Other people needs to use your API so you decided to document it better.

## Challenges

The documentation is implementation specific. For example, which HTTP status codes are returned depends on the exact code, which might be deep inside your app. A large context and understanding is needed.

## Task

Generate API docs for all endpoints in the app.
TODO

## Approach

The generated documentation code will be situated in specific files (most
likely in controllers). To do it correctly, the AI tool needs to figure out all
the dependencies of those controllers.

I find a command line based AI tool natural to do this, since it operates on the
whole project in natural way.

I have used Aider with Claude 3.7 model.

### Prompt

TODO
document all endpoints
