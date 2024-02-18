# OTT App - Android & iOS

React Native application that allows users to browse movies from TMDB using the provided APIs.

## Tech Stack

**Client:** React Native, Expo, React, JS, Android & iOS

## Features

- Search Movies.
- Read Movies details.
- Add movies to favourite.

## Documentation

For Developers:
Make sure you have React Native and Android Studio development environment setup, if not then you can follow this guide to do so ( make sure you setup React Native CLI )

To build the app locally for development

Fork this repo and clone it locally then run these commands:

- `yarn install`
- `yarn start` - starts metro bundler
- `yarn android` && `yarn ios` - will build and open app on emulator or any attached android device.

#### Branching

A new branch should always be checked out from the main branch
Always pull from main branch in main branch itself before creating a new branch.

#### Committing

Never commit anything to main branch.

- Commit should be made for each file individually until and unless multiple files have the same change.
- Syntax for committing: `git commit -m "type_of_change: short_description_about_change"`.

For eg: `git commit -m "fix: pass correct value for title"`

Commit categories

- `feat`: for addition or removal of a feature.
- `chore`: for tasks that don't directly involve coding like, installing npm packages, adding images/videos to assets, bumping versions etc.
- `fix`: for squashing bugs.
- `style`: for changes made in component styles.
- `docs`: for changes made in documentation.
- `refactor`: for refactoring code flow but not changing the feature itself.

## Deployment

### Generating Build for simulator/emulator

- In project folder, run `eas build --profile development --platform android`

### Generating Build for simulator/emulator

- In project folder, run `eas build --profile development --platform android`

### Project testing using jest:

- In root dir, run `npm run test`

## Support

For support, email harsh2110.mishra@gmail.com.
