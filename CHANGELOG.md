# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Add basic test infrastructure
- Add `addDependency` shortcode
- Add basic per-page dependency management
- Install `@aaashur/eleventy-toolkit`
- Add `pagePermalink` filter
- Add `log` filter
- Add `site` data
- Add `meta` computed data
- Add support for 3rd-party verification
- Add dynamic module script support for components
- JavaScript dataset attribute
- `pairedShortcode` Storybook adapter

### Changed
- Remove `classnames` module, which is no longer used

### Fixed
- Fixed an issue that could cause `undefined` to be rendered by the `addDependency` shortcode
- Body `min-height` rules

## [1.0.0] - 2022-09-06
Initial release
