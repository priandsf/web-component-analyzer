# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)

<!-- # Unreleased -->
<!-- ### Added -->
<!-- ### Changed -->
<!-- ### Removed -->
<!-- ### Fixed -->

## [1.0.0] - 2019-12-01

### Added

- Methods are now analyzed
- `@private`, `@protected`, `@public` and `@access` jsdoc tags are now support ([#106](https://github.com/runem/web-component-analyzer/issues/106)), ([#126](https://github.com/runem/web-component-analyzer/issues/126)) ([#105](https://github.com/runem/web-component-analyzer/issues/105))
- It's now possible to choose if private and/or protected members should be included in the output using `--visibility protected` CLI option ([#112](https://github.com/runem/web-component-analyzer/issues/112))
- JSX typescript declaration files are now support (IntrinsicAttributes and IntrinsicElements) ([#116](https://github.com/runem/web-component-analyzer/issues/116))
- Support for extending HTMLElement with members using Typescript declaration files
- A list of used mixins for a given component is now included in the markdown output
- Support for the `@deprecated` jsdoc tag ([#103](https://github.com/runem/web-component-analyzer/issues/103))
- Support for specifying default css property values: `@cssproperty {Color} [--my-color=red]`
- `default` is now included in the json format for attributes, properties and css custom properties
- `deprecated` is now included in the json format for attributes, properties and events ([#103](https://github.com/runem/web-component-analyzer/issues/103))
- The library ships with different module formats `esm` and `cjs` split in two modules `api` and `cli`. This makes it possible to use WCA in the browser ([#118](https://github.com/runem/web-component-analyzer/issues/118))
- It's now possible to specify which featues should be analyzed
- Emitted members now include metadata that flavors can add (eg. LitElement specific metadata)
- Examples added using the `@example` jsdoc tag will be included in the markdown format.
- Getter are now also analyzed, making it possible to emit `readonly` properties.
- Support for the `@readonly` jsdoc tag

### Removed

- It's no longer possible to emit diagnostics using the CLI
- `jsDoc` has been removed from the json format

### Fixed

- Big internal refactor, including adding a lot of tests
- Improved merging of component features ([#101](https://github.com/runem/web-component-analyzer/issues/101)), ([#124](https://github.com/runem/web-component-analyzer/issues/124))
- Improved performance by using caching and lazy evaluation where appropriate
- Improved support for `@type` jsdoc ([#67](https://github.com/runem/web-component-analyzer/issues/67))
- Improved jsdoc tag parsing. Default notation like `@attr {string} [my-attr=123]` is now supported
- Using an object literal as `default` value no longer truncates to the first letter ([#102](https://github.com/runem/web-component-analyzer/issues/102))