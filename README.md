# Sesame﹅

> ⚠️ This repository has been archived, as of December 3rd, 2023. 

A browser extension to hot-swap the domain name on any open web page, preserving directory structure and query params. Useful when developing and testing the same content across multiple domains.

> **right click anywhere &rarr; sesame &rarr; reopen as:**<br>
> ﹅ localhost<br>
> ﹅ staging<br>
> ﹅ production

## Available contexts

<!--
### Right click anywhere on a page

"Reopen this page as ﹅"

### Right click any hyperlink

"Reopen this URL in as ﹅"
-->

### Right click any open tab

"Reopen this page as ﹅"

_More contexts coming soon :)_

## Demonstration

![Old Sesame demo](assets/demonstration.gif)

👆 This gif may explain better than words

## Installation

This is not a _published_ extension. There is a signed/packaged release available at [https://github.com/miclgael/sesame/releases/](https://github.com/miclgael/sesame/releases/)

Supports Firefox + Firefox For Android v57+

**If you're developing..**

You can load the extension in debug mode. Navigate to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox). From there you can load it as a temporary add-on by opening the manifest file.

## Using the add-on

Once installed, you can right-click any open tab to find a new "Tabs" menu, somewhere at the bottom of the list.

You should go to the Options page, and set up your development URLs.

There is no checking or conversion of these strings, so make sure _DO_ include a protocol, but _DON'T_ include a trailing `/` on your URLs.

✅ Good: `http://localhost:8888` <br>
🚫 Bad: `localhost:8888/`

## Contributing

I would really like your help with:

- Developing a Chrome version
- Making these docs more understandable
- Bug fixes
- Testing / writing unit tests

Please read [CONTRIBUTING.md](https://github.com/miclgael/sesame/blob/main/.github/CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/miclgael/sesame/tags).

## Authors

- **Michael Gale** - _maintainer_ - [miclgael](https://github.com/miclgael)

See also the list of [contributors](https://github.com/miclgael/sesame/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENCE](https://github.com/miclgael/sesame/blob/main/LICENCE) file for details

## Acknowledgements

Modified version of the "Menus" example from [MDN Web Extensions Examples](https://github.com/mdn/webextensions-examples)
