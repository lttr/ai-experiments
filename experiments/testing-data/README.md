# AI Experiment: Testing data

## Purpose

Add testing data into a real application.

## Challenges

It is a specific application based on NestJS framework, so the solution has to
play nicely with it.

## Task

Create 20 example books into a simple in-memory database and make the findAll
endpoint return them. Create a separate service for the data.

There is an npm script `fetch:books` that should return the data, once the task
is implemented and the app is running on localhost.

## Approach

Multiple files will be created or changed and some context is needed. The
preferable approach has to therefore take this context into account.

For these kind of changes an AI based IDE or an AI editor plugin works well. I
have used [Neovim](https://neovim.io/) with the
[Avante.nvim](https://github.com/yetone/avante.nvim) plugin.

These tools now (03/2025) have some agentic capabilities. For me the plugin
first reads the contents of related files and then suggests multiple changes and
new files. I can then review the changes and decide which to apply.

In my case the AI tool did more chages than I asked for. It not only implemented
the fetchAll endpoint but also other CRUD operations on top of the in-memory
database. That might or might not be a good thing. The code worked without any
manual modifications.

I have used Claude 3.7 model.

### Prompt

Create 20 example books into a simple in-memory database and make the findAll
endpoint return them. Create a separate service for the data.
