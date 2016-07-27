<p align="center">

<a href="https://github.com/update/update">
<img height="150" width="150" src="https://raw.githubusercontent.com/update/update/master/docs/logo.png">
</a>
</p>

Update a .gitignore file with default patterns.

# updater-gitignore

[![NPM version](https://img.shields.io/npm/v/updater-gitignore.svg?style=flat)](https://www.npmjs.com/package/updater-gitignore) [![NPM downloads](https://img.shields.io/npm/dm/updater-gitignore.svg?style=flat)](https://npmjs.org/package/updater-gitignore) [![Build Status](https://img.shields.io/travis/update/updater-gitignore.svg?style=flat)](https://travis-ci.org/update/updater-gitignore)

![updater-gitignore demo](https://raw.githubusercontent.com/update/updater-gitignore/master/docs/demo.gif)

## What is "Update"?

[Update](https://github.com/update/update) is a new, open-source developer framework for automating updates of any kind to code projects. All actual updating is done plugins called "updaters", like this one.

Updaters can be run from the command line when [Update's CLI](https://github.com/update/update/blob/master/docs/installing-the-cli.md) is installed globally, or they can be used as building blocks for creating other [updaters](https://github.com/update/update/blob/master/docs/updaters.md).

**For more information:**

* Visit the [update project](https://github.com/update/update)
* Visit the [update documentation](https://github.com/update/update/blob/master/docs/)
* Find [updaters on npm](https://www.npmjs.com/browse/keyword/update-updater) (help us [author updaters](https://github.com/update/update/blob/master/docs/updaters.md))

## What does updater-gitignore do?

Most updaters do one specific thing. This updater add a `.gitignore` file or replaces the `.gitignore` file in the current working directory using a template defined by you in `~/templates/_gitignore` (user home on your system), or the generic template in this project's [templates](templates) directory.

## Getting started

### Install

**Install update**

If you haven't already installed [update](https://github.com/update/update) globally, you can do that now with the following command:

```sh
$ npm install --global update
```

This adds `update` to your system path, allowing it to be run from any directory.

**Install updater-gitignore**

Install this module with the following command:

```sh
$ npm install --global updater-gitignore
```

### Usage

Make sure your work is committed, then run the updater's `default` [task](https://github.com/update/update/blob/master/docs/tasks.md#default-task) with the following command:

```sh
$ update gitignore
```

**What will happen?**

Upon running `$ update gitignore` command, this updater's `default` task will be executed, which replaces the `.gitignore` file in the cwd with the `~/templates/_gitignore` template defined by you, or the default templates found in [templates/_gitignore](templates/_gitignore) in this repository.

_(Note that all dotfile templates are prefixed with an underscore to prevent programs from mistaking them as real files)_

### Tasks

Visit the [documentation for tasks](https://github.com/update/update/blob/master/docs/tasks.md).

## About

### Related projects

* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [updater-license](https://www.npmjs.com/package/updater-license): Update the copyright statement and year in a MIT `LICENSE` file. | [homepage](https://github.com/update/updater-license "Update the copyright statement and year in a MIT `LICENSE` file.")
* [updater-travis](https://www.npmjs.com/package/updater-travis): Update .travis.yml based on preferences. | [homepage](https://github.com/update/updater-travis "Update .travis.yml based on preferences.")

### Community

Are you using Update in your project? Have you published an [updater](https://github.com/update/update/blob/master/docs/updaters.md) and want to share your Update project with the world? Here are some suggestions:

* If you get like Update and want to tweet about it, please use the hashtag `#updatejs` (not `@`)
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/update) (please use the `updatejs` tag in questions)
* **Gitter** Discuss Update with us on [Gitter](https://gitter.im/update/update)
* If you publish an updater, thank you! To make your project as discoverable as possible, please add the keyword `updateupdater` to package.json.

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/update/updater-gitignore/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 26, 2016._