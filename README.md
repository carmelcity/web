# Carmel Site

### Install

First, install the dependencies (we'll use `yarn`)

```
yarn install
```

### Running locally

Then, run the development server:

```bash
yarn dev
```

- Default port is 3000
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for prod

1. Build the project using `yarn build`
2. Run the generated build with `yarn start`

## Git

There are 2 branches in the organization's repository, `main` and `production`.

### Main Branch

The git flow working with `main` branch is as follows:

1. The dev will first fork the repository from the organization's repo.
2. When there is a feature to be implemented, he will create a `feature-branch`` in his fork.
3. When a unit of work is done, and is ready to commit on the `feature-branch`, the dev will run `npx cz` in order to run commitizen and it's adjacent hooks.
4. Repeat 3 until the feature is done, afterwards open a PR pointing from the fork to the origin repository. Strategy is from fork `feature-branch` -> origin `main`
5. Vercel will create a preview deployment
6. When checks are green and PR is approved, the dev will merge into origin and sync his fork against it

### Production Branch

When you want to deploy to production, on `carmel.io` domain, create a a PR on the origin repository from `main` -> `production`
