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
- src/event.ts
- src/oraclize.ts
- src/pack.ts

And update the tests.

You can add or remove dependencies if you want.

## Deployment

When the function is ready, build the source code with the following command.

```bash
yarn build
```

A subdirectory named `bundled` is added to this directory, and `bundled/index.js` is generated.

Then add `bundled/index.js` to IPFS. You can add files to IPFS node provided by Infura using the following command. (Use curl)

```bash
yarn deploy

> {"Name":"index.js","Hash":"IPFS_HASH_FOR_FILE","Size":"554"}
> {"Name":"","Hash":"IPFS_HASH_FOR_DIRECTORY","Size":"609"}
```

Your function has been deployed!

Submit the `IPFS_HASH_FOR_DIRECTORY` part to [Khaos Registry](https://github.com/dev-protocol/khaos-registry).
