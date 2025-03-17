# AI Experiment: Api docs

## Purpose

Add API documentation (like description, expected parameter types, HTTP return
codes, examples etc.) to all endpoints in an app. Other people needs to use your
API so you decided to document it better. Other AI tools might consume it in the
future as well.

## Challenges

The documentation is implementation specific. For example, which HTTP status
codes are returned depends on the exact code, which might be deep inside your
app. A large context and understanding is needed.

## Task

Generate API docs for all endpoints in the app. It should be implemented in a
NestJS specific way. The documentation should be comprehensive and cover all the
aspects of the endpoints.

## Approach

The generated documentation code will be situated in specific files (most
likely in controllers). To do it correctly, the AI tool needs to figure out all
the dependencies of those controllers.

I find a command line based AI tool natural to do this, since it operates on the
whole project in natural way.

I have used Aider with Claude 3.7 model.

### Prompt

```
Generate API docs for all endpoints in the app. It is a NestJS app so please
only use its decorators for the API docs. Generate description, code examples,
all HTTP status code the responses might have. The app is located on path
`experiments/api-docs/start`.
```

### Files to include

```
/read experiments/api-docs/start/src/**/*.ts
```

Or let Aider to take care of including all files it needs. That might slow down
your workflow, since it has to make extra requests and ask you for permissions.
