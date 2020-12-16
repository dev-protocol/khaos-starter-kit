# Khaos Starter Kit

How to start developing Khaos Functions

## Environment

First, fork this repository.

Then clone the forked repository.

```bash
git clone git@github.com:your/khaos-starter-kit.git
cd khaos-starter-kit
```

## Development

Edit the file in the `src` directory. You have to edit the following files:

- src/abi.ts
- src/addresses.ts
- src/authorize.ts
- src/oraclize.ts

And update the tests.

You can add or remove dependencies if you want.

## Deployment

When the function is ready, build the source code with the following command.

```bash
yarn build
```

A subdirectory named `bundled` is added to this directory, and `bundled/index.js` is generated.

Then add `bundled/index.js` to the IPFS. You can add files to the IPFS node provided by Infura using the following command. (Use curl)

```bash
yarn deploy

> {"Name":"index.js","Hash":"IPFS_HASH_FOR_FILE","Size":"554"}
> {"Name":"","Hash":"IPFS_HASH_FOR_DIRECTORY","Size":"609"}
```

Your function has been deployed!

Submit `IPFS_HASH_FOR_DIRECTORY` to the Khaos Registry.
